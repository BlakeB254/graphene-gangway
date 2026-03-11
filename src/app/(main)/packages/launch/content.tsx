"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import {
  LAUNCH_PACKAGES,
  PERFORMANCE_GUARANTEE,
} from "@/lib/services";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Check,
  Shield,
  Star,
  Gift,
  ChevronDown,
  Globe,
  Zap,
  Brain,
  Palette,
  Briefcase,
  Phone,
  ClipboardCheck,
  Sparkles,
  Package,
} from "lucide-react";

/* ─── Hero ─── */
function LaunchHero() {
  return (
    <section className="relative overflow-hidden py-28 md:py-44">
      {/* Gradient bg */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-neon/5 via-dark-deep to-dark-deep" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-neon/20 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-neon/20 bg-cyan-neon/5 px-4 py-1.5 text-xs font-medium tracking-widest text-cyan-neon uppercase">
            <Package className="h-3.5 w-3.5" />
            All-in-One Launch Packages
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-[family-name:var(--font-display)] text-5xl leading-tight tracking-wider text-ice-white md:text-7xl lg:text-8xl">
            Website. Content Engine.
            <br />
            Personal AI.{" "}
            <span className="text-cyan-neon text-glow-cyan">Six Months.</span>
            <br />
            <span className="text-warning">Guaranteed.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ice-white/60">
            Everything your business needs to launch and grow — designed,
            built, and managed for six months straight. If we don&apos;t hit
            your targets, we keep working for free.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#packages"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-neon px-8 py-3.5 text-sm font-semibold text-dark-deep shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
            >
              See Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-neon/30 px-8 py-3.5 text-sm font-semibold text-cyan-neon transition-all hover:border-cyan-neon/60 hover:bg-cyan-neon/5"
            >
              <Phone className="h-4 w-4" />
              Book a Free Call
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Package Cards with Toggle ─── */
function PackageCardsSection() {
  const [payMonthly, setPayMonthly] = useState(false);

  return (
    <section id="packages" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-5xl">
              Choose Your Launch
            </h2>
            <p className="mt-4 text-ice-white/50">
              Two packages, one guarantee. Pick the one that fits.
            </p>
          </div>
        </ScrollReveal>

        {/* Payment toggle */}
        <ScrollReveal>
          <div className="mb-12 flex flex-col items-center gap-4">
            <p className="text-sm text-ice-white/50">
              Choose your payment plan
            </p>
            <div className="flex items-center gap-4 rounded-full border border-ice-white/10 bg-dark-surface/60 p-1.5">
              <button
                onClick={() => setPayMonthly(false)}
                className={cn(
                  "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                  !payMonthly
                    ? "bg-cyan-neon text-dark-deep shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                    : "text-ice-white/60 hover:text-ice-white"
                )}
              >
                Pay Upfront &amp; Save
              </button>
              <button
                onClick={() => setPayMonthly(true)}
                className={cn(
                  "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                  payMonthly
                    ? "bg-cyan-neon text-dark-deep shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                    : "text-ice-white/60 hover:text-ice-white"
                )}
              >
                Monthly Payments
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {LAUNCH_PACKAGES.map((pkg, i) => (
            <ScrollReveal key={pkg.id} delay={i * 0.15}>
              <div
                className={cn(
                  "relative flex flex-col rounded-2xl border border-ice-white/10 bg-dark-surface/60 backdrop-blur-sm transition-all duration-300",
                  "hover:border-cyan-neon/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.08)]",
                  pkg.popular &&
                    "border-cyan-neon/40 shadow-[0_0_30px_rgba(0,240,255,0.1)]"
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-neon px-4 py-1.5 text-sm font-bold text-dark-deep shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                      <Star className="h-4 w-4" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white">
                    {pkg.name}
                  </h3>
                  <p className="mb-6 text-sm text-ice-white/50">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={payMonthly ? "monthly" : "upfront"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {payMonthly ? (
                          <div>
                            <span className="font-[family-name:var(--font-display)] text-5xl text-cyan-neon text-glow-cyan">
                              ${pkg.monthlyDown.toLocaleString()}
                            </span>
                            <span className="ml-2 text-sm text-ice-white/40">
                              down
                            </span>
                            <p className="mt-1 text-sm text-ice-white/50">
                              + ${pkg.monthlyPayment.toLocaleString()}/mo for{" "}
                              {pkg.monthlyPayments} months
                            </p>
                            <p className="mt-1 text-xs text-ice-white/30">
                              Total: $
                              {(
                                pkg.monthlyDown +
                                pkg.monthlyPayment * pkg.monthlyPayments
                              ).toLocaleString()}
                            </p>
                          </div>
                        ) : (
                          <div>
                            <span className="font-[family-name:var(--font-display)] text-5xl text-cyan-neon text-glow-cyan">
                              ${pkg.upfrontPrice.toLocaleString()}
                            </span>
                            <span className="ml-2 text-sm text-ice-white/40">
                              one-time
                            </span>
                            <p className="mt-1 text-sm text-success">
                              Save ${pkg.savings.toLocaleString()} vs a la
                              carte ({pkg.savingsPercent})
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Value line */}
                  <div className="my-4 flex items-center gap-3">
                    <span className="text-xs text-ice-white/30">
                      A la carte value:{" "}
                      <span className="line-through">
                        ${pkg.alaCarteTotal.toLocaleString()}
                      </span>
                    </span>
                    <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-bold text-success">
                      SAVE {pkg.savingsPercent}
                    </span>
                  </div>

                  {/* Includes */}
                  <ul className="mb-8 flex-1 space-y-3">
                    {pkg.includes.map((item) => {
                      const isFree = item.toLowerCase().includes("free");
                      return (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-ice-white/70"
                        >
                          {isFree ? (
                            <Gift className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                          ) : (
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-neon" />
                          )}
                          {item}
                        </li>
                      );
                    })}
                  </ul>

                  {/* Performance Guarantee badge */}
                  <div className="mb-6 rounded-xl border border-cyan-neon/20 bg-cyan-neon/5 p-4">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-cyan-neon" />
                      <span className="text-sm font-semibold text-cyan-neon">
                        Performance Guarantee Included
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-ice-white/50">
                      Up to {PERFORMANCE_GUARANTEE.value} in additional service
                      if targets aren&apos;t met
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all",
                      pkg.popular
                        ? "bg-cyan-neon text-dark-deep shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                        : "border border-cyan-neon/30 text-cyan-neon hover:border-cyan-neon/60 hover:bg-cyan-neon/5"
                    )}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Performance Guarantee ─── */
function GuaranteeSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="rounded-2xl border-l-4 border-cyan-neon bg-gradient-to-r from-cyan-neon/8 via-dark-surface/60 to-dark-surface/60 p-8 md:p-14">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-10 w-10 text-cyan-neon" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-5xl">
                {PERFORMANCE_GUARANTEE.headline}
              </h2>
            </div>

            <p className="max-w-3xl text-lg text-ice-white/70">
              {PERFORMANCE_GUARANTEE.statement}
            </p>

            {/* 3-step visual */}
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {PERFORMANCE_GUARANTEE.steps.map((step, i) => (
                <div key={i} className="relative flex items-start gap-4">
                  {i < 2 && (
                    <div className="pointer-events-none absolute left-5 top-12 hidden h-px w-[calc(100%+2rem)] bg-gradient-to-r from-cyan-neon/30 to-transparent sm:block" />
                  )}
                  <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-cyan-neon/40 bg-dark-deep">
                    <span className="font-[family-name:var(--font-display)] text-lg text-cyan-neon">
                      {i + 1}
                    </span>
                  </div>
                  <div className="pt-1.5">
                    <p className="text-sm font-medium text-ice-white">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Covers */}
            <div className="mt-10 flex flex-wrap gap-3">
              {PERFORMANCE_GUARANTEE.covers.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-neon/20 bg-cyan-neon/5 px-4 py-1.5 text-xs text-cyan-neon"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Value badge */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-warning/30 bg-warning/10 px-6 py-2.5">
              <span className="font-[family-name:var(--font-display)] text-2xl text-warning">
                {PERFORMANCE_GUARANTEE.value}
              </span>
              <span className="text-sm text-warning/80">value guarantee</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Expandable Details (Accordion) ─── */
const serviceDetailsData = [
  {
    icon: Globe,
    title: "Custom Website",
    details: [
      "Fully custom design — no templates",
      "Responsive across all devices",
      "Admin panel for content management",
      "Portfolio: gallery, about, contact, blog",
      "E-Commerce: product management, cart, checkout, coupons, order tracking",
      "Payment processing via Stripe/PayPal (E-Commerce)",
      "SEO-optimized from day one",
      "6-month support: feature buildout + bug fixes",
      "Full ownership — you keep everything",
    ],
  },
  {
    icon: Zap,
    title: "Brand Automations (6 Months, Standard Tier)",
    details: [
      "5 social media channels managed",
      "15 posts per day across platforms",
      "Monthly content calendar",
      "Blog & newsletter content",
      "Monthly analytics report",
      "Full content creation and scheduling",
      "Multi-platform distribution",
      "Performance tracking & optimization",
    ],
  },
  {
    icon: Brain,
    title: "Personal AI Knowledge Base",
    details: [
      "Custom business knowledge graph",
      "Qwen model fine-tuned on your data",
      "Self-expansion portal — add info anytime",
      "Deployed to your device (smartphone or laptop)",
      "Privacy-safe: sensitive data stripped",
      "No monthly subscription — yours to keep forever",
    ],
  },
  {
    icon: Palette,
    title: "Brand Kit (Included Free)",
    details: [
      "Primary logo + variations",
      "Icon set (5 icons)",
      "Color palette (HEX/RGB/CMYK)",
      "Typography selection",
      "Social media backgrounds (all platforms)",
      "Brand guidelines document",
      "Full file package (PNG/SVG/PDF/source files)",
    ],
  },
  {
    icon: Briefcase,
    title: "Biz Starter Kit (Included Free)",
    details: [
      "Professional business plan (bank-ready)",
      "Target market research",
      "Competitive analysis",
      "Business model canvas",
      "Financial projections",
      "Pitch deck framework",
    ],
  },
];

function ExpandableDetailsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-5xl">
              What&apos;s Included
            </h2>
            <p className="mt-4 text-ice-white/50">
              Expand each service to see exactly what you get
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {serviceDetailsData.map((item, i) => {
            const Icon = item.icon;
            const isOpen = openIndex === i;
            const isFree = item.title.includes("Free");

            return (
              <ScrollReveal key={item.title} delay={i * 0.05}>
                <div
                  className={cn(
                    "rounded-xl border transition-all duration-300",
                    isOpen
                      ? "border-cyan-neon/30 bg-dark-surface/80"
                      : "border-ice-white/10 bg-dark-surface/40"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                        isFree ? "bg-success/10" : "bg-cyan-neon/10"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-5 w-5",
                          isFree ? "text-success" : "text-cyan-neon"
                        )}
                      />
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-ice-white">
                        {item.title}
                      </span>
                    </div>
                    {isFree && (
                      <span className="mr-2 rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
                        FREE
                      </span>
                    )}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-cyan-neon/60" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-ice-white/5 px-5 pb-5 pt-4">
                          <ul className="space-y-2">
                            {item.details.map((detail) => (
                              <li
                                key={detail}
                                className="flex items-start gap-2 text-sm text-ice-white/60"
                              >
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-neon" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Market Value Comparison ─── */
const marketComparisonRows = [
  { role: "Web developer / agency", cost: "$5,000 – $20,000" },
  { role: "Brand designer", cost: "$2,000 – $5,000" },
  { role: "Social media manager (6 mo)", cost: "$12,000 – $24,000" },
  { role: "AI consultant / developer", cost: "$5,000 – $10,000" },
  { role: "Business plan writer", cost: "$1,000 – $3,000" },
];

function MarketValueSection() {
  const totalMin = 25;
  const totalMax = 62;

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-5xl">
              Market Value Comparison
            </h2>
            <p className="mt-4 text-ice-white/50">
              What you&apos;d pay hiring each specialist separately
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl border border-ice-white/10 bg-dark-surface/60 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ice-white/10">
                  <th className="p-4 text-left font-medium text-ice-white/40">
                    Specialist
                  </th>
                  <th className="p-4 text-right font-medium text-ice-white/40">
                    Market Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {marketComparisonRows.map((row) => (
                  <tr key={row.role} className="border-b border-ice-white/5">
                    <td className="p-4 text-ice-white/70">{row.role}</td>
                    <td className="p-4 text-right font-[family-name:var(--font-mono)] text-ice-white/50">
                      {row.cost}
                    </td>
                  </tr>
                ))}
                <tr className="border-b border-ice-white/10 bg-dark-deep/40">
                  <td className="p-4 font-semibold text-ice-white">
                    Total (hiring separately)
                  </td>
                  <td className="p-4 text-right font-[family-name:var(--font-display)] text-2xl text-ice-white/60">
                    $25K – $62K+
                  </td>
                </tr>
                <tr className="bg-cyan-neon/5">
                  <td className="p-4">
                    <span className="font-semibold text-cyan-neon">
                      Graphene Gangway Launch Package
                    </span>
                    <span className="ml-2 text-xs text-ice-white/40">
                      (everything above included)
                    </span>
                  </td>
                  <td className="p-4 text-right font-[family-name:var(--font-display)] text-3xl text-cyan-neon text-glow-cyan">
                    $13.5 – $14K
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-center text-sm text-ice-white/40">
            Plus the Performance Guarantee — up to{" "}
            <span className="font-semibold text-warning">$12,000</span> in
            additional service if we miss your targets.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
const faqItems = [
  {
    question: "What's the difference between the two Launch Packages?",
    answer:
      "The Portfolio Launch includes a custom portfolio website (gallery, about, contact, blog), while the E-Commerce Launch includes a full e-commerce site with product management, shopping cart, payment processing, coupon system, and order tracking. Both include 6 months of Standard Brand Automations, a Personal AI Knowledge Base, Brand Kit, Biz Starter Kit, and the Performance Guarantee.",
  },
  {
    question: "What does the Performance Guarantee actually cover?",
    answer:
      "At kickoff, we agree on measurable targets (follower growth, website traffic, lead volume, engagement rates, or revenue attribution). At the 6-month mark, if we haven't hit those targets, we continue your Brand Automations for up to 6 additional months at no cost — that's up to $12,000 in free service.",
  },
  {
    question: "Can I pay monthly instead of upfront?",
    answer:
      "Yes. The monthly plan requires a down payment to start ($3,000 for Portfolio, $4,000 for E-Commerce), followed by $2,000/month for 6 months. Paying upfront saves you $1,500–$2,000 compared to individual pricing.",
  },
  {
    question: "How long does it take to launch?",
    answer:
      "Most packages launch within 4-6 weeks. Your website goes live first, followed by your Brand Automations and AI Knowledge Base. We run everything in parallel to get you up and running fast.",
  },
  {
    question: "Do I own everything when we're done?",
    answer:
      "Yes — 100%. Your website, your code, your brand assets, your AI model. After our 6-month support period, you have full independence. No lock-in, no recurring fees for the website or AI.",
  },
  {
    question: "What happens after the 6 months of support?",
    answer:
      "After 6 months, your website and AI continue to run independently. Brand Automations can be renewed at the same monthly rate or upgraded to a higher tier. We also offer optional extended support plans if you want continued website optimization.",
  },
  {
    question: "What if I only need a website and not the full package?",
    answer:
      "You can purchase any service individually — a portfolio site starts at $1,500 and an e-commerce site at $2,500. Visit our pricing page to see all individual services, or use the package calculator to build your own bundle.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Absolutely. You can upgrade your Brand Automations tier at any time, add more AI integrations (Connected KB or Business Agent tier), or add services to your website. We'll credit what you've already paid toward the upgrade.",
  },
  {
    question: "What platforms do Brand Automations support?",
    answer:
      "The Standard tier (included in Launch Packages) covers 5 social media channels — typically Instagram, Facebook, Twitter/X, LinkedIn, and TikTok. We also create blog and newsletter content. Higher tiers support up to 7+ channels with video production and ad management.",
  },
  {
    question: "Is my data safe with the AI Knowledge Base?",
    answer:
      "Yes. Your AI model is deployed to your own device (smartphone or laptop). We strip sensitive personal data during training, and the model runs locally — your business knowledge never sits on our servers after delivery.",
  },
];

function FAQSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="mb-4 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-ice-white/50">
              Everything you need to know about Launch Packages
            </p>
          </div>
        </ScrollReveal>

        <FAQAccordion items={faqItems} className="py-0 md:py-0" />
      </div>
    </section>
  );
}

/* ─── CTA Footer ─── */
function CTAFooter() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="rounded-2xl border border-cyan-neon/20 bg-gradient-to-br from-cyan-neon/5 via-dark-surface/60 to-dark-surface/60 p-10 text-center md:p-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-5xl">
              Your Business Deserves
              <br />
              <span className="text-cyan-neon text-glow-cyan">a Real Launch</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ice-white/50">
              Stop piecing it together. Get everything in one package, one
              team, one guarantee.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-neon px-8 py-3.5 text-sm font-semibold text-dark-deep shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
              >
                <Phone className="h-4 w-4" />
                Book a Free Discovery Call
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-neon/30 px-8 py-3.5 text-sm font-semibold text-cyan-neon transition-all hover:border-cyan-neon/60 hover:bg-cyan-neon/5"
              >
                <Sparkles className="h-4 w-4" />
                Pay Upfront &amp; Save
              </Link>
              <Link
                href="/assessment"
                className="inline-flex items-center gap-2 rounded-xl border border-ice-white/20 px-8 py-3.5 text-sm font-semibold text-ice-white/70 transition-all hover:border-ice-white/40 hover:text-ice-white"
              >
                <ClipboardCheck className="h-4 w-4" />
                Take Our Assessment
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Page Content ─── */
export function LaunchPackagesContent() {
  return (
    <div className="min-h-screen bg-dark-deep">
      <LaunchHero />
      <PackageCardsSection />
      <GuaranteeSection />
      <ExpandableDetailsSection />
      <MarketValueSection />
      <FAQSection />
      <CTAFooter />
    </div>
  );
}
