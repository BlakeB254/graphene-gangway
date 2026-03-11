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
      slug, title, tagline, description, hero_image, icon, accent_color, status, display_order, external_link, internal_route, metadata,
    });

    return NextResponse.json({ program }, { status: 201 });
  } catch (error) {
    console.error("Failed to create program:", error);
    return NextResponse.json({ error: "Failed to create program" }, { status: 500 });
  }
}
