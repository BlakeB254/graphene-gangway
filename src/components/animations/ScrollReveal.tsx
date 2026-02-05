"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type VariantName = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  variant?: VariantName;
  className?: string;
}

const variantMap: Record<VariantName, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
};

export function ScrollReveal({
  children,
  delay = 0,
  variant = "fadeUp",
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={variantMap[variant]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
