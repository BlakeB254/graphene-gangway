"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollMarqueeProps {
  text: string;
  className?: string;
  direction?: "left" | "right";
}

/**
 * Horizontal text strip that translates with vertical scroll.
 * Creates a cinematic "traveling through space" effect.
 */
export function ScrollMarquee({
  text,
  className,
  direction = "left",
}: ScrollMarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["5%", "-15%"] : ["-15%", "5%"]
  );

  const repeated = `${text} · `.repeat(8);

  return (
    <div ref={ref} className={cn("overflow-hidden py-6", className)}>
      <motion.p
        style={{ x }}
        className="whitespace-nowrap font-[family-name:var(--font-display)] text-6xl tracking-[0.15em] text-ice-white/[0.03] md:text-8xl"
      >
        {repeated}
      </motion.p>
    </div>
  );
}
