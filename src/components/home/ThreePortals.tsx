"use client";

import { motion, type Variants } from "framer-motion";
import { GraduationCap, Code, Users } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import { GlowCard } from "@/components/shared/GlowCard";

const itemVariants = staggerItemVariants as Variants;

const portals = [
  {
    icon: GraduationCap,
    title: "YN Academy",
    description: "Technology education for the next generation",
    href: "/yn-academy",
  },
  {
    icon: Code,
    title: "Tech Services",
    description: "Web development, IT support, and digital solutions",
    href: "#services",
  },
  {
    icon: Users,
    title: "Community Outreach",
    description: "Programs connecting residents to resources",
    href: "#outreach",
  },
] as const;

export function ThreePortals() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="mb-12 text-center font-[family-name:var(--font-display)] text-4xl text-cyan-neon">
            Three Pathways
          </h2>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {portals.map((portal) => (
            <motion.div key={portal.title} variants={itemVariants}>
              <GlowCard href={portal.href}>
                <portal.icon className="mb-4 h-10 w-10 text-cyan-neon" />
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-ice-white">
                  {portal.title}
                </h3>
                <p className="mt-2 text-ice-white/60">{portal.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
