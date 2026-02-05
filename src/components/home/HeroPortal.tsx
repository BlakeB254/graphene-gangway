"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { HexGrid } from "@/components/backgrounds/HexGrid";
import { PortalVortex } from "@/components/backgrounds/PortalVortex";

export function HeroPortal() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-dark-deep"
    >
      {/* Background layers */}
      <HexGrid />
      <PortalVortex />

      {/* Center content */}
      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 flex flex-col items-center gap-6 px-4 text-center"
      >
        {/* Logo */}
        <Image
          src="/logos/graphene-gangway-transparent.png"
          alt="Graphene Gangway Logo"
          width={128}
          height={128}
          className="glow-cyan-strong h-32 w-32"
          priority
        />

        {/* Title */}
        <h1 className="font-[family-name:var(--font-display)] text-5xl tracking-wider text-cyan-neon text-glow-cyan md:text-7xl">
          GRAPHENE GANGWAY
        </h1>

        {/* Tagline */}
        <p className="font-[family-name:var(--font-body)] text-lg text-ice-white/70">
          {SITE_CONFIG.tagline}
        </p>

        {/* Location */}
        <p className="font-[family-name:var(--font-script)] text-xl text-cyan-dim">
          {SITE_CONFIG.location}
        </p>

        {/* CTAs */}
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/yn-academy"
            className="rounded-md bg-cyan-neon px-8 py-3 font-[family-name:var(--font-display)] text-lg tracking-wide text-dark-deep transition-opacity hover:opacity-90"
          >
            Explore YN Academy
          </Link>
          <Link
            href="#services"
            className="rounded-md border border-cyan-neon px-8 py-3 font-[family-name:var(--font-display)] text-lg tracking-wide text-cyan-neon transition-colors hover:bg-cyan-neon/10"
          >
            Get Tech Services
          </Link>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 animate-bounce text-cyan-neon/60" />
      </motion.div>
    </section>
  );
}
