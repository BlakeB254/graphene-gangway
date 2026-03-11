import { NextResponse } from "next/server";

interface CheckoutBody {
  service: string;
  tier?: string;
  paymentPlan: "full" | "split" | "monthly";
  customerName: string;
  customerEmail: string;
}

const VALID_SERVICES = [
  "brand-kit",
  "biz-starter-kit",
  "web-development",
  "brand-automations",
  "ai-knowledge-base",
  "portfolio-launch",
  "ecommerce-launch",
];

const VALID_PAYMENT_PLANS = ["full", "split", "monthly"];

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CheckoutBody;
    const { service, tier, paymentPlan, customerName, customerEmail } = body;

    // Validate required fields
    if (!service || !paymentPlan || !customerName || !customerEmail) {
      return NextResponse.json(
        {
          error:
            "Required fields: service, paymentPlan, customerName, customerEmail",
        },
        { status: 400 }
      );
    }

    // Validate service
    if (!VALID_SERVICES.includes(service)) {
      return NextResponse.json(
        { error: "Invalid service" },
        { status: 400 }
      );
    }

    // Validate payment plan
    if (!VALID_PAYMENT_PLANS.includes(paymentPlan)) {
      return NextResponse.json(
        { error: "Invalid payment plan. Must be: full, split, or monthly" },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmail)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate customer name
    if (typeof customerName !== "string" || customerName.trim().length < 2) {
      return NextResponse.json(
        { error: "Customer name must be at least 2 characters" },
        { status: 400 }
      );
    }

    // -------------------------------------------------------
    // TODO: Stripe Integration
    //
    // 1. Look up the price ID for the given service/tier/paymentPlan
    //    const priceId = getPriceId(service, tier, paymentPlan);
    //
    // 2. Create a Stripe Checkout Session
    //    const session = await stripe.checkout.sessions.create({
    //      mode: paymentPlan === "monthly" ? "subscription" : "payment",
    //      customer_email: customerEmail,
    //      line_items: [{ price: priceId, quantity: 1 }],
    //      metadata: {
    //        service,
    //        tier: tier || "",
    //        paymentPlan,
    //        customerName,
    //      },
    //      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    //      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
    //    });
    //
    // 3. Return the session URL
    //    return NextResponse.json({ url: session.url });
    // -------------------------------------------------------

    console.log("Checkout request received:", {
      service,
      tier,
      paymentPlan,
      customerName,
      customerEmail,
    });

    return NextResponse.json({
      message: "Stripe checkout not yet configured",
      service,
      tier: tier || null,
      paymentPlan,
    });
  } catch (error) {
    console.error("Checkout API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
