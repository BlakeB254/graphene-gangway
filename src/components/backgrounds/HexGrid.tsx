"use client";

import { cn } from "@/lib/utils";

interface HexGridProps {
  className?: string;
}

export function HexGrid({ className }: HexGridProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 animate-[hex-breathe_4s_ease-in-out_infinite]",
        className
      )}
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hex-pattern"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1)"
          >
            {/* First hexagon */}
            <path
              d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66Z"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="0.5"
              opacity="0.2"
            />
            {/* Second hexagon offset */}
            <path
              d="M28 100L0 84L0 50L28 34L56 50L56 84L28 100Z"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="0.5"
              opacity="0.12"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-pattern)" />
      </svg>

      <style jsx>{`
        @keyframes hex-breathe {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
