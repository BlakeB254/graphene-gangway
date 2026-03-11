"use client";

import { LandingHero } from "@/components/sections/LandingHero";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  Check,
  FileText,
  Target,
  TrendingUp,
  PieChart,
  Presentation,
  BarChart3,
  Palette,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "$199", label: "One-Time" },
  { value: "2-3", label: "Weeks Delivery" },
  { value: "100%", label: "Bank-Ready" },
  { value: "FREE", label: "Brand Kit Included" },
];

const INCLUDED_ITEMS = [
  {
    icon: FileText,
    title: "Professional Business Plan",
    description: "Bank-ready format with executive summary, company overview, market analysis, and financial projections.",
  },
  {
    icon: Target,
    title: "Target Market Research",
    description: "Detailed customer personas, market size analysis, and demographic breakdowns for your niche.",
  },
  {
    icon: BarChart3,
    title: "Competitive Analysis",
    description: "Deep dive into your competitors — strengths, weaknesses, pricing, positioning, and gaps you can exploit.",
  },
  {
    icon: PieChart,
    title: "Business Model Canvas",
    description: "One-page visual framework covering value proposition, customer segments, revenue streams, and cost structure.",
  },
  {
    icon: TrendingUp,
    title: "Financial Projections",
    description: "3-year revenue forecasts, break-even analysis, and startup cost estimates ready for investors or lenders.",
  },
  {
    icon: Presentation,
    title: "Pitch Deck Framework",
    description: "Structured slide framework for presenting to investors, banks, or partners. Just add your personality.",
  },
  {
    icon: Palette,
    title: "Brand Kit (Free)",
    description: "Logo, colors, typography, social assets, and brand guidelines included at no additional cost.",
  },
];

const COMPARISON = [
  { item: "Business plan", market: "$1,000 - $3,000", ours: "Included" },
  { item: "Market research", market: "$500 - $1,500", ours: "Included" },
  { item: "Competitive analysis", market: "$300 - $800", ours: "Included" },
  { item: "Financial projections", market: "$500 - $1,500", ours: "Included" },
  { item: "Pitch deck", market: "$300 - $500", ours: "Included" },
  { item: "Brand Kit", market: "$500 - $2,000", ours: "Free" },
  { item: "Total", market: "$2,000 - $5,000+", ours: "$199" },
];

const FAQS = [
  {
    q: "Is this just an AI-generated business plan?",
    a: "No. We use AI tools to accelerate research, but every plan is reviewed, customized, and refined by humans who understand business strategy. The result is a professional document you can hand to a bank.",
  },
  {
    q: "Will this plan actually help me get a loan?",
    a: "Yes. The business plan follows bank-ready formatting with the sections lenders expect: executive summary, market analysis, financial projections, and competitive positioning.",
  },
  {
    q: "What information do I need to provide?",
    a: "Your business idea, target market, rough budget, and goals. We handle the research, analysis, formatting, and financial modeling.",
  },
  {
    q: "Can I use this for investors too?",
    a: "Absolutely. The pitch deck framework and financial projections are designed for both lender and investor audiences.",
  },
];

export default function BizStarterLandingPage() {
  return (
    <>
      {/* 1. HERO */}
      <LandingHero
        headline="Turn Your Business Idea Into a Bankable Plan — $199"
        subheadline="Professional business plan, market research, competitive analysis, financial projections, pitch deck, and a free Brand Kit. Everything you need to launch with confidence."
        primaryCTA={{ label: "Get Your Plan — $199", href: "/contact?service=biz-starter" }}
        badge="BIZ STARTER KIT"
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

      {/* 3. OFFER BREAKDOWN — WHAT'S INCLUDED */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Everything In Your Biz Starter Kit
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-ice-white/50">
              A complete business foundation for less than a single hour with a consultant.
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

      {/* CONSULTANT COMPARISON */}
      <section className="border-t border-dark-mid/30 bg-dark-surface/30 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              What a Consultant Would Charge
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
                    Consultant Rate
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

      {/* 4. CASE STUDY SNIPPET */}
      <section className="py-20">
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
                &ldquo;I walked into the bank with a professional business plan and walked out with an SBA loan. The financial projections and market research made me look like I knew exactly what I was doing — because the plan did.&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-[family-name:var(--font-display)] tracking-wide text-ice-white">
                  Client Name
                </p>
                <p className="text-sm text-ice-white/40">
                  Founder, Food Service Startup — Chicago, IL
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="border-t border-dark-mid/30 bg-dark-surface/30 py-20">
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
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Stop Planning in Your Head. Start Building on Paper.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ice-white/50">
              For $199, you get a professional business plan that would cost $2,000+ from a consultant — plus a free Brand Kit.
            </p>
            <div className="mt-10">
              <Link
                href="/contact?service=biz-starter"
                className={cn(
                  "glow-cyan inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-8 py-3.5",
                  "font-[family-name:var(--font-display)] tracking-wider text-dark-deep",
                  "transition-all hover:bg-cyan-light hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                )}
              >
                Get Your Plan — $199
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
