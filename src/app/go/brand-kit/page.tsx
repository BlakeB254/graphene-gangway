"use client";

import { LandingHero } from "@/components/sections/LandingHero";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  Check,
  Palette,
  Image as ImageIcon,
  Type,
  Layers,
  FileText,
  Download,
  Star,
  ArrowRight,
  Gift,
} from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "$99", label: "One-Time" },
  { value: "5-10", label: "Business Days" },
  { value: "100%", label: "Yours to Keep" },
  { value: "FREE", label: "With Any Package" },
];

const INCLUDED_ITEMS = [
  {
    icon: Palette,
    title: "Primary Logo + Variations",
    description: "Full-color, monochrome, reversed, and icon-only versions for every use case.",
  },
  {
    icon: Layers,
    title: "Icon Set (5 Icons)",
    description: "Custom icons that match your brand for use across web, social, and print.",
  },
  {
    icon: ImageIcon,
    title: "Color Palette",
    description: "Complete color system with HEX, RGB, and CMYK values for digital and print.",
  },
  {
    icon: Type,
    title: "Typography Selection",
    description: "Curated font pairings for headings, body text, and accent use.",
  },
  {
    icon: Layers,
    title: "Social Media Backgrounds",
    description: "Sized and formatted for every major platform — Instagram, Facebook, X, LinkedIn, YouTube.",
  },
  {
    icon: FileText,
    title: "Brand Guidelines Document",
    description: "A reference guide covering logo usage, spacing, colors, and typography rules.",
  },
  {
    icon: Download,
    title: "Full File Package",
    description: "Every asset in PNG, SVG, PDF, and source formats. Ready for any designer or printer.",
  },
];

const COMPARISON = [
  { item: "Logo design", market: "$300 - $1,000+", ours: "Included" },
  { item: "Brand color palette", market: "$100 - $300", ours: "Included" },
  { item: "Typography selection", market: "$100 - $200", ours: "Included" },
  { item: "Social media assets", market: "$200 - $500", ours: "Included" },
  { item: "Brand guidelines doc", market: "$200 - $500", ours: "Included" },
  { item: "Icon set", market: "$150 - $400", ours: "Included" },
  { item: "Total", market: "$500 - $2,000+", ours: "$99" },
];

const FAQS = [
  {
    q: "What do I need to provide?",
    a: "Just your business name, a brief description of what you do, and any color or style preferences. We handle the rest.",
  },
  {
    q: "How many revisions are included?",
    a: "Two rounds of revisions on the logo and color palette. Most clients are happy after the first round.",
  },
  {
    q: "Can I use these files with my own designer later?",
    a: "Absolutely. You get source files so any designer can pick up where we left off.",
  },
  {
    q: "What if I'm buying a website package too?",
    a: "The Brand Kit is included free with any website, automations, or AI service. No need to purchase separately.",
  },
];

export default function BrandKitLandingPage() {
  return (
    <>
      {/* 1. HERO */}
      <LandingHero
        headline="Look Professional From Day One — $99"
        subheadline="Logo, colors, fonts, social assets, and brand guidelines — everything you need to look established, delivered in 5-10 business days."
        primaryCTA={{ label: "Get Your Brand Kit — $99", href: "/contact?service=brand-kit" }}
        badge="BRAND KIT"
      />

      {/* 2. SOCIAL PROOF STRIP */}
      <section className="border-y border-dark-mid/30 bg-dark-surface/50 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {STATS.map((stat) => (
            <ScrollReveal key={stat.label} variant="fadeUp">
              <div className="text-center">
                <p className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-cyan-neon">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-ice-white/50">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. OFFER BREAKDOWN — WHAT'S INCLUDED GRID */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Everything In Your Brand Kit
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-ice-white/50">
              A complete brand identity package for less than the cost of a logo alone.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED_ITEMS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-lg border border-dark-mid bg-dark-surface p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-neon/10">
                    <item.icon className="h-5 w-5 text-cyan-neon" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] tracking-wide text-ice-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ice-white/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET RATE COMPARISON */}
      <section className="border-t border-dark-mid/30 bg-dark-surface/30 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              What This Would Cost Elsewhere
            </h2>
          </ScrollReveal>

          <div className="mt-12 overflow-hidden rounded-xl border border-dark-mid">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-mid bg-dark-surface">
                  <th className="px-6 py-4 text-left font-[family-name:var(--font-display)] text-sm tracking-wider text-ice-white/70">
                    Deliverable
                  </th>
                  <th className="px-6 py-4 text-center font-[family-name:var(--font-display)] text-sm tracking-wider text-ice-white/70">
                    Market Rate
                  </th>
                  <th className="px-6 py-4 text-center font-[family-name:var(--font-display)] text-sm tracking-wider text-cyan-neon">
                    Graphene Gangway
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={i}
                    className={cn(
                      "border-b border-dark-mid/50",
                      i === COMPARISON.length - 1 && "border-none bg-dark-surface font-bold"
                    )}
                  >
                    <td className="px-6 py-3 text-sm text-ice-white/70">
                      {row.item}
                    </td>
                    <td className="px-6 py-3 text-center text-sm text-ice-white/40 line-through">
                      {row.market}
                    </td>
                    <td className="px-6 py-3 text-center text-sm font-medium text-cyan-neon">
                      {row.ours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CROSS-SELL: FREE WITH ANY PACKAGE */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 rounded-xl border border-success/30 bg-success/10 px-6 py-5">
              <Gift className="h-6 w-6 text-success" />
              <div>
                <p className="font-[family-name:var(--font-display)] tracking-wide text-ice-white">
                  Free With Any Website Package
                </p>
                <p className="mt-1 text-sm text-ice-white/50">
                  The Brand Kit is included at no extra cost when you purchase any website, automations, or AI service.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. CASE STUDY SNIPPET */}
      <section className="border-t border-dark-mid/30 bg-dark-surface/30 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="corner-frame rounded-xl border border-dark-mid bg-dark-surface p-8">
              <div className="flex items-center gap-2 text-warning">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed text-ice-white/80">
                &ldquo;For $99 I expected a basic logo. Instead I got a complete brand identity — logo variations, social media assets, even a guidelines doc. It made me look like I&apos;d been in business for years.&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-[family-name:var(--font-display)] tracking-wide text-ice-white">
                  Client Name
                </p>
                <p className="text-sm text-ice-white/40">
                  Founder, Creative Studio — Chicago, IL
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Common Questions
            </h2>
          </ScrollReveal>
          <div className="mt-12 space-y-6">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="rounded-lg border border-dark-mid bg-dark-surface p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ice-white/50">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="border-t border-dark-mid/30 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Your Brand Identity, Ready in Days
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ice-white/50">
              Stop looking like a side project. Get a professional brand kit for less than the cost of a single logo elsewhere.
            </p>
            <div className="mt-10">
              <Link
                href="/contact?service=brand-kit"
                className={cn(
                  "glow-cyan inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-8 py-3.5",
                  "font-[family-name:var(--font-display)] tracking-wider text-dark-deep",
                  "transition-all hover:bg-cyan-light hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                )}
              >
                Get Your Brand Kit — $99
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
