"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommunityMapProps {
  className?: string;
}

export function CommunityMap({ className }: CommunityMapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[#00F0FF]/20 bg-[#1A1D24]",
        className
      )}
    >
      {/* Map placeholder */}
      <div className="relative flex min-h-[400px] flex-col items-center justify-center gap-6 p-8 md:min-h-[500px]">
        {/* Decorative grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#00F0FF 1px, transparent 1px), linear-gradient(90deg, #00F0FF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 h-16 w-16 border-t-2 border-l-2 border-[#00F0FF]/40 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 h-16 w-16 border-t-2 border-r-2 border-[#00F0FF]/40 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 h-16 w-16 border-b-2 border-l-2 border-[#00F0FF]/40 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-[#00F0FF]/40 rounded-br-2xl" />

        {/* Pulsing map pin */}
        <div className="relative">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-[#00F0FF]/20"
            style={{ margin: "-12px" }}
          />
          <MapPin className="h-12 w-12 text-[#00F0FF]" strokeWidth={1.5} />
        </div>

        <div className="text-center">
          <p className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-[#E8FEFF] uppercase md:text-3xl">
            North Lawndale
          </p>
          <p className="mt-1 font-[family-name:var(--font-mono)] text-sm text-[#00B8C4]">
            Community Area #29
          </p>
        </div>

        <p className="max-w-md text-center font-[family-name:var(--font-body)] text-sm text-[#E8FEFF]/50">
          Interactive map of North Lawndale, Chicago — West Side community area
          bounded by the Eisenhower Expressway, Cicero Avenue, Cermak Road, and
          the railroad tracks near Sacramento Boulevard.
        </p>

        {/* Data source link */}
        <a
          href="https://data.cityofchicago.org/resource/cauq-8yn6.geojson"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 rounded-lg border border-[#00F0FF]/20 bg-[#00F0FF]/5 px-4 py-2 font-[family-name:var(--font-mono)] text-xs text-[#00F0FF] transition-colors hover:border-[#00F0FF]/40 hover:bg-[#00F0FF]/10"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          Chicago Data Portal — GeoJSON Boundary
        </a>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/30 to-transparent" />
    </motion.div>
  );
}
