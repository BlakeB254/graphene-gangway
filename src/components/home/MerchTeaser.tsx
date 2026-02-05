"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HexGrid } from "@/components/backgrounds/HexGrid";

export function MerchTeaser() {
  return (
    <section id="merch" className="relative py-24">
      <HexGrid />

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl text-cyan-neon text-glow-cyan">
            Wear the Portal
          </h2>
          <p className="mt-3 text-center font-[family-name:var(--font-script)] text-xl text-ice-white/60">
            Rep the movement.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex h-64 items-center justify-center rounded-lg border border-dark-mid bg-dark-surface"
              >
                <span className="font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white/30">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 flex justify-center">
            <Link
              href="#merch"
              className="inline-flex items-center gap-2 rounded-md border border-cyan-neon px-8 py-3 font-[family-name:var(--font-display)] text-lg tracking-wide text-cyan-neon transition-colors hover:bg-cyan-neon/10"
            >
              <ShoppingBag className="h-5 w-5" />
              Shop the Collection
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
