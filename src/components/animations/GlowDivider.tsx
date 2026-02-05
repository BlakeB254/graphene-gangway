"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowDividerProps {
  className?: string;
}

export function GlowDivider({ className }: GlowDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className={cn("w-full py-4", className)}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="h-px w-full origin-center"
        style={{
          background:
            "linear-gradient(90deg, transparent, #00F0FF, transparent)",
        }}
      />
    </div>
  );
}
