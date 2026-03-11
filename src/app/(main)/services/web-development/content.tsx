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
  X,
  ChevronDown,
  Globe,
  Palette,
  Smartphone,
  ShieldCheck,
  Headphones,
  Key,
  ShoppingCart,
  CreditCard,
  Tag,
  Package as PackageIcon,
  Truck,
  ArrowRight,
  Sparkles,
  Package,
  MessageSquare,
  PenTool,
  Code,
  TestTube,
  Rocket,
  Heart,
  Search,
} from "lucide-react";

const service = getServiceBySlug("web-development")!;

const PORTFOLIO_FEATURES = [
  "Custom design",
  "Fully responsive",
  "Content management admin panel",
  "SEO foundation",
  "Contact forms",
  "Brand Kit included free",
  "6-month support",
  "Full independence — you own everything",
];

const ECOMMERCE_FEATURES = [
  "Custom design",
  "Fully responsive",
  "Full e-commerce admin panel",
  "SEO foundation",
  "Contact forms",
  "Brand Kit included free",
  "Biz Starter Kit included free",
  "Product management",
  "Shopping cart",
  "Payment processing (Stripe/PayPal)",
  "Coupon/deal generator",
  "Order tracking",
  "6-month support",
  "Full independence — you own everything",
];

const COMPARISON_FEATURES = [
  { feature: "Custom design", portfolio: true, ecommerce: true },
  { feature: "Fully responsive", portfolio: true, ecommerce: true },
  { feature: "Admin panel", portfolio: true, ecommerce: true },
  { feature: "SEO foundation", portfolio: true, ecommerce: true },
  { feature: "Brand Kit (free)", portfolio: true, ecommerce: true },
  { feature: "Biz Starter Kit (free)", portfolio: false, ecommerce: true },
  { feature: "Shopping cart", portfolio: false, ecommerce: true },
  { feature: "Payment processing", portfolio: false, ecommerce: true },
  { feature: "Coupon/deal generator", portfolio: false, ecommerce: true },
  { feature: "Order tracking", portfolio: false, ecommerce: true },
  { feature: "6-month support", portfolio: true, ecommerce: true },
  { feature: "Full ownership", portfolio: true, ecommerce: true },
];

const PROCESS_STEPS = [
  { icon: Search, step: "01", title: "Discovery", desc: "We dig into your business, goals, audience, and competitors." },
  { icon: PenTool, step: "02", title: "Design", desc: "Wireframes and visual mockups — you approve every screen before code." },
  { icon: Code, step: "03", title: "Development", desc: "Custom-built with modern frameworks, optimized for speed and SEO." },
  { icon: TestTube, step: "04", title: "Testing", desc: "Cross-browser, cross-device QA. We break it before your customers do." },
  { icon: Rocket, step: "05", title: "Launch", desc: "Domain, hosting, SSL, analytics — we handle the entire deploy." },
  { icon: Heart, step: "06", title: "6-Month Support", desc: "Bug fixes, minor updates, and feature buildout. Then you're independent." },
];

