"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Briefcase,
  Globe,
  Zap,
  Brain,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/services";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Briefcase,
  Globe,
  Zap,
  Brain,
};

export function ServicesOverview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
            What we build
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
            SERVICES
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-[family-name:var(--font-body)] text-base text-ice-white/40">
            Everything your business needs to launch, grow, and scale &mdash;
            from brand identity to AI-powered automation.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = iconMap[service.icon] || Globe;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        href={`/services/${service.slug}`}
        className={cn(
          "group relative block rounded-2xl border border-dark-mid bg-dark-surface/50 p-8",
          "transition-all duration-300",
          "hover:-translate-y-1 hover:border-cyan-neon/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.08)]"
        )}
      >
        {/* Icon */}
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-neon/20 bg-cyan-neon/5 transition-colors duration-300 group-hover:bg-cyan-neon/10">
          <Icon className="h-6 w-6 text-cyan-neon" />
        </div>

        {/* Name */}
        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wider text-ice-white">
          {service.name}
        </h3>

        {/* Tagline */}
        <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-ice-white/40">
          {service.tagline}
        </p>

        {/* Price */}
        <p className="mt-4 font-[family-name:var(--font-display)] text-lg tracking-wide text-cyan-neon">
          {service.priceLabel}
        </p>

        {/* Arrow indicator */}
        <div className="mt-4 flex items-center gap-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-ice-white/20 transition-colors duration-300 group-hover:text-cyan-neon/60">
          Learn more
          <svg
            className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}
