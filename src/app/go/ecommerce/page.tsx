"use client";

import { LandingHero } from "@/components/sections/LandingHero";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  Check,
  X,
  ShoppingCart,
  CreditCard,
  Package,
  Tag,
  BarChart3,
  Shield,
  Star,
  ArrowRight,
  Palette,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "$2,500", label: "One-Time" },
  { value: "$0/mo", label: "Platform Fees" },
  { value: "100%", label: "Ownership" },
  { value: "6 mo", label: "Free Support" },
];

const FEATURES = [
  {
    icon: ShoppingCart,
    title: "Full Shopping Cart",
    description: "Add to cart, quantity management, persistent cart across sessions.",
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Stripe and PayPal integration. Accept cards, digital wallets, and buy-now-pay-later.",
  },
  {
    icon: Package,
    title: "Product Management",
    description: "Admin panel for adding, editing, and organizing products with images, variants, and inventory.",
  },
  {
    icon: Tag,
    title: "Coupons & Deals",
    description: "Built-in coupon generator for percentage off, fixed amount, free shipping, and more.",
  },
  {
    icon: BarChart3,
    title: "Order Tracking",
    description: "Customers track their orders. You manage fulfillment from the admin panel.",
  },
  {
    icon: Shield,
    title: "6-Month Support",
    description: "Bug fixes, marketplace optimization, and guidance included for six full months.",
  },
];

const COMPARISON = [
  { feature: "Custom design", gg: true, shopify: false, squarespace: false },
  { feature: "No monthly platform fees", gg: true, shopify: false, squarespace: false },
  { feature: "Full code ownership", gg: true, shopify: false, squarespace: false },
  { feature: "Admin panel", gg: true, shopify: true, squarespace: true },
  { feature: "Payment processing", gg: true, shopify: true, squarespace: true },
  { feature: "Coupon/deal generator", gg: true, shopify: true, squarespace: false },
  { feature: "No transaction fees (beyond Stripe)", gg: true, shopify: false, squarespace: false },
  { feature: "Brand Kit included", gg: true, shopify: false, squarespace: false },
  { feature: "Biz Starter Kit included", gg: true, shopify: false, squarespace: false },
  { feature: "6-month hands-on support", gg: true, shopify: false, squarespace: false },
];

const FAQS = [
  {
    q: "How does this compare to Shopify pricing?",
    a: "Shopify Basic costs $39/mo plus transaction fees. Over 3 years that's $1,400+ in platform fees alone — and you never own the code. Our $2,500 one-time fee gives you full ownership with zero monthly platform costs.",
  },
  {
    q: "Can I sell digital products or services?",
    a: "Yes. We build your store to handle physical products, digital downloads, services, or any combination. The admin panel lets you manage all product types.",
  },
  {
    q: "What payment methods can I accept?",
    a: "Stripe (cards, Apple Pay, Google Pay) and PayPal out of the box. We can add additional payment providers if needed.",
  },
  {
    q: "Can I migrate from Shopify or Squarespace?",
    a: "Absolutely. We handle the full migration — products, images, customer data, and order history. No data left behind.",
  },
  {
    q: "What happens after the 6-month support period?",
    a: "You keep everything. The site is yours to maintain independently, or you can hire anyone to continue work on it. No lock-in, ever.",
  },
];

export default function EcommerceLandingPage() {
  return (
    <>
      {/* 1. HERO */}
      <LandingHero
        headline="Custom E-Commerce Site — $2,500"
        subheadline="A fully custom online store with admin panel, shopping cart, payment processing, and coupon system. No monthly platform fees. You own everything."
        primaryCTA={{ label: "Get Started", href: "/contact?service=ecommerce" }}
        secondaryCTA={{ label: "Book Consultation", href: "/contact" }}
        badge="E-COMMERCE"
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

      {/* 3. OFFER BREAKDOWN — FEATURES */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Everything Your Store Needs
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-ice-white/50">
              No plugins to install. No templates to fight with. Built from scratch for your business.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((item, i) => (
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

          {/* Included free callout */}
          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-success/20 bg-success/5 p-6 sm:flex-row sm:justify-center">
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-success" />
                <span className="text-sm text-ice-white/70">Brand Kit included free</span>
              </div>
              <span className="hidden text-ice-white/20 sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-success" />
                <span className="text-sm text-ice-white/70">Biz Starter Kit included free</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="border-t border-dark-mid/30 bg-dark-surface/30 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              How We Compare
            </h2>
          </ScrollReveal>

          <div className="mt-12 overflow-hidden rounded-xl border border-dark-mid">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-mid bg-dark-surface">
                  <th className="px-4 py-4 text-left font-[family-name:var(--font-display)] text-sm tracking-wider text-ice-white/70 sm:px-6">
                    Feature
                  </th>
                  <th className="px-3 py-4 text-center font-[family-name:var(--font-display)] text-sm tracking-wider text-cyan-neon sm:px-6">
                    Us
                  </th>
                  <th className="px-3 py-4 text-center font-[family-name:var(--font-display)] text-sm tracking-wider text-ice-white/50 sm:px-6">
                    Shopify
                  </th>
                  <th className="px-3 py-4 text-center font-[family-name:var(--font-display)] text-sm tracking-wider text-ice-white/50 sm:px-6">
                    Squarespace
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="border-b border-dark-mid/50 last:border-none">
                    <td className="px-4 py-3 text-sm text-ice-white/70 sm:px-6">
                      {row.feature}
                    </td>
                    <td className="px-3 py-3 text-center sm:px-6">
                      {row.gg ? (
                        <Check className="mx-auto h-4 w-4 text-success" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-ice-white/20" />
                      )}
                    </td>
                    <td className="px-3 py-3 text-center sm:px-6">
                      {row.shopify ? (
                        <Check className="mx-auto h-4 w-4 text-ice-white/40" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-ice-white/20" />
                      )}
                    </td>
                    <td className="px-3 py-3 text-center sm:px-6">
                      {row.squarespace ? (
                        <Check className="mx-auto h-4 w-4 text-ice-white/40" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-ice-white/20" />
                      )}
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
                &ldquo;We were paying $79/month on Shopify plus transaction fees. Switching to a custom build saved us over $1,000 a year and gave us a store that actually looks like our brand — not a template.&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-[family-name:var(--font-display)] tracking-wide text-ice-white">
                  Client Name
                </p>
                <p className="text-sm text-ice-white/40">
                  Owner, Boutique Retailer — Chicago, IL
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
              Ready to Own Your Online Store?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ice-white/50">
              Stop renting your store from a platform. Build something you own — with zero monthly fees.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact?service=ecommerce"
                className={cn(
                  "glow-cyan inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-8 py-3.5",
                  "font-[family-name:var(--font-display)] tracking-wider text-dark-deep",
                  "transition-all hover:bg-cyan-light hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                )}
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center rounded-lg border border-ice-white/20 px-8 py-3.5",
                  "font-[family-name:var(--font-display)] tracking-wider text-ice-white/80",
                  "transition-all hover:border-cyan-neon/40 hover:text-cyan-neon"
                )}
              >
                Book Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
