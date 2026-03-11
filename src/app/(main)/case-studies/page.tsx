import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { Badge } from "@/components/common/Badge";

export const metadata: Metadata = {
  title: "Case Studies | Graphene Gangway",
  description:
    "In-depth case studies showing how Graphene Gangway helps businesses and organizations in North Lawndale achieve digital success.",
  openGraph: {
    title: "Case Studies | Graphene Gangway",
    description:
      "Real stories of how we've helped community businesses and organizations grow through technology.",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <SectionWrapper>
        <ScrollAnimation>
          <Badge variant="accent" className="mb-6">
            <FileText className="mr-1.5 h-3 w-3" />
            Deep Dives
          </Badge>
          <h1 className="mb-4 font-[family-name:var(--font-display)] text-5xl tracking-wider text-ice-white md:text-6xl lg:text-7xl">
            CASE STUDIES
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-ice-white/60">
            Coming soon — we&apos;re documenting our client success stories.
          </p>
        </ScrollAnimation>
      </SectionWrapper>

      {/* ── Placeholder ────────────────────────────────────── */}
      <SectionWrapper dark>
        <ScrollAnimation>
          <div className="rounded-xl border border-dashed border-cyan-neon/20 bg-dark-surface/20 p-16 text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-cyan-neon/30" />
            <p className="mb-2 font-[family-name:var(--font-display)] text-2xl tracking-wider text-ice-white/70">
              STORIES IN PROGRESS
            </p>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-ice-white/40">
              We&apos;re working with our clients to document the full journey
              — from first conversation to finished product. Each case study
              will cover the challenge, our approach, and the results.
            </p>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* ── CTA ────────────────────────────────────────────── */}
      <SectionWrapper>
        <ScrollAnimation>
          <div className="text-center">
            <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
              In the Meantime
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
              EXPLORE OUR SERVICES
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-ice-white/50">
              While we put together our case studies, take a look at the
              services we offer — from web development and brand kits to IT
              support and digital strategy.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-cyan-neon px-8 py-3 font-[family-name:var(--font-display)] text-lg tracking-wider text-dark-deep transition-colors hover:bg-cyan-dim"
            >
              VIEW SERVICES
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </ScrollAnimation>
      </SectionWrapper>
    </>
  );
}
