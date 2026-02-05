"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { GraduationCap, Code, Users, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";

const itemVariants = staggerItemVariants as Variants;

const portals = [
  {
    icon: GraduationCap,
    title: "YN Academy",
    subtitle: "EDUCATION",
    description:
      "Technology education for the next generation of builders, thinkers, and creators from North Lawndale.",
    href: "/yn-academy",
  },
  {
    icon: Code,
    title: "Tech Services",
    subtitle: "SOLUTIONS",
    description:
      "Web development, IT support, cybersecurity, and digital solutions built by the community, for the community.",
    href: "/services",
  },
  {
    icon: Users,
    title: "Community Outreach",
    subtitle: "CONNECTION",
    description:
      "Programs connecting residents to resources, digital literacy, and real opportunities in the tech economy.",
    href: "/outreach",
  },
] as const;

export function ThreePortals() {
  return (
    <section className="py-24 md:py-32 bg-dark-surface/30">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
            What we build
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
            THREE PATHWAYS
          </h2>
        </ScrollReveal>

        <StaggerChildren className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {portals.map((portal) => (
            <motion.div key={portal.title} variants={itemVariants}>
              <Link href={portal.href} className="group block h-full">
                <div className="relative h-full rounded-xl border border-dark-mid bg-dark-deep p-8 transition-all duration-300 hover:border-cyan-neon/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.06)]">
                  {/* Category label */}
                  <p className="mb-6 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-cyan-neon/40">
                    {portal.subtitle}
                  </p>

                  {/* Icon */}
                  <portal.icon className="mb-6 h-10 w-10 text-cyan-neon" />

                  {/* Title + Arrow */}
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-ice-white">
                      {portal.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-ice-white/10 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-neon" />
                  </div>

                  {/* Description */}
                  <p className="leading-relaxed text-ice-white/40">
                    {portal.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-neon/0 to-transparent transition-all duration-500 group-hover:via-cyan-neon/30" />
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
