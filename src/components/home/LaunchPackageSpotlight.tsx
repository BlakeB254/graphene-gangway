"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Shield, Check } from "lucide-react";
import { LAUNCH_PACKAGES, PERFORMANCE_GUARANTEE } from "@/lib/services";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

const featured = LAUNCH_PACKAGES[0]; // Portfolio Launch

export function LaunchPackageSpotlight() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background accent glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,240,255,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
            Launch package
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
            THE FULL LAUNCH
          </h2>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon text-glow-cyan md:text-5xl">
            GUARANTEED.
          </h2>
        </ScrollReveal>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-16 rounded-2xl border border-cyan-neon/20 bg-dark-surface/50 p-8 backdrop-blur-sm md:p-12"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left: included services */}
            <div>
              <p className="mb-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-ice-white/30">
                Everything included
              </p>
              <div className="space-y-4">
                {featured.includes.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + i * 0.08,
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-neon/10">
                      <Check className="h-3 w-3 text-cyan-neon" />
                    </div>
                    <span className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-ice-white/60">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: pricing + guarantee + CTA */}
            <div className="flex flex-col items-start justify-center">
              {/* Price */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <p className="font-[family-name:var(--font-display)] text-6xl tracking-wider text-cyan-neon text-glow-cyan md:text-7xl">
                  ${featured.upfrontPrice.toLocaleString()}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="font-[family-name:var(--font-body)] text-sm text-ice-white/40">
                    À la carte: ${featured.alaCarteTotal.toLocaleString()}
                  </span>
                  <span className="rounded-full bg-cyan-neon/10 px-3 py-1 font-[family-name:var(--font-mono)] text-[11px] font-medium text-cyan-neon">
                    Save {featured.savingsPercent}
                  </span>
                </div>
                <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-ice-white/25">
                  Or ${featured.monthlyDown.toLocaleString()} down + $
                  {featured.monthlyPayment.toLocaleString()}/mo &times;{" "}
                  {featured.monthlyPayments}
                </p>
              </motion.div>

              {/* Performance Guarantee badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                className="mt-8 rounded-xl border border-cyan-neon/15 bg-cyan-neon/5 p-5"
              >
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-cyan-neon" />
                  <span className="font-[family-name:var(--font-display)] text-sm tracking-wider text-cyan-neon">
                    {PERFORMANCE_GUARANTEE.headline}
                  </span>
                </div>
                <p className="mt-2 font-[family-name:var(--font-body)] text-xs leading-relaxed text-ice-white/35">
                  {PERFORMANCE_GUARANTEE.statement}
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                className="mt-8"
              >
                <Link
                  href="/packages/launch"
                  className={cn(
                    "group inline-flex items-center gap-2 bg-cyan-neon px-8 py-4",
                    "font-[family-name:var(--font-display)] text-lg tracking-wider text-dark-deep",
                    "transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.35)]"
                  )}
                >
                  See Launch Packages
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
