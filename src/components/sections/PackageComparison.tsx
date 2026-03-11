"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { LAUNCH_PACKAGES, PERFORMANCE_GUARANTEE } from "@/lib/services";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";
import {
  Check,
  Shield,
  Star,
  ArrowRight,
  Zap,
  Gift,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

export function PackageComparison() {
  const [payMonthly, setPayMonthly] = useState(false);

  return (
    <div>
      {/* Payment toggle */}
      <ScrollReveal>
        <div className="mb-12 flex flex-col items-center gap-4">
          <p className="text-sm text-ice-white/50">Choose your payment plan</p>
          <div className="flex items-center gap-4 rounded-full border border-ice-white/10 bg-dark-surface/60 p-1.5">
            <button
              onClick={() => setPayMonthly(false)}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                !payMonthly
                  ? "bg-cyan-neon text-dark-deep shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                  : "text-ice-white/60 hover:text-ice-white"
              )}
            >
              Pay Upfront &amp; Save
            </button>
            <button
              onClick={() => setPayMonthly(true)}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                payMonthly
                  ? "bg-cyan-neon text-dark-deep shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                  : "text-ice-white/60 hover:text-ice-white"
              )}
            >
              Monthly Payments
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Package cards */}
      <div className="grid gap-8 md:grid-cols-2">
        {LAUNCH_PACKAGES.map((pkg, i) => (
          <ScrollReveal key={pkg.id} delay={i * 0.15}>
            <div
              className={cn(
                "relative flex flex-col rounded-2xl border border-ice-white/10 bg-dark-surface/60 backdrop-blur-sm transition-all duration-300",
                "hover:border-cyan-neon/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.08)]",
                pkg.popular &&
                  "border-cyan-neon/40 shadow-[0_0_30px_rgba(0,240,255,0.1)]"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-neon px-4 py-1.5 text-sm font-bold text-dark-deep shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                    <Star className="h-4 w-4" />
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white">
                  {pkg.name}
                </h3>
                <p className="mb-6 text-sm text-ice-white/50">{pkg.description}</p>

                {/* Price display */}
                <div className="mb-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={payMonthly ? "monthly" : "upfront"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {payMonthly ? (
                        <div>
                          <span className="font-[family-name:var(--font-display)] text-5xl text-cyan-neon text-glow-cyan">
                            ${pkg.monthlyDown.toLocaleString()}
                          </span>
                          <span className="ml-2 text-sm text-ice-white/40">down</span>
                          <p className="mt-1 text-sm text-ice-white/50">
                            + ${pkg.monthlyPayment.toLocaleString()}/mo for{" "}
                            {pkg.monthlyPayments} months
                          </p>
                          <p className="mt-1 text-xs text-ice-white/30">
                            Total: $
                            {(
                              pkg.monthlyDown +
                              pkg.monthlyPayment * pkg.monthlyPayments
                            ).toLocaleString()}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <span className="font-[family-name:var(--font-display)] text-5xl text-cyan-neon text-glow-cyan">
                            ${pkg.upfrontPrice.toLocaleString()}
                          </span>
                          <span className="ml-2 text-sm text-ice-white/40">
                            one-time
                          </span>
                          <p className="mt-1 text-sm text-success">
                            Save ${pkg.savings.toLocaleString()} vs a la carte (
                            {pkg.savingsPercent})
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="my-4 text-xs text-ice-white/30">
                  A la carte value: ${pkg.alaCarteTotal.toLocaleString()}
                </div>

                {/* Included services */}
                <ul className="mb-8 flex-1 space-y-3">
                  {pkg.includes.map((item) => {
                    const isFree = item.toLowerCase().includes("free");
                    return (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-ice-white/70"
                      >
                        {isFree ? (
                          <Gift className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        ) : (
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-neon" />
                        )}
                        {item}
                      </li>
                    );
                  })}
                </ul>

                {/* Performance Guarantee badge */}
                <div className="mb-6 rounded-xl border border-cyan-neon/20 bg-cyan-neon/5 p-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-neon" />
                    <span className="text-sm font-semibold text-cyan-neon">
                      Performance Guarantee Included
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-ice-white/50">
                    Up to {PERFORMANCE_GUARANTEE.value} in additional service if
                    targets aren&apos;t met
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={cn(
                    "flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all",
                    pkg.popular
                      ? "bg-cyan-neon text-dark-deep shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                      : "border border-cyan-neon/30 text-cyan-neon hover:border-cyan-neon/60 hover:bg-cyan-neon/5"
                  )}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
