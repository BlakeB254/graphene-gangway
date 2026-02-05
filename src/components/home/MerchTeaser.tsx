"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function MerchTeaser() {
  return (
    <section className="py-24 md:py-32 bg-dark-surface/30">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
                Merch
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
                WEAR THE PORTAL
              </h2>
            </div>
            <Link
              href="/merch"
              className="group inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm text-cyan-neon transition-colors hover:text-ice-white"
            >
              View collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex h-72 items-center justify-center rounded-xl border border-dark-mid bg-dark-deep transition-colors duration-300 hover:border-dark-mid/80"
              >
                <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.3em] text-ice-white/15">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
