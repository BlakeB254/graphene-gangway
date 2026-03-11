# Batch 2: Programs CMS System — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full CMS system for Programs where each program is a mini landing page composed of admin-managed sections. YN Academy becomes the first seeded program. Admin interface for creating/editing programs with flexible section types.

**Architecture:** Programs stored in Neon PostgreSQL with a flexible sections model (JSONB content per section). API routes for CRUD. Admin pages under `/(main)/(admin)/admin/programs/`. Public pages at `/programs` (hub) and `/programs/[slug]` (detail). CDX sync via n8n webhook on program create/update.

**Tech Stack:** Neon PostgreSQL, Next.js API Routes, React Server Components for public pages, Client Components for admin forms

**Depends on:** Batch 1 (design tokens, shared types, section components)

---

## File Map

### New Files
- `src/lib/programs.ts` — Program data access layer (CRUD queries)
- `src/app/api/programs/route.ts` — GET (list) + POST (create) programs
- `src/app/api/programs/[id]/route.ts` — GET + PUT + DELETE single program
- `src/app/api/programs/[id]/sections/route.ts` — GET + POST sections for a program
- `src/app/api/programs/[id]/sections/[sectionId]/route.ts` — PUT + DELETE single section
- `src/app/api/programs/init/route.ts` — DB table initialization endpoint
- `src/app/(main)/programs/page.tsx` — Public programs hub (grid of program cards)
- `src/app/(main)/programs/[slug]/page.tsx` — Public program detail page (CMS-rendered)
- `src/app/(main)/(admin)/admin/programs/page.tsx` — Admin programs list
- `src/app/(main)/(admin)/admin/programs/new/page.tsx` — Create new program
- `src/app/(main)/(admin)/admin/programs/[id]/edit/page.tsx` — Edit program + sections
- `src/components/programs/ProgramCard.tsx` — Program card for the hub grid
- `src/components/programs/ProgramSectionRenderer.tsx` — Renders a program section by type
- `src/components/programs/AdminProgramForm.tsx` — Program metadata form (client component)
- `src/components/programs/AdminSectionEditor.tsx` — Section content editor (client component)
- `src/components/programs/AdminSectionList.tsx` — Sortable section list for admin

### Modified Files
- `src/lib/db.ts` — Add `initializePrograms()` and `initializeProgramSections()`
- `src/proxy.ts` — Already protects `/admin/*` routes, no changes needed

---

## Chunk 1: Database Schema & Data Access

### Task 1: Add Programs Tables to DB

**Files:**
- Modify: `src/lib/db.ts`

- [ ] **Step 1: Add programs table initialization**

Append to `src/lib/db.ts` before `initializeAllTables`:

```typescript
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
  await getDb()`
    CREATE INDEX IF NOT EXISTS idx_programs_slug ON programs (slug)
  `;
  await getDb()`
    CREATE INDEX IF NOT EXISTS idx_programs_status ON programs (status)
  `;
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
  await getDb()`
    CREATE INDEX IF NOT EXISTS idx_program_sections_program_id ON program_sections (program_id)
  `;
}
```

- [ ] **Step 2: Update initializeAllTables**

```typescript
export async function initializeAllTables() {
  await initializeAuthTokens();
  await initializeSessions();
  await initializeContactSubmissions();
  await initializePrograms();
  await initializeProgramSections();
}
```

- [ ] **Step 3: Commit**

```bash
git add src/lib/db.ts
git commit -m "feat: add programs and program_sections table schemas"
```

---

### Task 2: Programs Data Access Layer

**Files:**
- Create: `src/lib/programs.ts`

- [ ] **Step 1: Create programs data access module**

```typescript
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
  // Build SET clause dynamically for provided fields
  const sets: string[] = [];
  const vals: unknown[] = [];

  if (data.slug !== undefined) { sets.push("slug"); vals.push(data.slug); }
  if (data.title !== undefined) { sets.push("title"); vals.push(data.title); }
  if (data.tagline !== undefined) { sets.push("tagline"); vals.push(data.tagline); }
  if (data.description !== undefined) { sets.push("description"); vals.push(data.description); }
  if (data.hero_image !== undefined) { sets.push("hero_image"); vals.push(data.hero_image); }
  if (data.icon !== undefined) { sets.push("icon"); vals.push(data.icon); }
  if (data.accent_color !== undefined) { sets.push("accent_color"); vals.push(data.accent_color); }
  if (data.status !== undefined) { sets.push("status"); vals.push(data.status); }
  if (data.display_order !== undefined) { sets.push("display_order"); vals.push(data.display_order); }
  if (data.external_link !== undefined) { sets.push("external_link"); vals.push(data.external_link); }
  if (data.internal_route !== undefined) { sets.push("internal_route"); vals.push(data.internal_route); }
  if (data.metadata !== undefined) { sets.push("metadata"); vals.push(JSON.stringify(data.metadata)); }

  if (sets.length === 0) return getProgramById(id);

  // Use a simple approach: update each field individually (Neon tagged template limitation)
  for (let i = 0; i < sets.length; i++) {
    await sql`
      UPDATE programs SET ${sql(sets[i])} = ${vals[i]}, updated_at = NOW() WHERE id = ${id}
    `;
  }

  return getProgramById(id);
}

export async function deleteProgram(id: number): Promise<boolean> {
  const sql = getDb();
  const result = await sql`DELETE FROM programs WHERE id = ${id}`;
  return (result as unknown as { count: number }).count > 0;
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

  if (data.content !== undefined) {
    await sql`UPDATE program_sections SET content = ${JSON.stringify(data.content)}, updated_at = NOW() WHERE id = ${id}`;
  }
  if (data.title !== undefined) {
    await sql`UPDATE program_sections SET title = ${data.title}, updated_at = NOW() WHERE id = ${id}`;
  }
  if (data.section_type !== undefined) {
    await sql`UPDATE program_sections SET section_type = ${data.section_type}, updated_at = NOW() WHERE id = ${id}`;
  }
  if (data.display_order !== undefined) {
    await sql`UPDATE program_sections SET display_order = ${data.display_order}, updated_at = NOW() WHERE id = ${id}`;
  }
  if (data.is_visible !== undefined) {
    await sql`UPDATE program_sections SET is_visible = ${data.is_visible}, updated_at = NOW() WHERE id = ${id}`;
  }

  const rows = await sql`SELECT * FROM program_sections WHERE id = ${id}`;
  return (rows[0] as unknown as ProgramSectionRow) ?? null;
}

export async function deleteProgramSection(id: number): Promise<boolean> {
  const sql = getDb();
  const result = await sql`DELETE FROM program_sections WHERE id = ${id}`;
  return (result as unknown as { count: number }).count > 0;
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `cd /home/codex450/CDX-DEV-PROJECTS/graphene-gangway && npx tsc --noEmit 2>&1 | tail -20`
Expected: No type errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/programs.ts
git commit -m "feat: add programs data access layer with full CRUD for programs and sections"
```

