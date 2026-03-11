import { NextResponse } from "next/server";
import { getDb, initializeContactSubmissions } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address, city, state, service, tier, budget, message, source } = body;

    if (!name || typeof name !== "string") {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    await initializeContactSubmissions();

    // Save to DB with enriched intent
    const intent = [service, tier, budget].filter(Boolean).join(" | ") || "general inquiry";
    const enrichedMessage = [
      message,
      phone ? `Phone: ${phone}` : null,
      address ? `Address: ${address}` : null,
      city && state ? `Location: ${city}, ${state}` : null,
      source ? `Source: ${source}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    await getDb()`
      INSERT INTO contact_submissions (name, email, intent, message)
      VALUES (${name}, ${email.toLowerCase()}, ${intent}, ${enrichedMessage})
    `;

    // Fire n8n webhook if configured
    const n8nWebhookUrl = process.env.N8N_INQUIRY_WEBHOOK_URL;
    if (n8nWebhookUrl) {
      fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: email.toLowerCase(),
          phone,
          address,
          city,
          state,
          service,
          tier,
          budget,
          message,
          source,
          timestamp: new Date().toISOString(),
        }),
      }).catch((err) => console.error("n8n webhook error:", err));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