const FAQS = [
  {
    q: "What does 'full independence' mean?",
    a: "After 6 months of support, you own everything — code, design, content, domain, hosting accounts. No lock-in, no monthly fees to us, no proprietary systems. You're free to manage it yourself, hire someone else, or come back to us.",
  },
  {
    q: "What platform do you build on?",
    a: "We build custom websites using modern frameworks like Next.js, not page builders like WordPress or Wix. This means faster performance, better SEO, and no plugin bloat.",
  },
  {
    q: "Do I need to provide content?",
    a: "We'll need your input on messaging, but we help shape the copy and can source stock photography. If you have a Brand Kit from us, your visual assets are already covered.",
  },
  {
    q: "What's included in the 6-month support?",
    a: "Bug fixes, minor content updates, small feature additions, performance monitoring, and uptime checks. For Portfolio sites, we focus on refinement. For E-Commerce, we include marketplace optimization.",
  },
  {
    q: "Can I add e-commerce features to a Portfolio site later?",
    a: "Yes, but it's more cost-effective to start with E-Commerce if you know you'll need it. Retrofitting a portfolio site for e-commerce is possible but involves additional development.",
  },
  {
    q: "How long does the build take?",
    a: "Portfolio sites: 3-4 weeks. E-Commerce sites: 5-7 weeks. Timeline depends on content readiness and revision turnaround.",
  },
  {
    q: "Do you handle hosting and domain setup?",
    a: "Yes. We set up hosting, connect your domain, configure SSL, and set up analytics as part of the launch process. Hosting costs are separate and typically $5-20/month depending on traffic.",
  },
  {
    q: "What about SEO?",
    a: "Every site ships with SEO fundamentals: semantic HTML, meta tags, Open Graph, structured data, sitemap, fast load times, and mobile-first design. We don't do ongoing SEO campaigns, but the foundation is solid.",
  },
  {
    q: "What if I need changes after the 6-month support period?",
    a: "You can hire any developer since you own the code, or come back to us for hourly work. Many clients pair with our Brand Automations service for ongoing content.",
  },
  {
    q: "Is the Brand Kit really included free?",
    a: "Yes. Every website comes with a full Brand Kit — logo, color palette, typography, social media assets, and brand guidelines. E-Commerce sites also include a free Biz Starter Kit.",
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
          open ? "max-h-[500px] pb-5 px-5" : "max-h-0"
        )}
      >
        <p className="text-ice-white/60 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export function WebDevelopmentContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HexGrid />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon/70 tracking-widest uppercase mb-4">
              Custom Web Development
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-cyan-neon text-glow-cyan tracking-wider mb-6">
              WEBSITES THAT WORK AS HARD AS YOU DO
            </h1>
            <p className="text-lg md:text-xl text-ice-white/70 max-w-2xl mx-auto mb-8">
              Custom-designed, blazing-fast websites with admin panels, 6-month support, and full independence.
            </p>
            <p className="font-[family-name:var(--font-display)] text-2xl text-ice-white/60">
              After 6 months, you&apos;re independent.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Side-by-Side Tiers */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-4">
              CHOOSE YOUR TIER
            </h2>
            <p className="text-ice-white/50 text-center max-w-xl mx-auto mb-16">
              Both tiers include custom design, admin panel, 6-month support, and full ownership.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Portfolio */}
            <ScrollReveal delay={0}>
              <div className="bg-dark-surface border border-dark-mid rounded-lg p-8 hover:border-cyan-neon/30 transition-colors h-full flex flex-col">
                <Globe className="w-10 h-10 text-cyan-neon mb-4" />
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-ice-white mb-2">
                  PORTFOLIO
                </h3>
                <p className="text-ice-white/50 text-sm mb-6">
                  Custom portfolio website with content management
                </p>
                <p className="font-[family-name:var(--font-display)] text-4xl text-cyan-neon mb-6">
                  $1,500
                </p>
                <ul className="space-y-3 flex-1">
                  {PORTFOLIO_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                      <span className="text-ice-white/70 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?service=web-development&tier=portfolio"
                  className="mt-8 block text-center px-6 py-3 border border-cyan-neon text-cyan-neon font-[family-name:var(--font-display)] tracking-wider hover:bg-cyan-neon/10 transition-colors"
                >
                  GET STARTED
                </Link>
              </div>
            </ScrollReveal>

            {/* E-Commerce */}
            <ScrollReveal delay={0.1}>
              <div className="bg-dark-surface border border-cyan-neon/40 rounded-lg p-8 relative h-full flex flex-col">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-neon text-dark-deep text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <ShoppingCart className="w-10 h-10 text-cyan-neon mb-4" />
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-ice-white mb-2">
                  E-COMMERCE
                </h3>
                <p className="text-ice-white/50 text-sm mb-6">
                  Full e-commerce with admin, cart, coupons, and payments
                </p>
                <p className="font-[family-name:var(--font-display)] text-4xl text-cyan-neon mb-6">
                  $2,500
                </p>
                <ul className="space-y-3 flex-1">
                  {ECOMMERCE_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                      <span className="text-ice-white/70 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?service=web-development&tier=ecommerce"
                  className="mt-8 block text-center px-6 py-3 bg-cyan-neon text-dark-deep font-[family-name:var(--font-display)] tracking-wider hover:bg-cyan-dim transition-colors"
                >
                  GET STARTED
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Feature Comparison Table */}
      <section className="py-20 md:py-28 px-6 bg-dark-surface/50">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              FEATURE COMPARISON
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="border border-dark-mid rounded-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-dark-mid/50 p-4">
                <span className="text-ice-white/50 text-sm font-medium">Feature</span>
                <span className="text-center font-[family-name:var(--font-display)] text-ice-white">
                  PORTFOLIO
                </span>
                <span className="text-center font-[family-name:var(--font-display)] text-cyan-neon">
                  E-COMMERCE
                </span>
              </div>
              {COMPARISON_FEATURES.map((row, i) => (
                <div
                  key={row.feature}
                  className={cn(
                    "grid grid-cols-3 p-4 border-t border-dark-mid/50",
                    i % 2 === 0 && "bg-dark-surface/30"
                  )}
                >
                  <span className="text-ice-white/70 text-sm">{row.feature}</span>
                  <span className="text-center">
                    {row.portfolio ? (
                      <Check className="w-4 h-4 text-success mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-ice-white/20 mx-auto" />
                    )}
                  </span>
                  <span className="text-center">
                    {row.ecommerce ? (
                      <Check className="w-4 h-4 text-success mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-ice-white/20 mx-auto" />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Price Comparison */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-4">
              HOW WE COMPARE
            </h2>
            <p className="text-ice-white/50 text-center max-w-xl mx-auto mb-16">
              Custom websites at a fraction of agency pricing &mdash; with no lock-in.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0}>
              <div className="bg-dark-surface border border-cyan-neon/40 rounded-lg p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-neon text-dark-deep text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </div>
                <p className="text-ice-white/50 text-sm mb-2">Graphene Gangway</p>
                <p className="font-[family-name:var(--font-display)] text-3xl text-cyan-neon mb-1">
                  $1,500&ndash;$2,500
                </p>
                <p className="text-ice-white/40 text-xs">Custom + full ownership</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-dark-surface border border-dark-mid rounded-lg p-6 text-center opacity-60">
                <p className="text-ice-white/50 text-sm mb-2">Agency</p>
                <p className="font-[family-name:var(--font-display)] text-3xl text-ice-white/50 mb-1">
                  $10,000&ndash;$50,000+
                </p>
                <p className="text-ice-white/30 text-xs">Custom but long timelines</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-dark-surface border border-dark-mid rounded-lg p-6 text-center opacity-60">
                <p className="text-ice-white/50 text-sm mb-2">DIY (Wix/Squarespace)</p>
                <p className="font-[family-name:var(--font-display)] text-3xl text-ice-white/50 mb-1">
                  $200&ndash;$500/yr
                </p>
                <p className="text-ice-white/30 text-xs">Template-based, limited</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-dark-surface border border-dark-mid rounded-lg p-6 text-center opacity-60">
                <p className="text-ice-white/50 text-sm mb-2">Shopify</p>
                <p className="font-[family-name:var(--font-display)] text-3xl text-ice-white/50 mb-1">
                  $39&ndash;$399/mo
                </p>
                <p className="text-ice-white/30 text-xs">Platform lock-in + fees</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Independence Messaging */}
      <section className="py-20 md:py-28 px-6 bg-dark-surface/50">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <Key className="w-12 h-12 text-cyan-neon mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white mb-6">
              AFTER 6 MONTHS, YOU&apos;RE INDEPENDENT
            </h2>
            <p className="text-ice-white/60 text-lg leading-relaxed mb-8">
              We don&apos;t believe in lock-in. After your 6-month support period,
              you own every line of code, every design file, every asset. Your domain,
              your hosting, your admin accounts &mdash; all yours. No monthly fees to us,
              no proprietary platform trapping you. You&apos;re free.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {[
                { label: "Your Code", desc: "Full source code, no obfuscation" },
                { label: "Your Design", desc: "All Figma/design files included" },
                { label: "Your Accounts", desc: "Domain, hosting, analytics — all yours" },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <div className="bg-dark-surface border border-dark-mid rounded-lg p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-lg text-cyan-neon mb-2">
                      {item.label}
                    </h3>
                    <p className="text-ice-white/50 text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Process */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              THE PROCESS
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((item, i) => (
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
        </div>
      </section>

      <GlowDivider />

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 bg-dark-surface/50">
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
            READY TO BUILD YOUR SITE?
          </h2>
          <p className="text-ice-white/60 mb-10 max-w-md mx-auto">
            Get a custom website that&apos;s truly yours &mdash; with 6 months of support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?service=web-development"
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
              Bundle your website with 6 months of automations, an AI Knowledge Base,
              Brand Kit, and Biz Starter Kit. Save up to 12.5% &mdash; plus our Performance Guarantee.
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
