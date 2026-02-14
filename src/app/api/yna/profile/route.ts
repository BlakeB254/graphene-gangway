import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { upsertYnaProfile } from "@/lib/yna/db";

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    const profile = await upsertYnaProfile(session.email, body);

    return NextResponse.json({ success: true, profile });
  } catch (error) {
    console.error("YNA profile update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { getYnaProfile } = await import("@/lib/yna/db");
    const profile = await getYnaProfile(session.email);

    return NextResponse.json({ profile });
  } catch (error) {
    console.error("YNA profile fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
