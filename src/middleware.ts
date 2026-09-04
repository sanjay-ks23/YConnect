import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

const MOBILE_UA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

// Refreshes the Supabase auth session cookie on every /admin request so
// server components always see an up-to-date session. Authorization
// (whitelist check against admin_users) happens in src/app/admin/layout.tsx.
// Also detects mobile user agents and redirects them to /m/* paths.
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- Mobile UA detection & redirect ---
  const ua = request.headers.get("user-agent") || "";
  const isMobile = MOBILE_UA.test(ua);

  if (isMobile && !pathname.startsWith("/m") && !pathname.startsWith("/admin") && !pathname.startsWith("/auth") && !pathname.startsWith("/api")) {
    const mobileUrl = request.nextUrl.clone();
    mobileUrl.pathname = "/m" + (pathname === "/" ? "" : pathname);
    return NextResponse.redirect(mobileUrl);
  }

  // Desktop users visiting /m/* get redirected back to desktop
  if (!isMobile && pathname.startsWith("/m")) {
    const desktopUrl = request.nextUrl.clone();
    desktopUrl.pathname = pathname.replace(/^\/m/, "") || "/";
    return NextResponse.redirect(desktopUrl);
  }

  // --- Supabase session refresh for admin/auth routes ---
  let response = NextResponse.next({ request });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey || !url.startsWith("http")) {
    return response;
  }

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });

  await supabase.auth.getUser();

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|ttf|otf|woff|woff2)$).*)"],
};
