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
    await deleteProgramSection(sId);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete section:", error);
    return NextResponse.json({ error: "Failed to delete section" }, { status: 500 });
  }
}
