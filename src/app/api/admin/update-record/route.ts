import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerAuthClient } from "@/lib/supabase/serverAuth";
import { getSupabaseServiceClient } from "@/lib/supabase/server";

const ALLOWED_TABLES = ["student_applications", "startup_applications", "contact_messages"] as const;
type AllowedTable = (typeof ALLOWED_TABLES)[number];

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

    const { table, id, status, notes } = await req.json();

    if (!ALLOWED_TABLES.includes(table as AllowedTable) || !id) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const updates: Record<string, string> = {};
    if (typeof status === "string") updates.status = status;
    if (typeof notes === "string") updates.notes = notes;

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }

    const { error } = await service.from(table as AllowedTable).update(updates).eq("id", id);

    if (error) {
      return NextResponse.json({ error: "Failed to update record" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update record error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