---

### Task 3: DB Init API Endpoint

**Files:**
- Create: `src/app/api/programs/init/route.ts`

- [ ] **Step 1: Create init endpoint**

```typescript
import { NextResponse } from "next/server";
import { initializePrograms, initializeProgramSections } from "@/lib/db";

export async function POST() {
  try {
    await initializePrograms();
    await initializeProgramSections();
    return NextResponse.json({ success: true, message: "Programs tables initialized" });
  } catch (error) {
    console.error("Failed to initialize programs tables:", error);
    return NextResponse.json(
      { success: false, error: "Failed to initialize tables" },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/api/programs/init/route.ts
git commit -m "feat: add POST /api/programs/init endpoint for table initialization"
```

---

## Chunk 2: API Routes

### Task 4: Programs List & Create API

**Files:**
- Create: `src/app/api/programs/route.ts`

- [ ] **Step 1: Create programs list + create API**

```typescript
import { NextRequest, NextResponse } from "next/server";
import { listPrograms, createProgram } from "@/lib/programs";
import { validateSession } from "@/lib/auth";
import { AUTH_CONFIG } from "@/lib/shared/constants";
import type { ProgramStatus } from "@/lib/shared/types";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") as ProgramStatus | null;

  try {
    const programs = await listPrograms(status ?? undefined);
    return NextResponse.json({ programs });
  } catch (error) {
    console.error("Failed to list programs:", error);
    return NextResponse.json({ error: "Failed to list programs" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  // Require admin session
  const sessionToken = request.cookies.get(AUTH_CONFIG.SESSION_COOKIE_NAME)?.value;
  if (!sessionToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const session = await validateSession(sessionToken);
  if (!session?.isAdmin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { slug, title, tagline, description, hero_image, icon, accent_color, status, display_order, external_link, internal_route, metadata } = body;

    if (!slug || !title) {
      return NextResponse.json({ error: "slug and title are required" }, { status: 400 });
    }

    const program = await createProgram({
      slug,
      title,
      tagline,
      description,
      hero_image,
      icon,
      accent_color,
      status,
      display_order,
      external_link,
      internal_route,
      metadata,
    });

    return NextResponse.json({ program }, { status: 201 });
  } catch (error) {
    console.error("Failed to create program:", error);
    return NextResponse.json({ error: "Failed to create program" }, { status: 500 });
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/api/programs/route.ts
git commit -m "feat: add GET/POST /api/programs for listing and creating programs"
```

---

### Task 5: Single Program API (GET/PUT/DELETE)

**Files:**
- Create: `src/app/api/programs/[id]/route.ts`

- [ ] **Step 1: Create single program CRUD API**

```typescript
import { NextRequest, NextResponse } from "next/server";
import { getProgramById, updateProgram, deleteProgram } from "@/lib/programs";
import { validateSession } from "@/lib/auth";
import { AUTH_CONFIG } from "@/lib/shared/constants";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const programId = parseInt(id, 10);
  if (isNaN(programId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const program = await getProgramById(programId);
    if (!program) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 });
    }
    return NextResponse.json({ program });
  } catch (error) {
    console.error("Failed to get program:", error);
    return NextResponse.json({ error: "Failed to get program" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const sessionToken = request.cookies.get(AUTH_CONFIG.SESSION_COOKIE_NAME)?.value;
  if (!sessionToken) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const session = await validateSession(sessionToken);
  if (!session?.isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { id } = await params;
  const programId = parseInt(id, 10);
  if (isNaN(programId)) return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

  try {
    const body = await request.json();
    const program = await updateProgram(programId, body);
    if (!program) return NextResponse.json({ error: "Program not found" }, { status: 404 });
    return NextResponse.json({ program });
  } catch (error) {
    console.error("Failed to update program:", error);
    return NextResponse.json({ error: "Failed to update program" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const sessionToken = request.cookies.get(AUTH_CONFIG.SESSION_COOKIE_NAME)?.value;
  if (!sessionToken) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const session = await validateSession(sessionToken);
  if (!session?.isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { id } = await params;
  const programId = parseInt(id, 10);
  if (isNaN(programId)) return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

  try {
    const deleted = await deleteProgram(programId);
    if (!deleted) return NextResponse.json({ error: "Program not found" }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete program:", error);
    return NextResponse.json({ error: "Failed to delete program" }, { status: 500 });
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/api/programs/\[id\]/route.ts
git commit -m "feat: add GET/PUT/DELETE /api/programs/[id] for single program operations"
```

---

### Task 6: Program Sections API

**Files:**
- Create: `src/app/api/programs/[id]/sections/route.ts`
- Create: `src/app/api/programs/[id]/sections/[sectionId]/route.ts`

- [ ] **Step 1: Create sections list + create API**

```typescript
// src/app/api/programs/[id]/sections/route.ts
import { NextRequest, NextResponse } from "next/server";
import { listProgramSections, createProgramSection } from "@/lib/programs";
import { validateSession } from "@/lib/auth";
import { AUTH_CONFIG } from "@/lib/shared/constants";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const programId = parseInt(id, 10);
  if (isNaN(programId)) return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

  try {
    const sections = await listProgramSections(programId);
    return NextResponse.json({ sections });
  } catch (error) {
    console.error("Failed to list sections:", error);
    return NextResponse.json({ error: "Failed to list sections" }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const sessionToken = request.cookies.get(AUTH_CONFIG.SESSION_COOKIE_NAME)?.value;
  if (!sessionToken) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const session = await validateSession(sessionToken);
  if (!session?.isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { id } = await params;
  const programId = parseInt(id, 10);
  if (isNaN(programId)) return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

  try {
    const body = await request.json();
    const { section_type, title, content, display_order, is_visible } = body;

    if (!section_type || !content) {
      return NextResponse.json({ error: "section_type and content are required" }, { status: 400 });
    }

    const section = await createProgramSection({
      program_id: programId,
      section_type,
      title,
      content,
      display_order,
      is_visible,
    });

    return NextResponse.json({ section }, { status: 201 });
  } catch (error) {
    console.error("Failed to create section:", error);
    return NextResponse.json({ error: "Failed to create section" }, { status: 500 });
  }
}
```

