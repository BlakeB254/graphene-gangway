"use client";

import { IMPACT_STATS } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";

export function ImpactCounters() {
  return (
    <section className="bg-dark-surface py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="mb-16 text-center font-[family-name:var(--font-display)] text-4xl text-ice-white">
            Proof of Impact
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {IMPACT_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-3">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                className="text-5xl text-cyan-neon text-glow-cyan"
              />
              <span className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-wider text-ice-white/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
