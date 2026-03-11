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

export function ServicesContent() {
  return (
    <div className="min-h-screen bg-dark-deep">
      {/* Hero */}
      <section className="relative py-32 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollAnimation variant="fade-up">
            <p className="mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
              What we build
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-ice-white tracking-wider mb-6">
              OUR SERVICES
            </h1>
            <p className="text-lg md:text-xl text-ice-white/60 max-w-2xl mx-auto leading-relaxed">
              Build your business. We&apos;ll build everything else.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Monitor;
              const startingPrice = service.tiers[0]?.priceLabel ?? "";
              const period = service.tiers[0]?.period;
              const tierCount = service.tiers.length;
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
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg border border-dark-mid bg-dark-deep">
                        <Icon className="h-7 w-7 text-cyan-neon" />
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
                      <p className="mb-6 flex-1 text-sm leading-relaxed text-ice-white/50">
                        {service.shortDescription}
                      </p>

                      {/* Price + Tier info */}
                      <div className="mb-6 flex items-baseline justify-between border-t border-dark-mid pt-5">
                        <p className="font-[family-name:var(--font-mono)] text-sm text-ice-white/60">
                          Starting at{" "}
                          <span className="text-cyan-neon">{startingPrice}</span>
                          {period === "monthly" && (
                            <span className="text-ice-white/30">/mo</span>
                          )}
                        </p>
                        <span className="rounded-full border border-dark-mid px-3 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-ice-white/40">
                          {tierCount === 1
                            ? "1 plan"
                            : `${tierCount} plans available`}
                        </span>
                      </div>

                      {/* View Details link */}
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ice-white/30 transition-colors duration-200 group-hover:text-cyan-neon">
                        View Details
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

      {/* CTA */}
      <section className="py-24 px-6">
        <ScrollAnimation variant="fade-up">
          <div className="mx-auto max-w-2xl rounded-xl border border-dark-mid bg-dark-deep p-12 text-center">
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
              NOT SURE WHERE TO START?
            </h2>
            <p className="mb-8 text-ice-white/50">
              Tell us about your business and we&apos;ll recommend the right
              services for your goals and budget.
            </p>
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-8 py-3 font-[family-name:var(--font-display)] text-lg tracking-wider text-dark-deep transition-colors duration-300 hover:bg-cyan-dim"
            >
              Take our free assessment
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
