import { NextResponse } from "next/server";

interface AssessmentBody {
  stage: string;
  needs: string;
  budget: string;
  timeline: string;
}

interface Recommendation {
  serviceId: string;
  serviceName: string;
  price: string;
  reasoning: string;
  link: string;
}

const VALID_STAGES = [
  "Just an idea",
  "Early stage (0-1 year)",
  "Established (1-5 years)",
  "Scaling (5+ years)",
];

const VALID_NEEDS = [
  "Brand identity",
  "Business plan",
  "Website",
  "Content marketing",
  "AI tools",
  "Everything — the full package",
];

const VALID_BUDGETS = [
  "Under $500",
  "$500 - $2,000",
  "$2,000 - $5,000",
  "$5,000 - $15,000",
  "$15,000+",
];

const VALID_TIMELINES = ["ASAP", "1-3 months", "3-6 months", "Just exploring"];

function getRecommendation(body: AssessmentBody): Recommendation {
  const { stage, needs, budget } = body;

  // Just an idea + Under $500 -> Brand Kit
  if (stage === "Just an idea" && budget === "Under $500") {
    return {
      serviceId: "brand-kit",
      serviceName: "Brand Kit",
      price: "$99",
      reasoning:
        "You're at the idea stage with a lean budget. A professional Brand Kit gives you a polished identity to start building momentum.",
      link: "/services/brand-kit",
    };
  }

  // Just an idea + $500-$2K -> Biz Starter Kit
  if (stage === "Just an idea" && budget === "$500 - $2,000") {
    return {
      serviceId: "biz-starter-kit",
      serviceName: "Biz Starter Kit",
      price: "$199",
      reasoning:
        "The Biz Starter Kit turns your idea into a bank-ready business plan with market research, financials, and a pitch deck — plus a free Brand Kit.",
      link: "/services/biz-starter-kit",
    };
  }

  // Early/Established + Website + $500-$2K -> Portfolio Website
  if (
    (stage === "Early stage (0-1 year)" || stage === "Established (1-5 years)") &&
    needs === "Website" &&
    budget === "$500 - $2,000"
  ) {
    return {
      serviceId: "web-development",
      serviceName: "Portfolio Website",
      price: "$1,500",
      reasoning:
        "A custom Portfolio Website with admin panel and 6-month support will let you showcase your work and attract clients.",
      link: "/services/web-development",
    };
  }

  // Any + Website + $2K-$5K -> E-Commerce Website
  if (needs === "Website" && budget === "$2,000 - $5,000") {
    return {
      serviceId: "web-development",
      serviceName: "E-Commerce Website",
      price: "$2,500",
      reasoning:
        "A full e-commerce website with product management, shopping cart, payment processing, and an admin panel.",
      link: "/services/web-development",
    };
  }

  // Any + Content marketing -> Brand Automations Standard
  if (needs === "Content marketing") {
    return {
      serviceId: "brand-automations",
      serviceName: "Brand Automations Standard",
      price: "$2,000/mo",
      reasoning:
        "Brand Automations puts your content marketing on autopilot — 15 posts/day across 5 channels with analytics.",
      link: "/services/brand-automations",
    };
  }

  // Any + AI tools -> AI Knowledge Base
  if (needs === "AI tools") {
    return {
      serviceId: "ai-knowledge-base",
      serviceName: "Personal AI Knowledge Base",
      price: "$1,500+",
      reasoning:
        "A Personal AI Knowledge Base gives you a custom AI trained on your business data, deployed to your device.",
      link: "/services/ai-knowledge-base",
    };
  }

  // Any + Everything + $5K-$15K -> Portfolio Launch Package
  if (needs === "Everything — the full package" && budget === "$5,000 - $15,000") {
    return {
      serviceId: "portfolio-launch",
      serviceName: "Portfolio Launch Package",
      price: "$13,500",
      reasoning:
        "The Portfolio Launch Package includes a custom website, 6 months of content automations, AI Knowledge Base, and our Performance Guarantee.",
      link: "/pricing",
    };
  }

  // Any + Everything + $15K+ -> E-Commerce Launch Package
  if (needs === "Everything — the full package" && budget === "$15,000+") {
    return {
      serviceId: "ecommerce-launch",
      serviceName: "E-Commerce Launch Package",
      price: "$14,000",
      reasoning:
        "The E-Commerce Launch Package is the ultimate business-in-a-box — full e-commerce site, 6 months of automated content, AI Knowledge Base, and Performance Guarantee.",
      link: "/pricing",
    };
  }

  // Default: budget-based
  if (budget === "Under $500") {
    return {
      serviceId: "brand-kit",
      serviceName: "Brand Kit",
      price: "$99",
      reasoning:
        "Based on your budget, a Brand Kit is the smartest first step — professional identity that sets you apart.",
      link: "/services/brand-kit",
    };
  }

  if (budget === "$500 - $2,000") {
    return {
      serviceId: "biz-starter-kit",
      serviceName: "Biz Starter Kit",
      price: "$199",
      reasoning:
        "The Biz Starter Kit gives you a solid foundation — business plan, market research, financials, and a free Brand Kit.",
      link: "/services/biz-starter-kit",
    };
  }

  if (budget === "$2,000 - $5,000") {
    return {
      serviceId: "web-development",
      serviceName: "E-Commerce Website",
      price: "$2,500",
      reasoning:
        "Your budget opens the door to a custom e-commerce website with full product management and payments.",
      link: "/services/web-development",
    };
  }

  // $5K+ default
  return {
    serviceId: "portfolio-launch",
    serviceName: "Portfolio Launch Package",
    price: "$13,500",
    reasoning:
      "The Portfolio Launch Package gives you maximum value — website, automations, AI, and Performance Guarantee.",
    link: "/pricing",
  };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AssessmentBody;
    const { stage, needs, budget, timeline } = body;

    // Validate required fields
    if (!stage || !needs || !budget || !timeline) {
      return NextResponse.json(
        { error: "All fields are required: stage, needs, budget, timeline" },
        { status: 400 }
      );
    }

    // Validate field values
    if (!VALID_STAGES.includes(stage)) {
      return NextResponse.json(
        { error: "Invalid stage value" },
        { status: 400 }
      );
    }
    if (!VALID_NEEDS.includes(needs)) {
      return NextResponse.json(
        { error: "Invalid needs value" },
        { status: 400 }
      );
    }
    if (!VALID_BUDGETS.includes(budget)) {
      return NextResponse.json(
        { error: "Invalid budget value" },
        { status: 400 }
      );
    }
    if (!VALID_TIMELINES.includes(timeline)) {
      return NextResponse.json(
        { error: "Invalid timeline value" },
        { status: 400 }
      );
    }

    const recommendation = getRecommendation(body);

    return NextResponse.json({ recommendation });
  } catch (error) {
    console.error("Assessment API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
