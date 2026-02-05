"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlowDivider } from "@/components/animations/GlowDivider";
import { HexGrid } from "@/components/backgrounds/HexGrid";
import { Target, Eye, Zap } from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "Community First",
    description:
      "Every decision we make starts with one question: does this serve North Lawndale? We build for our neighbors, not for metrics.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "We share our process, our progress, and our challenges openly. Trust is built through honesty, not polished presentations.",
  },
  {
    icon: Zap,
    title: "Action Over Talk",
    description:
      "We don't wait for permission or perfect conditions. We build, we iterate, we ship. Progress happens when you start.",
  },
];

const JOURNEY = [
  {
    year: "2024",
    title: "The Spark",
    description:
      "The idea for Graphene Gangway is born — a community-driven technology initiative rooted in North Lawndale. Late nights sketching the vision, talking to neighbors, and believing something bigger was possible.",
  },
  {
    year: "2025",
    title: "Foundation",
    description:
      "First website launch, YN Academy pilot program, and initial partnerships with local organizations. The community starts showing up — and showing out.",
  },
  {
    year: "2026",
    title: "Growth",
    description:
      "Expanding programs, launching tech services, and building a sustainable model for community technology access. From one neighborhood to a blueprint for the nation.",
  },
];

function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax the vertical line — it draws as you scroll
  const lineScaleY = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  // Each milestone parallaxes at a staggered rate
  const y0 = useTransform(scrollYProgress, [0.1, 0.9], [80, -20]);
  const y1 = useTransform(scrollYProgress, [0.15, 0.9], [100, -30]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.9], [120, -40]);
  const offsets = [y0, y1, y2];

  // Glow pulses on the timeline dots
  const dotGlow0 = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const dotGlow1 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const dotGlow2 = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  const dotGlows = [dotGlow0, dotGlow1, dotGlow2];

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
            Where we&apos;ve been
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
            OUR JOURNEY
          </h2>
        </ScrollReveal>

        <div className="relative mt-20">
          {/* Animated vertical line — draws as you scroll */}
          <motion.div
            style={{ scaleY: lineScaleY }}
            className="absolute left-8 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-cyan-neon/50 via-cyan-neon/30 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-20 md:space-y-28">
            {JOURNEY.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  style={{ y: offsets[i] }}
                  className="relative"
                >
                  {/* ── Mobile: always left-aligned ── */}
                  <div className="flex gap-8 md:hidden">
                    <div className="relative flex-shrink-0">
                      <motion.div
                        style={{ opacity: dotGlows[i] }}
                        className="absolute -inset-3 rounded-full bg-cyan-neon/20 blur-lg"
                      />
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-neon/30 bg-dark-deep">
                        <span className="font-[family-name:var(--font-display)] text-lg text-cyan-neon">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <div className="pt-3">
                      <h3 className="mb-2 font-[family-name:var(--font-display)] text-2xl text-ice-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-ice-white/55">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* ── Desktop: alternating left/right ── */}
                  <div className="hidden md:flex md:items-center md:gap-12">
                    {/* Left column */}
                    <div className={`flex-1 ${isEven ? "text-right" : ""}`}>
                      {isEven && (
                        <ScrollReveal variant="fadeRight" delay={i * 0.1}>
                          <h3 className="mb-2 font-[family-name:var(--font-display)] text-3xl text-ice-white">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-ice-white/55">
                            {item.description}
                          </p>
                        </ScrollReveal>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="relative flex-shrink-0">
                      <motion.div
                        style={{ opacity: dotGlows[i] }}
                        className="absolute -inset-4 rounded-full bg-cyan-neon/20 blur-xl"
                      />
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-neon/30 bg-dark-deep">
                        <span className="font-[family-name:var(--font-display)] text-lg text-cyan-neon">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Right column */}
                    <div className={`flex-1 ${!isEven ? "" : ""}`}>
                      {!isEven && (
                        <ScrollReveal variant="fadeLeft" delay={i * 0.1}>
                          <h3 className="mb-2 font-[family-name:var(--font-display)] text-3xl text-ice-white">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-ice-white/55">
                            {item.description}
                          </p>
                        </ScrollReveal>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-32">
        <HexGrid />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <p className="mb-4 font-[family-name:var(--font-script)] text-xl text-cyan-dim">
              Who we are. Why we do it.
            </p>
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-5xl tracking-wider text-cyan-neon text-glow-cyan md:text-7xl">
              ABOUT US
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-ice-white/70">
              Graphene Gangway is a community technology initiative in North
              Lawndale, Chicago. We&apos;re bridging the digital divide through
              education, services, and grassroots action.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Mission — side-by-side with original logo */}
      <section className="bg-dark-surface/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <ScrollReveal variant="fadeLeft">
              <div className="flex justify-center">
                <Image
                  src="/logos/graphene-gangway-transparent.png"
                  alt="Graphene Gangway — Full Logo"
                  width={768}
                  height={1376}
                  quality={100}
                  className="h-auto w-64 object-contain glow-cyan-strong md:w-80"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.1}>
              <h2 className="mb-8 font-[family-name:var(--font-display)] text-4xl text-ice-white">
                OUR MISSION
              </h2>
              <div className="space-y-6 text-lg text-ice-white/70">
                <p>
                  North Lawndale has been systematically disinvested for decades.
                  42% of residents live below the poverty line. Most households
                  don&apos;t have broadband. The &quot;digital economy&quot;
                  everyone talks about? It&apos;s passing this neighborhood by.
                </p>
                <p className="font-[family-name:var(--font-script)] text-2xl text-cyan-neon">
                  We&apos;re not waiting for someone to save us. We&apos;re
                  building our own bridge.
                </p>
                <p>
                  Graphene Gangway provides free technology education, affordable
                  tech services, and community programs that put real tools in
                  people&apos;s hands. Not charity — capacity.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Values */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-16 text-center font-[family-name:var(--font-display)] text-4xl text-ice-white">
              WHAT WE STAND FOR
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {VALUES.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.15}>
                <div className="text-center">
                  <value.icon className="mx-auto mb-4 h-12 w-12 text-cyan-neon" />
                  <h3 className="mb-3 font-[family-name:var(--font-display)] text-2xl text-ice-white">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ice-white/60">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Journey — parallax timeline */}
      <JourneySection />

      <GlowDivider />

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <ScrollReveal>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl text-cyan-neon text-glow-cyan">
            JOIN THE MOVEMENT
          </h2>
          <p className="mx-auto mb-8 max-w-md text-ice-white/60">
            Whether you want to learn, build, volunteer, or partner — there&apos;s
            a place for you here.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/yn-academy"
              className="inline-block bg-cyan-neon px-8 py-3 font-[family-name:var(--font-display)] text-lg tracking-wider text-dark-deep transition-colors duration-300 hover:bg-cyan-dim"
            >
              EXPLORE PROGRAMS
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-cyan-neon px-8 py-3 font-[family-name:var(--font-display)] text-lg tracking-wider text-cyan-neon transition-colors duration-300 hover:bg-cyan-neon/10"
            >
              GET IN TOUCH
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
