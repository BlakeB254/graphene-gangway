"use client";

import Link from "next/link";
import {
  Palette,
  Briefcase,
  Monitor,
  Zap,
  Brain,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Briefcase,
  Monitor,
  Zap,
  Brain,
};

export function ServiceShowcase() {
  return (
    <section className="bg-dark-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <ScrollAnimation variant="fade-up">
          <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
            What we build
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
            Services
          </h2>
        </ScrollAnimation>

        {/* Service cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Monitor;
            const startingPrice = service.tiers[0]?.priceLabel ?? "";
            const period = service.tiers[0]?.period;
            const isLastRow =
              SERVICES.length % 3 !== 0 &&
              index >= SERVICES.length - (SERVICES.length % 3);

            return (
              <ScrollAnimation
                key={service.id}
                variant="fade-up"
                delay={index * 0.1}
                className={cn(
                  isLastRow &&
                    SERVICES.length % 3 === 2 &&
                    index === SERVICES.length - 2 &&
                    "lg:col-start-1 lg:justify-self-end",
                  isLastRow &&
                    SERVICES.length % 3 === 2 &&
                    index === SERVICES.length - 1 &&
                    "lg:col-start-3 lg:justify-self-start",
                  // Center a single trailing card
                  isLastRow &&
                    SERVICES.length % 3 === 1 &&
                    index === SERVICES.length - 1 &&
                    "lg:col-start-2"
                )}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <div className="relative flex h-full flex-col rounded-xl border border-dark-mid bg-dark-deep p-8 transition-all duration-300 hover:border-cyan-neon/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.08)]">
                    {/* Icon */}
                    <div className="mb-5">
                      <Icon className="h-9 w-9 text-cyan-neon" />
                    </div>

                    {/* Name */}
                    <h3 className="mb-1 font-[family-name:var(--font-display)] text-2xl tracking-wide text-ice-white">
                      {service.name}
                    </h3>

                    {/* Tagline */}
                    <p className="mb-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-cyan-neon/50">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="mb-6 flex-1 leading-relaxed text-ice-white/40">
                      {service.shortDescription}
                    </p>

                    {/* Starting price */}
                    <p className="mb-5 font-[family-name:var(--font-mono)] text-sm text-ice-white/60">
                      Starting at{" "}
                      <span className="text-cyan-neon">{startingPrice}</span>
                      {period === "monthly" && (
                        <span className="text-ice-white/30">/mo</span>
                      )}
                    </p>

                    {/* Learn more link */}
                    <span className="inline-flex items-center gap-1.5 text-sm text-ice-white/30 transition-colors duration-200 group-hover:text-cyan-neon">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-neon/10 to-transparent transition-all duration-500 group-hover:via-cyan-neon/30" />
                  </div>
                </Link>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
