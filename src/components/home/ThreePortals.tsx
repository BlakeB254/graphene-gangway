"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { GraduationCap, Code, Users, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplitText } from "@/components/animations/SplitText";
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

function PortalCard({
  portal,
  index,
}: {
  portal: (typeof portals)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div ref={ref} variants={itemVariants}>
      <Link href={portal.href} className="group block h-full">
        <div className="relative h-full rounded-xl border border-dark-mid bg-dark-deep p-8 transition-all duration-300 hover:border-cyan-neon/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.06)]">
          {/* Category label — typewriter */}
          <p className="mb-6 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-cyan-neon/40">
            {isInView && (
              <SplitText
                text={portal.subtitle}
                variant="fade"
                stagger={0.04}
                startDelay={0.2 + index * 0.15}
                mode="chars"
              />
            )}
          </p>

          {/* Icon — spins in */}
          <motion.div
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={
              isInView
                ? { opacity: 1, rotate: 0, scale: 1 }
                : {}
            }
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.3 + index * 0.15,
            }}
            className="mb-6"
          >
            <portal.icon className="h-10 w-10 text-cyan-neon" />
          </motion.div>

          {/* Title + Arrow */}
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-ice-white">
              {portal.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-ice-white/10 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-neon" />
          </div>

          {/* Description — word reveal */}
          <p className="leading-relaxed text-ice-white/40">
            {isInView && (
              <SplitText
                text={portal.description}
                mode="words"
                stagger={0.02}
                startDelay={0.5 + index * 0.15}
                variant="fade"
              />
            )}
          </p>

          {/* Bottom accent line — grows on reveal */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.6 + index * 0.15,
            }}
            className="absolute bottom-0 left-8 right-8 h-px origin-left bg-gradient-to-r from-transparent via-cyan-neon/20 to-transparent transition-all duration-500 group-hover:via-cyan-neon/30"
          />
        </div>
      </Link>
    </motion.div>
  );
}

export function ThreePortals() {
  return (
    <section className="py-24 md:py-32 bg-dark-surface/30">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
            What we build
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
            <SplitText text="THREE PATHWAYS" variant="rise" stagger={0.04} />
          </h2>
        </ScrollReveal>

        <StaggerChildren className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {portals.map((portal, i) => (
            <PortalCard key={portal.title} portal={portal} index={i} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
