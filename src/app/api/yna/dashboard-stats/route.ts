import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { getYnaDashboardStats } from "@/lib/yna/db";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const stats = await getYnaDashboardStats(session.email);

    return NextResponse.json({ success: true, stats });
  } catch (error) {
    console.error("YNA dashboard stats error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
