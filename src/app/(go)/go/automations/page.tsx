import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Brand Automations — $1,200/mo | Graphene Gangway",
  description:
    "AI-powered content across all channels. 9-30 posts per day, 3-7 channels, fully managed. Starting at $1,200/month.",
  openGraph: {
    title: "AI Brand Automations — $1,200/mo | Graphene Gangway",
    description:
      "Automated content creation and publishing across every channel your brand needs.",
  },
};

const STATS = [
  { value: "9-30", label: "posts per day" },
  { value: "3-7", label: "channels managed" },
  { value: "100%", label: "on-brand content" },
];

const FEATURES = [
  "AI-generated content matched to your brand voice",
  "Automated publishing across social, blog, and email",
  "Content calendar with approval workflow",
  "Performance analytics and optimization",
  "Dedicated account manager",
  "Month-to-month — cancel anytime",
];

export default function AutomationsPage() {
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
      <section className="mx-auto max-w-2xl px-5 pb-16 pt-16 text-center">
        <span className="mb-4 inline-block font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon/70">
          Brand Automations
        </span>

        <h1 className="font-[family-name:var(--font-display)] text-5xl leading-tight tracking-wider text-ice-white md:text-6xl">
          AI CONTENT ACROSS ALL CHANNELS
        </h1>

        <p className="mx-auto mt-2 font-[family-name:var(--font-display)] text-2xl tracking-wider text-cyan-neon md:text-3xl">
          STARTING AT $1,200/MO
        </p>

        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ice-white/60">
          Stop spending hours creating content. Our AI systems generate,
          schedule, and publish on-brand content across every channel your
          business needs.
        </p>
      </section>

      {/* ── Key Stats ───────────────────────────────── */}
      <section className="mx-auto max-w-xl px-5 pb-16">
        <div className="grid grid-cols-3 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-dark-mid bg-dark-surface/50 p-5 text-center"
            >
              <div className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-cyan-neon">
                {stat.value}
              </div>
              <div className="mt-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-ice-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ────────────────────────────────── */}
      <section className="mx-auto max-w-xl px-5 pb-12">
        <div className="rounded-xl border border-dark-mid bg-dark-surface/50 p-8">
          <div className="mb-6 flex items-center gap-3">
            <Bot className="h-6 w-6 text-cyan-neon" />
            <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-ice-white">
              WHAT YOU GET
            </h2>
          </div>
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
          AUTOMATE MY BRAND
          <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
