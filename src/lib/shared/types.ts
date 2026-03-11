export interface AuthTokenRow {
  id: number;
  email: string;
  token: string;
  expires_at: string;
  used_at: string | null;
  created_at: string;
}

export interface SessionRow {
  id: number;
  email: string;
  session_token: string;
  is_admin: boolean;
  expires_at: string;
  created_at: string;
}

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  intent: string;
  message: string;
  created_at: string;
}

export interface SessionData {
  email: string;
  isAdmin: boolean;
}

export interface NavChild {
  href: string;
  label: string;
  description: string;
}

export interface NavLink {
  href: string;
  label: string;
  children?: NavChild[];
}

// ── Service Catalog Types ──────────────────────────

export interface ServiceTier {
  name: string;
  price: number;
  priceLabel: string;
  period?: "one-time" | "monthly";
  features: string[];
  includedFree?: string[];
  badge?: "popular" | "featured" | "best-value";
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  icon: string;
  tiers: ServiceTier[];
  turnaround?: string;
  crossSell: { serviceId: string; message: string }[];
}

export interface LaunchPackage {
  id: string;
  name: string;
  upfrontPrice: number;
  monthlyOption: { down: number; monthly: number; months: number };
  alaCarteTotal: number;
  savings: number;
  savingsPercent: string;
  services: string[];
  guarantee: string;
  badge?: string;
}

// ── Program CMS Types ──────────────────────────────

export type ProgramStatus = "draft" | "active" | "coming_soon" | "archived";

export type ProgramSectionType =
  | "rich_text"
  | "testimonials"
  | "faq"
  | "timeline"
  | "gallery"
  | "stats"
  | "documents"
  | "cta"
  | "video"
  | "embed"
  | "cards";

export interface ProgramRow {
  id: number;
  slug: string;
  title: string;
  tagline: string | null;
  description: string | null;
  hero_image: string | null;
  icon: string | null;
  accent_color: string | null;
  status: ProgramStatus;
  display_order: number;
  external_link: string | null;
  internal_route: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface ProgramSectionRow {
  id: number;
  program_id: number;
  section_type: ProgramSectionType;
  title: string | null;
  content: Record<string, unknown>;
  display_order: number;
  is_visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface RichTextContent {
  html: string;
}

export interface TestimonialsContent {
  items: {
    authorName: string;
    authorRole?: string;
    authorImage?: string;
    quote: string;
    rating?: number;
  }[];
}

export interface FAQContent {
  items: { question: string; answer: string }[];
}

export interface TimelineContent {
  items: { title: string; description: string; date?: string; icon?: string }[];
}

export interface GalleryContent {
  items: { src: string; alt: string; caption?: string }[];
}

export interface StatsContent {
  items: { value: string; label: string; suffix?: string }[];
}

export interface DocumentsContent {
  items: { title: string; url: string; fileType?: string }[];
}

export interface CTAContent {
  heading: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface VideoContent {
  url: string;
  poster?: string;
  caption?: string;
}

export interface EmbedContent {
  html: string;
  aspectRatio?: string;
}

export interface CardsContent {
  columns?: 2 | 3 | 4;
  items: {
    title: string;
    description: string;
    icon?: string;
    href?: string;
    tags?: string[];
    accentColor?: string;
  }[];
}
