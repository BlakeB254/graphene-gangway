"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CTAButton {
  label: string;
  href: string;
}

interface LandingHeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  badge?: string;
}

export function LandingHero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  badge,
}: LandingHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark-deep px-6">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-neon/5 via-dark-deep to-dark-deep" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-neon/[0.03] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-6 inline-block rounded-full border border-cyan-neon/30 bg-cyan-neon/10 px-4 py-1.5 font-[family-name:var(--font-mono)] text-xs tracking-wider text-cyan-neon">
              {badge}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[family-name:var(--font-display)] text-4xl leading-[1.1] tracking-wide text-ice-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ice-white/60 sm:text-xl"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href={primaryCTA.href}
            className={cn(
              "glow-cyan inline-flex items-center justify-center rounded-lg bg-cyan-neon px-8 py-3.5",
              "font-[family-name:var(--font-display)] text-base tracking-wider text-dark-deep",
              "transition-all hover:bg-cyan-light hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
            )}
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className={cn(
                "inline-flex items-center justify-center rounded-lg border border-ice-white/20 px-8 py-3.5",
                "font-[family-name:var(--font-display)] text-base tracking-wider text-ice-white/80",
                "transition-all hover:border-cyan-neon/40 hover:text-cyan-neon"
              )}
            >
              {secondaryCTA.label}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
