"use client";

import { LandingHero } from "@/components/sections/LandingHero";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  Check,
  Brain,
  Smartphone,
  Shield,
  RefreshCw,
  MessageSquare,
  Workflow,
  Database,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/services";

const aiService = SERVICES.find((s) => s.slug === "ai-knowledge-base")!;
const tiers = aiService.tiers!;

const STATS = [
  { value: "100%", label: "Privacy-Safe" },
  { value: "Your", label: "Device" },
  { value: "$0/mo", label: "Base Tier" },
  { value: "24/7", label: "Available" },
];

const USE_CASES = [
  {
    icon: MessageSquare,
    title: "Instant Business Answers",
    description: "Ask your AI anything about your business — operations, pricing, policies, customer history. Get accurate answers instantly.",
  },
  {
    icon: Database,
    title: "Centralized Knowledge",
    description: "Every document, process, and piece of institutional knowledge in one queryable system. No more searching through folders.",
  },
  {
    icon: RefreshCw,
    title: "Self-Expanding",
    description: "Add information anytime through the self-expansion portal. Your AI gets smarter as your business grows.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "Sensitive data is stripped during training. The model runs on your device — not in the cloud. Your data stays yours.",
  },
];

const FAQS = [
  {
    q: "What data do you train the AI on?",
    a: "Anything you provide — business documents, SOPs, product catalogs, FAQs, email templates, pricing sheets, customer data (anonymized). The more you give it, the smarter it gets.",
  },
  {
    q: "Does it run in the cloud or on my device?",
    a: "The base Knowledge Base tier runs entirely on your device (smartphone or laptop). Connected KB and Business Agent tiers have cloud components for integrations and auto-sync.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Sensitive information (SSN, credit cards, passwords) is stripped during training. The base model runs locally with no external data transmission. Higher tiers use encrypted connections for integrations.",
  },
  {
    q: "What's the difference between a Knowledge Base and a Business Agent?",
    a: "A Knowledge Base answers questions. A Business Agent takes action — sending emails, creating tasks, generating reports, and automating workflows across your connected tools.",
  },
  {
    q: "Can I try it before committing?",
    a: "Book a demo call and we'll show you a working example with sample business data so you can see exactly what you'd get.",
  },
];

export default function AIKnowledgeBaseLandingPage() {
  return (
    <>
      {/* 1. HERO */}
      <LandingHero
        headline="A Personal AI That Actually Knows Your Business"
        subheadline="Custom AI trained on your data, deployed to your device. From simple knowledge bases to full autonomous business agents."
        primaryCTA={{ label: "Book a Demo", href: "/contact?service=ai-knowledge-base" }}
        badge="AI KNOWLEDGE BASE"
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

      {/* USE CASES */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              What Your AI Can Do
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {USE_CASES.map((item, i) => (
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

      {/* 3. OFFER BREAKDOWN — 3 TIERS */}
      <section className="border-t border-dark-mid/30 bg-dark-surface/30 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Choose Your Tier
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                  <div className="flex items-center gap-3">
                    <Brain className="h-5 w-5 text-cyan-neon" />
                    <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white">
                      {tier.name}
                    </h3>
                  </div>
                  <p className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-wide text-cyan-neon">
                    {tier.priceLabel}
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
                    href={`/contact?service=ai-knowledge-base&tier=${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
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
                &ldquo;Our team used to spend 2 hours a day just answering the same questions from new hires. Now the AI handles it — onboarding, processes, pricing, everything. It paid for itself in the first week.&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-[family-name:var(--font-display)] tracking-wide text-ice-white">
                  Client Name
                </p>
                <p className="text-sm text-ice-white/40">
                  Operations Manager, Service Company — Chicago, IL
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
              Your Business Knowledge, Always Available
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ice-white/50">
              Stop answering the same questions. Stop searching through folders. Put your business knowledge into an AI that&apos;s available 24/7.
            </p>
            <div className="mt-10">
              <Link
                href="/contact?service=ai-knowledge-base"
                className={cn(
                  "glow-cyan inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-8 py-3.5",
                  "font-[family-name:var(--font-display)] tracking-wider text-dark-deep",
                  "transition-all hover:bg-cyan-light hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                )}
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
