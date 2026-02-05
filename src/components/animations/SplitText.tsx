"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type SplitMode = "chars" | "words";

interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  mode?: SplitMode;
  stagger?: number;
  startDelay?: number;
  variant?: "rise" | "fade" | "glitch" | "scale";
}

const variants = {
  rise: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  glitch: {
    hidden: { opacity: 0, x: -8, skewX: 20 },
    visible: { opacity: 1, x: 0, skewX: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function SplitText({
  text,
  className,
  charClassName,
  mode = "chars",
  stagger = 0.03,
  startDelay = 0,
  variant = "rise",
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const pieces = mode === "chars" ? text.split("") : text.split(" ");
  const v = variants[variant];

  return (
    <span ref={ref} className={cn("inline", className)}>
      {pieces.map((piece, i) => (
        <motion.span
          key={i}
          initial={v.hidden}
          animate={isInView ? v.visible : v.hidden}
          transition={{
            duration: variant === "glitch" ? 0.3 : 0.5,
            ease: "easeOut",
            delay: startDelay + i * stagger,
          }}
          className={cn("inline-block", charClassName)}
        >
          {piece === " " ? "\u00A0" : piece}
          {mode === "words" && i < pieces.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}
