"use client";

import { LandingHero } from "@/components/sections/LandingHero";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  Check,
  Zap,
  Calendar,
  BarChart3,
  Video,
  Target,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/services";

const automationService = SERVICES.find((s) => s.slug === "brand-automations")!;
const tiers = automationService.tiers!;

const STATS = [
  { value: "15+", label: "Posts Per Day" },
  { value: "5+", label: "Channels" },
  { value: "450+", label: "Posts Per Month" },
  { value: "0", label: "Hours From You" },
];

const HOW_IT_WORKS = [
  {
    icon: Calendar,
    title: "Monthly Content Calendar",
    description: "We plan a full month of content aligned with your brand voice, audience, and goals.",
  },
  {
    icon: Zap,
    title: "Automated Creation",
    description: "AI-powered content generation creates posts, graphics, and copy at scale — reviewed by humans.",
  },
  {
    icon: Target,
    title: "Multi-Channel Distribution",
    description: "Content is scheduled and published across all your social platforms automatically.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Monthly performance reports so you know exactly what's working and what to optimize.",
  },
];

const FAQS = [
  {
    q: "What social media platforms do you support?",
    a: "Instagram, Facebook, X (Twitter), LinkedIn, TikTok, YouTube, Pinterest, and more. The number of channels depends on your tier.",
  },
  {
    q: "Do I need to approve every post?",
    a: "You'll receive a monthly content calendar for review. After approval, everything runs on autopilot. You can request changes anytime.",
  },
  {
    q: "Is this just AI-generated garbage?",
    a: "No. We use AI to scale production, but every piece of content is reviewed, edited, and aligned with your brand voice. Quality matters more than quantity.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Automations are month-to-month. No long-term contracts unless you're on a Launch Package.",
  },
  {
    q: "What if I already have a social media presence?",
    a: "Great — we'll audit your existing content, learn your voice, and pick up where you left off. We amplify what's working.",
  },
];

export default function AutomationsLandingPage() {
  return (
    <>
      {/* 1. HERO */}
      <LandingHero
        headline="Your Brand, Everywhere, Every Day — Hands Off"
        subheadline="Automated content creation and distribution across every major social platform. 15+ posts per day, 5+ channels, zero hours from you."
        primaryCTA={{ label: "Book a Call", href: "/contact" }}
        badge="BRAND AUTOMATIONS"
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

      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              How It Works
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {HOW_IT_WORKS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-neon/10">
                    <item.icon className="h-6 w-6 text-cyan-neon" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white">
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

      {/* 3. OFFER BREAKDOWN — TIER CARDS */}
      <section className="border-t border-dark-mid/30 bg-dark-surface/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Choose Your Tier
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-ice-white/50">
              Brand Kit and Biz Starter Kit included free with every tier.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.1}>
                <div
                  className={cn(
                    "corner-frame flex flex-col rounded-xl border bg-dark-surface p-6",
                    tier.popular
                      ? "border-cyan-neon/30 glow-cyan"
                      : "border-dark-mid"
                  )}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-neon px-3 py-0.5 text-xs font-bold text-dark-deep">
                      POPULAR
                    </span>
                  )}
                  <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white">
                    {tier.name}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-display)] text-3xl tracking-wide text-cyan-neon">
                    {tier.priceLabel}
                    <span className="text-base text-ice-white/40">{tier.period}</span>
                  </p>
                  <p className="mt-1 text-sm text-ice-white/40">{tier.description}</p>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-ice-white/70"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?service=automations&tier=${tier.name.toLowerCase()}`}
                    className={cn(
                      "mt-6 flex w-full items-center justify-center rounded-lg py-2.5 text-sm",
                      "font-[family-name:var(--font-display)] tracking-wider",
                      tier.popular
                        ? "glow-cyan bg-cyan-neon text-dark-deep transition-all hover:bg-cyan-light"
                        : "border border-ice-white/20 text-ice-white/80 transition-all hover:border-cyan-neon/40 hover:text-cyan-neon"
                    )}
                  >
                    Get Started
                  </Link>
                </div>
              </ScrollReveal>
            ))}
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
                &ldquo;We went from posting once a week to 15 times a day across 5 platforms. Our follower count tripled in 3 months and we didn&apos;t write a single post ourselves.&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-[family-name:var(--font-display)] tracking-wide text-ice-white">
                  Client Name
                </p>
                <p className="text-sm text-ice-white/40">
                  Marketing Director, Local Brand — Chicago, IL
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
              Put Your Content on Autopilot
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ice-white/50">
              Stop spending hours on social media. Let us handle the creation, scheduling, and distribution while you focus on running your business.
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
                Book a Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
