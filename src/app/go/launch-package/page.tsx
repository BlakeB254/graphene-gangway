"use client";

import { LandingHero } from "@/components/sections/LandingHero";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  Check,
  Shield,
  Rocket,
  Star,
  ArrowRight,
  Clock,
  TrendingUp,
  Globe,
  ShoppingCart,
  Zap,
  Brain,
  Palette,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import {
  LAUNCH_PACKAGES,
  PERFORMANCE_GUARANTEE,
} from "@/lib/services";

const STATS = [
  { value: "6 mo", label: "Full Support" },
  { value: "5", label: "Services Bundled" },
  { value: "12.5%", label: "Max Savings" },
  { value: "$12K", label: "Guarantee Value" },
];

const PACKAGE_ICONS: Record<string, typeof Globe> = {
  "portfolio-launch": Globe,
  "ecommerce-launch": ShoppingCart,
};

const INCLUDE_ICONS = [
  Globe,
  Zap,
  Brain,
  Palette,
  Briefcase,
  Shield,
  TrendingUp,
];

const FAQS = [
  {
    q: "What exactly is included in the Launch Package?",
    a: "Everything you need to launch: a custom website, 6 months of automated content across 5 social channels (15 posts/day), a personal AI knowledge base, your brand kit, a business plan, 6 months of site support, and our Performance Guarantee.",
  },
  {
    q: "Can I pay monthly instead of upfront?",
    a: "Yes. You can put a down payment and pay the rest over 6 monthly installments. But paying upfront saves you money — up to 12.5% off the total.",
  },
  {
    q: "What if I don't hit my goals in 6 months?",
    a: `Our Performance Guarantee covers that. ${PERFORMANCE_GUARANTEE.statement}`,
  },
  {
    q: "How soon can we start?",
    a: "We kick off within one week of signing. Your brand kit and business plan start immediately while we begin the website design phase.",
  },
  {
    q: "What happens after the 6 months?",
    a: "You own everything — the website, the brand assets, the AI model. You can continue automations on a month-to-month basis, or manage everything independently.",
  },
];

