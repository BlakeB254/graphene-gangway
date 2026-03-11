"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlowDivider } from "@/components/animations/GlowDivider";
import { HexGrid } from "@/components/backgrounds/HexGrid";
import { Counter } from "@/components/animations/Counter";
import { getServiceBySlug } from "@/lib/services";
import { cn } from "@/lib/utils";
import {
  Check,
  ChevronDown,
  Zap,
  ArrowRight,
  Package,
  Users,
  Calendar,
  BarChart3,
  Settings,
  Video,
  TestTube,
  Megaphone,
  Crown,
  LayoutDashboard,
  UserPlus,
  Clock,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Target,
  PenTool,
  Send,
  LineChart,
  RefreshCw,
} from "lucide-react";

const service = getServiceBySlug("brand-automations")!;

const TIERS = service.tiers!;

const TIER_ICONS = [Zap, Calendar, TrendingUp, Crown];

const VOLUME_STATS = [
  { label: "Posts per day", starter: "9", standard: "15", growth: "20", enterprise: "30" },
  { label: "Channels", starter: "3", standard: "5", growth: "7", enterprise: "7+" },
  { label: "Posts per month", starter: "~270", standard: "~450", growth: "~600", enterprise: "~900" },
  { label: "Blog & newsletter", starter: false, standard: true, growth: true, enterprise: true },
  { label: "Video production", starter: false, standard: false, growth: true, enterprise: true },
  { label: "A/B testing", starter: false, standard: false, growth: true, enterprise: true },
  { label: "Ad management", starter: false, standard: false, growth: true, enterprise: true },
  { label: "Dedicated strategist", starter: false, standard: false, growth: false, enterprise: true },
  { label: "Multi-brand support", starter: false, standard: false, growth: false, enterprise: true },
];

const PROCESS_STEPS = [
  { icon: MessageSquare, step: "01", title: "Onboarding", desc: "We learn your voice, audience, goals, and brand personality." },
  { icon: Target, step: "02", title: "Strategy", desc: "Content pillars, posting schedule, channel selection, and KPI targets." },
  { icon: PenTool, step: "03", title: "Content Creation", desc: "Posts, graphics, captions, hashtags, and blog content — all on-brand." },
  { icon: Calendar, step: "04", title: "Scheduling", desc: "Content queued for optimal engagement times across all channels." },
  { icon: Send, step: "05", title: "Distribution", desc: "Automated publishing to every platform, every day." },
  { icon: LineChart, step: "06", title: "Analytics", desc: "Monthly performance reports with engagement, reach, and growth data." },
  { icon: RefreshCw, step: "07", title: "Optimization", desc: "We refine strategy based on what's working and what's not." },
];

