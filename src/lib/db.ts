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

export async function initializePrograms() {
  await getDb()`
    CREATE TABLE IF NOT EXISTS programs (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      title VARCHAR(255) NOT NULL,
      tagline VARCHAR(500),
      description TEXT,
      hero_image VARCHAR(500),
      icon VARCHAR(100),
      accent_color VARCHAR(7),
      status VARCHAR(50) DEFAULT 'draft',
      display_order INT DEFAULT 0,
      external_link VARCHAR(500),
      internal_route VARCHAR(255),
      metadata JSONB DEFAULT '{}',
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await getDb()`CREATE INDEX IF NOT EXISTS idx_programs_slug ON programs (slug)`;
  await getDb()`CREATE INDEX IF NOT EXISTS idx_programs_status ON programs (status)`;
}

export async function initializeProgramSections() {
  await getDb()`
    CREATE TABLE IF NOT EXISTS program_sections (
      id SERIAL PRIMARY KEY,
      program_id INT NOT NULL REFERENCES programs(id) ON DELETE CASCADE,
      section_type VARCHAR(50) NOT NULL,
      title VARCHAR(255),
      content JSONB NOT NULL DEFAULT '{}',
      display_order INT DEFAULT 0,
      is_visible BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await getDb()`CREATE INDEX IF NOT EXISTS idx_program_sections_program_id ON program_sections (program_id)`;
}

export async function initializeAllTables() {
  await initializeAuthTokens();
  await initializeSessions();
  await initializeContactSubmissions();
  await initializePrograms();
  await initializeProgramSections();
}
