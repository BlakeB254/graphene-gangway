import { NextResponse, type NextRequest } from "next/server";
import { AUTH_CONFIG, ADMIN_ROUTES, PUBLIC_ROUTES } from "@/lib/shared/constants";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get(AUTH_CONFIG.SESSION_COOKIE_NAME);
  const hasSession = !!sessionCookie?.value;

  // Admin routes: require session, redirect to /login if missing
  const isAdminRoute = ADMIN_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isAdminRoute && !hasSession) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Login page: redirect to home if already authenticated
  if (pathname === "/login" && hasSession) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Public routes and everything else: pass through
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login", "/verify"],
};
