"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

const projects = [
  { title: "Lawndale Eats", type: "Brand Kit + Web", color: "from-cyan-neon/20 to-blue-500/20" },
  { title: "Urban Roots Co.", type: "E-Commerce", color: "from-purple-500/20 to-cyan-neon/20" },
  { title: "ChiTown Fitness", type: "Social Media", color: "from-cyan-neon/20 to-emerald-500/20" },
  { title: "Spark Creative", type: "Brand Kit", color: "from-orange-500/20 to-cyan-neon/20" },
  { title: "NexGen Realty", type: "Web + Automations", color: "from-cyan-neon/20 to-violet-500/20" },
  { title: "Hampton House Cafe", type: "Full Launch", color: "from-rose-500/20 to-cyan-neon/20" },
];

export function PortfolioShowcase() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
            Our work
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
            PORTFOLIO
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-lg tracking-wider text-cyan-neon transition-colors hover:text-ice-white"
            >
              View All Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <div
        className={cn(
          "group relative aspect-[4/3] overflow-hidden rounded-2xl border border-dark-mid",
          "bg-dark-surface/50 transition-all duration-300",
          "hover:border-cyan-neon/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.06)]"
        )}
      >
        {/* Gradient placeholder background */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-40 transition-opacity duration-300 group-hover:opacity-60",
            project.color
          )}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,240,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Center logo placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-2xl border border-ice-white/10 bg-dark-deep/50 backdrop-blur-sm" />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-deep/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <p className="font-[family-name:var(--font-display)] text-xl tracking-wider text-ice-white">
            {project.title}
          </p>
          <p className="mt-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-cyan-neon/70">
            {project.type}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
