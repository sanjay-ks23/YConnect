import { createBrowserClient } from "@supabase/ssr";

/**
 * Browser Supabase client using the public anon key. Used ONLY for Supabase
 * Auth (Google sign-in) in the admin dashboard — never for reading/writing
 * application data, which always goes through server-side API routes.
 */
export function getSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
    );
  }

  return createBrowserClient(url, anonKey);
}
