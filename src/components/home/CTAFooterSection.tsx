"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CreditCard,
  ClipboardCheck,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

const paths = [
  {
    icon: CreditCard,
    label: "See Pricing",
    desc: "Transparent pricing for every service",
    href: "/pricing",
    primary: false,
  },
  {
    icon: Calendar,
    label: "Book a Call",
    desc: "Free 30-min strategy session",
    href: "https://cal.com",
    primary: true,
  },
  {
    icon: ClipboardCheck,
    label: "Take the Assessment",
    desc: "Find out what your business needs",
    href: "/assessment",
    primary: false,
  },
];

export function CTAFooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-24 md:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,240,255,0.1) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-display)] text-5xl tracking-wider text-ice-white md:text-6xl lg:text-7xl">
            READY TO
          </h2>
          <h2 className="text-center font-[family-name:var(--font-display)] text-5xl tracking-wider text-cyan-neon text-glow-cyan md:text-6xl lg:text-7xl">
            GET STARTED?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-center font-[family-name:var(--font-body)] text-base text-ice-white/40 md:text-lg">
            Choose your path. Every journey starts with a single step &mdash;
            pick the one that fits.
          </p>
        </ScrollReveal>

        {/* Three-path CTA */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {paths.map((path, i) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.1,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={path.href}
                  className={cn(
                    "group relative flex flex-col items-center gap-4 rounded-2xl border p-8 text-center",
                    "transition-all duration-300",
                    path.primary
                      ? "border-cyan-neon/40 bg-cyan-neon/5 hover:bg-cyan-neon/10 hover:shadow-[0_0_50px_rgba(0,240,255,0.12)]"
                      : "border-dark-mid bg-dark-surface/50 hover:border-cyan-neon/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.06)]"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-xl border transition-colors duration-300",
                      path.primary
                        ? "border-cyan-neon/30 bg-cyan-neon/10 group-hover:bg-cyan-neon/20"
                        : "border-cyan-neon/20 bg-cyan-neon/5 group-hover:bg-cyan-neon/10"
                    )}
                  >
                    <Icon className="h-6 w-6 text-cyan-neon" />
                  </div>

                  <p className="font-[family-name:var(--font-display)] text-xl tracking-wider text-ice-white">
                    {path.label}
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-sm text-ice-white/35">
                    {path.desc}
                  </p>

                  <div className="mt-2 flex items-center gap-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-cyan-neon/50 transition-colors duration-300 group-hover:text-cyan-neon">
                    Go
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary quiz CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="font-[family-name:var(--font-body)] text-sm text-ice-white/30">
              Not sure where to start?
            </p>
            <Link
              href="/assessment"
              className="mt-2 inline-flex items-center gap-2 font-[family-name:var(--font-display)] tracking-wider text-cyan-neon transition-colors hover:text-ice-white"
            >
              Take our 2-minute business assessment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
