import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerAuthClient } from "@/lib/supabase/serverAuth";
import { getSupabaseServiceClient } from "@/lib/supabase/server";
import { sanitizeStoragePath } from "@/lib/security";

// Generates a short-lived (5 min) signed URL for a private resume file.
// Re-checks the caller is an authenticated, whitelisted admin before
// issuing the URL — never trust the layout check alone for a data-bearing
// endpoint like this.
export async function POST(req: NextRequest) {
  try {
    const authClient = await getSupabaseServerAuthClient();
    const {
      data: { user },
    } = await authClient.auth.getUser();

    if (!user?.email) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const service = getSupabaseServiceClient();
    const { data: adminUser } = await service
      .from("admin_users")
      .select("email")
      .eq("email", user.email)
      .maybeSingle();

    if (!adminUser) {
      return NextResponse.json({ error: "Not authorized" }, { status: 403 });
    }

    const { path } = await req.json();
    if (!path || typeof path !== "string" || !sanitizeStoragePath(path)) {
      return NextResponse.json({ error: "Invalid resume path" }, { status: 400 });
    }

    const { data, error } = await service.storage.from("resumes").createSignedUrl(path, 300);

    if (error || !data) {
      return NextResponse.json({ error: "Failed to generate signed URL" }, { status: 500 });
    }

    return NextResponse.json({ url: data.signedUrl });
  } catch (error) {
    console.error("Resume URL error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
