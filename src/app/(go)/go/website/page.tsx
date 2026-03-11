import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Website Starting at $1,500 | Graphene Gangway",
  description:
    "Your business deserves more than a template. Custom-built websites with 6 months of support included.",
  openGraph: {
    title: "Custom Website Starting at $1,500 | Graphene Gangway",
    description:
      "Custom-built websites for businesses that want to stand out. 6-month support included.",
  },
};

const PORTFOLIO_FEATURES = [
  "5-7 custom-designed pages",
  "Mobile-first responsive layout",
  "SEO optimization and analytics",
  "Contact forms and integrations",
  "Performance-tuned (90+ Lighthouse)",
  "6-month support included",
];

const ECOMMERCE_FEATURES = [
  "Full product catalog with search",
  "Stripe or Square payment processing",
  "Inventory management dashboard",
  "Customer accounts and order tracking",
  "Shipping and tax configuration",
  "6-month support included",
];

export default function WebsitePage() {
  return (
    <div className="min-h-screen bg-dark-deep">
      {/* ── Logo ────────────────────────────────────── */}
      <div className="px-5 pt-8">
        <Link href="/" aria-label="Graphene Gangway home">
          <Image
            src="/logos/gg-mark.png"
            alt="Graphene Gangway"
            width={48}
            height={48}
            className="opacity-60 transition-opacity hover:opacity-100"
          />
        </Link>
      </div>

      {/* ── Hero ────────────────────────────────────── */}
      <section className="mx-auto max-w-2xl px-5 pb-20 pt-16 text-center">
        <span className="mb-4 inline-block font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon/70">
          Web Development
        </span>

        <h1 className="font-[family-name:var(--font-display)] text-5xl leading-tight tracking-wider text-ice-white md:text-6xl">
          CUSTOM WEBSITE STARTING AT&nbsp;$1,500
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ice-white/60">
          Your business deserves more than a template. We build fast,
          beautiful, custom sites that convert visitors into customers.
        </p>

        {/* ── Trust Badge ──────────────────────────── */}
        <p className="mt-4 font-[family-name:var(--font-mono)] text-sm text-brand-success">
          6-month support included with every build
        </p>
      </section>

      {/* ── Comparison ──────────────────────────────── */}
      <section className="mx-auto grid max-w-3xl gap-6 px-5 pb-20 md:grid-cols-2">
        {/* Portfolio */}
        <div className="rounded-xl border border-dark-mid bg-dark-surface/50 p-8">
          <h2 className="mb-1 font-[family-name:var(--font-display)] text-xl tracking-wider text-ice-white">
            PORTFOLIO SITE
          </h2>
          <p className="mb-6 font-[family-name:var(--font-mono)] text-sm text-cyan-neon">
            From $1,500
          </p>
          <ul className="space-y-3">
            {PORTFOLIO_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-neon" />
                <span className="text-sm text-ice-white/80">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* E-Commerce */}
        <div className="rounded-xl border border-cyan-neon/30 bg-dark-surface/50 p-8 glow-cyan">
          <h2 className="mb-1 font-[family-name:var(--font-display)] text-xl tracking-wider text-ice-white">
            E-COMMERCE SITE
          </h2>
          <p className="mb-6 font-[family-name:var(--font-mono)] text-sm text-cyan-neon">
            From $3,000
          </p>
          <ul className="space-y-3">
            {ECOMMERCE_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-neon" />
                <span className="text-sm text-ice-white/80">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="mx-auto max-w-xl px-5 pb-24 text-center">
        <Link
          href="/pricing"
          className="glow-cyan inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-8 py-4 font-[family-name:var(--font-display)] text-lg tracking-wider text-dark-deep transition-colors hover:bg-brand-accent-hover"
        >
          BUILD MY WEBSITE
          <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
