import { cn } from "@/lib/utils";

type BadgeVariant = "success" | "warning" | "accent" | "muted";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  success: "bg-brand-success/15 text-brand-success",
  warning: "bg-brand-warning/15 text-brand-warning",
  accent: "bg-cyan-neon/15 text-cyan-neon",
  muted: "bg-dark-mid text-ice-white/60",
};

export function Badge({ children, variant = "accent", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
