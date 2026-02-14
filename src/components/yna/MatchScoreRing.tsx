"use client";

import { cn } from "@/lib/utils";

interface MatchScoreRingProps {
  score: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function MatchScoreRing({
  score,
  size = "md",
  className,
}: MatchScoreRingProps) {
  const sizes = {
    sm: { container: "h-12 w-12", text: "text-xs", stroke: 3, radius: 18 },
    md: { container: "h-16 w-16", text: "text-sm", stroke: 4, radius: 24 },
    lg: { container: "h-24 w-24", text: "text-xl", stroke: 5, radius: 36 },
  };

  const { container, text, stroke, radius } = sizes[size];
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;

  function getColor(s: number) {
    if (s >= 80) return "stroke-emerald-400";
    if (s >= 60) return "stroke-cyan-neon";
    if (s >= 40) return "stroke-yellow-400";
    return "stroke-red-400";
  }

  return (
    <div
      className={cn("relative flex items-center justify-center", container, className)}
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth={stroke}
          className="stroke-dark-mid"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          className={cn("transition-all duration-700 ease-out", getColor(score))}
        />
      </svg>
      <span className={cn("font-bold text-ice-white", text)}>{score}</span>
    </div>
  );
}
