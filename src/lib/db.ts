import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let _sql: NeonQueryFunction<false, false> | null = null;

export function getDb() {
  if (!_sql) {
    _sql = neon(process.env.DATABASE_URL!);
  }
  return _sql;
}

export async function initializeAuthTokens() {
  await getDb()`
    CREATE TABLE IF NOT EXISTS auth_tokens (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      token VARCHAR(64) UNIQUE NOT NULL,
      expires_at TIMESTAMPTZ NOT NULL,
      used_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await getDb()`
    CREATE INDEX IF NOT EXISTS idx_auth_tokens_token ON auth_tokens (token)
  `;
  await getDb()`
    CREATE INDEX IF NOT EXISTS idx_auth_tokens_email ON auth_tokens (email)
  `;
}

export async function initializeSessions() {
  await getDb()`
    CREATE TABLE IF NOT EXISTS sessions (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      session_token VARCHAR(64) UNIQUE NOT NULL,
      is_admin BOOLEAN DEFAULT FALSE,
      expires_at TIMESTAMPTZ NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await getDb()`
    CREATE INDEX IF NOT EXISTS idx_sessions_session_token ON sessions (session_token)
  `;
  await getDb()`
    CREATE INDEX IF NOT EXISTS idx_sessions_email ON sessions (email)
  `;
}

export async function initializeContactSubmissions() {
  await getDb()`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      intent VARCHAR(50),
      message TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await getDb()`
    CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions (email)
  `;
}

export async function initializeAllTables() {
  await initializeAuthTokens();
  await initializeSessions();
  await initializeContactSubmissions();
}