const FAQS = [
  {
    q: "What social media channels do you support?",
    a: "Instagram, Facebook, X (Twitter), LinkedIn, TikTok, YouTube, Pinterest, and more. The number of active channels depends on your tier — from 3 to 7+.",
  },
  {
    q: "Is this real content or just AI slop?",
    a: "It's strategically crafted content shaped by AI tools and refined by humans. Every post aligns with your brand voice, audience, and goals. We don't do generic — we do you.",
  },
  {
    q: "Do I need to approve every post?",
    a: "During the first month, we share content for approval to dial in your voice. After that, most clients trust the process and review monthly reports instead. You always have access to the content calendar.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Brand Automations is month-to-month with no long-term contract. We require 30 days notice to cancel. Launch Package commitments are 6 months.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients see engagement increases within the first month. Meaningful follower growth and traffic typically ramp up in months 2-3. Our Performance Guarantee (with Launch Packages) ensures accountability.",
  },
  {
    q: "What's included in the monthly analytics report?",
    a: "Follower growth, engagement rates, reach and impressions, top-performing content, audience demographics, and recommendations for the next month's strategy.",
  },
  {
    q: "Do you manage paid ads too?",
    a: "Ad management is included in the Growth and Enterprise tiers. This covers campaign setup, targeting, creative, and optimization. Ad spend is separate and billed directly by the platforms.",
  },
  {
    q: "Are the Brand Kit and Biz Starter Kit really included?",
    a: "Yes. Every Brand Automations plan includes a free Brand Kit ($99 value) and Biz Starter Kit ($199 value). We need your brand assets to create consistent content, so we build them for you.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-dark-mid rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-surface/50 transition-colors"
      >
        <span className="text-ice-white font-medium pr-4">{q}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-cyan-neon shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 pb-5 px-5" : "max-h-0"
        )}
      >
        <p className="text-ice-white/60 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export function BrandAutomationsContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HexGrid />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon/70 tracking-widest uppercase mb-4">
              Automated Content &amp; Social Media
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-cyan-neon text-glow-cyan tracking-wider mb-6">
              YOUR BRAND, EVERYWHERE, EVERY DAY
            </h1>
            <p className="text-lg md:text-xl text-ice-white/70 max-w-2xl mx-auto mb-8">
              {service.tagline}
            </p>
            <p className="font-[family-name:var(--font-display)] text-2xl text-ice-white/60">
              From $1,200/mo
            </p>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Content Volume Stats */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="font-[family-name:var(--font-display)] text-5xl text-cyan-neon">
                  <Counter value={15} />+
                </p>
                <p className="text-ice-white/50 text-sm mt-2">Posts per day (Standard)</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-5xl text-cyan-neon">
                  <Counter value={5} />
                </p>
                <p className="text-ice-white/50 text-sm mt-2">Channels managed</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-5xl text-cyan-neon">
                  ~<Counter value={450} />
                </p>
                <p className="text-ice-white/50 text-sm mt-2">Posts per month</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* 4-Tier Comparison */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-4">
              CHOOSE YOUR TIER
            </h2>
            <p className="text-ice-white/50 text-center max-w-xl mx-auto mb-16">
              Scale your content machine as your business grows.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIERS.map((tier, i) => {
              const TierIcon = TIER_ICONS[i];
              return (
                <ScrollReveal key={tier.name} delay={i * 0.1}>
                  <div
                    className={cn(
                      "bg-dark-surface border rounded-lg p-6 h-full flex flex-col relative",
                      tier.popular
                        ? "border-cyan-neon/40"
                        : "border-dark-mid hover:border-cyan-neon/30 transition-colors"
                    )}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-neon text-dark-deep text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </div>
                    )}
                    <TierIcon className="w-8 h-8 text-cyan-neon mb-3" />
                    <h3 className="font-[family-name:var(--font-display)] text-xl text-ice-white mb-1">
                      {tier.name.toUpperCase()}
                    </h3>
                    <p className="text-ice-white/50 text-sm mb-4">{tier.description}</p>
                    <p className="font-[family-name:var(--font-display)] text-3xl text-cyan-neon mb-1">
                      {tier.priceLabel}
                    </p>
                    <p className="text-ice-white/40 text-xs mb-6">/month</p>
                    <ul className="space-y-2 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                          <span className="text-ice-white/70 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/contact?service=brand-automations&tier=${tier.name.toLowerCase()}`}
                      className={cn(
                        "mt-6 block text-center px-4 py-3 font-[family-name:var(--font-display)] tracking-wider transition-colors",
                        tier.popular
                          ? "bg-cyan-neon text-dark-deep hover:bg-cyan-dim"
                          : "border border-cyan-neon text-cyan-neon hover:bg-cyan-neon/10"
                      )}
                    >
                      GET STARTED
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Volume Comparison Table */}
      <section className="py-20 md:py-28 px-6 bg-dark-surface/50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              TIER COMPARISON
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="border border-dark-mid rounded-lg overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-dark-mid/50">
                    <th className="text-left p-4 text-ice-white/50 text-sm font-medium">Feature</th>
                    <th className="text-center p-4 font-[family-name:var(--font-display)] text-ice-white">STARTER</th>
                    <th className="text-center p-4 font-[family-name:var(--font-display)] text-cyan-neon">STANDARD</th>
                    <th className="text-center p-4 font-[family-name:var(--font-display)] text-ice-white">GROWTH</th>
                    <th className="text-center p-4 font-[family-name:var(--font-display)] text-ice-white">ENTERPRISE</th>
                  </tr>
                </thead>
                <tbody>
                  {VOLUME_STATS.map((row, i) => (
                    <tr
                      key={row.label}
                      className={cn(
                        "border-t border-dark-mid/50",
                        i % 2 === 0 && "bg-dark-surface/30"
                      )}
                    >
                      <td className="p-4 text-ice-white/70 text-sm">{row.label}</td>
                      {(["starter", "standard", "growth", "enterprise"] as const).map((tier) => (
                        <td key={tier} className="p-4 text-center">
                          {typeof row[tier] === "boolean" ? (
                            row[tier] ? (
                              <Check className="w-4 h-4 text-success mx-auto" />
                            ) : (
                              <span className="text-ice-white/20">&mdash;</span>
                            )
                          ) : (
                            <span className="text-ice-white/70 text-sm font-[family-name:var(--font-mono)]">
                              {row[tier]}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* ROI Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Clock className="w-12 h-12 text-cyan-neon mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white mb-6">
              HOW MUCH IS YOUR TIME WORTH?
            </h2>
            <p className="text-ice-white/60 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Creating 15 social media posts a day takes 3&ndash;4 hours of skilled work.
              At $50/hour, that&apos;s $150&ndash;$200/day &mdash; $4,500&ndash;$6,000/month &mdash;
              just for content creation. And that doesn&apos;t include strategy, analytics, or optimization.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <div className="bg-dark-surface border border-dark-mid rounded-lg p-6">
                <DollarSign className="w-8 h-8 text-warning mx-auto mb-3" />
                <p className="font-[family-name:var(--font-display)] text-2xl text-ice-white mb-1">
                  DIY COST
                </p>
                <p className="font-[family-name:var(--font-display)] text-3xl text-warning">
                  $4,500&ndash;$6,000
                </p>
                <p className="text-ice-white/40 text-xs mt-1">/month in your time</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-dark-surface border border-dark-mid rounded-lg p-6">
                <Users className="w-8 h-8 text-warning mx-auto mb-3" />
                <p className="font-[family-name:var(--font-display)] text-2xl text-ice-white mb-1">
                  HIRE IN-HOUSE
                </p>
                <p className="font-[family-name:var(--font-display)] text-3xl text-warning">
                  $5,000&ndash;$8,000
                </p>
                <p className="text-ice-white/40 text-xs mt-1">/month salary + benefits</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-dark-surface border border-cyan-neon/40 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-neon text-dark-deep text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </div>
                <Zap className="w-8 h-8 text-cyan-neon mx-auto mb-3" />
                <p className="font-[family-name:var(--font-display)] text-2xl text-ice-white mb-1">
                  GRAPHENE GANGWAY
                </p>
                <p className="font-[family-name:var(--font-display)] text-3xl text-cyan-neon">
                  $2,000
                </p>
                <p className="text-ice-white/40 text-xs mt-1">/month Standard tier</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Process */}
      <section className="py-20 md:py-28 px-6 bg-dark-surface/50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              THE PROCESS
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.slice(0, 4).map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-cyan-neon/10 border border-cyan-neon/30 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-cyan-neon" />
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon/50">
                    {item.step}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-ice-white mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-ice-white/50 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            {PROCESS_STEPS.slice(4).map((item, i) => (
              <ScrollReveal key={item.step} delay={(i + 4) * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-cyan-neon/10 border border-cyan-neon/30 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-cyan-neon" />
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon/50">
                    {item.step}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-ice-white mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-ice-white/50 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              QUESTIONS & ANSWERS
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <FAQItem q={faq.q} a={faq.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Triple CTA */}
      <section className="py-20 md:py-28 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-cyan-neon text-glow-cyan mb-4">
            READY TO AUTOMATE YOUR BRAND?
          </h2>
          <p className="text-ice-white/60 mb-10 max-w-md mx-auto">
            Stop spending hours on social media. Let us handle it &mdash; every channel, every day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?service=brand-automations"
              className="px-8 py-3 bg-cyan-neon text-dark-deep font-[family-name:var(--font-display)] text-lg tracking-wider hover:bg-cyan-dim transition-colors duration-300"
            >
              GET STARTED
            </Link>
            <Link
              href="/contact?type=call"
              className="px-8 py-3 border border-cyan-neon text-cyan-neon font-[family-name:var(--font-display)] text-lg tracking-wider hover:bg-cyan-neon/10 transition-colors duration-300"
            >
              BOOK A CALL
            </Link>
            <Link
              href="/assessment"
              className="px-8 py-3 text-ice-white/60 hover:text-cyan-neon font-[family-name:var(--font-display)] text-lg tracking-wider transition-colors duration-300"
            >
              TAKE ASSESSMENT
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <GlowDivider />

      {/* Cross-Sell */}
      <section className="py-20 md:py-28 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto bg-dark-surface border border-dark-mid rounded-lg p-8 md:p-12 text-center corner-frame">
            <Package className="w-10 h-10 text-cyan-neon mx-auto mb-4" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-ice-white mb-4">
              SAVE MORE WITH A LAUNCH PACKAGE
            </h2>
            <p className="text-ice-white/60 mb-6 max-w-lg mx-auto">
              Bundle 6 months of automations with a custom website, AI Knowledge Base,
              and more. Save up to 12.5% plus our Performance Guarantee.
            </p>
            <Link
              href="/packages/launch"
              className="inline-flex items-center gap-2 text-cyan-neon hover:text-cyan-dim transition-colors font-[family-name:var(--font-display)] tracking-wider"
            >
              VIEW LAUNCH PACKAGES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
