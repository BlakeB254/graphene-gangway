# Batch 1: Foundation & Design System — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend the design system with new tokens and shared components, update navigation for the redesigned site structure, and create the /go/ landing page layout — all without breaking any existing pages.

**Architecture:** Additive changes only. New CSS tokens extend `globals.css`. New nav links added alongside existing routes. New components created in `src/components/sections/`, `src/components/common/`, and `src/components/forms/`. No existing components deleted or renamed.

**Tech Stack:** Next.js 16.1.6, Tailwind CSS v4, Framer Motion, shadcn/ui, Lucide React

---

## File Map

### New Files
- `src/lib/services-data.ts` — Service catalog constants (names, prices, tiers, features, cross-sell rules)
- `src/components/common/Badge.tsx` — Pill badge ("Included Free", "Limited Time", "Popular")
- `src/components/common/PriceDisplay.tsx` — Price with promo anchor (crossed-out standard + accent promo)
- `src/components/common/TrustIndicators.tsx` — Client count, star rating, managed brands
- `src/components/common/ScrollAnimation.tsx` — Intersection Observer wrapper for fade-up entrance
- `src/components/common/CalEmbed.tsx` — Cal.com booking embed placeholder
- `src/components/common/SectionWrapper.tsx` — Consistent section spacing + max-width container
- `src/components/sections/FAQAccordion.tsx` — Collapsible FAQ section (reused across all service pages)
- `src/components/sections/ProcessTimeline.tsx` — Step-by-step process (horizontal desktop, vertical mobile)
- `src/components/sections/TestimonialCarousel.tsx` — Auto-play swipeable testimonial cards
- `src/components/sections/BundleUpsell.tsx` — Cross-sell module with contextual messaging
- `src/components/sections/PerformanceGuarantee.tsx` — Guarantee banner with cyan accent
- `src/components/layout/MinimalFooter.tsx` — Landing page footer (company name, privacy, full site link)
- `src/components/layout/CTABar.tsx` — Sticky mobile CTA bar
- `src/app/(go)/layout.tsx` — Minimal layout for /go/* ad landing pages (no navbar)
- `src/app/(go)/go/placeholder/page.tsx` — Temporary placeholder to verify layout works

### Modified Files
- `src/app/globals.css` — Add new color tokens, utility classes
- `src/lib/constants.ts` — Update NAV_LINKS, add SERVICE_CATALOG, update SITE_CONFIG
- `src/lib/shared/types.ts` — Add service/program types
- `src/components/layout/Navbar.tsx` — New nav structure with Services + Programs dropdowns
- `src/components/layout/MobileMenu.tsx` — Match new nav structure
- `src/components/layout/Footer.tsx` — Expanded footer with services, programs, community links

---

## Chunk 1: Design Tokens & Shared Types

### Task 1: Extend CSS Design Tokens

**Files:**
- Modify: `src/app/globals.css:6-48` (add new tokens to @theme inline block)
- Modify: `src/app/globals.css:50-70` (add new :root vars)

- [ ] **Step 1: Add extended brand tokens to @theme inline block**

In `src/app/globals.css`, add these tokens inside the `@theme inline {}` block after line 41 (`--color-ice-white`):

```css
  /* Extended Brand Tokens */
  --color-brand-success: #22C55E;
  --color-brand-warning: #F59E0B;
  --color-brand-accent-hover: #00D4E0;
  --color-brand-accent-light: #66F5FF;
```

- [ ] **Step 2: Add new :root CSS custom properties**

In `src/app/globals.css`, add after line 69 (`--ring`):

```css
  --success: #22C55E;
  --warning: #F59E0B;
  --accent-hover: #00D4E0;
  --accent-light: #66F5FF;
