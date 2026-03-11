"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SERVICES, LAUNCH_PACKAGES } from "@/lib/services";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  Check,
  Calculator,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Gift,
  Package,
} from "lucide-react";
import Link from "next/link";

interface SelectedService {
  serviceId: string;
  tierIndex?: number;
}

export function InteractiveCalculator() {
  const [selected, setSelected] = useState<SelectedService[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleService = (serviceId: string, tierIndex?: number) => {
    setSelected((prev) => {
      const existing = prev.findIndex((s) => s.serviceId === serviceId);
      if (existing >= 0) {
        // If clicking same tier, deselect; if different tier, update
        if (tierIndex === prev[existing].tierIndex) {
          return prev.filter((_, i) => i !== existing);
        }
        return prev.map((s, i) =>
          i === existing ? { serviceId, tierIndex } : s
        );
      }
      return [...prev, { serviceId, tierIndex }];
    });
  };

  const isSelected = (serviceId: string) =>
    selected.some((s) => s.serviceId === serviceId);

  const getSelectedTier = (serviceId: string) =>
    selected.find((s) => s.serviceId === serviceId)?.tierIndex;

  const total = useMemo(() => {
    return selected.reduce((sum, sel) => {
      const service = SERVICES.find((s) => s.id === sel.serviceId);
      if (!service) return sum;
      if (service.tiers && sel.tierIndex !== undefined) {
        return sum + service.tiers[sel.tierIndex].price;
      }
      return sum + service.startingPrice;
    }, 0);
  }, [selected]);

  const selectedCount = selected.length;

  const bestPackage = useMemo(() => {
    if (selectedCount < 3) return null;

    const hasWebDev = selected.some((s) => s.serviceId === "web-development");
    const hasAutomations = selected.some(
      (s) => s.serviceId === "brand-automations"
    );
    const hasAI = selected.some((s) => s.serviceId === "ai-knowledge-base");

    if (hasWebDev && hasAutomations && hasAI) {
      const webTier = getSelectedTier("web-development");
      const isEcommerce = webTier === 1;
      const pkg = isEcommerce ? LAUNCH_PACKAGES[1] : LAUNCH_PACKAGES[0];
      const savings = total - pkg.upfrontPrice;
      if (savings > 0) {
        return { pkg, savings };
      }
    }
    return null;
  }, [selected, selectedCount, total]);

  return (
    <ScrollReveal>
      <div className="rounded-2xl border border-ice-white/10 bg-dark-surface/60 backdrop-blur-sm p-6 md:p-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-neon/10">
            <Calculator className="h-6 w-6 text-cyan-neon" />
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-ice-white md:text-3xl">
              Build Your Package
            </h3>
            <p className="text-sm text-ice-white/50">
              Select services to see your custom total
            </p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Service selection */}
          <div className="space-y-3 lg:col-span-2">
            {SERVICES.map((service) => {
              const active = isSelected(service.id);
              const activeTier = getSelectedTier(service.id);
              const hasTiers = service.tiers && service.tiers.length > 0;
              const isExpanded = expandedId === service.id;

              return (
                <div
                  key={service.id}
                  className={cn(
                    "rounded-xl border transition-all duration-300",
                    active
                      ? "border-cyan-neon/40 bg-cyan-neon/5"
                      : "border-ice-white/10 bg-dark-deep/40 hover:border-ice-white/20"
                  )}
                >
                  <div className="flex items-center gap-4 p-4">
                    <button
                      onClick={() => {
                        if (hasTiers) {
                          if (active) {
                            toggleService(service.id, activeTier);
                          } else {
                            setExpandedId(isExpanded ? null : service.id);
                          }
                        } else {
                          toggleService(service.id);
                        }
                      }}
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-all",
                        active
                          ? "border-cyan-neon bg-cyan-neon"
                          : "border-ice-white/30 hover:border-cyan-neon/50"
                      )}
                    >
                      {active && (
                        <Check className="h-4 w-4 text-dark-deep" />
                      )}
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-ice-white">
                          {service.name}
                        </span>
                        {service.includedFree &&
                          service.includedFree.length > 0 && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-medium text-success">
                              <Gift className="h-2.5 w-2.5" />
                              Free with bundles
                            </span>
                          )}
                      </div>
                      <p className="text-xs text-ice-white/40">
                        {service.tagline}
                      </p>
                    </div>

                    <div className="text-right">
                      {active && hasTiers && activeTier !== undefined ? (
                        <span className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon">
                          {service.tiers![activeTier].priceLabel}
                          {service.tiers![activeTier].period || ""}
                        </span>
                      ) : (
                        <span className="font-[family-name:var(--font-mono)] text-sm text-ice-white/50">
                          {service.priceLabel}
                        </span>
                      )}
                    </div>

                    {hasTiers && (
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : service.id)
                        }
                        className="shrink-0 text-ice-white/40 hover:text-cyan-neon transition-colors"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {/* Tier selection */}
                  <AnimatePresence>
                    {isExpanded && hasTiers && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-ice-white/5 px-4 pb-4 pt-3">
                          <div className="grid gap-2 sm:grid-cols-2">
                            {service.tiers!.map((tier, ti) => (
                              <button
                                key={tier.name}
                                onClick={() =>
                                  toggleService(service.id, ti)
                                }
                                className={cn(
                                  "rounded-lg border p-3 text-left transition-all",
                                  activeTier === ti
                                    ? "border-cyan-neon/50 bg-cyan-neon/10"
                                    : "border-ice-white/10 hover:border-ice-white/20"
                                )}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-ice-white">
                                    {tier.name}
                                  </span>
                                  {tier.popular && (
                                    <span className="rounded-full bg-cyan-neon/10 px-2 py-0.5 text-[10px] font-bold text-cyan-neon">
                                      POPULAR
                                    </span>
                                  )}
                                </div>
                                <span className="font-[family-name:var(--font-mono)] text-xs text-cyan-neon">
                                  {tier.priceLabel}
                                  {tier.period || ""}
                                </span>
                                <p className="mt-1 text-[11px] text-ice-white/40">
                                  {tier.description}
                                </p>
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Totals sidebar */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-xl border border-ice-white/10 bg-dark-deep/60 p-6">
              <h4 className="mb-4 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                Your Estimate
              </h4>

              {selectedCount === 0 ? (
                <p className="text-sm text-ice-white/40">
                  Select services to build your package
                </p>
              ) : (
                <div className="space-y-3">
                  {selected.map((sel) => {
                    const service = SERVICES.find(
                      (s) => s.id === sel.serviceId
                    );
                    if (!service) return null;
                    const tier =
                      service.tiers && sel.tierIndex !== undefined
                        ? service.tiers[sel.tierIndex]
                        : null;
                    return (
                      <div
                        key={sel.serviceId}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-ice-white/70">
                          {service.shortName}
                          {tier ? ` (${tier.name})` : ""}
                        </span>
                        <span className="font-[family-name:var(--font-mono)] text-ice-white/50">
                          $
                          {(tier
                            ? tier.price
                            : service.startingPrice
                          ).toLocaleString()}
                        </span>
                      </div>
                    );
                  })}

                  <div className="border-t border-ice-white/10 pt-3">
                    <div className="flex items-end justify-between">
                      <span className="text-sm font-medium text-ice-white/70">
                        Total
                      </span>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={total}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="font-[family-name:var(--font-display)] text-3xl text-cyan-neon text-glow-cyan"
                        >
                          ${total.toLocaleString()}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              )}

              {/* Bundle suggestion */}
              <AnimatePresence>
                {bestPackage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 rounded-xl border border-success/30 bg-success/5 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <Package className="h-4 w-4 text-success" />
                        <span className="text-sm font-semibold text-success">
                          Bundle &amp; Save!
                        </span>
                      </div>
                      <p className="text-xs text-ice-white/60">
                        Get the{" "}
                        <span className="font-semibold text-ice-white">
                          {bestPackage.pkg.name}
                        </span>{" "}
                        and save{" "}
                        <span className="font-semibold text-success">
                          ${bestPackage.savings.toLocaleString()}
                        </span>{" "}
                        plus get the Performance Guarantee included.
                      </p>
                      <Link
                        href="/packages/launch"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-success hover:text-success/80 transition-colors"
                      >
                        View Launch Packages
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {selectedCount > 0 && (
                <Link
                  href="/contact"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-neon px-6 py-3 text-sm font-semibold text-dark-deep shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                >
                  <Sparkles className="h-4 w-4" />
                  Proceed to Checkout
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
