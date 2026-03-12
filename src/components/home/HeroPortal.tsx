"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroPortal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Dual-trigger: auto-play timer + scroll (whichever is further) ──
  const timerProgress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(timerProgress, [0, 0.03, 0.55], {
      duration: 2.5,
      times: [0, 0.6, 1],
      ease: ["linear", "easeOut"],
    });
    return () => controls.stop();
  }, [timerProgress]);

  const progress = useTransform(
    [scrollYProgress, timerProgress],
    ([scroll, timer]: number[]) => Math.max(scroll, timer)
  );

  // ═══════════════════════════════════════════════════
  // Desktop: Portal shifts left, text slides in from right
  // Mobile:  Portal fades/scales down, text fades in below (no overlap)
  // ═══════════════════════════════════════════════════

  // ── Portal scale ──
  const portalScale = useTransform(
    progress,
    [0, 0.06, 0.16, 0.55],
    isMobile
      ? [0.92, 1.0, 1.0, 0.55]   // shrink more on mobile to make room for text
      : [0.92, 1.0, 1.0, 0.8]
  );

  // ── Portal position: on mobile, shift up instead of left ──
  const portalX = useTransform(
    progress,
    [0, 0.16, 0.55],
    isMobile ? ["0%", "0%", "0%"] : ["0%", "0%", "-25%"]
  );
  const portalY = useTransform(
    progress,
    [0, 0.16, 0.55],
    isMobile ? ["0%", "0%", "-20%"] : ["0%", "0%", "0%"]
  );

  // ── Portal opacity: on mobile, fade out as text appears ──
  const portalFade = useTransform(
    progress,
    [0.3, 0.5],
    isMobile ? [1, 0.3] : [1, 1]
  );

  // ── Image: visible during zoom, fades during swap ──
  const imageOpacity = useTransform(progress, [0.06, 0.16], [1, 0]);

  // ── Video: invisible, fades in during swap ──
  const videoOpacity = useTransform(progress, [0.06, 0.16], [0, 1]);

  // ── Ambient glow ──
  const glowX = useTransform(
    progress,
    [0, 0.16, 0.55],
    isMobile ? ["0%", "0%", "0%"] : ["0%", "0%", "-25%"]
  );
  const glowOpacity = useTransform(progress, [0, 0.04, 0.55], [0.15, 0.5, 0.2]);
  const glowScale = useTransform(progress, [0, 0.06, 0.55], [0.6, 1, 0.7]);

  // ── Text: on mobile, fade in centered (no slide); on desktop, slide from right ──
  const textX = useTransform(
    progress,
    [0.2, 0.55],
    isMobile ? ["0%", "0%"] : ["100%", "0%"]
  );
  const textOpacity = useTransform(progress, [0.2, 0.5], [0, 1]);

  // ── Text backdrop ──
  const backdropOpacity = useTransform(
    progress,
    [0.16, 0.4],
    [0, 1]
  );

  // ── Scroll hint ──
  const scrollHintOpacity = useTransform(progress, [0, 0.06], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative -mt-16"
      style={{ height: isMobile ? "160vh" : "220vh" }}
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden bg-black">
        {/* ── Flickering ambient glow ── */}
        <motion.div
          style={{ x: glowX, scale: glowScale, opacity: glowOpacity }}
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        >
          <div
            className="portal-flicker h-[400px] w-[400px] rounded-full md:h-[700px] md:w-[700px]"
            style={{
              background:
                "radial-gradient(circle, rgba(0,240,255,0.2) 0%, rgba(0,240,255,0.06) 35%, transparent 65%)",
            }}
          />
        </motion.div>

        {/* ── Portal container ── */}
        <motion.div
          style={{ x: portalX, y: portalY, scale: portalScale, opacity: portalFade }}
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          {/* Flickering first-frame image */}
          <motion.div
            style={{ opacity: imageOpacity }}
            className="absolute inset-0 z-[1] flex items-center justify-center"
          >
            <div className="portal-entrance">
              <Image
                src="/logos/portal-frame.png"
                alt="Graphene Gangway Portal"
                width={720}
                height={1040}
                priority
                className="h-[65vh] w-auto object-contain md:h-[88vh]"
              />
            </div>
          </motion.div>

          {/* Video underneath — revealed during swap */}
          <motion.div
            style={{ opacity: videoOpacity }}
            className="flex items-center justify-center"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-[65vh] w-auto max-w-none object-contain md:h-[88vh]"
            >
              <source src="/videos/hero-portal-loop.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>

        {/* ── Text backdrop gradient ── */}
        <motion.div
          style={{ opacity: backdropOpacity }}
          className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-t from-black/85 via-black/40 to-transparent md:bg-gradient-to-l md:from-black/75 md:via-black/35 md:to-transparent"
        />

        {/* ── Text content ── */}
        <motion.div
          style={{ x: textX, opacity: textOpacity }}
          className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-center px-6 pb-24 md:inset-y-0 md:right-0 md:left-auto md:flex md:w-[50%] md:items-center md:justify-start md:px-12 md:pb-0 lg:px-16"
        >
          <div className="text-center md:text-left">
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
              <Link
                href="/pricing"
                className="group inline-flex items-center justify-center gap-2 bg-cyan-neon px-7 py-3.5 font-[family-name:var(--font-display)] tracking-wider text-dark-deep transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.35)]"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 border border-ice-white/15 px-7 py-3.5 font-[family-name:var(--font-display)] tracking-wider text-ice-white/70 transition-all duration-300 hover:border-cyan-neon/50 hover:text-cyan-neon"
              >
                Take the Assessment
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
