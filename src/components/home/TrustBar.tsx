"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";

const TRUST_STATS = [
  { number: "87+", label: "Businesses Served" },
  { number: "5-Star", label: "Reviews" },
  { number: "15+", label: "Brands Launched" },
  { number: "$1M+", label: "Client Revenue Generated" },
] as const;

function TrustStat({
  stat,
  index,
}: {
  stat: (typeof TRUST_STATS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      className="flex flex-col items-center gap-1"
    >
      <span className="font-[family-name:var(--font-display)] text-2xl text-cyan-neon">
        {stat.number}
      </span>
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-ice-white/50">
        {stat.label}
      </span>
    </motion.div>
  );
}

export function TrustBar() {
  return (
    <ScrollAnimation variant="fade-in">
      <div className="border-t border-b border-dark-mid/50 bg-dark-surface/30 py-8">
        <div className="mx-auto max-w-6xl px-6">
          {/* Mobile: 2x2 grid | Desktop: single row with dividers */}
          <div className="grid grid-cols-2 gap-8 md:flex md:flex-row md:items-center md:justify-center md:gap-0">
            {TRUST_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-center justify-center md:px-10"
              >
                <TrustStat stat={stat} index={i} />
                {/* Vertical divider — only on md+, not after last item */}
                {i < TRUST_STATS.length - 1 && (
                  <div className="ml-10 hidden h-10 border-r border-dark-mid md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
