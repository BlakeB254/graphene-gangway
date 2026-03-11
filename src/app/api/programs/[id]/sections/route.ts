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
      program_id: programId, section_type, title, content, display_order, is_visible,
    });

    return NextResponse.json({ section }, { status: 201 });
  } catch (error) {
    console.error("Failed to create section:", error);
    return NextResponse.json({ error: "Failed to create section" }, { status: 500 });
  }
}
