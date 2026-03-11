"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ClipboardCheck, PenTool, Hammer, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplitText } from "@/components/animations/SplitText";

const steps = [
  {
    number: 1,
    title: "Assess",
    description:
      "Take our free assessment to see which services fit your business needs",
    icon: ClipboardCheck,
  },
  {
    number: 2,
    title: "Design",
    description:
      "We craft a custom plan — brand, website, content, AI — tailored to your goals",
    icon: PenTool,
  },
  {
    number: 3,
    title: "Build",
    description:
      "Our team builds everything while you focus on running your business",
    icon: Hammer,
  },
  {
    number: 4,
    title: "Launch",
    description:
      "Go live with a complete digital presence and 6-month support guarantee",
    icon: Rocket,
  },
] as const;

/* ── Individual Step Card ─────────────────────────────────── */

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.15 + index * 0.15,
      }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Numbered circle with icon */}
      <div className="relative mb-6">
        {/* Outer glow ring */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.25 + index * 0.15,
          }}
          className="absolute -inset-2 rounded-full bg-cyan-neon/5"
        />
        {/* Circle */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 18,
            delay: 0.2 + index * 0.15,
          }}
          className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-cyan-neon/60 bg-dark-deep"
        >
          <step.icon className="h-8 w-8 text-cyan-neon" />
        </motion.div>

        {/* Step number badge */}
        <motion.span
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.35 + index * 0.15,
          }}
          className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-neon font-[family-name:var(--font-mono)] text-xs font-bold text-dark-deep"
        >
          {step.number}
        </motion.span>
      </div>

      {/* Title */}
      <h3 className="mb-2 font-[family-name:var(--font-display)] text-2xl tracking-wide text-ice-white">
        {isInView && (
          <SplitText
            text={step.title}
            variant="rise"
            stagger={0.04}
            startDelay={0.3 + index * 0.15}
            mode="chars"
          />
        )}
      </h3>

      {/* Description */}
      <p className="max-w-[240px] text-sm leading-relaxed text-ice-white/40">
        {isInView && (
          <SplitText
            text={step.description}
            mode="words"
            stagger={0.02}
            startDelay={0.45 + index * 0.15}
            variant="fade"
          />
        )}
      </p>
    </motion.div>
  );
}

/* ── Connecting Line (desktop) ────────────────────────────── */

function ConnectorLine({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="hidden flex-1 items-center px-2 md:flex"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.4 + index * 0.2,
        }}
        className="h-px w-full origin-left bg-gradient-to-r from-cyan-neon/40 via-cyan-neon/20 to-cyan-neon/40"
      />
    </div>
  );
}

/* ── Vertical Connector (mobile) ──────────────────────────── */

function VerticalConnector({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="flex justify-center py-2 md:hidden">
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.3 + index * 0.15,
        }}
        className="h-10 w-px origin-top bg-gradient-to-b from-cyan-neon/40 to-cyan-neon/10"
      />
    </div>
  );
}

/* ── Main Component ───────────────────────────────────────── */

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Decorative background line that tracks scroll
  const bgLineScale = useTransform(scrollYProgress, [0.15, 0.65], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-dark-surface/30 py-24 md:py-32"
    >
      {/* Decorative horizontal accent behind everything */}
      <motion.div
        style={{ scaleX: bgLineScale }}
        className="pointer-events-none absolute left-0 right-0 top-1/2 h-px origin-left bg-gradient-to-r from-transparent via-cyan-neon/8 to-transparent"
      />

      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
            How it works
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
            <SplitText text="YOUR PATH TO LAUNCH" variant="rise" stagger={0.04} />
          </h2>
        </ScrollReveal>

        {/* Desktop: horizontal timeline */}
        <div className="mt-20 hidden items-start md:flex">
          {steps.map((step, i) => (
            <div key={step.number} className="contents">
              <div className="flex-1">
                <StepCard step={step} index={i} />
              </div>
              {i < steps.length - 1 && <ConnectorLine index={i} />}
            </div>
          ))}
        </div>

        {/* Mobile: vertical stacked */}
        <div className="mt-16 md:hidden">
          {steps.map((step, i) => (
            <div key={step.number}>
              <StepCard step={step} index={i} />
              {i < steps.length - 1 && <VerticalConnector index={i} />}
            </div>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 flex justify-center md:mt-20">
            <Link
              href="/assessment"
              className="group relative inline-flex items-center gap-2 rounded-lg border border-cyan-neon/40 bg-cyan-neon/10 px-8 py-3 font-[family-name:var(--font-display)] text-lg tracking-wide text-cyan-neon transition-all duration-300 hover:border-cyan-neon hover:bg-cyan-neon/20 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
            >
              Take the Assessment
              <ClipboardCheck className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
