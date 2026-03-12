"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Orb {
  x: string;
  y: string;
  size: number;
  mobileSize: number;
  opacity: number;
  speed: number;
  delay: number;
}

const orbs: Orb[] = [
  { x: "10%", y: "20%", size: 300, mobileSize: 140, opacity: 0.04, speed: -0.3, delay: 0 },
  { x: "80%", y: "40%", size: 200, mobileSize: 100, opacity: 0.06, speed: 0.2, delay: 1 },
  { x: "50%", y: "70%", size: 250, mobileSize: 120, opacity: 0.03, speed: -0.15, delay: 2 },
  { x: "20%", y: "85%", size: 180, mobileSize: 90, opacity: 0.05, speed: 0.25, delay: 0.5 },
  { x: "90%", y: "10%", size: 160, mobileSize: 80, opacity: 0.04, speed: -0.2, delay: 1.5 },
];

export function FloatingOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <OrbElement key={i} orb={orb} scrollProgress={scrollYProgress} isMobile={isMobile} />
      ))}
    </div>
  );
}

function OrbElement({
  orb,
  scrollProgress,
  isMobile,
}: {
  orb: Orb;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  isMobile: boolean;
}) {
  const y = useTransform(scrollProgress, [0, 1], [0, orb.speed * (isMobile ? 300 : 600)]);
  const resolvedSize = isMobile ? orb.mobileSize : orb.size;

  return (
    <motion.div
      style={{
        left: orb.x,
        top: orb.y,
        width: resolvedSize,
        height: resolvedSize,
        background: `radial-gradient(circle, rgba(0,240,255,${orb.opacity}) 0%, transparent 70%)`,
        y,
      }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [orb.opacity, orb.opacity * 1.5, orb.opacity],
      }}
      transition={{
        duration: 6 + orb.delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: orb.delay,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
    />
  );
}