```

- [ ] **Step 3: Add new utility classes**

In `src/app/globals.css`, add after the `.bg-gradient-radial` block (after line 214):

```css
/* Badge utilities */
.badge-success {
  @apply rounded-full bg-brand-success/15 px-3 py-1 text-xs font-medium text-brand-success;
}
.badge-warning {
  @apply rounded-full bg-brand-warning/15 px-3 py-1 text-xs font-medium text-brand-warning;
}
.badge-accent {
  @apply rounded-full bg-cyan-neon/15 px-3 py-1 text-xs font-medium text-cyan-neon;
}

/* Section spacing */
.section-padding {
  @apply py-20 md:py-24 lg:py-28;
}
.section-container {
  @apply mx-auto max-w-[1200px] px-5;
}
```

- [ ] **Step 4: Verify build succeeds**

Run: `cd /home/codex450/CDX-DEV-PROJECTS/graphene-gangway && npx next build 2>&1 | tail -20`
Expected: Build succeeds, no CSS errors.

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: extend design tokens with success, warning, accent-hover, accent-light colors and section utilities"
```

---

### Task 2: Add Service Catalog Data & Shared Types

**Files:**
- Create: `src/lib/services-data.ts`
- Modify: `src/lib/shared/types.ts`

- [ ] **Step 1: Add service and program types**

Append to `src/lib/shared/types.ts`:

```typescript
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
  icon: string; // lucide icon name
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
  | "embed";

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

// Content shapes for each section type
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
```

- [ ] **Step 2: Create service catalog data**

Create `src/lib/services-data.ts`:

```typescript
import type { Service, LaunchPackage } from "./shared/types";

export const SERVICES: Service[] = [
  {
    id: "brand-kit",
    slug: "brand-kit",
    name: "Brand Kit",
    tagline: "Look professional from day one",
    shortDescription: "Logo, colors, typography, social templates, and brand guidelines.",
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
      { serviceId: "web-development", message: "Have a brand? Now give it a home →" },
      { serviceId: "biz-starter-kit", message: "Starting from scratch? Get the plan too →" },
    ],
  },
  {
    id: "biz-starter-kit",
    slug: "biz-starter-kit",
    name: "Biz Starter Kit",
    tagline: "Turn your business idea into a bankable plan",
    shortDescription: "Business plan, market research, competitive analysis, and pitch deck.",
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
      { serviceId: "web-development", message: "Plan done? Now build your website →" },
    ],
  },
  {
    id: "web-development",
    slug: "web-development",
    name: "Web Development",
    tagline: "Websites that work as hard as you do",
    shortDescription: "Custom portfolio or e-commerce websites with 6-month support.",
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
      { serviceId: "brand-automations", message: "Site is live. Now fill it with content →" },
      { serviceId: "ai-knowledge-base", message: "Want AI that knows your business? →" },
    ],
  },
  {
    id: "brand-automations",
    slug: "brand-automations",
    name: "Brand Automations",
    tagline: "Your brand, everywhere, every day — without you lifting a finger",
    shortDescription: "AI-powered content creation, scheduling, and distribution across all channels.",
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
      { serviceId: "web-development", message: "Need a better site to send traffic to? →" },
      { serviceId: "ai-knowledge-base", message: "Power your content with AI →" },
    ],
  },
  {
    id: "ai-knowledge-base",
    slug: "ai-knowledge-base",
    name: "Personal AI Knowledge Base",
    tagline: "A personal AI that actually knows your business",
    shortDescription: "Custom AI trained on your data, deployed to your device.",
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
      { serviceId: "brand-automations", message: "Now let AI drive your content →" },
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
    services: ["Portfolio Website", "Brand Automations (Standard, 6mo)", "AI Knowledge Base (Tier 1)", "Brand Kit", "Biz Starter Kit", "6-Month Site Support"],
    guarantee: "If we don't hit your target metrics in 6 months, we continue your brand automations for 6 more months — free. That's up to $12,000 in additional service.",
  },
  {
    id: "ecommerce-launch",
    name: "E-Commerce Launch",
    upfrontPrice: 14000,
    monthlyOption: { down: 4000, monthly: 2000, months: 6 },
    alaCarteTotal: 16000,
    savings: 2000,
    savingsPercent: "12.5%",
    services: ["E-Commerce Website", "Brand Automations (Standard, 6mo)", "AI Knowledge Base (Tier 1)", "Brand Kit", "Biz Starter Kit", "6-Month Site Support + Marketplace Optimization"],
    guarantee: "If we don't hit your target metrics in 6 months, we continue your brand automations for 6 more months — free. That's up to $12,000 in additional service.",
    badge: "Most Popular",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getCrossSellServices(currentServiceId: string): { service: Service; message: string }[] {
  const current = SERVICES.find((s) => s.id === currentServiceId);
  if (!current) return [];
  return current.crossSell
    .map((cs) => {
      const service = SERVICES.find((s) => s.id === cs.serviceId);
      return service ? { service, message: cs.message } : null;
    })
    .filter(Boolean) as { service: Service; message: string }[];
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `cd /home/codex450/CDX-DEV-PROJECTS/graphene-gangway && npx tsc --noEmit 2>&1 | tail -20`
Expected: No type errors.

- [ ] **Step 4: Commit**

```bash
git add src/lib/shared/types.ts src/lib/services-data.ts
git commit -m "feat: add service catalog data and program CMS types"
```

---

### Task 3: Update Constants & Navigation Structure

**Files:**
- Modify: `src/lib/constants.ts`

- [ ] **Step 1: Update NAV_LINKS for new site structure**

Replace the `NAV_LINKS` array in `src/lib/constants.ts` (lines 14-41):

```typescript
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
```

- [ ] **Step 2: Update SITE_CONFIG and SEO_DEFAULTS**

Update `SITE_CONFIG` in the same file:

```typescript
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
```

Update `SEO_DEFAULTS.keywords`:

```typescript
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
```

- [ ] **Step 3: Verify build**

Run: `cd /home/codex450/CDX-DEV-PROJECTS/graphene-gangway && npx next build 2>&1 | tail -20`
Expected: Build succeeds. Existing pages render with new nav links.

- [ ] **Step 4: Commit**

```bash
git add src/lib/constants.ts
git commit -m "feat: update nav structure for services, programs, packages, community"
```

---

## Chunk 2: Shared UI Components

### Task 4: ScrollAnimation Wrapper

**Files:**
- Create: `src/components/common/ScrollAnimation.tsx`

- [ ] **Step 1: Create ScrollAnimation component**

```typescript
"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-in" | "slide-left" | "slide-right";
  delay?: number;
  once?: boolean;
}

