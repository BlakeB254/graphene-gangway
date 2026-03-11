import { cn } from "@/lib/utils";

type BadgeVariant = "included" | "popular" | "limited" | "featured" | "savings";

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  included: "bg-success/20 text-success border-success/30",
  popular: "bg-cyan-neon/20 text-cyan-neon border-cyan-neon/30",
  limited: "bg-warning/20 text-warning border-warning/30",
  featured: "bg-cyan-neon/20 text-cyan-neon border-cyan-neon/30",
  savings: "bg-success/20 text-success border-success/30",
};

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
