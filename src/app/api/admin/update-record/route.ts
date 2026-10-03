import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerAuthClient } from "@/lib/supabase/serverAuth";
import { getSupabaseServiceClient } from "@/lib/supabase/server";
import {
  ALLOWED_TABLES,
  checkRateLimit,
  isValidStatusForTable,
  isValidUuid,
  parseJsonBody,
} from "@/lib/security";

export async function POST(req: NextRequest) {
  try {
    const rateLimitError = checkRateLimit(req);
    if (rateLimitError) return rateLimitError;

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

    const { data: body, error: bodyError } = await parseJsonBody(req);
    if (bodyError) return bodyError;

    const { table, id, status, notes } = (body ?? {}) as {
      table?: unknown;
      id?: unknown;
      status?: unknown;
      notes?: unknown;
    };

    if (typeof table !== "string" || !ALLOWED_TABLES.includes(table as (typeof ALLOWED_TABLES)[number])) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    if (typeof id !== "string" || !isValidUuid(id)) {
      return NextResponse.json({ error: "Invalid record id" }, { status: 400 });
    }

    const updates: Record<string, string> = {};
    if (typeof status === "string") {
      if (!isValidStatusForTable(table, status)) {
        return NextResponse.json({ error: "Invalid status value" }, { status: 400 });
      }
      updates.status = status;
    }
    if (typeof notes === "string") {
      if (notes.length > 5000) {
        return NextResponse.json({ error: "Notes too long (max 5000 characters)" }, { status: 400 });
      }
      updates.notes = notes;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }

    const { error } = await service.from(table as (typeof ALLOWED_TABLES)[number]).update(updates).eq("id", id);

    if (error) {
      return NextResponse.json({ error: "Failed to update record" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update record error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
