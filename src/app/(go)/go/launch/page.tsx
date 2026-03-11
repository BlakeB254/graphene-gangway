import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Launch Your Business Online | Graphene Gangway",
  description:
    "Brand + Website + Content + AI — one package, one price. Everything you need to launch your business online.",
  openGraph: {
    title: "Launch Your Business Online | Graphene Gangway",
    description:
      "Complete launch packages: brand identity, custom website, content, and AI automations.",
  },
};

const HIGHLIGHTS = [
  "Complete brand identity (logo, colors, guidelines)",
  "Custom-built website tailored to your business",
  "Starter content — copy, images, and social assets",
  "AI-powered automations for ongoing content",
  "6 months of priority support and maintenance",
  "Domain setup, hosting config, and analytics",
];

export default function LaunchPage() {
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
          Launch Packages
        </span>

        <h1 className="font-[family-name:var(--font-display)] text-5xl leading-tight tracking-wider text-ice-white md:text-6xl">
          LAUNCH YOUR BUSINESS ONLINE&nbsp;&mdash; EVERYTHING INCLUDED
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ice-white/60">
          Brand + Website + Content + AI &mdash; one package, one price.
          Stop piecing things together. Get everything you need in one
          coordinated build.
        </p>
      </section>

      {/* ── Package Highlights ──────────────────────── */}
      <section className="mx-auto max-w-xl px-5 pb-12">
        <div className="rounded-xl border border-dark-mid bg-dark-surface/50 p-8">
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl tracking-wider text-ice-white">
            EVERY PACKAGE INCLUDES
          </h2>
          <ul className="space-y-4">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-neon" />
                <span className="text-ice-white/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Performance Guarantee ───────────────────── */}
      <section className="mx-auto max-w-xl px-5 pb-20">
        <div className="flex items-start gap-4 rounded-lg border border-brand-success/20 bg-brand-success/5 p-6">
          <Zap className="mt-0.5 h-6 w-6 shrink-0 text-brand-success" />
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wider text-brand-success">
              PERFORMANCE GUARANTEE
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-ice-white/60">
              Every site we build scores 90+ on Google Lighthouse. If it
              doesn&apos;t hit that benchmark at launch, we fix it for free.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="mx-auto max-w-xl px-5 pb-24 text-center">
        <Link
          href="/pricing"
          className="glow-cyan inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-8 py-4 font-[family-name:var(--font-display)] text-lg tracking-wider text-dark-deep transition-colors hover:bg-brand-accent-hover"
        >
          SEE LAUNCH PACKAGES
          <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
