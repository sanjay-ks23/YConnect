import { createClient } from "@supabase/supabase-js";

/**
 * Service-role Supabase client. SERVER-ONLY — never import this into a
 * "use client" component or expose SUPABASE_SERVICE_ROLE_KEY to the browser.
 * Used inside API routes and server components (e.g. the /admin dashboard).
 */
export function getSupabaseServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey || !url.startsWith("http")) {
    throw new Error(
      "Missing or invalid Supabase environment variables. Make sure NEXT_PUBLIC_SUPABASE_URL is a valid URL starting with 'http' and SUPABASE_SERVICE_ROLE_KEY is set in your .env.local file."
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
