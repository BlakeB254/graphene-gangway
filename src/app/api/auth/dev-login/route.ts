import { NextResponse } from "next/server";
import { setSessionCookie, grantAccess } from "@/lib/session";
import { isAdminEmail } from "@/lib/auth";

export async function POST(request: Request) {
  // Block in production
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { error: "Dev login is not available in production" },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Create session directly (no magic link verification)
    await setSessionCookie(email);
    await grantAccess();

    return NextResponse.json({
      success: true,
      email: email.toLowerCase(),
      isAdmin: isAdminEmail(email),
    });
  } catch (error) {
    console.error("Dev login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
