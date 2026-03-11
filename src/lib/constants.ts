export const SITE_CONFIG = {
  name: "Graphene Gangway",
  tagline: "Build Your Business. We'll Build Everything Else.",
  description:
    "Graphene Gangway is a full-service digital agency in North Lawndale, Chicago — offering brand kits, business plans, custom websites, social media automations, and personal AI knowledge bases.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://graphenegangway.com",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@graphenegangway.com",
  location: "North Lawndale, Chicago",
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
        description: "Professional brand identity — $99",
      },
      {
        href: "/services/biz-starter-kit",
        label: "Biz Starter Kit",
        description: "Business plan + brand kit — $199",
      },
      {
        href: "/services/web-development",
        label: "Web Development",
        description: "Custom websites from $1,500",
      },
      {
        href: "/services/brand-automations",
        label: "Brand Automations",
        description: "Content marketing from $1,200/mo",
      },
      {
        href: "/services/ai-knowledge-base",
        label: "AI Knowledge Base",
        description: "Personal AI from $1,500",
      },
    ],
  },
  { href: "/packages/launch", label: "Launch Packages" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/community", label: "Our Community" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export const SOCIAL_LINKS = {
  instagram: "#",
  twitter: "#",
  facebook: "#",
  youtube: "#",
  linkedin: "#",
  tiktok: "#",
} as const;

export const IMPACT_STATS = [
  { value: 87, suffix: "+", label: "Brands Built" },
  { value: 424, suffix: "+", label: "Monthly Posts Managed" },
  { value: 5, label: "Services", suffix: "" },
  { value: 12000, suffix: "", prefix: "$", label: "Performance Guarantee" },
] as const;

export const SEO_DEFAULTS = {
  title: "Graphene Gangway",
  titleTemplate: "%s | Graphene Gangway",
  description: SITE_CONFIG.description,
  keywords: [
    "Graphene Gangway",
    "digital agency Chicago",
    "custom website small business",
    "brand identity package",
    "social media management",
    "business plan writing service",
    "personal AI knowledge base",
    "North Lawndale technology",
    "affordable web design agency",
    "business launch package",
  ],
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    siteName: "Graphene Gangway",
  },
} as const;
