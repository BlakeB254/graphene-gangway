export const AUTH_CONFIG = {
  TOKEN_EXPIRY_MINUTES: 15,
  SESSION_EXPIRY_DAYS: 7,
  SESSION_COOKIE_NAME: "gg_session",
  ACCESS_COOKIE_NAME: "gg_access",
} as const;

export const ADMIN_ROUTES = ["/admin"];
export const PUBLIC_ROUTES = ["/login", "/verify", "/api"];
