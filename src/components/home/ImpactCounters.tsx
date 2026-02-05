"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMPACT_STATS } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";

export function ImpactCounters() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Each counter column parallaxes at a staggered rate
  const y0 = useTransform(scrollYProgress, [0, 1], [50, -20]);
  const y1 = useTransform(scrollYProgress, [0, 1], [70, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [90, -40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [110, -50]);
  const columnY = [y0, y1, y2, y3];

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
            By the numbers
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
            PROOF OF IMPACT
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 gap-12 md:grid-cols-4">
          {IMPACT_STATS.map((stat, i) => (
            <motion.div key={stat.label} style={{ y: columnY[i] }}>
              <ScrollReveal delay={i * 0.1}>
                <div className="text-center">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-5xl text-cyan-neon md:text-7xl"
                  />
                  <div className="mx-auto mt-4 h-px w-10 bg-cyan-neon/20" />
                  <span className="mt-4 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-ice-white/35">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
