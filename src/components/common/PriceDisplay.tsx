import { cn } from "@/lib/utils";

interface PriceDisplayProps {
  price: string;
  period?: string;
  originalPrice?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-5xl md:text-6xl",
};

export function PriceDisplay({
  price,
  period,
  originalPrice,
  size = "md",
  className,
}: PriceDisplayProps) {
  return (
    <div className={cn("flex items-baseline gap-3", className)}>
      {originalPrice && (
        <span className="text-lg text-ice-white/40 line-through">{originalPrice}</span>
      )}
      <span
        className={cn(
          "font-[family-name:var(--font-display)] tracking-wide text-cyan-neon",
          sizeClasses[size]
        )}
      >
        {price}
      </span>
      {period && (
        <span className="text-sm text-ice-white/50">/{period}</span>
      )}
    </div>
  );
}
