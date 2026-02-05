import { nanoid } from "nanoid";
import { AUTH_CONFIG } from "./shared/constants";
import type { AuthTokenRow, SessionRow, SessionData } from "./shared/types";
import { getDb, initializeAuthTokens, initializeSessions } from "./db";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function isAdminEmail(email: string): boolean {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) return false;
  return email.toLowerCase() === adminEmail.toLowerCase();
}

export function getMagicLinkUrl(token: string): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return `${baseUrl}/verify?token=${token}`;
}

// ---------------------------------------------------------------------------
// Auth Tokens
// ---------------------------------------------------------------------------

export async function createMagicLinkToken(email: string): Promise<string> {
  await initializeAuthTokens();

  const token = nanoid(32);
  const expiresAt = new Date(
    Date.now() + AUTH_CONFIG.TOKEN_EXPIRY_MINUTES * 60 * 1000
  );

  await getDb()`
    INSERT INTO auth_tokens (email, token, expires_at)
    VALUES (${email.toLowerCase()}, ${token}, ${expiresAt.toISOString()})
  `;

  return token;
}

export async function verifyMagicLinkToken(
  token: string
): Promise<AuthTokenRow | null> {
  await initializeAuthTokens();

  const rows = await getDb()`
    SELECT id, email, token, expires_at, used_at, created_at
    FROM auth_tokens
    WHERE token = ${token}
      AND used_at IS NULL
      AND expires_at > NOW()
    LIMIT 1
  `;

  if (rows.length === 0) return null;

  // Mark the token as used
  await getDb()`
    UPDATE auth_tokens
    SET used_at = NOW()
    WHERE id = ${rows[0].id}
  `;

  return rows[0] as unknown as AuthTokenRow;
}

// ---------------------------------------------------------------------------
// Sessions
// ---------------------------------------------------------------------------

export async function createSession(email: string): Promise<string> {
  await initializeSessions();

  const sessionToken = nanoid(32);
  const isAdmin = isAdminEmail(email);
  const expiresAt = new Date(
    Date.now() + AUTH_CONFIG.SESSION_EXPIRY_DAYS * 24 * 60 * 60 * 1000
  );

  await getDb()`
    INSERT INTO sessions (email, session_token, is_admin, expires_at)
    VALUES (${email.toLowerCase()}, ${sessionToken}, ${isAdmin}, ${expiresAt.toISOString()})
  `;

  return sessionToken;
}

export async function validateSession(
  sessionToken: string
): Promise<SessionData | null> {
  await initializeSessions();

  const rows = await getDb()`
    SELECT id, email, session_token, is_admin, expires_at, created_at
    FROM sessions
    WHERE session_token = ${sessionToken}
      AND expires_at > NOW()
    LIMIT 1
  `;

  if (rows.length === 0) return null;

  const session = rows[0] as unknown as SessionRow;
  return {
    email: session.email,
    isAdmin: session.is_admin,
  };
}

export async function deleteSession(sessionToken: string): Promise<void> {
  await initializeSessions();

  await getDb()`
    DELETE FROM sessions
    WHERE session_token = ${sessionToken}
  `;
}

export async function deleteAllUserSessions(email: string): Promise<void> {
  await initializeSessions();

  await getDb()`
    DELETE FROM sessions
    WHERE email = ${email.toLowerCase()}
  `;
}
