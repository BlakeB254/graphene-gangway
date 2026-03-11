"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  PenTool,
  CalendarClock,
  Share2,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

const steps = [
  { icon: PenTool, label: "Content Creation", desc: "AI-assisted copy, graphics & video" },
  { icon: CalendarClock, label: "Scheduling", desc: "Automated content calendar" },
  { icon: Share2, label: "Distribution", desc: "Multi-platform publishing" },
  { icon: BarChart3, label: "Analytics", desc: "Real-time performance data" },
  { icon: Sparkles, label: "Optimization", desc: "Continuous AI refinement" },
];

export function AutomationExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-dark-deep py-24 md:py-32"
    >
      {/* Subtle accent glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,240,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
            The automation experience
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
            POWERED BY AI.
          </h2>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon text-glow-cyan md:text-5xl">
            DELIVERED BY HUMANS.
          </h2>
        </ScrollReveal>

        {/* Workflow visualization */}
        <div className="mt-20">
          {/* Desktop: horizontal flow */}
          <div className="hidden md:block">
            <div className="relative flex items-start justify-between">
              {/* Connecting line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                className="absolute left-[10%] right-[10%] top-8 h-px origin-left"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #00F0FF, #00F0FF, transparent)",
                }}
              />

              {steps.map((step, i) => (
                <WorkflowNode
                  key={step.label}
                  step={step}
                  index={i}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>

          {/* Mobile: vertical flow */}
          <div className="md:hidden">
            <div className="relative flex flex-col gap-8">
              {/* Vertical connecting line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                className="absolute bottom-0 left-8 top-0 w-px origin-top"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, #00F0FF, #00F0FF, transparent)",
                }}
              />

              {steps.map((step, i) => (
                <MobileWorkflowNode
                  key={step.label}
                  step={step}
                  index={i}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowNode({
  step,
  index,
  isInView,
}: {
  step: (typeof steps)[number];
  index: number;
  isInView: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.15, ease: "easeOut" }}
      className="relative flex w-1/5 flex-col items-center text-center"
    >
      {/* Node circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          duration: 0.4,
          delay: 0.5 + index * 0.15,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        className={cn(
          "relative z-10 flex h-16 w-16 items-center justify-center rounded-full",
          "border border-cyan-neon/30 bg-dark-surface"
        )}
      >
        <Icon className="h-7 w-7 text-cyan-neon" />
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full bg-cyan-neon/5" />
      </motion.div>

      {/* Label */}
      <p className="mt-4 font-[family-name:var(--font-display)] text-sm tracking-wider text-ice-white">
        {step.label}
      </p>
      <p className="mt-1 font-[family-name:var(--font-body)] text-xs text-ice-white/30">
        {step.desc}
      </p>
    </motion.div>
  );
}

function MobileWorkflowNode({
  step,
  index,
  isInView,
}: {
  step: (typeof steps)[number];
  index: number;
  isInView: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.12, ease: "easeOut" }}
      className="flex items-center gap-5"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          duration: 0.4,
          delay: 0.5 + index * 0.12,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-cyan-neon/30 bg-dark-surface"
      >
        <Icon className="h-7 w-7 text-cyan-neon" />
      </motion.div>
      <div>
        <p className="font-[family-name:var(--font-display)] text-sm tracking-wider text-ice-white">
          {step.label}
        </p>
        <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-ice-white/30">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}
