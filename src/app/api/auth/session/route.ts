import { NextResponse } from "next/server";
import { getSession, hasAccess } from "@/lib/session";

export async function GET() {
  try {
    const session = await getSession();
    const access = await hasAccess();

    if (!session) {
      return NextResponse.json({
        authenticated: false,
        hasAccess: false,
        email: null,
        isAdmin: false,
      });
    }

    return NextResponse.json({
      authenticated: true,
      hasAccess: access,
      email: session.email,
      isAdmin: session.isAdmin,
    });
  } catch (error) {
    console.error("Session check error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