const variants: Record<string, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
};

export function ScrollAnimation({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/common/ScrollAnimation.tsx
git commit -m "feat: add ScrollAnimation wrapper for scroll-triggered entrance animations"
```

---

### Task 5: SectionWrapper Component

**Files:**
- Create: `src/components/common/SectionWrapper.tsx`

- [ ] **Step 1: Create SectionWrapper component**

```typescript
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function SectionWrapper({ children, className, dark, id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        dark && "bg-gradient-to-b from-dark-deep via-dark-surface/50 to-dark-deep",
        className
      )}
    >
      <div className="section-container">{children}</div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/common/SectionWrapper.tsx
git commit -m "feat: add SectionWrapper for consistent section spacing and container"
```

---

### Task 6: Badge Component

**Files:**
- Create: `src/components/common/Badge.tsx`

- [ ] **Step 1: Create Badge component**

```typescript
import { cn } from "@/lib/utils";

type BadgeVariant = "success" | "warning" | "accent" | "muted";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  success: "bg-brand-success/15 text-brand-success",
  warning: "bg-brand-warning/15 text-brand-warning",
  accent: "bg-cyan-neon/15 text-cyan-neon",
  muted: "bg-dark-mid text-ice-white/60",
};

export function Badge({ children, variant = "accent", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/common/Badge.tsx
git commit -m "feat: add Badge component with success, warning, accent, muted variants"
```

---

### Task 7: PriceDisplay Component

**Files:**
- Create: `src/components/common/PriceDisplay.tsx`

- [ ] **Step 1: Create PriceDisplay component**

```typescript
import { cn } from "@/lib/utils";

interface PriceDisplayProps {
  price: string;
  period?: string;
  originalPrice?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-5xl md:text-6xl",
};

export function PriceDisplay({
  price,
  period,
  originalPrice,
  size = "md",
  className,
}: PriceDisplayProps) {
  return (
    <div className={cn("flex items-baseline gap-3", className)}>
      {originalPrice && (
        <span className="text-lg text-ice-white/40 line-through">{originalPrice}</span>
      )}
      <span
        className={cn(
          "font-[family-name:var(--font-display)] tracking-wide text-cyan-neon",
          sizeClasses[size]
        )}
      >
        {price}
      </span>
      {period && (
        <span className="text-sm text-ice-white/50">/{period}</span>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/common/PriceDisplay.tsx
git commit -m "feat: add PriceDisplay component with promo anchor and period support"
```

---

### Task 8: TrustIndicators Component

**Files:**
- Create: `src/components/common/TrustIndicators.tsx`

- [ ] **Step 1: Create TrustIndicators component**

```typescript
import { Star, Users, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustIndicatorsProps {
  className?: string;
  layout?: "horizontal" | "vertical";
}

const indicators = [
  { icon: Users, label: "87+ Businesses Served", value: "87+" },
  { icon: Star, label: "5-Star Reviews", value: "5.0" },
  { icon: Building2, label: "Brands Managed", value: "15+" },
];

export function TrustIndicators({ className, layout = "horizontal" }: TrustIndicatorsProps) {
  return (
    <div
      className={cn(
        "flex gap-6",
        layout === "horizontal" ? "flex-wrap items-center" : "flex-col",
        className
      )}
    >
      {indicators.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-sm text-ice-white/60">
          <item.icon className="h-4 w-4 text-cyan-neon" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/common/TrustIndicators.tsx
git commit -m "feat: add TrustIndicators component for social proof across pages"
```

---

### Task 9: FAQAccordion Section Component

**Files:**
- Create: `src/components/sections/FAQAccordion.tsx`

- [ ] **Step 1: Create FAQAccordion component**

```typescript
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  items: FAQItem[];
  className?: string;
}

function FAQItemComponent({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-dark-mid/50">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-lg font-medium text-ice-white">{item.question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 text-cyan-neon transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-ice-white/60 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQAccordion({ title = "Frequently Asked Questions", items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper className={className}>
      <ScrollAnimation>
        <h2 className="mb-12 text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
          {title}
        </h2>
      </ScrollAnimation>
      <div className="mx-auto max-w-3xl">
        {items.map((item, i) => (
          <ScrollAnimation key={i} delay={i * 0.05}>
            <FAQItemComponent
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </ScrollAnimation>
        ))}
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/FAQAccordion.tsx
git commit -m "feat: add FAQAccordion reusable section component"
```

---

### Task 10: ProcessTimeline Section Component

**Files:**
- Create: `src/components/sections/ProcessTimeline.tsx`

- [ ] **Step 1: Create ProcessTimeline component**

```typescript
"use client";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";
import * as LucideIcons from "lucide-react";

interface TimelineStep {
  title: string;
  description: string;
  icon?: string;
}

interface ProcessTimelineProps {
  title?: string;
  steps: TimelineStep[];
  className?: string;
}

function StepIcon({ name }: { name?: string }) {
  if (!name) return <div className="h-3 w-3 rounded-full bg-cyan-neon" />;
  const Icon = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!Icon) return <div className="h-3 w-3 rounded-full bg-cyan-neon" />;
  return <Icon className="h-5 w-5 text-cyan-neon" />;
}

export function ProcessTimeline({ title = "Our Process", steps, className }: ProcessTimelineProps) {
  return (
    <SectionWrapper className={className}>
      <ScrollAnimation>
        <h2 className="mb-16 text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
          {title}
        </h2>
      </ScrollAnimation>

      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-start justify-between gap-4">
        {steps.map((step, i) => (
          <ScrollAnimation key={i} delay={i * 0.1} className="flex-1 text-center">
            <div className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-5 left-1/2 h-px w-full bg-gradient-to-r from-cyan-neon/40 to-cyan-neon/10" />
              )}
              {/* Node */}
              <div className="relative mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-neon/30 bg-dark-surface">
                <StepIcon name={step.icon} />
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white">
                {step.title}
              </h3>
              <p className="text-sm text-ice-white/50 leading-relaxed">{step.description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="flex flex-col gap-8 md:hidden">
        {steps.map((step, i) => (
          <ScrollAnimation key={i} delay={i * 0.08} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-cyan-neon/30 bg-dark-surface">
                <StepIcon name={step.icon} />
              </div>
              {i < steps.length - 1 && (
                <div className="mt-2 h-full w-px bg-gradient-to-b from-cyan-neon/30 to-transparent" />
              )}
            </div>
            <div className="pb-4">
              <h3 className="mb-1 font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white">
                {step.title}
              </h3>
              <p className="text-sm text-ice-white/50 leading-relaxed">{step.description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/ProcessTimeline.tsx
git commit -m "feat: add ProcessTimeline section with horizontal desktop and vertical mobile layouts"
```

---

### Task 11: TestimonialCarousel & PerformanceGuarantee

**Files:**
- Create: `src/components/sections/TestimonialCarousel.tsx`
- Create: `src/components/sections/PerformanceGuarantee.tsx`
- Create: `src/components/sections/BundleUpsell.tsx`

- [ ] **Step 1: Create TestimonialCarousel**

```typescript
"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/common/SectionWrapper";

interface Testimonial {
  quote: string;
  authorName: string;
  authorRole?: string;
  authorImage?: string;
  rating?: number;
}

interface TestimonialCarouselProps {
  title?: string;
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export function TestimonialCarousel({
  title = "What Our Clients Say",
  testimonials,
  autoPlay = true,
  interval = 5000,
  className,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next, testimonials.length]);

  if (testimonials.length === 0) return null;

  const t = testimonials[current];

  return (
    <SectionWrapper className={className}>
      <h2 className="mb-12 text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
        {title}
      </h2>
      <div className="relative mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {t.rating && (
              <div className="mb-4 flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-warning text-brand-warning" />
                ))}
              </div>
            )}
            <blockquote className="mb-6 text-xl leading-relaxed text-ice-white/80 md:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              {t.authorImage ? (
                <div className="h-10 w-10 overflow-hidden rounded-full border border-cyan-neon/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.authorImage} alt={t.authorName} className="h-full w-full object-cover" />
                </div>
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-neon/30 bg-dark-surface text-sm font-bold text-cyan-neon">
                  {t.authorName.charAt(0)}
                </div>
              )}
              <div className="text-left">
                <p className="font-medium text-ice-white">{t.authorName}</p>
                {t.authorRole && <p className="text-sm text-ice-white/50">{t.authorRole}</p>}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {testimonials.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-dark-mid p-2 text-ice-white/50 transition-colors hover:border-cyan-neon/30 hover:text-cyan-neon"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-dark-mid p-2 text-ice-white/50 transition-colors hover:border-cyan-neon/30 hover:text-cyan-neon"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === current ? "w-8 bg-cyan-neon" : "w-2 bg-dark-mid"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Create PerformanceGuarantee**

```typescript
import { Shield } from "lucide-react";
import { Badge } from "@/components/common/Badge";

interface PerformanceGuaranteeProps {
  className?: string;
  compact?: boolean;
}

export function PerformanceGuarantee({ className, compact }: PerformanceGuaranteeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-cyan-neon/20 bg-gradient-to-r from-dark-surface to-dark-deep",
        compact ? "p-6" : "p-8 md:p-12",
        className
      )}
    >
      {/* Accent left border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-neon" />

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 rounded-full border border-cyan-neon/30 bg-cyan-neon/10 p-3">
          <Shield className="h-6 w-6 text-cyan-neon" />
        </div>
        <div>
          <div className="mb-2 flex items-center gap-3">
            <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-ice-white">
              PERFORMANCE GUARANTEE
            </h3>
            <Badge variant="warning">Up to $12,000 value</Badge>
          </div>
          <p className="text-ice-white/70 leading-relaxed">
            If we don&apos;t hit your target metrics in 6 months, we continue your brand automations
            for 6 more months — free. That&apos;s up to $12,000 in additional service.
          </p>
          {!compact && (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { step: "1", title: "Agree on Targets", desc: "Measurable metrics at kickoff" },
                { step: "2", title: "Measure at 6 Months", desc: "Data-driven evaluation" },
                { step: "3", title: "Guarantee Kicks In", desc: "6 more months free if missed" },
              ].map((item) => (
                <div key={item.step} className="rounded-lg border border-dark-mid bg-dark-deep/50 p-4">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-neon/10 text-sm font-bold text-cyan-neon">
                    {item.step}
                  </div>
                  <p className="font-medium text-ice-white">{item.title}</p>
                  <p className="text-xs text-ice-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
```

Note: add `import { cn } from "@/lib/utils";` at top.

- [ ] **Step 3: Create BundleUpsell**

```typescript
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/common/Badge";

interface BundleUpsellProps {
  currentServiceId: string;
  targetServiceName: string;
  targetServiceHref: string;
  message: string;
  savings?: string;
  className?: string;
}

export function BundleUpsell({
  targetServiceName,
  targetServiceHref,
  message,
  savings,
  className,
}: BundleUpsellProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-cyan-neon/10 bg-dark-surface/50 p-6 md:p-8",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
        <div className="flex-1">
          <p className="mb-1 text-lg font-medium text-ice-white">{message}</p>
          {savings && <Badge variant="success">Save {savings}</Badge>}
        </div>
        <Link
          href={targetServiceHref}
          className="group inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-6 py-3 font-bold text-dark-deep transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
        >
          View {targetServiceName}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Verify build**

Run: `cd /home/codex450/CDX-DEV-PROJECTS/graphene-gangway && npx next build 2>&1 | tail -20`
Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/TestimonialCarousel.tsx src/components/sections/PerformanceGuarantee.tsx src/components/sections/BundleUpsell.tsx
git commit -m "feat: add TestimonialCarousel, PerformanceGuarantee, BundleUpsell section components"
```

---

## Chunk 3: Layout Updates (Navbar, Footer, /go/ Layout, CTABar)

### Task 12: Update Navbar for New Nav Structure

**Files:**
- Modify: `src/components/layout/Navbar.tsx`

The Navbar already reads from `NAV_LINKS` and supports dropdowns via the `DropdownMenu` component. Since we updated `NAV_LINKS` in Task 3, the Navbar will automatically render the new structure. However, we need to:
1. Add a prominent CTA button on desktop
2. Adjust the split to work better with the new 5-link structure

- [ ] **Step 1: Update Navbar to add CTA button and improve split**

Replace the Navbar component (keep the existing `DropdownMenu` and `NavItem` helpers):

In the `Navbar` function (lines 100-177), update the desktop right section to include a CTA:

Replace the right links section (lines 145-153) with:

```tsx
            {/* Desktop: right links + CTA */}
            <div className="hidden flex-1 items-center gap-8 md:flex">
              {rightLinks.map((link) => (
                <NavItem key={link.label} link={link} />
              ))}
              <div className="ml-auto flex items-center gap-4">
                <AuthButton />
                <Link
                  href="/pricing"
                  className="rounded-lg bg-cyan-neon px-4 py-2 text-sm font-bold text-dark-deep transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                >
                  Get Started
                </Link>
              </div>
            </div>
```

Add `Link` to imports if not already there (it is).

- [ ] **Step 2: Verify build and test**

Run: `cd /home/codex450/CDX-DEV-PROJECTS/graphene-gangway && npx next build 2>&1 | tail -20`
Expected: Build succeeds. Nav shows new links.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "feat: update Navbar with new nav structure and Get Started CTA button"
```

---

### Task 13: Update MobileMenu for New Nav Structure

**Files:**
- Modify: `src/components/layout/MobileMenu.tsx`

The MobileMenu also reads from `NAV_LINKS`, so it will automatically show the new structure. We need to add a CTA button at the bottom.

- [ ] **Step 1: Add CTA button to MobileMenu**

In `MobileMenu.tsx`, add a CTA section between the nav and social links (after line 161, before the social links div):

```tsx
            {/* CTA Button */}
            <motion.div variants={linkVariants} className="mt-4">
              <Link
                href="/pricing"
                onClick={handleClose}
                className="inline-block rounded-lg bg-cyan-neon px-8 py-3 text-lg font-bold text-dark-deep transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                Get Started
              </Link>
            </motion.div>
```

Add `Link` import from `next/link` (already imported).

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/MobileMenu.tsx
git commit -m "feat: add Get Started CTA button to MobileMenu"
```

---

### Task 14: Update Footer with Expanded Links

**Files:**
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Expand footer to 4 columns with services, programs, company, contact**

Replace the Footer component body (keep the imports). The updated footer has: Services column, Programs & Company column, Community & Resources column, Contact column.

```tsx
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-deep border-t border-dark-mid">
      {/* Glow Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-neon/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/gg-mark.png"
                alt="Graphene Gangway"
                width={304}
                height={467}
                quality={100}
                className="h-9 w-auto object-contain"
              />
              <span className="font-[family-name:var(--font-display)] text-lg tracking-wide text-cyan-neon">
                Graphene Gangway
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ice-white/50">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm text-ice-white/40">
              {SITE_CONFIG.location}
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-widest text-ice-white/70">
              Services
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/services/brand-kit", label: "Brand Kit" },
                { href: "/services/biz-starter-kit", label: "Biz Starter Kit" },
                { href: "/services/web-development", label: "Web Development" },
                { href: "/services/brand-automations", label: "Brand Automations" },
                { href: "/services/ai-knowledge-base", label: "AI Knowledge Base" },
                { href: "/packages/launch", label: "Launch Packages" },
                { href: "/pricing", label: "Pricing" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ice-white/50 transition-colors hover:text-cyan-neon"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-widest text-ice-white/70">
              Company
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/community", label: "Our Community" },
                { href: "/programs", label: "Programs" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ice-white/50 transition-colors hover:text-cyan-neon"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-widest text-ice-white/70">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-ice-white/50">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="transition-colors hover:text-cyan-neon"
              >
                {SITE_CONFIG.contactEmail}
              </a>
              <Link
                href="/assessment"
                className="transition-colors hover:text-cyan-neon"
              >
                Take Our Assessment
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-dark-mid/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-ice-white/30">
              &copy; {year} Graphene Gangway. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-ice-white/30">
              <Link href="/privacy" className="hover:text-ice-white/50">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-ice-white/50">Terms of Service</Link>
              <span>Built with love in Chicago</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: expand Footer to 4-column layout with services, company, and contact sections"
```

---

### Task 15: Create MinimalFooter & CTABar

**Files:**
- Create: `src/components/layout/MinimalFooter.tsx`
- Create: `src/components/layout/CTABar.tsx`

- [ ] **Step 1: Create MinimalFooter for landing pages**

```typescript
import Link from "next/link";

export function MinimalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-dark-mid/30 bg-dark-deep px-4 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-xs text-ice-white/30">
          &copy; {year} Graphene Gangway
        </p>
        <div className="flex items-center gap-4 text-xs text-ice-white/30">
          <Link href="/privacy" className="hover:text-ice-white/50">Privacy Policy</Link>
          <Link href="/" className="hover:text-ice-white/50">View Full Site</Link>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Create CTABar (sticky mobile CTA)**

```typescript
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTABarProps {
  label?: string;
  href?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}

export function CTABar({
  label = "Get Started",
  href = "/pricing",
  secondaryLabel,
  secondaryHref,
  className,
}: CTABarProps) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 border-t border-dark-mid bg-dark-deep/95 backdrop-blur-md p-3 md:hidden",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Link
          href={href}
          className="flex-1 rounded-lg bg-cyan-neon py-3 text-center font-bold text-dark-deep transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
        >
          {label}
        </Link>
        {secondaryLabel && secondaryHref && (
          <Link
            href={secondaryHref}
            className="rounded-lg border border-cyan-neon/30 px-4 py-3 text-center text-sm font-medium text-cyan-neon transition-colors hover:bg-cyan-neon/10"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/MinimalFooter.tsx src/components/layout/CTABar.tsx
git commit -m "feat: add MinimalFooter for landing pages and sticky mobile CTABar"
```

---

### Task 16: Create /go/ Landing Page Layout

**Files:**
- Create: `src/app/(go)/layout.tsx`
- Create: `src/app/(go)/go/placeholder/page.tsx`

- [ ] **Step 1: Create the /go/ layout (no navbar, minimal footer)**

```typescript
import { MinimalFooter } from "@/components/layout/MinimalFooter";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      <MinimalFooter />
    </>
  );
}
```

- [ ] **Step 2: Create placeholder page to verify layout**

```typescript
import Link from "next/link";

export default function GoPlaceholder() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon">
        LANDING PAGES
      </h1>
      <p className="text-ice-white/60">Ad landing pages will be built here.</p>
      <Link
        href="/"
        className="rounded-lg border border-cyan-neon/30 px-4 py-2 text-sm text-cyan-neon transition-colors hover:bg-cyan-neon/10"
      >
        &larr; Back to Main Site
      </Link>
    </div>
  );
}
```

- [ ] **Step 3: Verify build and test /go/placeholder route**

Run: `cd /home/codex450/CDX-DEV-PROJECTS/graphene-gangway && npx next build 2>&1 | tail -20`
Expected: Build succeeds. Route /go/placeholder renders with MinimalFooter, no Navbar.

- [ ] **Step 4: Commit**

```bash
git add src/app/\(go\)/layout.tsx src/app/\(go\)/go/placeholder/page.tsx
git commit -m "feat: add /go/ route group with minimal layout for ad landing pages"
```

---

### Task 17: Final Batch 1 Build Verification

- [ ] **Step 1: Full build check**

Run: `cd /home/codex450/CDX-DEV-PROJECTS/graphene-gangway && npx next build 2>&1 | tail -30`
Expected: Build succeeds. All existing pages still work.

- [ ] **Step 2: Verify no TypeScript errors**

Run: `cd /home/codex450/CDX-DEV-PROJECTS/graphene-gangway && npx tsc --noEmit 2>&1 | tail -20`
Expected: No errors.

- [ ] **Step 3: Lint check**

Run: `cd /home/codex450/CDX-DEV-PROJECTS/graphene-gangway && npx eslint src/ 2>&1 | tail -20`
Expected: No new errors introduced.

- [ ] **Step 4: Commit any remaining changes**

```bash
git add -A
git commit -m "chore: batch 1 complete — design system, shared components, nav/footer update, /go/ layout"
```

---

## End of Batch 1

**What was built:**
- Extended design tokens (success, warning, accent-hover, accent-light)
- Service catalog data constants
- Program CMS types
- 7 shared components: ScrollAnimation, SectionWrapper, Badge, PriceDisplay, TrustIndicators, CalEmbed placeholder
- 4 section components: FAQAccordion, ProcessTimeline, TestimonialCarousel, PerformanceGuarantee, BundleUpsell
- Updated Navbar with Services/Programs dropdowns + CTA button
- Updated MobileMenu with CTA
- Expanded Footer (4-column)
- MinimalFooter for /go/* pages
- Sticky mobile CTABar
- /go/ route group with minimal layout

**No existing pages broken.** All changes are additive.

**Next:** Batch 2 — Programs CMS (DB schema, API routes, admin CRUD, public pages)
