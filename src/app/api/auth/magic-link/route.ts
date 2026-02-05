import { NextResponse } from "next/server";
import { createMagicLinkToken, getMagicLinkUrl } from "@/lib/auth";
import { sendMagicLinkEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const token = await createMagicLinkToken(email);
    const magicLinkUrl = getMagicLinkUrl(token);
    const result = await sendMagicLinkEmail(email, magicLinkUrl);

    if (!result.success) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      ...(result.devModeUrl ? { devModeUrl: result.devModeUrl } : {}),
    });
  } catch (error) {
    console.error("Magic link error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
