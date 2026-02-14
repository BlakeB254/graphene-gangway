"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  accentColor?: "cyan" | "purple" | "emerald" | "amber" | "rose";
}

const colorMap = {
  cyan: {
    bg: "bg-cyan-neon/5",
    border: "border-cyan-neon/20",
    icon: "text-cyan-neon",
    iconBg: "bg-cyan-neon/10",
  },
  purple: {
    bg: "bg-purple-500/5",
    border: "border-purple-500/20",
    icon: "text-purple-400",
    iconBg: "bg-purple-500/10",
  },
  emerald: {
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/20",
    icon: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
  amber: {
    bg: "bg-amber-500/5",
    border: "border-amber-500/20",
    icon: "text-amber-400",
    iconBg: "bg-amber-500/10",
  },
  rose: {
    bg: "bg-rose-500/5",
    border: "border-rose-500/20",
    icon: "text-rose-400",
    iconBg: "bg-rose-500/10",
  },
};

export function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  accentColor = "cyan",
}: StatCardProps) {
  const colors = colorMap[accentColor];

  return (
    <div
      className={cn(
        "rounded-lg border p-4 transition-all",
        colors.bg,
        colors.border,
        "hover:shadow-md"
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-ice-white/50 uppercase tracking-wider">
            {title}
          </p>
          <p className="mt-1 text-2xl font-bold text-ice-white">{value}</p>
          {subtitle && (
            <p className="mt-1 text-xs text-ice-white/40">{subtitle}</p>
          )}
        </div>
        <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", colors.iconBg)}>
          <Icon className={cn("h-5 w-5", colors.icon)} />
        </div>
      </div>
    </div>
  );
}
