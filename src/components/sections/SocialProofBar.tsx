"use client";

import { cn } from "@/lib/utils";
import { Counter } from "@/components/animations/Counter";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface SocialProofBarProps {
  stats?: Stat[];
}

const DEFAULT_STATS: Stat[] = [
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 12, suffix: "M+", label: "Social Impressions" },
  { value: 6, label: "Month Guarantee" },
];

export function SocialProofBar({ stats = DEFAULT_STATS }: SocialProofBarProps) {
  return (
    <section className="border-y border-dark-mid bg-dark-surface/50 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:flex md:items-center md:justify-between md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "text-center",
                i < stats.length - 1 &&
                  "md:border-r md:border-dark-mid md:pr-8"
              )}
            >
              <div className="flex items-baseline justify-center gap-0.5">
                {stat.prefix && (
                  <span className="font-[family-name:var(--font-display)] text-3xl text-cyan-neon md:text-5xl">
                    {stat.prefix}
                  </span>
                )}
                <Counter
                  value={stat.value}
                  suffix={stat.suffix ?? ""}
                  className="text-3xl text-cyan-neon md:text-5xl"
                />
              </div>
              <p className="mt-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-ice-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
