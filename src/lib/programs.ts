import { getDb } from "./db";
import type { ProgramRow, ProgramSectionRow, ProgramStatus, ProgramSectionType } from "./shared/types";

// ── Programs CRUD ──────────────────────────────────

export async function listPrograms(status?: ProgramStatus): Promise<ProgramRow[]> {
  const sql = getDb();
  if (status) {
    const rows = await sql`
      SELECT * FROM programs WHERE status = ${status} ORDER BY display_order ASC, created_at DESC
    `;
    return rows as unknown as ProgramRow[];
  }
  const rows = await sql`
    SELECT * FROM programs ORDER BY display_order ASC, created_at DESC
  `;
  return rows as unknown as ProgramRow[];
}

export async function getProgramById(id: number): Promise<ProgramRow | null> {
  const sql = getDb();
  const rows = await sql`SELECT * FROM programs WHERE id = ${id}`;
  return (rows[0] as unknown as ProgramRow) ?? null;
}

export async function getProgramBySlug(slug: string): Promise<ProgramRow | null> {
  const sql = getDb();
  const rows = await sql`SELECT * FROM programs WHERE slug = ${slug}`;
  return (rows[0] as unknown as ProgramRow) ?? null;
}

export async function createProgram(data: {
  slug: string;
  title: string;
  tagline?: string;
  description?: string;
  hero_image?: string;
  icon?: string;
  accent_color?: string;
  status?: ProgramStatus;
  display_order?: number;
  external_link?: string;
  internal_route?: string;
  metadata?: Record<string, unknown>;
}): Promise<ProgramRow> {
  const sql = getDb();
  const rows = await sql`
    INSERT INTO programs (slug, title, tagline, description, hero_image, icon, accent_color, status, display_order, external_link, internal_route, metadata)
    VALUES (
      ${data.slug},
      ${data.title},
      ${data.tagline ?? null},
      ${data.description ?? null},
      ${data.hero_image ?? null},
      ${data.icon ?? null},
      ${data.accent_color ?? null},
      ${data.status ?? "draft"},
      ${data.display_order ?? 0},
      ${data.external_link ?? null},
      ${data.internal_route ?? null},
      ${JSON.stringify(data.metadata ?? {})}
    )
    RETURNING *
  `;
  return rows[0] as unknown as ProgramRow;
}

export async function updateProgram(
  id: number,
  data: Partial<{
    slug: string;
    title: string;
    tagline: string | null;
    description: string | null;
    hero_image: string | null;
    icon: string | null;
    accent_color: string | null;
    status: ProgramStatus;
    display_order: number;
    external_link: string | null;
    internal_route: string | null;
    metadata: Record<string, unknown>;
  }>
): Promise<ProgramRow | null> {
  const sql = getDb();
  // Build a full update — simpler than dynamic column updates with tagged templates
  const current = await getProgramById(id);
  if (!current) return null;

  const merged = {
    slug: data.slug ?? current.slug,
    title: data.title ?? current.title,
    tagline: data.tagline !== undefined ? data.tagline : current.tagline,
    description: data.description !== undefined ? data.description : current.description,
    hero_image: data.hero_image !== undefined ? data.hero_image : current.hero_image,
    icon: data.icon !== undefined ? data.icon : current.icon,
    accent_color: data.accent_color !== undefined ? data.accent_color : current.accent_color,
    status: data.status ?? current.status,
    display_order: data.display_order ?? current.display_order,
    external_link: data.external_link !== undefined ? data.external_link : current.external_link,
    internal_route: data.internal_route !== undefined ? data.internal_route : current.internal_route,
    metadata: data.metadata ?? current.metadata,
  };

  const rows = await sql`
    UPDATE programs SET
      slug = ${merged.slug},
      title = ${merged.title},
      tagline = ${merged.tagline},
      description = ${merged.description},
      hero_image = ${merged.hero_image},
      icon = ${merged.icon},
      accent_color = ${merged.accent_color},
      status = ${merged.status},
      display_order = ${merged.display_order},
      external_link = ${merged.external_link},
      internal_route = ${merged.internal_route},
      metadata = ${JSON.stringify(merged.metadata)},
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `;
  return (rows[0] as unknown as ProgramRow) ?? null;
}

export async function deleteProgram(id: number): Promise<boolean> {
  const sql = getDb();
  await sql`DELETE FROM programs WHERE id = ${id}`;
  return true;
}

// ── Program Sections CRUD ──────────────────────────

export async function listProgramSections(programId: number): Promise<ProgramSectionRow[]> {
  const sql = getDb();
  const rows = await sql`
    SELECT * FROM program_sections
    WHERE program_id = ${programId}
    ORDER BY display_order ASC, created_at ASC
  `;
  return rows as unknown as ProgramSectionRow[];
}

export async function createProgramSection(data: {
  program_id: number;
  section_type: ProgramSectionType;
  title?: string;
  content: Record<string, unknown>;
  display_order?: number;
  is_visible?: boolean;
}): Promise<ProgramSectionRow> {
  const sql = getDb();
  const rows = await sql`
    INSERT INTO program_sections (program_id, section_type, title, content, display_order, is_visible)
    VALUES (
      ${data.program_id},
      ${data.section_type},
      ${data.title ?? null},
      ${JSON.stringify(data.content)},
      ${data.display_order ?? 0},
      ${data.is_visible ?? true}
    )
    RETURNING *
  `;
  return rows[0] as unknown as ProgramSectionRow;
}

export async function updateProgramSection(
  id: number,
  data: Partial<{
    section_type: ProgramSectionType;
    title: string | null;
    content: Record<string, unknown>;
    display_order: number;
    is_visible: boolean;
  }>
): Promise<ProgramSectionRow | null> {
  const sql = getDb();
  const current = await sql`SELECT * FROM program_sections WHERE id = ${id}`;
  if (!current[0]) return null;
  const c = current[0] as unknown as ProgramSectionRow;

  const rows = await sql`
    UPDATE program_sections SET
      section_type = ${data.section_type ?? c.section_type},
      title = ${data.title !== undefined ? data.title : c.title},
      content = ${JSON.stringify(data.content ?? c.content)},
      display_order = ${data.display_order ?? c.display_order},
      is_visible = ${data.is_visible ?? c.is_visible},
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `;
  return (rows[0] as unknown as ProgramSectionRow) ?? null;
}

export async function deleteProgramSection(id: number): Promise<boolean> {
  const sql = getDb();
  await sql`DELETE FROM program_sections WHERE id = ${id}`;
  return true;
}
