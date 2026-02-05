"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, type MotionValue } from "framer-motion";
import { IMPACT_STATS } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplitText } from "@/components/animations/SplitText";
import { Counter } from "@/components/animations/Counter";

function StatColumn({ stat, index, y }: {
  stat: (typeof IMPACT_STATS)[number];
  index: number;
  y: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div ref={ref} style={{ y }}>
      <div className="relative text-center">
        {/* Glow pulse behind the number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={isInView ? { opacity: [0, 0.4, 0], scale: [0.3, 1.2, 1] } : {}}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.3 + index * 0.15,
          }}
          className="pointer-events-none absolute -inset-6 flex items-center justify-center"
        >
          <div
            className="h-32 w-32 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,240,255,0.2) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* Number — scales up from small */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.2 + index * 0.12,
          }}
        >
          <Counter
            value={stat.value}
            suffix={stat.suffix}
            className="text-5xl text-cyan-neon md:text-7xl"
          />
        </motion.div>

        {/* Divider — grows from center */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.5 + index * 0.12,
          }}
          className="mx-auto mt-4 h-px w-10 origin-center bg-cyan-neon/20"
        />

        {/* Label — slides up */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.6 + index * 0.12,
          }}
          className="mt-4 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-ice-white/35"
        >
          {stat.label}
        </motion.span>
      </div>
    </motion.div>
  );
}

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
            <SplitText text="PROOF OF IMPACT" variant="scale" stagger={0.03} />
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 gap-12 md:grid-cols-4">
          {IMPACT_STATS.map((stat, i) => (
            <StatColumn key={stat.label} stat={stat} index={i} y={columnY[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
