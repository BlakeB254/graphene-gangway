"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: columns move at different speeds for depth
  const leftY = useTransform(scrollYProgress, [0, 1], [80, -30]);
  const rightY = useTransform(scrollYProgress, [0, 1], [40, -60]);
  // Decorative line grows with scroll
  const lineScale = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
      {/* Horizontal decorative line */}
      <motion.div
        style={{ scaleX: lineScale }}
        className="absolute left-0 right-0 top-1/2 h-px origin-left bg-gradient-to-r from-transparent via-cyan-neon/10 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Left: Big stat — parallaxes upward */}
          <motion.div style={{ y: leftY }}>
            <ScrollReveal variant="fadeLeft">
              <p className="mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
                North Lawndale, Chicago
              </p>
              <Counter
                value={42}
                suffix="%"
                className="text-8xl text-ice-white md:text-9xl"
              />
              <p className="mt-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white/30 md:text-2xl">
                OF RESIDENTS BELOW
                <br />
                THE POVERTY LINE
              </p>
            </ScrollReveal>
          </motion.div>

          {/* Right: Mission text — parallaxes at different rate */}
          <motion.div style={{ y: rightY }}>
            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div className="space-y-6">
                <p className="font-[family-name:var(--font-script)] text-3xl text-cyan-neon">
                  We&apos;re not waiting for someone to save us.
                </p>
                <p className="font-[family-name:var(--font-body)] text-lg leading-relaxed text-ice-white/45">
                  Graphene Gangway is a community technology initiative born in
                  the heart of Chicago&apos;s West Side. We build bridges across
                  the digital divide through hands-on education, affordable tech
                  services, and outreach programs that connect residents to real
                  opportunities.
                </p>
                <p className="font-[family-name:var(--font-body)] text-lg leading-relaxed text-ice-white/45">
                  Technology is the gangway — and we&apos;re making sure our
                  community walks through it.
                </p>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
