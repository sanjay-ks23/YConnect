import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerAuthClient } from "@/lib/supabase/serverAuth";
import { getSupabaseServiceClient } from "@/lib/supabase/server";

async function requireAdmin() {
  const authClient = await getSupabaseServerAuthClient();
  const {
    data: { user },
  } = await authClient.auth.getUser();

  if (!user?.email) return null;

  const service = getSupabaseServiceClient();
  const { data: adminUser } = await service
    .from("admin_users")
    .select("email")
    .eq("email", user.email)
    .maybeSingle();

  return adminUser ? user.email : null;
}

export async function POST(req: NextRequest) {
  try {
    const callerEmail = await requireAdmin();
    if (!callerEmail) {
      return NextResponse.json({ error: "Not authorized" }, { status: 403 });
    }

    const { email, role } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const service = getSupabaseServiceClient();
    const { error } = await service.from("admin_users").insert({ email, role: role || "admin" });

    if (error) {
      return NextResponse.json({ error: error.message.includes("duplicate") ? "That email is already an admin" : "Failed to add admin" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Add admin error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const callerEmail = await requireAdmin();
    if (!callerEmail) {
      return NextResponse.json({ error: "Not authorized" }, { status: 403 });
    }

    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (email === callerEmail) {
      return NextResponse.json({ error: "You cannot remove yourself" }, { status: 400 });
    }

    const service = getSupabaseServiceClient();
    const { error } = await service.from("admin_users").delete().eq("email", email);

    if (error) {
      return NextResponse.json({ error: "Failed to remove admin" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Remove admin error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
