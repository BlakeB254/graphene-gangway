import { NextResponse } from "next/server";
import { getDb, initializeContactSubmissions } from "@/lib/db";

interface ContactBody {
  name: string;
  email: string;
  intent?: string;
  message?: string;
  // Extended fields
  formType?: "contact" | "intake" | "newsletter";
  services?: string[];
  utm?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
  };
  pageUrl?: string;
}

async function relayToN8n(body: ContactBody) {
  const webhookBaseUrl = process.env.N8N_WEBHOOK_BASE_URL;
  if (!webhookBaseUrl) return;

  const endpoint = `${webhookBaseUrl}/contact`;

  try {
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        submittedAt: new Date().toISOString(),
      }),
    });
  } catch (error) {
    // Non-blocking — log but don't fail the request
    console.error("Failed to relay to n8n:", error);
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const { name, email, intent, message, formType, services, utm, pageUrl } =
      body;

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

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

    // Validate formType if provided
    if (formType && !["contact", "intake", "newsletter"].includes(formType)) {
      return NextResponse.json(
        { error: "Invalid formType. Must be: contact, intake, or newsletter" },
        { status: 400 }
      );
    }

    // Validate services if provided
    if (services && !Array.isArray(services)) {
      return NextResponse.json(
        { error: "services must be an array" },
        { status: 400 }
      );
    }

    await initializeContactSubmissions();

    await getDb()`
      INSERT INTO contact_submissions (name, email, intent, message)
      VALUES (${name}, ${email.toLowerCase()}, ${intent || null}, ${message || null})
    `;

    // Relay to n8n if configured (non-blocking)
    relayToN8n({
      name,
      email: email.toLowerCase(),
      intent,
      message,
      formType: formType || "contact",
      services,
      utm,
      pageUrl,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
