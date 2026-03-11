import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Brand Kit — $99 | Graphene Gangway",
  description:
    "Logo, colors, typography, social templates, and brand guidelines. Everything you need to look professional — starting at $99.",
  openGraph: {
    title: "Professional Brand Kit — $99 | Graphene Gangway",
    description:
      "Complete brand identity package: logo, colors, typography, social templates, and guidelines.",
  },
};

const FEATURES = [
  "Custom logo design with multiple variations",
  "Full color palette with hex codes and usage rules",
  "Typography system — display, body, and accent fonts",
  "Social media templates sized for every platform",
  "Brand guidelines PDF you can share with anyone",
  "Source files delivered in all formats (SVG, PNG, PDF)",
];

export default function BrandKitPage() {
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
          Brand Identity
        </span>

        <h1 className="font-[family-name:var(--font-display)] text-5xl leading-tight tracking-wider text-ice-white md:text-6xl">
          PROFESSIONAL BRAND KIT&nbsp;&mdash;&nbsp;$99
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ice-white/60">
          Logo, colors, typography, social templates, and brand guidelines.
          Everything you need to look professional.
        </p>

        {/* ── Trust Badge ──────────────────────────── */}
        <p className="mt-4 font-[family-name:var(--font-mono)] text-sm text-brand-success">
          87+ businesses branded
        </p>
      </section>

      {/* ── Features ────────────────────────────────── */}
      <section className="mx-auto max-w-xl px-5 pb-20">
        <div className="rounded-xl border border-dark-mid bg-dark-surface/50 p-8">
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl tracking-wider text-ice-white">
            WHAT&apos;S INCLUDED
          </h2>
          <ul className="space-y-4">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-neon" />
                <span className="text-ice-white/80">{feature}</span>
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
          GET YOUR BRAND KIT
          <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
