"use client";

import { LandingHero } from "@/components/sections/LandingHero";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  Check,
  Globe,
  ShoppingCart,
  Shield,
  Smartphone,
  Palette,
  Headphones,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "87+", label: "Brands Built" },
  { value: "100%", label: "Client Ownership" },
  { value: "6 mo", label: "Free Support" },
  { value: "$0", label: "Monthly Fees" },
];

const PORTFOLIO_FEATURES = [
  "Custom design tailored to your brand",
  "Fully responsive on every device",
  "Content management admin panel",
  "Brand Kit included free",
  "6-month support (bug fixes + minor updates)",
  "Full independence — you own everything",
];

const ECOMMERCE_FEATURES = [
  "Custom design tailored to your brand",
  "Fully responsive on every device",
  "Full e-commerce admin panel",
  "Product management & shopping cart",
  "Payment processing (Stripe/PayPal)",
  "Coupon/deal generator & order tracking",
  "Brand Kit + Biz Starter Kit included free",
  "6-month support (marketplace optimization + bug fixes)",
  "Full independence — you own everything",
];

const BENEFITS = [
  {
    icon: Palette,
    title: "Custom Design",
    description: "No templates. Your site is designed from scratch to match your brand.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Looks great on phones, tablets, and desktops. Always.",
  },
  {
    icon: Shield,
    title: "You Own Everything",
    description: "No vendor lock-in. No monthly platform fees. It's yours.",
  },
  {
    icon: Headphones,
    title: "6-Month Support",
    description: "Bug fixes, minor updates, and guidance included for six months.",
  },
];

const FAQS = [
  {
    q: "How long does a website take to build?",
    a: "Portfolio sites typically take 3-4 weeks. E-Commerce sites take 4-6 weeks depending on product volume and integrations.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Not at all. Every site comes with an admin panel so you can update content, add products, and manage orders without touching code.",
  },
  {
    q: "What happens after the 6-month support period?",
    a: "You keep the site. You own everything — code, design, hosting account. You can maintain it yourself or hire anyone to continue.",
  },
  {
    q: "Can I upgrade from Portfolio to E-Commerce later?",
    a: "Absolutely. We build with scalability in mind. Upgrading later is straightforward and we offer existing-client pricing.",
  },
];

export default function WebsiteLandingPage() {
  return (
    <>
      {/* 1. HERO */}
      <LandingHero
        headline="Custom Websites That Actually Work for Your Business"
        subheadline="No templates. No monthly fees. A website designed for your brand, built for conversions, and fully owned by you."
        primaryCTA={{ label: "Book a Free Call", href: "/contact" }}
        secondaryCTA={{ label: "Get Started Now", href: "/contact?action=start" }}
        badge="CUSTOM WEB DEVELOPMENT"
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

      {/* 3. OFFER BREAKDOWN — PRICING SIDE BY SIDE */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Choose Your Package
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-ice-white/50">
              Both packages include a free Brand Kit and full code ownership.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Portfolio */}
            <ScrollReveal delay={0.1}>
              <div className="corner-frame rounded-xl border border-dark-mid bg-dark-surface p-8">
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-cyan-neon" />
                  <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                    Portfolio
                  </h3>
                </div>
                <p className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-wide text-cyan-neon">
                  $1,500
                </p>
                <p className="mt-1 text-sm text-ice-white/40">One-time payment</p>
                <ul className="mt-6 space-y-3">
                  {PORTFOLIO_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ice-white/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?service=portfolio"
                  className={cn(
                    "mt-8 flex w-full items-center justify-center rounded-lg border border-ice-white/20 py-3",
                    "font-[family-name:var(--font-display)] tracking-wider text-ice-white/80",
                    "transition-all hover:border-cyan-neon/40 hover:text-cyan-neon"
                  )}
                >
                  Get Started
                </Link>
              </div>
            </ScrollReveal>

            {/* E-Commerce */}
            <ScrollReveal delay={0.2}>
              <div className="corner-frame relative rounded-xl border border-cyan-neon/30 bg-dark-surface p-8 glow-cyan">
                <span className="absolute -top-3 right-6 rounded-full bg-cyan-neon px-3 py-0.5 text-xs font-bold text-dark-deep">
                  POPULAR
                </span>
                <div className="flex items-center gap-3">
                  <ShoppingCart className="h-6 w-6 text-cyan-neon" />
                  <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                    E-Commerce
                  </h3>
                </div>
                <p className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-wide text-cyan-neon">
                  $2,500
                </p>
                <p className="mt-1 text-sm text-ice-white/40">One-time payment</p>
                <ul className="mt-6 space-y-3">
                  {ECOMMERCE_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ice-white/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?service=ecommerce"
                  className={cn(
                    "glow-cyan mt-8 flex w-full items-center justify-center rounded-lg bg-cyan-neon py-3",
                    "font-[family-name:var(--font-display)] tracking-wider text-dark-deep",
                    "transition-all hover:bg-cyan-light hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                  )}
                >
                  Get Started
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-t border-dark-mid/30 bg-dark-surface/30 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Why Businesses Choose Us
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-neon/10">
                    <b.icon className="h-6 w-6 text-cyan-neon" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ice-white/50">
                      {b.description}
                    </p>
                  </div>
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
                &ldquo;We went from zero online presence to a fully functioning e-commerce store in 4 weeks. The admin panel makes it easy to manage products and orders without any technical knowledge.&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-[family-name:var(--font-display)] tracking-wide text-ice-white">
                  Client Name
                </p>
                <p className="text-sm text-ice-white/40">
                  Founder, Local Business — Chicago, IL
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
              Ready to Build Something Real?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ice-white/50">
              Book a free call and we&apos;ll map out exactly what your business needs. No pressure, no templates, no monthly fees.
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
                href="/contact?action=start"
                className={cn(
                  "inline-flex items-center rounded-lg border border-ice-white/20 px-8 py-3.5",
                  "font-[family-name:var(--font-display)] tracking-wider text-ice-white/80",
                  "transition-all hover:border-cyan-neon/40 hover:text-cyan-neon"
                )}
              >
                Get Started Now
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
