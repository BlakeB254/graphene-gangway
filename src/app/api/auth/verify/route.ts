import { NextResponse } from "next/server";
import { verifyMagicLinkToken, deleteAllUserSessions, isAdminEmail } from "@/lib/auth";
import { setSessionCookie, grantAccess } from "@/lib/session";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token || typeof token !== "string") {
      return NextResponse.json(
        { error: "Token is required" },
        { status: 400 }
      );
    }

    const authToken = await verifyMagicLinkToken(token);

    if (!authToken) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      );
    }

    // Delete any existing sessions for this user
    await deleteAllUserSessions(authToken.email);

    // Create a new session
    await setSessionCookie(authToken.email);

    // Grant access
    await grantAccess();

    return NextResponse.json({
      success: true,
      email: authToken.email,
      isAdmin: isAdminEmail(authToken.email),
    });
  } catch (error) {
    console.error("Verify error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
