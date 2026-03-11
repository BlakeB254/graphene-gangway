"use client";

import { LandingHero } from "@/components/sections/LandingHero";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  Star,
  ArrowRight,
  Globe,
  ShoppingCart,
  Zap,
  Brain,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "87+", label: "Projects Delivered" },
  { value: "100%", label: "Client Ownership" },
  { value: "4.9/5", label: "Client Rating" },
  { value: "6 mo", label: "Avg. Engagement" },
];

const CASE_STUDIES = [
  {
    icon: ShoppingCart,
    category: "E-Commerce",
    title: "Boutique Retailer Goes Online",
    description: "Custom e-commerce store with product management, coupons, and payment processing. Replaced a $79/mo Shopify plan.",
    results: [
      "Store launched in 4 weeks",
      "$0/mo platform fees (was $79/mo)",
      "200+ products managed through admin panel",
      "40% increase in online orders within 3 months",
    ],
  },
  {
    icon: Globe,
    category: "Web Development",
    title: "Professional Services Firm Rebrands",
    description: "Complete website redesign with content management, lead forms, and SEO optimization.",
    results: [
      "3x increase in organic traffic",
      "Lead form submissions up 65%",
      "Mobile bounce rate dropped 40%",
      "Full independence from previous agency",
    ],
  },
  {
    icon: Zap,
    category: "Brand Automations",
    title: "Local Restaurant Chain Goes Social",
    description: "5-channel content automation with monthly calendar, analytics, and engagement tracking.",
    results: [
      "From 2 posts/week to 15/day",
      "Instagram followers grew 3x in 90 days",
      "Engagement rate increased 280%",
      "Zero hours spent on content creation",
    ],
  },
  {
    icon: Brain,
    category: "AI Knowledge Base",
    title: "Service Company Automates Onboarding",
    description: "Custom AI knowledge base for employee training, process documentation, and client FAQs.",
    results: [
      "Onboarding time reduced from 2 weeks to 3 days",
      "80% reduction in repetitive questions",
      "24/7 availability for team members",
      "Self-expanding — gets smarter every week",
    ],
  },
  {
    icon: TrendingUp,
    category: "Launch Package",
    title: "Startup Goes From Idea to Revenue",
    description: "Full launch package — website, automations, AI, brand kit, and business plan delivered over 6 months.",
    results: [
      "First revenue within 8 weeks of kickoff",
      "1,200 social followers in first 90 days",
      "Business plan secured SBA loan",
      "Performance Guarantee targets exceeded by 30%",
    ],
  },
];

const TESTIMONIALS = [
  {
    quote: "We went from zero online presence to a fully automated business in 6 months. The launch package was the best investment we've made.",
    name: "Client Name",
    title: "Founder, E-Commerce Brand",
    location: "Chicago, IL",
  },
  {
    quote: "The AI knowledge base alone saved us 10+ hours per week. Our team can focus on actual work instead of answering the same questions over and over.",
    name: "Client Name",
    title: "Operations Manager",
    location: "Chicago, IL",
  },
  {
    quote: "For $99 I got a complete brand identity that makes us look like a million-dollar company. Best money I've ever spent on my business.",
    name: "Client Name",
    title: "Founder, Creative Studio",
    location: "Chicago, IL",
  },
];

export default function ResultsLandingPage() {
  return (
    <>
      {/* 1. HERO */}
      <LandingHero
        headline="See What We've Built"
        subheadline="Real projects. Real results. Every business walked in with a challenge and walked out with a solution they fully own."
        primaryCTA={{ label: "Start Your Transformation", href: "/contact" }}
        badge="CLIENT RESULTS"
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

      {/* 3. CASE STUDY CARDS */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Project Spotlights
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-ice-white/50">
              Placeholder case studies — real client stories coming soon.
            </p>
          </ScrollReveal>

          <div className="mt-12 space-y-8">
            {CASE_STUDIES.map((study, i) => (
              <ScrollReveal key={study.title} delay={i * 0.1}>
                <div className="corner-frame rounded-xl border border-dark-mid bg-dark-surface p-8">
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-neon/10">
                          <study.icon className="h-5 w-5 text-cyan-neon" />
                        </div>
                        <div>
                          <span className="font-[family-name:var(--font-mono)] text-xs tracking-wider text-cyan-neon">
                            {study.category}
                          </span>
                          <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                            {study.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-ice-white/50">
                        {study.description}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="font-[family-name:var(--font-mono)] text-xs tracking-wider text-ice-white/40">
                        KEY RESULTS
                      </p>
                      <ul className="mt-3 space-y-2">
                        {study.results.map((result) => (
                          <li
                            key={result}
                            className="flex items-start gap-2 text-sm text-ice-white/70"
                          >
                            <TrendingUp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="border-t border-dark-mid/30 bg-dark-surface/30 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              What Clients Say
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col rounded-xl border border-dark-mid bg-dark-surface p-6">
                  <div className="flex items-center gap-1 text-warning">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ice-white/70">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-4 border-t border-dark-mid/50 pt-4">
                    <p className="font-[family-name:var(--font-display)] text-sm tracking-wide text-ice-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-ice-white/40">
                      {t.title} — {t.location}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
            {[
              {
                q: "Are these real client results?",
                a: "These are placeholder case studies based on typical project outcomes. Real client stories with names and metrics will be added as clients give permission.",
              },
              {
                q: "What kind of businesses do you work with?",
                a: "We work with small businesses, startups, and entrepreneurs across industries — retail, food service, professional services, creative studios, and more.",
              },
              {
                q: "How long until I see results?",
                a: "Website projects launch in 3-6 weeks. Content automations show measurable growth within 90 days. AI knowledge bases deliver ROI from day one.",
              },
            ].map((faq, i) => (
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
              Your Success Story Starts Here
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ice-white/50">
              Every project on this page started with a single conversation. Book a free call and let&apos;s talk about what you need.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className={cn(
                  "glow-cyan inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-8 py-3.5",
                  "font-[family-name:var(--font-display)] tracking-wider text-dark-deep",
                  "transition-all hover:bg-cyan-light hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                )}
              >
                Start Your Transformation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
