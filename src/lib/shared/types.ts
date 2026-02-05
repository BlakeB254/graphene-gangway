export interface AuthTokenRow {
  id: number;
  email: string;
  token: string;
  expires_at: string;
  used_at: string | null;
  created_at: string;
}

export interface SessionRow {
  id: number;
  email: string;
  session_token: string;
  is_admin: boolean;
  expires_at: string;
  created_at: string;
}

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  intent: string;
  message: string;
  created_at: string;
}

export interface SessionData {
  email: string;
  isAdmin: boolean;
}

export interface NavLink {
  href: string;
  label: string;
}
