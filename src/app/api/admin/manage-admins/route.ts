import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerAuthClient } from "@/lib/supabase/serverAuth";
import { getSupabaseServiceClient } from "@/lib/supabase/server";
import { checkRateLimit, isValidEmail, parseJsonBody } from "@/lib/security";

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
    const rateLimitError = checkRateLimit(req);
    if (rateLimitError) return rateLimitError;

    const callerEmail = await requireAdmin();
    if (!callerEmail) {
      return NextResponse.json({ error: "Not authorized" }, { status: 403 });
    }

    const { data: body, error: bodyError } = await parseJsonBody(req);
    if (bodyError) return bodyError;

    const { email, role } = (body ?? {}) as { email?: unknown; role?: unknown };
    if (typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }
    if (role !== undefined && role !== "admin") {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    const service = getSupabaseServiceClient();
    const { error } = await service
      .from("admin_users")
      .insert({ email: email.trim().toLowerCase(), role: "admin" });

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
    const rateLimitError = checkRateLimit(req);
    if (rateLimitError) return rateLimitError;

    const callerEmail = await requireAdmin();
    if (!callerEmail) {
      return NextResponse.json({ error: "Not authorized" }, { status: 403 });
    }

    const { data: body, error: bodyError } = await parseJsonBody(req);
    if (bodyError) return bodyError;

    // Deleting is a lookup on an existing stored value — it must NOT require
    // a valid email format, or malformed rows become impossible to remove.
    const { email } = (body ?? {}) as { email?: unknown };
    if (typeof email !== "string" || email.length === 0 || email.length > 254) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (email.trim().toLowerCase() === callerEmail.toLowerCase()) {
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