- [ ] **Step 2: Create single section update/delete API**

```typescript
// src/app/api/programs/[id]/sections/[sectionId]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { updateProgramSection, deleteProgramSection } from "@/lib/programs";
import { validateSession } from "@/lib/auth";
import { AUTH_CONFIG } from "@/lib/shared/constants";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; sectionId: string }> }
) {
  const sessionToken = request.cookies.get(AUTH_CONFIG.SESSION_COOKIE_NAME)?.value;
  if (!sessionToken) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const session = await validateSession(sessionToken);
  if (!session?.isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { sectionId } = await params;
  const sId = parseInt(sectionId, 10);
  if (isNaN(sId)) return NextResponse.json({ error: "Invalid section ID" }, { status: 400 });

  try {
    const body = await request.json();
    const section = await updateProgramSection(sId, body);
    if (!section) return NextResponse.json({ error: "Section not found" }, { status: 404 });
    return NextResponse.json({ section });
  } catch (error) {
    console.error("Failed to update section:", error);
    return NextResponse.json({ error: "Failed to update section" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; sectionId: string }> }
) {
  const sessionToken = request.cookies.get(AUTH_CONFIG.SESSION_COOKIE_NAME)?.value;
  if (!sessionToken) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const session = await validateSession(sessionToken);
  if (!session?.isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { sectionId } = await params;
  const sId = parseInt(sectionId, 10);
  if (isNaN(sId)) return NextResponse.json({ error: "Invalid section ID" }, { status: 400 });

  try {
    const deleted = await deleteProgramSection(sId);
    if (!deleted) return NextResponse.json({ error: "Section not found" }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete section:", error);
    return NextResponse.json({ error: "Failed to delete section" }, { status: 500 });
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/api/programs/\[id\]/sections/route.ts src/app/api/programs/\[id\]/sections/\[sectionId\]/route.ts
git commit -m "feat: add program sections API routes (list, create, update, delete)"
```

---

## Chunk 3: Public Program Pages

### Task 7: ProgramCard Component

**Files:**
- Create: `src/components/programs/ProgramCard.tsx`

- [ ] **Step 1: Create ProgramCard**

```typescript
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/common/Badge";
import type { ProgramRow } from "@/lib/shared/types";

interface ProgramCardProps {
  program: ProgramRow;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const href = program.external_link || program.internal_route || `/programs/${program.slug}`;
  const isExternal = !!program.external_link;

  return (
    <Link
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-dark-mid bg-dark-surface p-6 transition-all",
        "hover:border-cyan-neon/30 hover:shadow-[0_0_20px_rgba(0,240,255,0.08)]",
        "hover:-translate-y-1"
      )}
    >
      {/* Hero image */}
      {program.hero_image && (
        <div className="mb-4 aspect-video overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={program.hero_image}
            alt={program.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}

      {/* Status badge */}
      {program.status === "coming_soon" && (
        <Badge variant="warning" className="mb-3">Coming Soon</Badge>
      )}
      {program.status === "active" && (
        <Badge variant="success" className="mb-3">Active</Badge>
      )}

      <h3 className="mb-2 font-[family-name:var(--font-display)] text-2xl tracking-wider text-ice-white">
        {program.title}
      </h3>

      {program.tagline && (
        <p className="mb-4 text-sm text-ice-white/60">{program.tagline}</p>
      )}

      {program.description && (
        <p className="mb-4 text-sm leading-relaxed text-ice-white/50 line-clamp-3">
          {program.description}
        </p>
      )}

      <span className="inline-flex items-center gap-1 text-sm font-medium text-cyan-neon transition-all group-hover:gap-2">
        Learn More <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/programs/ProgramCard.tsx
git commit -m "feat: add ProgramCard component for programs hub grid"
```

---

### Task 8: ProgramSectionRenderer Component

**Files:**
- Create: `src/components/programs/ProgramSectionRenderer.tsx`

- [ ] **Step 1: Create section renderer**

This component takes a `ProgramSectionRow` and renders the appropriate UI based on `section_type`.

