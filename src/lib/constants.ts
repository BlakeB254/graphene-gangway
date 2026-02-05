export const SITE_CONFIG = {
  name: "Graphene Gangway",
  tagline: "Community-powered technology innovation.",
  description:
    "Graphene Gangway is a community technology initiative in North Lawndale, Chicago — bridging the digital divide through education, services, and outreach.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://graphenegangway.com",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@graphenegangway.com",
  location: "North Lawndale, Chicago",
} as const;

import type { NavLink } from "./shared/types";

export const NAV_LINKS: NavLink[] = [
  { href: "/yn-academy", label: "Programs" },
  {
    href: "/services",
    label: "Offerings",
    children: [
      {
        href: "/services",
        label: "Tech Services",
        description: "Web development, IT support, and digital solutions",
      },
      {
        href: "/outreach",
        label: "Community Outreach",
        description: "Programs connecting residents to resources",
      },
      {
        href: "/merch",
        label: "Merch",
        description: "Rep the movement — apparel and accessories",
      },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
    "YN Academy",
    "North Lawndale technology",
    "Chicago community tech",
    "digital divide",
    "technology education",
    "community outreach",
    "tech services Chicago",
  ],
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    siteName: "Graphene Gangway",
  },
} as const;
