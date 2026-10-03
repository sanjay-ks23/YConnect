import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerAuthClient } from "@/lib/supabase/serverAuth";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${origin}/admin/login`);
  }

  const supabase = await getSupabaseServerAuthClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("Auth callback error:", error.message);
    return NextResponse.redirect(`${origin}/admin/login`);
  }

  return NextResponse.redirect(`${origin}/admin`);
}