```typescript
import { cn } from "@/lib/utils";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";
import type { ProgramSectionRow } from "@/lib/shared/types";
import type {
  RichTextContent,
  FAQContent,
  TimelineContent,
  TestimonialsContent,
  GalleryContent,
  StatsContent,
  DocumentsContent,
  CTAContent,
  VideoContent,
} from "@/lib/shared/types";
import Link from "next/link";
import { FileText, Download } from "lucide-react";

function RichTextSection({ title, content }: { title?: string | null; content: RichTextContent }) {
  return (
    <SectionWrapper>
      <ScrollAnimation>
        {title && (
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
            {title}
          </h2>
        )}
        <div
          className="prose prose-invert max-w-none prose-p:text-ice-white/70 prose-headings:font-[family-name:var(--font-display)] prose-headings:tracking-wider prose-a:text-cyan-neon"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </ScrollAnimation>
    </SectionWrapper>
  );
}

function GallerySection({ title, content }: { title?: string | null; content: GalleryContent }) {
  return (
    <SectionWrapper>
      {title && (
        <ScrollAnimation>
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
            {title}
          </h2>
        </ScrollAnimation>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item, i) => (
          <ScrollAnimation key={i} delay={i * 0.05}>
            <div className="overflow-hidden rounded-lg border border-dark-mid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.alt} className="aspect-video w-full object-cover" />
              {item.caption && (
                <p className="p-3 text-sm text-ice-white/50">{item.caption}</p>
              )}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </SectionWrapper>
  );
}

function StatsSection({ title, content }: { title?: string | null; content: StatsContent }) {
  return (
    <SectionWrapper dark>
      {title && (
        <ScrollAnimation>
          <h2 className="mb-12 text-center font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
            {title}
          </h2>
        </ScrollAnimation>
      )}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {content.items.map((item, i) => (
          <ScrollAnimation key={i} delay={i * 0.1} className="text-center">
            <p className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon md:text-5xl">
              {item.value}{item.suffix}
            </p>
            <p className="mt-2 text-sm text-ice-white/60">{item.label}</p>
          </ScrollAnimation>
        ))}
      </div>
    </SectionWrapper>
  );
}

function DocumentsSection({ title, content }: { title?: string | null; content: DocumentsContent }) {
  return (
    <SectionWrapper>
      {title && (
        <ScrollAnimation>
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
            {title}
          </h2>
        </ScrollAnimation>
      )}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {content.items.map((item, i) => (
          <ScrollAnimation key={i} delay={i * 0.05}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-dark-mid bg-dark-surface p-4 transition-all hover:border-cyan-neon/30"
            >
              <FileText className="h-5 w-5 flex-shrink-0 text-cyan-neon" />
              <span className="flex-1 text-sm text-ice-white">{item.title}</span>
              {item.fileType && (
                <span className="text-xs text-ice-white/40 uppercase">{item.fileType}</span>
              )}
              <Download className="h-4 w-4 text-ice-white/40" />
            </a>
          </ScrollAnimation>
        ))}
      </div>
    </SectionWrapper>
  );
}

function CTASection({ content }: { content: CTAContent }) {
  return (
    <SectionWrapper dark>
      <ScrollAnimation className="text-center">
        <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
          {content.heading}
        </h2>
        {content.description && (
          <p className="mx-auto mb-8 max-w-2xl text-lg text-ice-white/60">{content.description}</p>
        )}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={content.primaryHref}
            className="rounded-lg bg-cyan-neon px-8 py-3 font-bold text-dark-deep transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            {content.primaryLabel}
          </Link>
          {content.secondaryLabel && content.secondaryHref && (
            <Link
              href={content.secondaryHref}
              className="rounded-lg border border-cyan-neon/30 px-8 py-3 font-medium text-cyan-neon transition-colors hover:bg-cyan-neon/10"
            >
              {content.secondaryLabel}
            </Link>
          )}
        </div>
      </ScrollAnimation>
    </SectionWrapper>
  );
}

function VideoSection({ title, content }: { title?: string | null; content: VideoContent }) {
  return (
    <SectionWrapper>
      {title && (
        <ScrollAnimation>
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
            {title}
          </h2>
        </ScrollAnimation>
      )}
      <ScrollAnimation>
        <div className="overflow-hidden rounded-xl border border-dark-mid">
          <video
            src={content.url}
            poster={content.poster}
            controls
            className="w-full"
          />
          {content.caption && (
            <p className="p-4 text-sm text-ice-white/50">{content.caption}</p>
          )}
        </div>
      </ScrollAnimation>
    </SectionWrapper>
  );
}

interface ProgramSectionRendererProps {
  section: ProgramSectionRow;
}

export function ProgramSectionRenderer({ section }: ProgramSectionRendererProps) {
  if (!section.is_visible) return null;

  const content = section.content as Record<string, unknown>;

  switch (section.section_type) {
    case "rich_text":
      return <RichTextSection title={section.title} content={content as unknown as RichTextContent} />;
    case "faq":
      return <FAQAccordion title={section.title ?? "FAQ"} items={(content as unknown as FAQContent).items} />;
    case "timeline":
      return <ProcessTimeline title={section.title ?? "Process"} steps={(content as unknown as TimelineContent).items} />;
    case "testimonials":
      return <TestimonialCarousel title={section.title ?? "Testimonials"} testimonials={(content as unknown as TestimonialsContent).items} />;
    case "gallery":
      return <GallerySection title={section.title} content={content as unknown as GalleryContent} />;
    case "stats":
      return <StatsSection title={section.title} content={content as unknown as StatsContent} />;
    case "documents":
      return <DocumentsSection title={section.title} content={content as unknown as DocumentsContent} />;
    case "cta":
      return <CTASection content={content as unknown as CTAContent} />;
    case "video":
      return <VideoSection title={section.title} content={content as unknown as VideoContent} />;
    case "embed":
      return (
        <SectionWrapper>
          <div dangerouslySetInnerHTML={{ __html: (content as { html: string }).html }} />
        </SectionWrapper>
      );
    default:
      return null;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/programs/ProgramSectionRenderer.tsx
git commit -m "feat: add ProgramSectionRenderer — renders CMS sections by type"
```

---

### Task 9: Public Programs Hub Page

**Files:**
- Create: `src/app/(main)/programs/page.tsx`

- [ ] **Step 1: Create programs hub page**

```typescript
import type { Metadata } from "next";
import { listPrograms } from "@/lib/programs";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore Graphene Gangway programs — technology education, community development, and more.",
};

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function ProgramsPage() {
  const programs = await listPrograms("active");

  return (
    <>
      {/* Hero */}
      <SectionWrapper>
        <ScrollAnimation>
          <h1 className="mb-4 font-[family-name:var(--font-display)] text-5xl tracking-wider text-ice-white md:text-6xl">
            OUR PROGRAMS
          </h1>
          <p className="max-w-2xl text-lg text-ice-white/60">
            Community-powered programs bridging the digital divide through education, mentorship, and real-world technology training.
          </p>
        </ScrollAnimation>
      </SectionWrapper>

      {/* Program Grid */}
      <SectionWrapper>
        {programs.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => (
              <ScrollAnimation key={program.id} delay={i * 0.1}>
                <ProgramCard program={program} />
              </ScrollAnimation>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dark-mid bg-dark-surface p-12 text-center">
            <p className="text-lg text-ice-white/50">Programs coming soon. Check back later!</p>
          </div>
        )}
      </SectionWrapper>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/\(main\)/programs/page.tsx
git commit -m "feat: add public /programs hub page with program card grid"
```

---

### Task 10: Public Program Detail Page

**Files:**
- Create: `src/app/(main)/programs/[slug]/page.tsx`

- [ ] **Step 1: Create program detail page**

