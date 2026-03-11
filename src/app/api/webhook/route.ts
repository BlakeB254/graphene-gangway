import { NextResponse } from "next/server";

// -------------------------------------------------------
// Stripe Webhook Signature Verification
//
// TODO: When Stripe is configured, verify the webhook signature:
//
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
//
// async function verifyStripeSignature(request: Request): Promise<Stripe.Event | null> {
//   const body = await request.text();
//   const signature = request.headers.get("stripe-signature");
//   if (!signature) return null;
//   try {
//     return stripe.webhooks.constructEvent(body, signature, endpointSecret);
//   } catch (err) {
//     console.error("Stripe webhook signature verification failed:", err);
//     return null;
//   }
// }
// -------------------------------------------------------

async function handleStripeWebhook(body: Record<string, unknown>) {
  const eventType = body.type as string;

  switch (eventType) {
    case "checkout.session.completed": {
      const session = body.data as Record<string, unknown>;
      console.log("Checkout session completed:", session);
      // TODO: Fulfill the order
      // - Update database with order details
      // - Send confirmation email via Resend
      // - Trigger n8n workflow for onboarding
      break;
    }

    case "invoice.paid": {
      const invoice = body.data as Record<string, unknown>;
      console.log("Invoice paid:", invoice);
      // TODO: Record payment
      // - Update subscription status in database
      // - Send receipt email
      break;
    }

    case "invoice.payment_failed": {
      const invoice = body.data as Record<string, unknown>;
      console.log("Invoice payment failed:", invoice);
      // TODO: Handle failed payment
      // - Notify customer via email
      // - Update subscription status
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = body.data as Record<string, unknown>;
      console.log("Subscription cancelled:", subscription);
      // TODO: Handle cancellation
      // - Update database
      // - Trigger offboarding workflow
      break;
    }

    case "customer.subscription.updated": {
      const subscription = body.data as Record<string, unknown>;
      console.log("Subscription updated:", subscription);
      // TODO: Handle plan changes
      // - Update database with new plan details
      break;
    }

    default:
      console.log(`Unhandled Stripe event type: ${eventType}`);
  }
}

async function handleN8nCallback(body: Record<string, unknown>) {
  const { event, payload } = body as {
    event?: string;
    payload?: Record<string, unknown>;
  };

  if (!event) {
    console.warn("n8n callback received without event type");
    return;
  }

  console.log(`n8n callback received — event: ${event}`, payload);

  switch (event) {
    case "onboarding.complete": {
      // TODO: Update client onboarding status in database
      console.log("Client onboarding complete:", payload);
      break;
    }

    case "content.published": {
      // TODO: Log content publication event
      console.log("Content published:", payload);
      break;
    }

    case "report.generated": {
      // TODO: Store or forward generated report
      console.log("Report generated:", payload);
      break;
    }

    default:
      console.log(`Unhandled n8n event: ${event}`);
  }
}

export async function POST(request: Request) {
  try {
    // Determine webhook source from headers
    const stripeSignature = request.headers.get("stripe-signature");
    const n8nHeader = request.headers.get("x-n8n-webhook");

    // -------------------------------------------------------
    // TODO: When Stripe is configured, replace this block with:
    //
    // if (stripeSignature) {
    //   const event = await verifyStripeSignature(request);
    //   if (!event) {
    //     return NextResponse.json(
    //       { error: "Invalid signature" },
    //       { status: 401 }
    //     );
    //   }
    //   await handleStripeWebhook(event as unknown as Record<string, unknown>);
    //   return NextResponse.json({ received: true });
    // }
    // -------------------------------------------------------

    const body = (await request.json()) as Record<string, unknown>;

    if (stripeSignature) {
      // Stripe webhook (signature verification placeholder)
      console.log(
        "Stripe webhook received (signature verification not yet enabled)"
      );
      await handleStripeWebhook(body);
      return NextResponse.json({ received: true });
    }

    if (n8nHeader) {
      // n8n callback
      await handleN8nCallback(body);
      return NextResponse.json({ received: true });
    }

    // Unknown webhook source
    console.warn("Webhook received from unknown source");
    return NextResponse.json(
      { error: "Unknown webhook source" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
