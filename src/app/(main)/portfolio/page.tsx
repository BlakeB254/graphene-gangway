"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const FILTERS = ["All", "Brand", "Website", "E-Commerce", "Automation", "AI"] as const;
type Filter = (typeof FILTERS)[number];

interface Project {
  id: string;
  title: string;
  client: string;
  category: Filter;
  description: string;
  services: string[];
  color: string;
}

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Full Brand Identity",
    client: "Hampton House",
    category: "Brand",
    description: "Complete brand kit with logo, color palette, typography, and social templates.",
    services: ["Brand Kit"],
    color: "from-cyan-neon/20 to-teal-deep/20",
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    client: "Extreme Meets Wine",
    category: "E-Commerce",
    description: "Custom e-commerce site with product management, cart, and payment processing.",
    services: ["E-Commerce Website", "Brand Kit"],
    color: "from-purple-500/20 to-cyan-neon/20",
  },
  {
    id: "3",
    title: "Social Media Automation",
    client: "GCC",
    category: "Automation",
    description: "5-channel content distribution with 15 daily posts and monthly analytics.",
    services: ["Brand Automations", "Brand Kit"],
    color: "from-warning/20 to-cyan-neon/20",
  },
  {
    id: "4",
    title: "Portfolio Website",
    client: "Local Business #1",
    category: "Website",
    description: "Custom responsive portfolio with content management and admin panel.",
    services: ["Portfolio Website", "Brand Kit"],
    color: "from-success/20 to-teal-deep/20",
  },
  {
    id: "5",
    title: "Brand + Business Plan",
    client: "Startup Client",
    category: "Brand",
    description: "Full Biz Starter Kit with bank-ready business plan and brand identity.",
    services: ["Biz Starter Kit", "Brand Kit"],
    color: "from-cyan-neon/20 to-purple-500/20",
  },
  {
    id: "6",
    title: "AI Knowledge Base",
    client: "Consulting Firm",
    category: "AI",
    description: "Custom Qwen model trained on business data with self-expansion portal.",
    services: ["AI Knowledge Base"],
    color: "from-blue-500/20 to-cyan-neon/20",
  },
  {
    id: "7",
    title: "Full Launch Package",
    client: "New Retail Brand",
    category: "E-Commerce",
    description: "Complete E-Commerce Launch with website, automations, and AI knowledge base.",
    services: ["E-Commerce Launch Package"],
    color: "from-cyan-neon/20 to-success/20",
  },
  {
    id: "8",
    title: "Content Engine",
    client: "Restaurant Group",
    category: "Automation",
    description: "Multi-location brand automations across 7 channels with 20 daily posts.",
    services: ["Brand Automations (Growth)"],
    color: "from-warning/20 to-purple-500/20",
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-deep to-dark-deep" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <p className="mb-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/60">
              Our Work
            </p>
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-5xl tracking-wider text-ice-white md:text-7xl">
              PORTFOLIO
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-ice-white/60">
              From brand identities to full-stack e-commerce platforms — see what
              we&apos;ve built for businesses like yours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 border-b border-dark-mid/50 bg-dark-deep/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all",
                filter === f
                  ? "bg-cyan-neon text-dark-deep"
                  : "bg-dark-surface text-ice-white/60 hover:text-ice-white"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="group relative overflow-hidden rounded-xl border border-dark-mid bg-dark-surface transition-all duration-300 hover:-translate-y-1 hover:border-cyan-neon/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)]">
                    {/* Project Visual */}
                    <div
                      className={cn(
                        "relative aspect-[4/3] bg-gradient-to-br",
                        project.color
                      )}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white/20">
                          {project.client}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-dark-deep/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex items-center gap-2 text-cyan-neon">
                          <ExternalLink className="h-5 w-5" />
                          <span className="font-medium">View Project</span>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <p className="mb-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-cyan-neon/60">
                        {project.client}
                      </p>
                      <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-sm text-ice-white/50">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-cyan-neon/10 px-3 py-1 text-xs text-cyan-neon"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-dark-mid/50 px-6 py-24 text-center">
        <ScrollReveal>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl text-ice-white">
            WANT RESULTS LIKE THESE?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-ice-white/60">
            Let&apos;s talk about what we can build for your business.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-neon px-7 py-3.5 font-bold text-dark-deep transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
            >
              See Pricing
            </Link>
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center rounded-lg border border-ice-white/20 px-7 py-3.5 text-ice-white/70 transition-all hover:border-cyan-neon/50 hover:text-cyan-neon"
            >
              Take Free Assessment
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
