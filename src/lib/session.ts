import { cookies } from "next/headers";
import { AUTH_CONFIG } from "./shared/constants";
import type { SessionData } from "./shared/types";
import { createSession, validateSession, deleteSession } from "./auth";

// ---------------------------------------------------------------------------
// Read session
// ---------------------------------------------------------------------------

export async function getSession(): Promise<SessionData | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(AUTH_CONFIG.SESSION_COOKIE_NAME);

  if (!sessionCookie?.value) return null;

  return validateSession(sessionCookie.value);
}

// ---------------------------------------------------------------------------
// Write session cookie
// ---------------------------------------------------------------------------

export async function setSessionCookie(email: string): Promise<void> {
  const sessionToken = await createSession(email);
  const cookieStore = await cookies();

  cookieStore.set(AUTH_CONFIG.SESSION_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: AUTH_CONFIG.SESSION_EXPIRY_DAYS * 24 * 60 * 60,
  });
}

// ---------------------------------------------------------------------------
// Clear session cookie
// ---------------------------------------------------------------------------

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(AUTH_CONFIG.SESSION_COOKIE_NAME);

  if (sessionCookie?.value) {
    await deleteSession(sessionCookie.value);
  }

  cookieStore.set(AUTH_CONFIG.SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

// ---------------------------------------------------------------------------
// Access cookie (non-httpOnly, used for client-side gating)
// ---------------------------------------------------------------------------

export async function hasAccess(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.has(AUTH_CONFIG.ACCESS_COOKIE_NAME);
}

export async function grantAccess(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set(AUTH_CONFIG.ACCESS_COOKIE_NAME, "true", {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: AUTH_CONFIG.SESSION_EXPIRY_DAYS * 24 * 60 * 60,
  });
}

export async function clearAccessCookie(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set(AUTH_CONFIG.ACCESS_COOKIE_NAME, "", {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
