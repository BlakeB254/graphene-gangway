import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, BarChart3 } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how Graphene Gangway has transformed businesses with brand identity, web development, social media automation, and AI solutions.",
};

const CASE_STUDIES = [
  {
    slug: "hampton-house",
    client: "Hampton House",
    title: "From No Online Presence to Full Digital Brand",
    description:
      "Hampton House came to us with a vision but no digital footprint. We built their complete brand identity, website, and automated their social media content across 5 platforms.",
    services: ["Brand Kit", "Portfolio Website", "Brand Automations"],
    metrics: [
      { icon: TrendingUp, value: "340%", label: "Social media growth in 3 months" },
      { icon: Users, value: "1,200+", label: "New followers across platforms" },
      { icon: BarChart3, value: "85%", label: "Increase in website traffic" },
    ],
    featured: true,
  },
  {
    slug: "extreme-meets-wine",
    client: "Extreme Meets Wine",
    title: "E-Commerce Launch That Drove Revenue from Day One",
    description:
      "Extreme Meets Wine needed a full e-commerce solution with product management, payment processing, and automated content to drive traffic. We delivered the complete E-Commerce Launch Package.",
    services: ["E-Commerce Website", "Brand Kit", "Brand Automations"],
    metrics: [
      { icon: TrendingUp, value: "$12K+", label: "Revenue in first month" },
      { icon: Users, value: "2,400", label: "Store visitors in week 1" },
      { icon: BarChart3, value: "4.2%", label: "Conversion rate" },
    ],
    featured: true,
  },
  {
    slug: "gcc",
    client: "GCC",
    title: "Live Transformation: Building a Brand in Real Time",
    description:
      "GCC partnered with us for the full Launch Package — and we documented every step. From brand kit to AI knowledge base, this is the most transparent case study in our portfolio.",
    services: ["Launch Package", "Brand Kit", "Web Development", "Brand Automations", "AI Knowledge Base"],
    metrics: [
      { icon: TrendingUp, value: "424+", label: "Monthly posts managed" },
      { icon: Users, value: "5", label: "Channels automated" },
      { icon: BarChart3, value: "6mo", label: "Full transformation timeline" },
    ],
    featured: true,
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-deep to-dark-deep" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <p className="mb-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/60">
              Real Results
            </p>
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-5xl tracking-wider text-ice-white md:text-7xl">
              CASE STUDIES
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-ice-white/60">
              Don&apos;t take our word for it. See the transformations we&apos;ve
              delivered for real businesses.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl space-y-12">
          {CASE_STUDIES.map((study, i) => (
            <ScrollReveal key={study.slug} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-2xl border border-dark-mid bg-dark-surface transition-all duration-300 hover:border-cyan-neon/30">
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="mb-6">
                    <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-cyan-neon">
                      {study.client}
                    </p>
                    <h2 className="mb-3 font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white md:text-4xl">
                      {study.title}
                    </h2>
                    <p className="max-w-3xl text-ice-white/60">
                      {study.description}
                    </p>
                  </div>

                  {/* Services Used */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {study.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-cyan-neon/10 px-3 py-1 text-xs text-cyan-neon"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-start gap-3">
                        <metric.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-neon" />
                        <div>
                          <p className="font-[family-name:var(--font-display)] text-2xl text-ice-white">
                            {metric.value}
                          </p>
                          <p className="text-sm text-ice-white/50">
                            {metric.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="mt-8">
                    <span className="group/link inline-flex items-center gap-2 text-cyan-neon transition-colors hover:text-cyan-light">
                      Read full case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-dark-mid/50 px-6 py-24 text-center">
        <ScrollReveal>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl text-ice-white">
            WANT TO BE OUR NEXT SUCCESS STORY?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-ice-white/60">
            Let&apos;s talk about how we can transform your business.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/packages/launch"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-neon px-7 py-3.5 font-bold text-dark-deep transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
            >
              See Launch Packages
            </Link>
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center rounded-lg border border-ice-white/20 px-7 py-3.5 text-ice-white/70 transition-all hover:border-cyan-neon/50 hover:text-cyan-neon"
            >
              Take Free Assessment
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