export default function LaunchPackageLandingPage() {
  return (
    <>
      {/* 1. HERO */}
      <LandingHero
        headline="Website. Content Engine. Personal AI. Six Months. Guaranteed."
        subheadline="Everything your business needs to launch and grow — bundled into one package with a performance guarantee that puts our money where our mouth is."
        primaryCTA={{ label: "Book a Free Call", href: "/contact" }}
        secondaryCTA={{ label: "Pay Upfront & Save", href: "/contact?action=upfront" }}
        badge="LIMITED SPOTS AT PROMOTIONAL PRICING"
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

      {/* 3. OFFER BREAKDOWN — PACKAGES SIDE BY SIDE */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Choose Your Launch Package
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-ice-white/50">
              Everything bundled. Savings built in. Performance guaranteed.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {LAUNCH_PACKAGES.map((pkg, pkgIndex) => {
              const Icon = PACKAGE_ICONS[pkg.id] || Rocket;
              return (
                <ScrollReveal key={pkg.id} delay={pkgIndex * 0.1}>
                  <div
                    className={cn(
                      "corner-frame rounded-xl border bg-dark-surface p-8",
                      pkg.popular
                        ? "border-cyan-neon/30 glow-cyan"
                        : "border-dark-mid"
                    )}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 right-6 rounded-full bg-cyan-neon px-3 py-0.5 text-xs font-bold text-dark-deep">
                        MOST POPULAR
                      </span>
                    )}
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-cyan-neon" />
                      <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                        {pkg.shortName}
                      </h3>
                    </div>

                    <div className="mt-4">
                      <p className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-cyan-neon">
                        ${pkg.upfrontPrice.toLocaleString()}
                      </p>
                      <p className="mt-1 text-sm text-ice-white/40">
                        upfront &mdash; or ${pkg.monthlyDown.toLocaleString()} down + ${pkg.monthlyPayment.toLocaleString()}/mo &times; {pkg.monthlyPayments}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center gap-2 rounded-lg bg-success/10 px-3 py-2">
                      <TrendingUp className="h-4 w-4 text-success" />
                      <span className="text-sm text-success">
                        Save {pkg.savingsPercent} vs a la carte (${pkg.savings.toLocaleString()} off)
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {pkg.includes.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-ice-white/70"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/contact?package=${pkg.id}`}
                      className={cn(
                        "mt-8 flex w-full items-center justify-center rounded-lg py-3",
                        "font-[family-name:var(--font-display)] tracking-wider",
                        pkg.popular
                          ? "glow-cyan bg-cyan-neon text-dark-deep transition-all hover:bg-cyan-light hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                          : "border border-ice-white/20 text-ice-white/80 transition-all hover:border-cyan-neon/40 hover:text-cyan-neon"
                      )}
                    >
                      Get Started
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED BREAKDOWN */}
      <section className="border-t border-dark-mid/30 bg-dark-surface/30 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Everything In Your Launch Package
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Globe, title: "Custom Website", desc: "Portfolio or full e-commerce — designed from scratch, fully responsive, with admin panel." },
              { icon: Zap, title: "6 Months Automations", desc: "15 posts/day across 5 channels. Content calendar, blog, newsletter, and analytics." },
              { icon: Brain, title: "AI Knowledge Base", desc: "A personal AI trained on your business data. Runs on your device. No subscription." },
              { icon: Palette, title: "Brand Kit", desc: "Logo, icons, colors, typography, social media assets, and brand guidelines. Included free." },
              { icon: Briefcase, title: "Biz Starter Kit", desc: "Business plan, market research, competitive analysis, financial projections. Included free." },
              { icon: Shield, title: "Performance Guarantee", desc: "Miss your targets? We continue automations for 6 more months — free. Up to $12K value." },
            ].map((item, i) => (
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
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE GUARANTEE */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="corner-frame rounded-xl border border-cyan-neon/20 bg-dark-surface p-8 text-center glow-cyan">
              <Shield className="mx-auto h-12 w-12 text-cyan-neon" />
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white">
                {PERFORMANCE_GUARANTEE.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-ice-white/60">
                {PERFORMANCE_GUARANTEE.statement}
              </p>

              <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
                {PERFORMANCE_GUARANTEE.steps.map((step, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-dark-mid bg-dark-deep/50 p-4"
                  >
                    <span className="font-[family-name:var(--font-mono)] text-xs text-cyan-neon">
                      STEP {i + 1}
                    </span>
                    <p className="mt-1 text-sm text-ice-white/70">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {PERFORMANCE_GUARANTEE.covers.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-dark-mid bg-dark-deep/50 px-3 py-1 text-xs text-ice-white/50"
                  >
                    {item}
                  </span>
                ))}
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
                &ldquo;The launch package was a game-changer. In 6 months we went from an idea on a napkin to a fully automated online business with content going out every single day. The AI knowledge base alone saved us hours each week.&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-[family-name:var(--font-display)] tracking-wide text-ice-white">
                  Client Name
                </p>
                <p className="text-sm text-ice-white/40">
                  Founder, E-Commerce Brand — Chicago, IL
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* URGENCY BANNER */}
      <section className="py-8">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 rounded-lg border border-warning/30 bg-warning/10 px-6 py-4">
              <Clock className="h-5 w-5 text-warning" />
              <p className="text-sm font-medium text-warning">
                Limited spots available at promotional pricing. Lock in your rate before it increases.
              </p>
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
              Launch Your Business the Right Way
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ice-white/50">
              Website, content, AI, brand — all handled. Book a call and we&apos;ll build your custom launch plan.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  "glow-cyan inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-8 py-3.5",
                  "font-[family-name:var(--font-display)] tracking-wider text-dark-deep",
                  "transition-all hover:bg-cyan-light hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                )}
              >
                Book a Free Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?action=upfront"
                className={cn(
                  "inline-flex items-center rounded-lg border border-ice-white/20 px-8 py-3.5",
                  "font-[family-name:var(--font-display)] tracking-wider text-ice-white/80",
                  "transition-all hover:border-cyan-neon/40 hover:text-cyan-neon"
                )}
              >
                Pay Upfront &amp; Save
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
