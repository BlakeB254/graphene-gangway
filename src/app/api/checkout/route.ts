import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json(
        { error: "Payments not configured yet. Please contact us directly." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { serviceId, tierName, email } = body;

    if (!serviceId || !tierName) {
      return NextResponse.json(
        { error: "Service and tier are required" },
        { status: 400 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${serviceId} — ${tierName}`,
              description: `Graphene Gangway service: ${serviceId}, tier: ${tierName}`,
            },
            unit_amount: 0, // Placeholder — real prices come from Stripe Products
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/pricing`,
      metadata: {
        serviceId,
        tierName,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout session error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
