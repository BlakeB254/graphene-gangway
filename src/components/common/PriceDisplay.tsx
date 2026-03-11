"use client";

import { cn } from "@/lib/utils";

interface PriceDisplayProps {
  price: string;
  originalPrice?: string;
  period?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-5xl",
} as const;

export function PriceDisplay({
  price,
  originalPrice,
  period,
  size = "md",
  className,
}: PriceDisplayProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      {originalPrice && (
        <span className="text-sm text-ice-white/40 line-through">
          {originalPrice}
        </span>
      )}
      <div className="flex items-baseline gap-1">
        <span
          className={cn(
            "font-[family-name:var(--font-display)] text-cyan-neon",
            sizeMap[size]
          )}
        >
          {price}
        </span>
        {period && (
          <span className="text-sm text-ice-white/40">{period}</span>
        )}
      </div>
    </div>
  );
}
