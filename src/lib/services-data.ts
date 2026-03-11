import type { Service, LaunchPackage } from "./shared/types";

export const SERVICES: Service[] = [
  {
    id: "brand-kit",
    slug: "brand-kit",
    name: "Brand Kit",
    tagline: "Look professional from day one",
    shortDescription:
      "Logo, colors, typography, social templates, and brand guidelines.",
    icon: "Palette",
    tiers: [
      {
        name: "Brand Kit",
        price: 99,
        priceLabel: "$99",
        period: "one-time",
        features: [
          "Primary logo + variations",
          "Icon set (5 icons)",
          "Color palette (hex/RGB/CMYK)",
          "Typography selection",
          "Social media backgrounds (all platforms)",
          "Brand guidelines document",
          "File package (PNG/SVG/PDF/source)",
        ],
      },
    ],
    turnaround: "5-10 business days",
    crossSell: [
      {
        serviceId: "web-development",
        message: "Have a brand? Now give it a home →",
      },
      {
        serviceId: "biz-starter-kit",
        message: "Starting from scratch? Get the plan too →",
      },
    ],
  },
  {
    id: "biz-starter-kit",
    slug: "biz-starter-kit",
    name: "Biz Starter Kit",
    tagline: "Turn your business idea into a bankable plan",
    shortDescription:
      "Business plan, market research, competitive analysis, and pitch deck.",
    icon: "Briefcase",
    tiers: [
      {
        name: "Biz Starter Kit",
        price: 199,
        priceLabel: "$199",
        period: "one-time",
        features: [
          "Professional business plan (bank-ready)",
          "Target market research",
          "Competitive analysis",
          "Business model canvas",
          "Financial projections",
          "Pitch deck framework",
          "Brand Kit included free",
        ],
        includedFree: ["Brand Kit"],
      },
    ],
    turnaround: "2-3 weeks",
    crossSell: [
      {
        serviceId: "web-development",
        message: "Plan done? Now build your website →",
      },
    ],
  },
  {
    id: "web-development",
    slug: "web-development",
    name: "Web Development",
    tagline: "Websites that work as hard as you do",
    shortDescription:
      "Custom portfolio or e-commerce websites with 6-month support.",
    icon: "Monitor",
    tiers: [
      {
        name: "Portfolio",
        price: 1500,
        priceLabel: "$1,500",
        period: "one-time",
        features: [
          "Custom design",
          "Responsive (all devices)",
          "Content management admin",
          "Brand Kit included free",
          "6-month support (bug fixes + minor updates)",
          "Full independence after support",
        ],
        includedFree: ["Brand Kit"],
      },
      {
        name: "E-Commerce",
        price: 2500,
        priceLabel: "$2,500",
        period: "one-time",
        badge: "popular",
        features: [
          "Custom design",
          "Responsive (all devices)",
          "Full e-commerce admin",
          "Brand Kit included free",
          "Biz Starter Kit included free",
          "Product management",
          "Shopping cart + checkout",
          "Payment processing (Stripe/PayPal)",
          "Coupon/deal generator",
          "Order tracking",
          "6-month support + marketplace optimization",
          "Full independence after support",
        ],
        includedFree: ["Brand Kit", "Biz Starter Kit"],
      },
    ],
    crossSell: [
      {
        serviceId: "brand-automations",
        message: "Site is live. Now fill it with content →",
      },
      {
        serviceId: "ai-knowledge-base",
        message: "Want AI that knows your business? →",
      },
    ],
  },
  {
    id: "brand-automations",
    slug: "brand-automations",
    name: "Brand Automations",
    tagline:
      "Your brand, everywhere, every day — without you lifting a finger",
    shortDescription:
      "AI-powered content creation, scheduling, and distribution across all channels.",
    icon: "Zap",
    tiers: [
      {
        name: "Starter",
        price: 1200,
        priceLabel: "$1,200",
        period: "monthly",
        features: [
          "3 channels",
          "9 posts/day",
          "Monthly content calendar",
          "Basic reporting",
          "Brand Kit + Biz Starter included free",
        ],
        includedFree: ["Brand Kit", "Biz Starter Kit"],
      },
      {
        name: "Standard",
        price: 2000,
        priceLabel: "$2,000",
        period: "monthly",
        badge: "popular",
        features: [
          "5 channels",
          "15 posts/day",
          "Blog/newsletter content",
          "Monthly analytics report",
          "Brand Kit + Biz Starter included free",
        ],
        includedFree: ["Brand Kit", "Biz Starter Kit"],
      },
      {
        name: "Growth",
        price: 3500,
        priceLabel: "$3,500",
        period: "monthly",
        features: [
          "7 channels",
          "20 posts/day",
          "Video production",
          "A/B testing",
          "Ad management",
          "Brand Kit + Biz Starter included free",
        ],
        includedFree: ["Brand Kit", "Biz Starter Kit"],
      },
      {
        name: "Enterprise",
        price: 5000,
        priceLabel: "$5,000",
        period: "monthly",
        badge: "best-value",
        features: [
          "7+ channels, 2 brands",
          "30 posts/day",
          "Dedicated strategist",
          "Custom dashboards",
          "Influencer outreach",
          "Brand Kit + Biz Starter included free",
        ],
        includedFree: ["Brand Kit", "Biz Starter Kit"],
      },
    ],
    crossSell: [
      {
        serviceId: "web-development",
        message: "Need a better site to send traffic to? →",
      },
      {
        serviceId: "ai-knowledge-base",
        message: "Power your content with AI →",
      },
    ],
  },
  {
    id: "ai-knowledge-base",
    slug: "ai-knowledge-base",
    name: "Personal AI Knowledge Base",
    tagline: "A personal AI that actually knows your business",
    shortDescription:
      "Custom AI trained on your data, deployed to your device.",
    icon: "Brain",
    tiers: [
      {
        name: "Knowledge Base",
        price: 1500,
        priceLabel: "$1,500",
        period: "one-time",
        features: [
          "Business knowledge graph",
          "Custom Qwen model",
          "Self-expansion portal",
          "Manual updates",
          "Device deployment (phone + laptop)",
          "Privacy-safe training",
        ],
      },
      {
        name: "Connected",
        price: 2500,
        priceLabel: "$2,500 + $200/mo",
        period: "one-time",
        badge: "popular",
        features: [
          "Everything in Knowledge Base",
          "3rd-party integrations (up to 5)",
          "Auto-sync from connected platforms",
          "Scheduled retraining",
          "Data dashboard",
        ],
      },
      {
        name: "Personal Agent",
        price: 5000,
        priceLabel: "$5,000 + $500/mo",
        period: "one-time",
        badge: "best-value",
        features: [
          "Everything in Connected",
          "Custom agent harness",
          "Conversation-intent updates",
          "Action capabilities (email, tasks, reports)",
          "Multi-channel access (chat, voice, SMS)",
          "Decision support + proactive insights",
          "Workflow automation",
          "Up to 10 integrations",
          "Priority support",
        ],
      },
    ],
    crossSell: [
      {
        serviceId: "brand-automations",
        message: "Now let AI drive your content →",
      },
    ],
  },
];

