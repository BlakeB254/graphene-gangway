export const SITE_CONFIG = {
  name: "Graphene Gangway",
  tagline: "Build your business. We'll build everything else.",
  description:
    "Graphene Gangway is a full-service digital agency in North Lawndale, Chicago — offering brand kits, websites, AI-powered automations, and guaranteed launch packages.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://graphenegangway.com",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@graphenegangway.com",
  location: "North Lawndale, Chicago",
  phone: "",
} as const;

import type { NavLink } from "./shared/types";

export const NAV_LINKS: NavLink[] = [
  {
    href: "/services",
    label: "Services",
    children: [
      {
        href: "/services/brand-kit",
        label: "Brand Kit",
        description: "Logo, colors, typography — $99",
      },
      {
        href: "/services/biz-starter-kit",
        label: "Biz Starter Kit",
        description: "Business plan, research, projections — $199",
      },
      {
        href: "/services/web-development",
        label: "Web Development",
        description: "Portfolio & e-commerce websites",
      },
      {
        href: "/services/brand-automations",
        label: "Brand Automations",
        description: "AI content across all channels",
      },
      {
        href: "/services/ai-knowledge-base",
        label: "AI Knowledge Base",
        description: "Personal AI trained on your business",
      },
    ],
  },
  {
    href: "/programs",
    label: "Programs",
    children: [
      {
        href: "/programs/yn-academy",
        label: "YN Academy",
        description: "Youth technology education program",
      },
    ],
  },
  { href: "/packages/launch", label: "Packages" },
  { href: "/community", label: "Our Community" },
  { href: "/about", label: "About" },
];

export const SOCIAL_LINKS = {
  instagram: "#",
  twitter: "#",
  facebook: "#",
  youtube: "#",
} as const;

export const IMPACT_STATS = [
  { value: 100, suffix: "+", label: "Students Trained" },
  { value: 87, suffix: "+", label: "Businesses Served" },
  { value: 4, suffix: "+", label: "Active Programs" },
  { value: 5000, suffix: "+", label: "Community Target" },
] as const;

export const SEO_DEFAULTS = {
  title: "Graphene Gangway",
  titleTemplate: "%s | Graphene Gangway",
  description: SITE_CONFIG.description,
  keywords: [
    "Graphene Gangway",
    "digital agency Chicago",
    "affordable web design",
    "brand kit",
    "business plan service",
    "social media management",
    "AI knowledge base",
    "North Lawndale",
    "small business website",
    "launch package",
  ],
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    siteName: "Graphene Gangway",
  },
} as const;
