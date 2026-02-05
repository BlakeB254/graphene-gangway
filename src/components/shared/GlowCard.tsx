"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

const cardClasses = cn(
  "corner-frame",
  "bg-dark-surface border border-dark-mid rounded-lg p-6",
  "transition-all duration-300 ease-in-out",
  "hover:border-cyan-neon/30 hover:-translate-y-0.5 hover:glow-cyan"
);

export function GlowCard({ children, className, href }: GlowCardProps) {
  const content = (
    <motion.div
      className={cn(cardClasses, className)}
      whileHover={{ y: -2 }}
      transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