export const LAUNCH_PACKAGES: LaunchPackage[] = [
  {
    id: "portfolio-launch",
    name: "Portfolio Launch",
    upfrontPrice: 13500,
    monthlyOption: { down: 3000, monthly: 2000, months: 6 },
    alaCarteTotal: 15000,
    savings: 1500,
    savingsPercent: "10%",
    services: [
      "Portfolio Website",
      "Brand Automations (Standard, 6mo)",
      "AI Knowledge Base (Tier 1)",
      "Brand Kit",
      "Biz Starter Kit",
      "6-Month Site Support",
    ],
    guarantee:
      "If we don't hit your target metrics in 6 months, we continue your brand automations for 6 more months — free. That's up to $12,000 in additional service.",
  },
  {
    id: "ecommerce-launch",
    name: "E-Commerce Launch",
    upfrontPrice: 14000,
    monthlyOption: { down: 4000, monthly: 2000, months: 6 },
    alaCarteTotal: 16000,
    savings: 2000,
    savingsPercent: "12.5%",
    services: [
      "E-Commerce Website",
      "Brand Automations (Standard, 6mo)",
      "AI Knowledge Base (Tier 1)",
      "Brand Kit",
      "Biz Starter Kit",
      "6-Month Site Support + Marketplace Optimization",
    ],
    guarantee:
      "If we don't hit your target metrics in 6 months, we continue your brand automations for 6 more months — free. That's up to $12,000 in additional service.",
    badge: "Most Popular",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getCrossSellServices(
  currentServiceId: string
): { service: Service; message: string }[] {
  const current = SERVICES.find((s) => s.id === currentServiceId);
  if (!current) return [];
  return current.crossSell
    .map((cs) => {
      const service = SERVICES.find((s) => s.id === cs.serviceId);
      return service ? { service, message: cs.message } : null;
    })
    .filter(Boolean) as { service: Service; message: string }[];
}