```typescript
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProgramBySlug, listProgramSections } from "@/lib/programs";
import { ProgramSectionRenderer } from "@/components/programs/ProgramSectionRenderer";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";
import { Badge } from "@/components/common/Badge";

export const revalidate = 60;

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);
  if (!program) return { title: "Program Not Found" };
  return {
    title: program.title,
    description: program.tagline || program.description || `Learn about ${program.title} at Graphene Gangway.`,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);

  if (!program || program.status === "draft") {
    notFound();
  }

  const sections = await listProgramSections(program.id);
  const visibleSections = sections.filter((s) => s.is_visible);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {program.hero_image && (
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={program.hero_image}
              alt=""
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/80 to-dark-deep" />
          </div>
        )}
        <SectionWrapper className="relative">
          <ScrollAnimation>
            {program.status === "coming_soon" && (
              <Badge variant="warning" className="mb-4">Coming Soon</Badge>
            )}
            <h1 className="mb-4 font-[family-name:var(--font-display)] text-5xl tracking-wider text-ice-white md:text-7xl">
              {program.title}
            </h1>
            {program.tagline && (
              <p className="max-w-3xl text-xl text-ice-white/70 md:text-2xl">
                {program.tagline}
              </p>
            )}
            {program.description && (
              <p className="mt-4 max-w-2xl text-ice-white/50 leading-relaxed">
                {program.description}
              </p>
            )}
          </ScrollAnimation>
        </SectionWrapper>
      </section>

      {/* CMS Sections */}
      {visibleSections.map((section) => (
        <ProgramSectionRenderer key={section.id} section={section} />
      ))}
    </>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd /home/codex450/CDX-DEV-PROJECTS/graphene-gangway && npx next build 2>&1 | tail -20`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/app/\(main\)/programs/\[slug\]/page.tsx
git commit -m "feat: add public /programs/[slug] detail page with CMS section rendering"
```

---

## Chunk 4: Admin Interface

### Task 11: Admin Programs List Page

**Files:**
- Create: `src/app/(main)/(admin)/admin/programs/page.tsx`

- [ ] **Step 1: Create admin programs list**

```typescript
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { listPrograms } from "@/lib/programs";
import { Badge } from "@/components/common/Badge";

