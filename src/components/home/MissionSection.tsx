"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function MissionSection() {
  return (
    <section className="bg-gradient-to-b from-dark-deep to-dark-surface py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-ice-white md:text-5xl">
            In North Lawndale, 42% of residents live below the poverty line.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 font-[family-name:var(--font-script)] text-2xl text-cyan-neon">
            We&apos;re not waiting for someone to save us.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="mt-8 font-[family-name:var(--font-body)] text-lg leading-relaxed text-ice-white/70">
            Graphene Gangway is a community technology initiative born in the
            heart of Chicago&apos;s West Side. We build bridges across the digital
            divide through hands-on education, affordable tech services, and
            outreach programs that connect residents to real opportunities.
            Technology is the gangway — and we&apos;re making sure our community
            walks through it.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
