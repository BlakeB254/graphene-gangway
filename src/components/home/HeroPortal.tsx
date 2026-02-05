"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroPortal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Flicker only at the very top (scroll = 0) ──
  const [isFlickering, setIsFlickering] = useState(true);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setIsFlickering(v < 0.005);
  });

  // ═══════════════════════════════════════════════════
  // Phase 1 (0-6%):   Mini zoom — image scales up
  // Phase 2 (6-16%):  Swap — image crossfades to video
  // Phase 3 (16-55%): Shift — portal to left, text from right
  // Phase 4 (55-100%): Stable, then section scrolls away
  // ═══════════════════════════════════════════════════

  // ── Portal scale: mini zoom → hold → shrink for layout ──
  const portalScale = useTransform(
    scrollYProgress,
    [0, 0.06, 0.16, 0.55],
    [0.92, 1.0, 1.0, 0.8]
  );

  // ── Portal position: centered → shift left ──
  const portalX = useTransform(
    scrollYProgress,
    [0, 0.16, 0.55],
    ["0%", "0%", "-25%"]
  );

  // ── Image: visible during zoom, fades during swap ──
  const imageOpacity = useTransform(
    scrollYProgress,
    [0.06, 0.16],
    [1, 0]
  );

  // ── Video: invisible, fades in during swap ──
  const videoOpacity = useTransform(
    scrollYProgress,
    [0.06, 0.16],
    [0, 1]
  );

  // ── Ambient glow (follows portal, CSS flicker) ──
  const glowX = useTransform(
    scrollYProgress,
    [0, 0.16, 0.55],
    ["0%", "0%", "-25%"]
  );
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.55],
    [0.15, 0.5, 0.2]
  );
  const glowScale = useTransform(
    scrollYProgress,
    [0, 0.06, 0.55],
    [0.6, 1, 0.7]
  );

  // ── Text slides in from right ──
  const textX = useTransform(
    scrollYProgress,
    [0.2, 0.55],
    ["100%", "0%"]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [0, 1]
  );

  // ── Text backdrop (darkens right side for readability) ──
  const backdropOpacity = useTransform(
    scrollYProgress,
    [0.16, 0.4],
    [0, 1]
  );

  // ── Scroll hint ──
  const scrollHintOpacity = useTransform(
    scrollYProgress,
    [0, 0.06],
    [1, 0]
  );

  return (
    <div
      ref={containerRef}
      className="relative -mt-16"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden bg-black">
        {/* ── Flickering ambient glow ── */}
        <motion.div
          style={{ x: glowX, scale: glowScale, opacity: glowOpacity }}
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        >
          <div
            className="portal-flicker h-[700px] w-[700px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,240,255,0.2) 0%, rgba(0,240,255,0.06) 35%, transparent 65%)",
            }}
          />
        </motion.div>

        {/* ── Portal container — zoom → swap → shift ── */}
        <motion.div
          style={{ x: portalX, scale: portalScale }}
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          {/* Flickering first-frame image (on top, fades during swap phase) */}
          <motion.div
            style={{ opacity: imageOpacity }}
            className="absolute inset-0 z-[1] flex items-center justify-center"
          >
            <div className={isFlickering ? "portal-entrance" : ""}>
              <Image
                src="/logos/portal-frame.png"
                alt="Graphene Gangway Portal"
                width={720}
                height={1040}
                priority
                className="h-[88vh] w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Video underneath — identical dimensions, revealed during swap */}
          <motion.div
            style={{ opacity: videoOpacity }}
            className="flex items-center justify-center"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-[88vh] w-auto max-w-none object-contain"
            >
              <source src="/videos/hero-portal-loop.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>

        {/* ── Text backdrop gradient (darkens right side) ── */}
        <motion.div
          style={{ opacity: backdropOpacity }}
          className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-l from-black/75 via-black/35 to-transparent"
        />

        {/* ── Text content — slides in from right ── */}
        <motion.div
          style={{ x: textX, opacity: textOpacity }}
          className="absolute inset-y-0 right-0 z-20 flex w-full items-center px-6 sm:px-10 md:w-[50%] md:px-12 lg:px-16"
        >
          <div>
            <p className="mb-4 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-cyan-neon/60">
              {SITE_CONFIG.location}
            </p>

            <div className="overflow-hidden">
              <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[0.85] tracking-wider text-ice-white md:text-6xl lg:text-8xl">
                GRAPHENE
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[0.85] tracking-wider text-cyan-neon text-glow-cyan md:text-6xl lg:text-8xl">
                GANGWAY
              </h1>
            </div>

            <p className="mt-6 max-w-md font-[family-name:var(--font-body)] text-base text-ice-white/40 md:text-lg">
              {SITE_CONFIG.tagline}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/yn-academy"
                className="group inline-flex items-center justify-center gap-2 bg-cyan-neon px-7 py-3.5 font-[family-name:var(--font-display)] tracking-wider text-dark-deep transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.35)]"
              >
                Explore YN Academy
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-ice-white/15 px-7 py-3.5 font-[family-name:var(--font-display)] tracking-wider text-ice-white/70 transition-all duration-300 hover:border-cyan-neon/50 hover:text-cyan-neon"
              >
                Get Tech Services
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ── Vignette ── */}
        <div
          className="pointer-events-none absolute inset-0 z-[12]"
          style={{
            background:
              "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 0%, rgba(0,0,0,0.35) 75%, rgba(0,0,0,0.8) 100%)",
          }}
        />

        {/* ── Bottom gradient (blends hero black → page dark-deep) ── */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[25] h-56 bg-gradient-to-t from-dark-deep via-dark-deep/60 to-transparent" />

        {/* ── Scroll hint ── */}
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-ice-white/20">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-6 w-px bg-gradient-to-b from-cyan-neon/30 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}
