"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ArrowRight, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

const partners = [
  { name: "Hampton House", desc: "Community hub & partner space" },
  { name: "Monday Coffee", desc: "Entrepreneurship & networking" },
];

export function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/4 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,240,255,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
            Our roots
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
            THE COMMUNITY WE SERVE
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-center gap-3">
              <MapPin className="h-5 w-5 text-cyan-neon" />
              <span className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-ice-white">
                North Lawndale, Chicago
              </span>
            </div>

            <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-ice-white/45">
              Graphene Gangway was born in North Lawndale &mdash; one of
              Chicago&apos;s most resilient neighborhoods. We believe world-class
              digital tools shouldn&apos;t be a luxury. Every brand we build,
              every system we automate, strengthens the ecosystem where we
              started.
            </p>

            <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-ice-white/45">
              Our commitment is simple: give local entrepreneurs the same
              technology, design, and strategy that billion-dollar companies use
              &mdash; at prices that make sense for real people building real
              businesses.
            </p>

            <Link
              href="/community"
              className={cn(
                "group mt-8 inline-flex items-center gap-2",
                "font-[family-name:var(--font-display)] tracking-wider text-cyan-neon",
                "transition-colors hover:text-ice-white"
              )}
            >
              Explore Our Community
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right: partner orgs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-ice-white/30">
              Community partners
            </p>

            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.15,
                  ease: "easeOut",
                }}
                className="flex items-center gap-4 rounded-xl border border-dark-mid bg-dark-surface/50 p-5 transition-all duration-300 hover:border-cyan-neon/20"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-neon/20 bg-cyan-neon/5">
                  <Heart className="h-5 w-5 text-cyan-neon" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-lg tracking-wider text-ice-white">
                    {partner.name}
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-sm text-ice-white/35">
                    {partner.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
