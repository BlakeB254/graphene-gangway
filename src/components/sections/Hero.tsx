"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface HeroCTA {
  label: string;
  href: string;
}

interface HeroProps {
  headline: string;
  subheadline?: string;
  primaryCTA?: HeroCTA;
  secondaryCTA?: HeroCTA;
  badge?: string;
  children?: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  badge,
  children,
  className,
  dark = true,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[70vh] w-full items-center overflow-hidden",
        dark && "bg-gradient-to-b from-black to-dark-deep",
        className
      )}
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            {badge && (
              <span className="mb-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/60">
                {badge}
              </span>
            )}

            <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-wider text-ice-white md:text-7xl">
              {headline}
            </h1>

            {subheadline && (
              <p className="mt-6 max-w-2xl font-[family-name:var(--font-body)] text-lg text-ice-white/60 md:text-xl">
                {subheadline}
              </p>
            )}

            {(primaryCTA || secondaryCTA) && (
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                {primaryCTA && (
                  <Link
                    href={primaryCTA.href}
                    className="group inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-neon px-7 py-3.5 font-bold text-dark-deep transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.35)]"
                  >
                    {primaryCTA.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                )}
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-ice-white/20 px-7 py-3.5 font-medium text-ice-white/70 transition-all duration-300 hover:border-cyan-neon/50 hover:text-cyan-neon"
                  >
                    {secondaryCTA.label}
                  </Link>
                )}
              </div>
            )}

            {children && <div className="mt-12 w-full">{children}</div>}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
