"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlowDivider } from "@/components/animations/GlowDivider";
import { HexGrid } from "@/components/backgrounds/HexGrid";
import { ShoppingBag } from "lucide-react";

const PLACEHOLDER_PRODUCTS = [
  { name: "Portal Tee", category: "Apparel" },
  { name: "Graphene Hoodie", category: "Apparel" },
  { name: "Gangway Cap", category: "Accessories" },
  { name: "Hex Grid Crewneck", category: "Apparel" },
  { name: "Code Builder Tee", category: "Apparel" },
  { name: "NL Patch Beanie", category: "Accessories" },
];

export function MerchContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HexGrid />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-script)] text-xl text-cyan-dim mb-4">
              Rep the movement.
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-cyan-neon text-glow-cyan tracking-wider mb-6">
              WEAR THE PORTAL
            </h1>
            <p className="text-lg text-ice-white/70 max-w-2xl mx-auto">
              Every purchase directly supports technology education and community
              programs in North Lawndale. Look good, do good.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Products Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-4">
              THE COLLECTION
            </h2>
            <p className="text-center text-ice-white/40 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest mb-16">
              Coming Soon
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PLACEHOLDER_PRODUCTS.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.08}>
                <div className="group bg-dark-surface border border-dark-mid rounded-lg overflow-hidden hover:border-cyan-neon/30 transition-all duration-300 corner-frame">
                  {/* Image placeholder */}
                  <div className="aspect-square bg-dark-deep/50 flex items-center justify-center">
                    <ShoppingBag className="w-12 h-12 text-ice-white/10 group-hover:text-cyan-neon/20 transition-colors" />
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <p className="text-xs text-cyan-neon/60 font-[family-name:var(--font-mono)] uppercase tracking-wider">
                      {product.category}
                    </p>
                    <h3 className="font-[family-name:var(--font-display)] text-xl text-ice-white mt-1">
                      {product.name}
                    </h3>
                    <p className="text-ice-white/30 text-sm mt-2">
                      Coming soon
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Notify CTA */}
      <section className="py-24 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-cyan-neon text-glow-cyan mb-4">
            BE THE FIRST TO KNOW
          </h2>
          <p className="text-ice-white/60 mb-8 max-w-md mx-auto">
            Drop us a line and we&apos;ll notify you when the store goes live.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-cyan-neon text-dark-deep font-[family-name:var(--font-display)] text-lg tracking-wider hover:bg-cyan-dim transition-colors duration-300"
          >
            GET NOTIFIED
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
