import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { toggleYnaSavedOpportunity, getYnaSavedOpportunities } from "@/lib/yna/db";

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { opportunityId, matchScore } = body;

    if (!opportunityId) {
      return NextResponse.json(
        { error: "opportunityId is required" },
        { status: 400 }
      );
    }

    const result = await toggleYnaSavedOpportunity(
      session.email,
      opportunityId,
      matchScore
    );

    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("YNA save toggle error:", error);
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

    const saved = await getYnaSavedOpportunities(session.email);

    return NextResponse.json({ saved });
  } catch (error) {
    console.error("YNA saved fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