export default async function AdminProgramsPage() {
  const programs = await listPrograms();

  const statusBadge = (status: string) => {
    switch (status) {
      case "active": return <Badge variant="success">Active</Badge>;
      case "coming_soon": return <Badge variant="warning">Coming Soon</Badge>;
      case "archived": return <Badge variant="muted">Archived</Badge>;
      default: return <Badge variant="muted">Draft</Badge>;
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon">
            PROGRAMS
          </h1>
          <p className="mt-2 text-sm text-ice-white/50">
            Manage community programs
          </p>
        </div>
        <Link
          href="/admin/programs/new"
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-4 py-2 text-sm font-bold text-dark-deep transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
        >
          <Plus className="h-4 w-4" />
          New Program
        </Link>
      </div>

      {programs.length > 0 ? (
        <div className="overflow-hidden rounded-xl border border-dark-mid">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-mid bg-dark-surface">
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-ice-white/50">Order</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-ice-white/50">Program</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-ice-white/50">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-ice-white/50">Slug</th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-ice-white/50">Actions</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program) => (
                <tr key={program.id} className="border-b border-dark-mid/50 transition-colors hover:bg-dark-surface/50">
                  <td className="px-4 py-3 text-sm text-ice-white/50">{program.display_order}</td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-ice-white">{program.title}</p>
                    {program.tagline && <p className="text-xs text-ice-white/40">{program.tagline}</p>}
                  </td>
                  <td className="px-4 py-3">{statusBadge(program.status)}</td>
                  <td className="px-4 py-3 font-[family-name:var(--font-mono)] text-xs text-ice-white/40">/{program.slug}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/programs/${program.slug}`}
                        className="rounded-lg p-2 text-ice-white/40 transition-colors hover:bg-dark-surface hover:text-cyan-neon"
                        title="View public page"
                      >
                        {program.status === "active" ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                      </Link>
                      <Link
                        href={`/admin/programs/${program.id}/edit`}
                        className="rounded-lg p-2 text-ice-white/40 transition-colors hover:bg-dark-surface hover:text-cyan-neon"
                        title="Edit"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="rounded-xl border border-dark-mid bg-dark-surface p-12 text-center">
          <p className="mb-4 text-lg text-ice-white/50">No programs yet</p>
          <Link
            href="/admin/programs/new"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-4 py-2 text-sm font-bold text-dark-deep"
          >
            <Plus className="h-4 w-4" />
            Create Your First Program
          </Link>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Add programs link to admin dashboard**

In `src/app/(main)/(admin)/admin/page.tsx`, add a link to `/admin/programs` in the Quick Links grid.

- [ ] **Step 3: Commit**

```bash
git add src/app/\(main\)/\(admin\)/admin/programs/page.tsx src/app/\(main\)/\(admin\)/admin/page.tsx
git commit -m "feat: add admin programs list page with status badges and quick actions"
```

---

### Task 12: Admin Program Form (Create + Edit)

**Files:**
- Create: `src/components/programs/AdminProgramForm.tsx`
- Create: `src/app/(main)/(admin)/admin/programs/new/page.tsx`
- Create: `src/app/(main)/(admin)/admin/programs/[id]/edit/page.tsx`

- [ ] **Step 1: Create AdminProgramForm client component**

```typescript
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import type { ProgramRow, ProgramStatus } from "@/lib/shared/types";

interface AdminProgramFormProps {
  program?: ProgramRow;
}

const STATUS_OPTIONS: { value: ProgramStatus; label: string }[] = [
  { value: "draft", label: "Draft" },
  { value: "active", label: "Active" },
  { value: "coming_soon", label: "Coming Soon" },
  { value: "archived", label: "Archived" },
];

export function AdminProgramForm({ program }: AdminProgramFormProps) {
  const router = useRouter();
  const isEditing = !!program;

  const [form, setForm] = useState({
    slug: program?.slug ?? "",
    title: program?.title ?? "",
    tagline: program?.tagline ?? "",
    description: program?.description ?? "",
    hero_image: program?.hero_image ?? "",
    icon: program?.icon ?? "",
    accent_color: program?.accent_color ?? "#00F0FF",
    status: program?.status ?? ("draft" as ProgramStatus),
    display_order: program?.display_order ?? 0,
    external_link: program?.external_link ?? "",
    internal_route: program?.internal_route ?? "",
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleChange(field: string, value: string | number) {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Auto-generate slug from title if not editing
    if (field === "title" && !isEditing) {
      const slug = (value as string)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      setForm((prev) => ({ ...prev, slug }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const url = isEditing ? `/api/programs/${program!.id}` : "/api/programs";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save program");
      }

      const data = await res.json();
      if (isEditing) {
        router.refresh();
      } else {
        router.push(`/admin/programs/${data.program.id}/edit`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-dark-mid bg-dark-deep px-4 py-2.5 text-sm text-ice-white placeholder-ice-white/30 transition-colors focus:border-cyan-neon/50 focus:outline-none focus:ring-1 focus:ring-cyan-neon/30";

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/programs" className="rounded-lg p-2 text-ice-white/40 transition-colors hover:text-cyan-neon">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-cyan-neon">
            {isEditing ? "EDIT PROGRAM" : "NEW PROGRAM"}
          </h1>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-4 py-2 text-sm font-bold text-dark-deep transition-all hover:scale-105 disabled:opacity-50"
        >
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          {saving ? "Saving..." : "Save Program"}
        </button>
      </div>

      {error && (
        <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left column: core fields */}
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ice-white/50">Title *</label>
            <input className={inputClasses} value={form.title} onChange={(e) => handleChange("title", e.target.value)} required />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ice-white/50">Slug *</label>
            <input className={inputClasses} value={form.slug} onChange={(e) => handleChange("slug", e.target.value)} required />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ice-white/50">Tagline</label>
            <input className={inputClasses} value={form.tagline} onChange={(e) => handleChange("tagline", e.target.value)} />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ice-white/50">Description</label>
            <textarea className={inputClasses + " min-h-[120px]"} value={form.description} onChange={(e) => handleChange("description", e.target.value)} />
          </div>
        </div>

        {/* Right column: metadata */}
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ice-white/50">Status</label>
            <select className={inputClasses} value={form.status} onChange={(e) => handleChange("status", e.target.value)}>
              {STATUS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ice-white/50">Display Order</label>
            <input type="number" className={inputClasses} value={form.display_order} onChange={(e) => handleChange("display_order", parseInt(e.target.value) || 0)} />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ice-white/50">Hero Image URL</label>
            <input className={inputClasses} value={form.hero_image} onChange={(e) => handleChange("hero_image", e.target.value)} placeholder="https://..." />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ice-white/50">Icon (Lucide name)</label>
            <input className={inputClasses} value={form.icon} onChange={(e) => handleChange("icon", e.target.value)} placeholder="e.g., GraduationCap" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ice-white/50">External Link</label>
            <input className={inputClasses} value={form.external_link} onChange={(e) => handleChange("external_link", e.target.value)} placeholder="https://..." />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ice-white/50">Internal Route</label>
            <input className={inputClasses} value={form.internal_route} onChange={(e) => handleChange("internal_route", e.target.value)} placeholder="/yna" />
          </div>
        </div>
      </div>
    </form>
  );
}
```

- [ ] **Step 2: Create /admin/programs/new page**

```typescript
// src/app/(main)/(admin)/admin/programs/new/page.tsx
import { AdminProgramForm } from "@/components/programs/AdminProgramForm";

export default function NewProgramPage() {
  return <AdminProgramForm />;
}
```

- [ ] **Step 3: Create /admin/programs/[id]/edit page**

```typescript
// src/app/(main)/(admin)/admin/programs/[id]/edit/page.tsx
import { notFound } from "next/navigation";
import { getProgramById, listProgramSections } from "@/lib/programs";
import { AdminProgramForm } from "@/components/programs/AdminProgramForm";
import { AdminSectionList } from "@/components/programs/AdminSectionList";

export default async function EditProgramPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const programId = parseInt(id, 10);
  if (isNaN(programId)) notFound();

  const program = await getProgramById(programId);
  if (!program) notFound();

  const sections = await listProgramSections(programId);

  return (
    <div className="space-y-12">
      <AdminProgramForm program={program} />

      <div className="border-t border-dark-mid pt-12">
        <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl tracking-wider text-ice-white">
          PAGE SECTIONS
        </h2>
        <AdminSectionList programId={programId} initialSections={sections} />
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/programs/AdminProgramForm.tsx src/app/\(main\)/\(admin\)/admin/programs/new/page.tsx src/app/\(main\)/\(admin\)/admin/programs/\[id\]/edit/page.tsx
git commit -m "feat: add admin program create/edit forms with metadata fields"
```

---

### Task 13: Admin Section List & Editor

**Files:**
- Create: `src/components/programs/AdminSectionList.tsx`

- [ ] **Step 1: Create AdminSectionList client component**

This is the most complex admin component — it manages an ordered list of sections with add/edit/delete/reorder.

```typescript
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, ChevronUp, ChevronDown, Edit, Save, X, Loader2, Eye, EyeOff } from "lucide-react";
import type { ProgramSectionRow, ProgramSectionType } from "@/lib/shared/types";

const SECTION_TYPES: { value: ProgramSectionType; label: string; description: string }[] = [
  { value: "rich_text", label: "Rich Text", description: "HTML content block" },
  { value: "testimonials", label: "Testimonials", description: "Client quotes carousel" },
  { value: "faq", label: "FAQ", description: "Collapsible Q&A section" },
  { value: "timeline", label: "Timeline", description: "Step-by-step process" },
  { value: "gallery", label: "Gallery", description: "Image grid" },
  { value: "stats", label: "Stats", description: "Animated number counters" },
  { value: "documents", label: "Documents", description: "Downloadable files" },
  { value: "cta", label: "Call to Action", description: "Buttons with heading" },
  { value: "video", label: "Video", description: "Embedded video player" },
  { value: "embed", label: "HTML Embed", description: "Custom HTML/iframe" },
];

function getDefaultContent(type: ProgramSectionType): Record<string, unknown> {
  switch (type) {
    case "rich_text": return { html: "<p>Enter content here...</p>" };
    case "testimonials": return { items: [{ authorName: "Client Name", quote: "Great experience!", rating: 5 }] };
    case "faq": return { items: [{ question: "Question?", answer: "Answer." }] };
    case "timeline": return { items: [{ title: "Step 1", description: "Description" }] };
    case "gallery": return { items: [] };
    case "stats": return { items: [{ value: "100", label: "Metric", suffix: "+" }] };
    case "documents": return { items: [] };
    case "cta": return { heading: "Ready to get started?", primaryLabel: "Learn More", primaryHref: "/contact" };
    case "video": return { url: "", caption: "" };
    case "embed": return { html: "" };
    default: return {};
  }
}

interface AdminSectionListProps {
  programId: number;
  initialSections: ProgramSectionRow[];
}

export function AdminSectionList({ programId, initialSections }: AdminSectionListProps) {
  const router = useRouter();
  const [sections, setSections] = useState(initialSections);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editContent, setEditContent] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [addingType, setAddingType] = useState<ProgramSectionType | null>(null);
  const [loading, setLoading] = useState<number | null>(null);

  async function addSection(type: ProgramSectionType) {
    setLoading(-1);
    try {
      const res = await fetch(`/api/programs/${programId}/sections`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section_type: type,
          title: SECTION_TYPES.find((t) => t.value === type)?.label ?? type,
          content: getDefaultContent(type),
          display_order: sections.length,
          is_visible: true,
        }),
      });
      if (res.ok) {
        const { section } = await res.json();
        setSections((prev) => [...prev, section]);
        setAddingType(null);
        setEditingId(section.id);
        setEditContent(JSON.stringify(section.content, null, 2));
        setEditTitle(section.title || "");
      }
    } finally {
      setLoading(null);
    }
  }

  async function saveSection(id: number) {
    setLoading(id);
    try {
      let content: Record<string, unknown>;
      try {
        content = JSON.parse(editContent);
      } catch {
        alert("Invalid JSON content");
        setLoading(null);
        return;
      }

      const res = await fetch(`/api/programs/${programId}/sections/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, title: editTitle || null }),
      });

      if (res.ok) {
        const { section } = await res.json();
        setSections((prev) => prev.map((s) => (s.id === id ? section : s)));
        setEditingId(null);
      }
    } finally {
      setLoading(null);
    }
  }

  async function deleteSection(id: number) {
    if (!confirm("Delete this section?")) return;
    setLoading(id);
    try {
      const res = await fetch(`/api/programs/${programId}/sections/${id}`, { method: "DELETE" });
      if (res.ok) {
        setSections((prev) => prev.filter((s) => s.id !== id));
      }
    } finally {
      setLoading(null);
    }
  }

  async function toggleVisibility(section: ProgramSectionRow) {
    setLoading(section.id);
    try {
      const res = await fetch(`/api/programs/${programId}/sections/${section.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_visible: !section.is_visible }),
      });
      if (res.ok) {
        const { section: updated } = await res.json();
        setSections((prev) => prev.map((s) => (s.id === section.id ? updated : s)));
      }
    } finally {
      setLoading(null);
    }
  }

  async function moveSection(id: number, direction: "up" | "down") {
    const idx = sections.findIndex((s) => s.id === id);
    if (idx === -1) return;
    const targetIdx = direction === "up" ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= sections.length) return;

    const newSections = [...sections];
    [newSections[idx], newSections[targetIdx]] = [newSections[targetIdx], newSections[idx]];
    setSections(newSections);

    // Update both display_orders
    await Promise.all([
      fetch(`/api/programs/${programId}/sections/${newSections[idx].id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ display_order: idx }),
      }),
      fetch(`/api/programs/${programId}/sections/${newSections[targetIdx].id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ display_order: targetIdx }),
      }),
    ]);
  }

  const inputClasses =
    "w-full rounded-lg border border-dark-mid bg-dark-deep px-4 py-2.5 text-sm text-ice-white placeholder-ice-white/30 focus:border-cyan-neon/50 focus:outline-none";

  return (
    <div className="space-y-4">
      {/* Sections list */}
      {sections.map((section, idx) => (
        <div
          key={section.id}
          className="rounded-xl border border-dark-mid bg-dark-surface p-4 transition-colors hover:border-dark-mid/80"
        >
          <div className="flex items-center gap-3">
            {/* Reorder buttons */}
            <div className="flex flex-col gap-1">
              <button type="button" onClick={() => moveSection(section.id, "up")} disabled={idx === 0} className="rounded p-1 text-ice-white/30 hover:text-cyan-neon disabled:opacity-20">
                <ChevronUp className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => moveSection(section.id, "down")} disabled={idx === sections.length - 1} className="rounded p-1 text-ice-white/30 hover:text-cyan-neon disabled:opacity-20">
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            {/* Section info */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="rounded bg-dark-deep px-2 py-0.5 text-xs font-medium text-cyan-neon">{section.section_type}</span>
                <span className="text-sm font-medium text-ice-white">{section.title || "(untitled)"}</span>
                {!section.is_visible && <span className="text-xs text-ice-white/30">hidden</span>}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <button type="button" onClick={() => toggleVisibility(section)} className="rounded-lg p-2 text-ice-white/40 hover:text-cyan-neon" title={section.is_visible ? "Hide" : "Show"}>
                {section.is_visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  if (editingId === section.id) {
                    setEditingId(null);
                  } else {
                    setEditingId(section.id);
                    setEditContent(JSON.stringify(section.content, null, 2));
                    setEditTitle(section.title || "");
                  }
                }}
                className="rounded-lg p-2 text-ice-white/40 hover:text-cyan-neon"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => deleteSection(section.id)} className="rounded-lg p-2 text-ice-white/40 hover:text-red-400">
                {loading === section.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Inline editor */}
          {editingId === section.id && (
            <div className="mt-4 space-y-3 border-t border-dark-mid/50 pt-4">
              <div>
                <label className="mb-1 block text-xs text-ice-white/50">Section Title</label>
                <input className={inputClasses} value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
              </div>
              <div>
                <label className="mb-1 block text-xs text-ice-white/50">Content (JSON)</label>
                <textarea
                  className={inputClasses + " min-h-[200px] font-[family-name:var(--font-mono)] text-xs"}
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => saveSection(section.id)}
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-4 py-2 text-sm font-bold text-dark-deep"
                >
                  {loading === section.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                  Save
                </button>
                <button type="button" onClick={() => setEditingId(null)} className="inline-flex items-center gap-2 rounded-lg border border-dark-mid px-4 py-2 text-sm text-ice-white/60">
                  <X className="h-4 w-4" />
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Add section */}
      {addingType ? (
        <div className="rounded-xl border border-cyan-neon/20 bg-dark-surface p-4">
          <p className="mb-3 text-sm text-ice-white/60">Choose a section type:</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {SECTION_TYPES.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => addSection(type.value)}
                className="rounded-lg border border-dark-mid bg-dark-deep p-3 text-left transition-all hover:border-cyan-neon/30"
              >
                <p className="text-sm font-medium text-ice-white">{type.label}</p>
                <p className="text-xs text-ice-white/40">{type.description}</p>
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setAddingType(null)} className="mt-3 text-sm text-ice-white/40 hover:text-ice-white">
            Cancel
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setAddingType("rich_text")}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-dark-mid p-4 text-sm text-ice-white/40 transition-colors hover:border-cyan-neon/30 hover:text-cyan-neon"
        >
          <Plus className="h-4 w-4" />
          Add Section
        </button>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `cd /home/codex450/CDX-DEV-PROJECTS/graphene-gangway && npx next build 2>&1 | tail -20`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/programs/AdminSectionList.tsx
git commit -m "feat: add AdminSectionList with inline JSON editor, reordering, visibility toggle"
```

---

### Task 14: Seed YN Academy Program

**Files:**
- Create: `src/app/api/programs/seed/route.ts`

- [ ] **Step 1: Create seed endpoint**

```typescript
import { NextRequest, NextResponse } from "next/server";
import { createProgram, createProgramSection, getProgramBySlug, initializePrograms, initializeProgramSections } from "@/lib/programs";
import { initializePrograms as initProgramsTable, initializeProgramSections as initSectionsTable } from "@/lib/db";
import { validateSession } from "@/lib/auth";
import { AUTH_CONFIG } from "@/lib/shared/constants";

export async function POST(request: NextRequest) {
  const sessionToken = request.cookies.get(AUTH_CONFIG.SESSION_COOKIE_NAME)?.value;
  if (!sessionToken) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const session = await validateSession(sessionToken);
  if (!session?.isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  try {
    // Ensure tables exist
    await initProgramsTable();
    await initSectionsTable();

    // Check if YN Academy already exists
    const existing = await getProgramBySlug("yn-academy");
    if (existing) {
      return NextResponse.json({ message: "YN Academy already exists", program: existing });
    }

    const program = await createProgram({
      slug: "yn-academy",
      title: "YN Academy",
      tagline: "Youth technology education bridging the digital divide",
      description: "YN Academy is Graphene Gangway's flagship education program, providing North Lawndale youth with real-world technology training, mentorship, and career pathways in web development, AI, and digital media.",
      icon: "GraduationCap",
      status: "active",
      display_order: 1,
      internal_route: "/yna",
    });

    // Add sections
    await createProgramSection({
      program_id: program.id,
      section_type: "stats",
      title: "Program Impact",
      content: {
        items: [
          { value: "100", label: "Students Trained", suffix: "+" },
          { value: "87", label: "Businesses Served", suffix: "+" },
          { value: "4", label: "Active Programs", suffix: "+" },
          { value: "5000", label: "Community Target", suffix: "+" },
        ],
      },
      display_order: 0,
    });

    await createProgramSection({
      program_id: program.id,
      section_type: "rich_text",
      title: "What You'll Learn",
      content: {
        html: `
          <ul>
            <li><strong>Web Development</strong> — HTML, CSS, JavaScript, React, and Next.js</li>
            <li><strong>Digital Media</strong> — Content creation, social media strategy, and brand building</li>
            <li><strong>AI & Automation</strong> — Introduction to AI tools, prompt engineering, and workflow automation</li>
            <li><strong>Business Skills</strong> — Entrepreneurship, client communication, and project management</li>
          </ul>
        `,
      },
      display_order: 1,
    });

    await createProgramSection({
      program_id: program.id,
      section_type: "timeline",
      title: "How It Works",
      content: {
        items: [
          { title: "Apply", description: "Fill out the application form and tell us about yourself", icon: "FileText" },
          { title: "Onboard", description: "Meet your cohort and get set up with tools and resources", icon: "Users" },
          { title: "Learn", description: "Hands-on training with real projects and mentorship", icon: "BookOpen" },
          { title: "Build", description: "Work on real client projects and build your portfolio", icon: "Hammer" },
          { title: "Launch", description: "Graduate with skills, a portfolio, and career connections", icon: "Rocket" },
        ],
      },
      display_order: 2,
    });

    await createProgramSection({
      program_id: program.id,
      section_type: "cta",
      title: null,
      content: {
        heading: "Ready to join YN Academy?",
        description: "Applications are open for the next cohort. Start your journey in technology today.",
        primaryLabel: "Apply Now",
        primaryHref: "/yna",
        secondaryLabel: "Learn More",
        secondaryHref: "/contact",
      },
      display_order: 3,
    });

    return NextResponse.json({ success: true, program }, { status: 201 });
  } catch (error) {
    console.error("Failed to seed YN Academy:", error);
    return NextResponse.json({ error: "Failed to seed program" }, { status: 500 });
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/api/programs/seed/route.ts
git commit -m "feat: add seed endpoint to create YN Academy as first program with sections"
```

---

### Task 15: Final Batch 2 Verification

- [ ] **Step 1: Full build check**

Run: `cd /home/codex450/CDX-DEV-PROJECTS/graphene-gangway && npx next build 2>&1 | tail -30`
Expected: Build succeeds.

- [ ] **Step 2: TypeScript check**

Run: `cd /home/codex450/CDX-DEV-PROJECTS/graphene-gangway && npx tsc --noEmit 2>&1 | tail -20`
Expected: No errors.

- [ ] **Step 3: Commit batch completion**

```bash
git add -A
git commit -m "chore: batch 2 complete — programs CMS with DB, API, admin UI, and public pages"
```

---

## End of Batch 2

**What was built:**
- Database tables: `programs`, `program_sections`
- Data access layer: full CRUD for programs and sections
- API routes: 8 endpoints for programs and sections management
- Admin UI: programs list, create/edit form, inline section editor with JSON content, reordering, visibility toggle
- Public pages: `/programs` hub with card grid, `/programs/[slug]` detail with CMS section rendering
- Section renderer supporting 10 section types: rich_text, testimonials, faq, timeline, gallery, stats, documents, cta, video, embed
- YN Academy seed data

**Next:** Batch 3 — Homepage Redesign (all 9 sections from the spec)
