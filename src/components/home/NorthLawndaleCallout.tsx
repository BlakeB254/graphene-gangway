"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SplitText } from "@/components/animations/SplitText";

export function NorthLawndaleCallout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // "NORTH LAWNDALE" slides in from left
  const titleX = useTransform(scrollYProgress, [0.1, 0.45], ["-60%", "0%"]);
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);

  // "CHICAGO'S WEST SIDE" slides in from right, delayed
  const subX = useTransform(scrollYProgress, [0.2, 0.5], ["50%", "0%"]);
  const subOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

  // Decorative line draws across
  const lineScale = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);

  // Subtle background glow follows scroll
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 0.4, 0]);
  const glowScale = useTransform(scrollYProgress, [0.2, 0.5], [0.5, 1.2]);

  return (
    <div ref={sectionRef} className="relative overflow-hidden py-20 md:py-28">
      {/* Background glow pulse */}
      <motion.div
        style={{ opacity: glowOpacity, scale: glowScale }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="h-[400px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,240,255,0.12) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Main title — scroll-linked slide from left */}
        <motion.div style={{ x: titleX, opacity: titleOpacity }}>
          <h2 className="font-[family-name:var(--font-display)] text-6xl tracking-[0.15em] text-ice-white md:text-8xl lg:text-9xl">
            <SplitText
              text="NORTH LAWNDALE"
              variant="glitch"
              stagger={0.04}
              startDelay={0}
            />
          </h2>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          style={{ scaleX: lineScale }}
          className="my-4 h-px origin-left bg-gradient-to-r from-cyan-neon/60 via-cyan-neon/20 to-transparent md:my-6"
        />

        {/* Subtitle — scroll-linked slide from right */}
        <motion.div
          style={{ x: subX, opacity: subOpacity }}
          className="flex items-center gap-6"
        >
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.4em] text-cyan-neon/50">
            Chicago&apos;s West Side
          </p>
          <span className="font-[family-name:var(--font-script)] text-2xl text-ice-white/20 md:text-3xl">
            where the bridge begins
          </span>
        </motion.div>

        {/* Coordinates — fade in last */}
        <motion.p
          style={{
            opacity: useTransform(scrollYProgress, [0.35, 0.55], [0, 1]),
          }}
          className="mt-8 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.5em] text-ice-white/10"
        >
          41.8603° N &nbsp; 87.7192° W
        </motion.p>
      </div>
    </div>
  );
}
