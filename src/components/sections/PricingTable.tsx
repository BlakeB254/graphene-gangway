"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SERVICES, type Service, type ServiceTier } from "@/lib/services";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  Palette,
  Briefcase,
  Globe,
  Zap,
  Brain,
  Check,
  ChevronDown,
  Gift,
  Star,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Briefcase,
  Globe,
  Zap,
  Brain,
};

export function PricingTable() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((service, i) => {
        const Icon = iconMap[service.icon] || Globe;
        const isExpanded = expandedService === service.id;
        const hasTiers = service.tiers && service.tiers.length > 0;

        return (
          <ScrollReveal key={service.id} delay={i * 0.1}>
            <div
              className={cn(
                "group relative rounded-2xl border border-ice-white/10 bg-dark-surface/60 backdrop-blur-sm transition-all duration-300",
                "hover:border-cyan-neon/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)]",
                isExpanded && "md:col-span-2 lg:col-span-3"
              )}
            >
              {/* Card header */}
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-neon/10">
                    <Icon className="h-6 w-6 text-cyan-neon" />
                  </div>
                  {service.includedFree && service.includedFree.length > 0 && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
                      <Gift className="h-3 w-3" />
                      Included Free
                    </span>
                  )}
                </div>

                <h3 className="mb-1 font-[family-name:var(--font-display)] text-2xl tracking-wide text-ice-white">
                  {service.name}
                </h3>
                <p className="mb-4 text-sm text-ice-white/50">{service.tagline}</p>

                <div className="mb-4">
                  <span className="font-[family-name:var(--font-display)] text-3xl text-cyan-neon">
                    {service.priceLabel}
                  </span>
                  {service.period && (
                    <span className="text-sm text-ice-white/40">{service.period}</span>
                  )}
                </div>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-ice-white/70"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-neon" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {hasTiers && (
                  <button
                    onClick={() =>
                      setExpandedService(isExpanded ? null : service.id)
                    }
                    className={cn(
                      "flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-neon/20 px-4 py-2.5 text-sm font-medium text-cyan-neon transition-all",
                      "hover:border-cyan-neon/40 hover:bg-cyan-neon/5",
                      isExpanded && "border-cyan-neon/40 bg-cyan-neon/5"
                    )}
                  >
                    {isExpanded ? "Hide" : "View"} Tier Breakdown
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isExpanded && "rotate-180"
                      )}
                    />
                  </button>
                )}
              </div>

              {/* Expanded tier breakdown */}
              <AnimatePresence>
                {isExpanded && hasTiers && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-ice-white/10 p-6">
                      <TierGrid tiers={service.tiers!} serviceName={service.name} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

function TierGrid({
  tiers,
  serviceName,
}: {
  tiers: ServiceTier[];
  serviceName: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-4",
        tiers.length === 2 && "md:grid-cols-2",
        tiers.length === 3 && "md:grid-cols-3",
        tiers.length >= 4 && "md:grid-cols-2 lg:grid-cols-4"
      )}
    >
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={cn(
            "relative rounded-xl border border-ice-white/10 bg-dark-deep/50 p-5 transition-all",
            tier.popular &&
              "border-cyan-neon/40 shadow-[0_0_20px_rgba(0,240,255,0.1)]"
          )}
        >
          {tier.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 rounded-full bg-cyan-neon px-3 py-1 text-xs font-bold text-dark-deep">
                <Star className="h-3 w-3" />
                POPULAR
              </span>
            </div>
          )}

          <h4 className="mb-1 font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white">
            {tier.name}
          </h4>
          <p className="mb-3 text-xs text-ice-white/40">{tier.description}</p>

          <div className="mb-4">
            <span className="font-[family-name:var(--font-display)] text-2xl text-cyan-neon">
              {tier.priceLabel}
            </span>
            {tier.period && (
              <span className="text-xs text-ice-white/40">{tier.period}</span>
            )}
          </div>

          <ul className="space-y-1.5">
            {tier.features.map((feat) => (
              <li
                key={feat}
                className="flex items-start gap-2 text-xs text-ice-white/60"
              >
                <Check className="mt-0.5 h-3 w-3 shrink-0 text-cyan-neon" />
                {feat}
              </li>
            ))}
          </ul>

          {tier.includedFree && tier.includedFree.length > 0 && (
            <div className="mt-3 rounded-lg bg-success/5 px-3 py-2">
              {tier.includedFree.map((item) => (
                <p key={item} className="flex items-center gap-1.5 text-xs text-success">
                  <Gift className="h-3 w-3" />
                  {item} included free
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
