// Complete service catalog data for Graphene Gangway

export interface ServiceTier {
  name: string;
  price: number;
  priceLabel: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  includedFree?: string[];
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string; // lucide icon name
  startingPrice: number;
  priceLabel: string;
  period?: string;
  turnaround?: string;
  tiers?: ServiceTier[];
  features: string[];
  includedFree?: string[];
  crossSells: { slug: string; message: string }[];
}

export interface LaunchPackage {
  id: string;
  name: string;
  shortName: string;
  description: string;
  upfrontPrice: number;
  monthlyDown: number;
  monthlyPayment: number;
  monthlyPayments: number;
  alaCarteTotal: number;
  savings: number;
  savingsPercent: string;
  includes: string[];
  popular?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "brand-kit",
    slug: "brand-kit",
    name: "Brand Kit",
    shortName: "Brand Kit",
    tagline: "Look professional from day one",
    description:
      "Primary logo + variations, icon set, color palette, typography, social media backgrounds, brand guidelines, and full file package.",
    icon: "Palette",
    startingPrice: 99,
    priceLabel: "$99",
    turnaround: "5-10 business days",
    features: [
      "Primary logo + variations",
      "Icon set (5 icons)",
      "Color palette (HEX/RGB/CMYK)",
      "Typography selection",
      "Social media backgrounds (all platforms)",
      "Brand guidelines document",
      "Full file package (PNG/SVG/PDF/source)",
    ],
    includedFree: [
      "Included FREE with any website, automations, or AI service",
    ],
    crossSells: [
      { slug: "web-development", message: "Have a brand? Now give it a home →" },
      {
        slug: "biz-starter-kit",
        message: "Starting from scratch? Get the plan too →",
      },
    ],
  },
  {
    id: "biz-starter-kit",
    slug: "biz-starter-kit",
    name: "Biz Starter Kit",
    shortName: "Biz Starter",
    tagline: "Turn your business idea into a bankable plan",
    description:
      "Professional business plan (bank-ready), target market research, competitive analysis, business model canvas, financial projections, pitch deck framework. Brand Kit included free.",
    icon: "Briefcase",
    startingPrice: 199,
    priceLabel: "$199",
    turnaround: "2-3 weeks",
    features: [
      "Professional business plan (bank-ready)",
      "Target market research",
      "Competitive analysis",
      "Business model canvas",
      "Financial projections",
      "Pitch deck framework",
      "Brand Kit included free",
    ],
    includedFree: ["Brand Kit included free"],
    crossSells: [
      {
        slug: "web-development",
        message: "Plan done. Time to build →",
      },
    ],
  },
  {
    id: "web-development",
    slug: "web-development",
    name: "Web Development",
    shortName: "Web Dev",
    tagline: "Websites that work as hard as you do",
    description:
      "Custom-designed, responsive websites with admin panel, 6-month support, and full independence after support period.",
    icon: "Globe",
    startingPrice: 1500,
    priceLabel: "From $1,500",
    tiers: [
      {
        name: "Portfolio",
        price: 1500,
        priceLabel: "$1,500",
        description: "Custom portfolio website with content management",
        features: [
          "Custom design",
          "Fully responsive",
          "Content management admin panel",
          "Brand Kit included free",
          "6-month support (bug fixes + minor updates)",
          "Full independence — you own everything",
        ],
        includedFree: ["Brand Kit"],
      },
      {
        name: "E-Commerce",
        price: 2500,
        priceLabel: "$2,500",
        description: "Full e-commerce with admin, cart, coupons, and payments",
        features: [
          "Custom design",
          "Fully responsive",
          "Full e-commerce admin panel",
          "Brand Kit included free",
          "Biz Starter Kit included free",
          "Product management",
          "Shopping cart",
          "Payment processing (Stripe/PayPal)",
          "Coupon/deal generator",
          "Order tracking",
          "6-month support (bug fixes + marketplace optimization)",
          "Full independence — you own everything",
        ],
        includedFree: ["Brand Kit", "Biz Starter Kit"],
        popular: true,
      },
    ],
    features: [
      "Custom design",
      "Fully responsive",
      "Admin panel",
      "6-month support",
      "Full independence",
    ],
    crossSells: [
      {
        slug: "brand-automations",
        message: "Site is live. Now fill it with content →",
      },
      {
        slug: "ai-knowledge-base",
        message: "Want AI that knows your business? →",
      },
    ],
  },
  {
    id: "brand-automations",
    slug: "brand-automations",
    name: "Brand Automations",
    shortName: "Automations",
    tagline: "Your brand, everywhere, every day — without you lifting a finger",
    description:
      "Automated content creation, scheduling, and distribution across all your social media channels. Your digital marketing team on autopilot.",
    icon: "Zap",
    startingPrice: 1200,
    priceLabel: "From $1,200/mo",
    period: "/mo",
    tiers: [
      {
        name: "Starter",
        price: 1200,
        priceLabel: "$1,200",
        period: "/mo",
        description: "3 channels, 9 posts/day",
        features: [
          "3 social media channels",
          "9 posts per day",
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
        period: "/mo",
        description: "5 channels, 15 posts/day",
        features: [
          "5 social media channels",
          "15 posts per day",
          "Monthly content calendar",
          "Blog & newsletter content",
          "Monthly analytics report",
          "Brand Kit + Biz Starter included free",
        ],
        popular: true,
        includedFree: ["Brand Kit", "Biz Starter Kit"],
      },
      {
        name: "Growth",
        price: 3500,
        priceLabel: "$3,500",
        period: "/mo",
        description: "7 channels, 20 posts/day",
        features: [
          "7 social media channels",
          "20 posts per day",
          "Everything in Standard",
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
        period: "/mo",
        description: "7+ channels, 2 brands, 30 posts/day",
        features: [
          "7+ social media channels",
          "Support for 2 brands",
          "30 posts per day",
          "Everything in Growth",
          "Dedicated strategist",
          "Custom dashboards",
          "Influencer outreach",
          "Brand Kit + Biz Starter included free",
        ],
        includedFree: ["Brand Kit", "Biz Starter Kit"],
      },
    ],
    features: [
      "Content creation & scheduling",
      "Multi-platform distribution",
      "Analytics & reporting",
      "Monthly content calendar",
    ],
    crossSells: [
      {
        slug: "web-development",
        message: "Need a better site to send traffic to? →",
      },
      {
        slug: "ai-knowledge-base",
        message: "Power your content with AI →",
      },
    ],
  },
  {
    id: "ai-knowledge-base",
    slug: "ai-knowledge-base",
    name: "Personal AI Knowledge Base",
    shortName: "AI Knowledge",
    tagline: "A personal AI that actually knows your business",
    description:
      "Custom AI trained on your business data, deployed to your device. From simple knowledge bases to full autonomous agents.",
    icon: "Brain",
    startingPrice: 1500,
    priceLabel: "From $1,500",
    tiers: [
      {
        name: "Knowledge Base",
        price: 1500,
        priceLabel: "$1,500",
        description: "One-time setup, runs on your device",
        features: [
          "Business knowledge graph",
          "Custom Qwen model fine-tuned on your data",
          "Self-expansion portal (add info anytime)",
          "Device deployment (smartphone/laptop)",
          "Privacy-safe (sensitive data stripped)",
          "No subscription — yours to keep",
        ],
      },
      {
        name: "Connected KB",
        price: 2500,
        priceLabel: "$2,500 + $200/mo",
        period: " + $200/mo",
        description: "Auto-syncs with your business tools",
        features: [
          "Everything in Knowledge Base",
          "3rd-party integrations (Stripe, QuickBooks, Shopify, etc.)",
          "Auto-sync from connected platforms",
          "Up to 5 integrations included",
          "Scheduled retraining (weekly/bi-weekly/monthly)",
          "Data dashboard",
        ],
        popular: true,
      },
      {
        name: "Business Agent",
        price: 5000,
        priceLabel: "$5,000 + $500/mo",
        period: " + $500/mo",
        description: "Full autonomous business AI agent",
        features: [
          "Everything in Connected KB",
          "Custom agent harness for your workflows",
          "Conversation-intent updates (real-time learning)",
          "Action capabilities (emails, tasks, reports)",
          "Multi-channel access (chat, voice, SMS, website)",
          "Decision support & proactive insights",
          "Workflow automation with triggers",
          "Up to 10 integrations included",
          "Priority support",
        ],
      },
    ],
    features: [
      "Custom AI model",
      "Business knowledge graph",
      "Device deployment",
      "Privacy-safe training",
    ],
    crossSells: [
      {
        slug: "brand-automations",
        message: "Now let AI drive your content →",
      },
    ],
  },
];

export const LAUNCH_PACKAGES: LaunchPackage[] = [
  {
    id: "portfolio-launch",
    name: "Portfolio Launch Package",
    shortName: "Portfolio Launch",
    description:
      "Custom portfolio site + 6 months Standard automations + AI Knowledge Base + Brand Kit + Biz Starter Kit + Performance Guarantee",
    upfrontPrice: 13500,
    monthlyDown: 3000,
    monthlyPayment: 2000,
    monthlyPayments: 6,
    alaCarteTotal: 15000,
    savings: 1500,
    savingsPercent: "10%",
    includes: [
      "Custom portfolio website",
      "6 months Brand Automations (Standard tier — 5 channels, 15 posts/day)",
      "Personal AI Knowledge Base (Tier 1)",
      "Brand Kit (included free)",
      "Biz Starter Kit (included free)",
      "6-month site support (feature buildout + bug fixes)",
      "Performance Guarantee",
    ],
  },
  {
    id: "ecommerce-launch",
    name: "E-Commerce Launch Package",
    shortName: "E-Commerce Launch",
    description:
      "Full e-commerce site + 6 months Standard automations + AI Knowledge Base + Brand Kit + Biz Starter Kit + Performance Guarantee",
    upfrontPrice: 14000,
    monthlyDown: 4000,
    monthlyPayment: 2000,
    monthlyPayments: 6,
    alaCarteTotal: 16000,
    savings: 2000,
    savingsPercent: "12.5%",
    includes: [
      "Full e-commerce website with admin/cart/coupons",
      "6 months Brand Automations (Standard tier — 5 channels, 15 posts/day)",
      "Personal AI Knowledge Base (Tier 1)",
      "Brand Kit (included free)",
      "Biz Starter Kit (included free)",
      "6-month site support (marketplace optimization + bug fixes)",
      "Performance Guarantee",
    ],
    popular: true,
  },
];

export const PERFORMANCE_GUARANTEE = {
  headline: "The Performance Guarantee",
  statement:
    "If we don't hit your target metrics in 6 months, we continue your brand automations for 6 more months — free. That's up to $12,000 in additional service.",
  steps: [
    "Agree on measurable targets at kickoff",
    "Measure results at 6 months",
    "Guarantee kicks in if targets are missed",
  ],
  covers: [
    "Follower growth",
    "Website traffic",
    "Lead volume",
    "Engagement rates",
    "Revenue attribution",
  ],
  value: "$12,000",
};

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
