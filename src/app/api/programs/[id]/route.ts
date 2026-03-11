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
    await deleteProgram(programId);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete program:", error);
    return NextResponse.json({ error: "Failed to delete program" }, { status: 500 });
  }
}
