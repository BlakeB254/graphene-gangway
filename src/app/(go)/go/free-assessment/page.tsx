import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ClipboardCheck, Target, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Business Assessment | Graphene Gangway",
  description:
    "Not sure what your business needs? Take our free assessment and get a personalized recommendation — no commitment required.",
  openGraph: {
    title: "Free Business Assessment | Graphene Gangway",
    description:
      "Get a personalized recommendation for your business. Free, no commitment.",
  },
};

const BULLETS = [
  {
    icon: ClipboardCheck,
    title: "Evaluate your current setup",
    description:
      "We look at your brand, website, content, and online presence to find what is working and what is not.",
  },
  {
    icon: Target,
    title: "Identify your biggest gaps",
    description:
      "Pinpoint the areas where small improvements will have the biggest impact on growth and credibility.",
  },
  {
    icon: Lightbulb,
    title: "Get a clear action plan",
    description:
      "Receive a personalized recommendation with prioritized next steps — no obligation, no sales pressure.",
  },
];

export default function FreeAssessmentPage() {
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
          Free Assessment
        </span>

        <h1 className="font-[family-name:var(--font-display)] text-5xl leading-tight tracking-wider text-ice-white md:text-6xl">
          NOT SURE WHAT YOU NEED?
        </h1>

        <p className="mx-auto mt-4 font-[family-name:var(--font-display)] text-2xl tracking-wider text-cyan-neon md:text-3xl">
          TAKE OUR FREE ASSESSMENT
        </p>

        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ice-white/60">
          Answer a few quick questions about your business and get a
          personalized recommendation — completely free, no strings attached.
        </p>
      </section>

      {/* ── Bullet Points ───────────────────────────── */}
      <section className="mx-auto max-w-xl space-y-6 px-5 pb-20">
        {BULLETS.map((bullet) => (
          <div
            key={bullet.title}
            className="flex items-start gap-5 rounded-xl border border-dark-mid bg-dark-surface/50 p-6"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-neon/10">
              <bullet.icon className="h-5 w-5 text-cyan-neon" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wider text-ice-white">
                {bullet.title.toUpperCase()}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ice-white/60">
                {bullet.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="mx-auto max-w-xl px-5 pb-24 text-center">
        <Link
          href="/assessment"
          className="glow-cyan inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-8 py-4 font-[family-name:var(--font-display)] text-lg tracking-wider text-dark-deep transition-colors hover:bg-brand-accent-hover"
        >
          START FREE ASSESSMENT
          <ArrowRight className="h-5 w-5" />
        </Link>
        <p className="mt-4 text-sm text-ice-white/40">
          Takes about 2 minutes. No account required.
        </p>
      </section>
    </div>
  );
}
