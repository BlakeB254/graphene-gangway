"use client";

import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

type LucideIconComponent = React.ComponentType<{ className?: string }>;

interface Step {
  title: string;
  description: string;
  icon?: string;
}

interface ProcessTimelineProps {
  steps: Step[];
  className?: string;
}

function getIcon(iconName?: string): LucideIconComponent | null {
  if (!iconName) return null;
  const Icon = (LucideIcons as Record<string, unknown>)[iconName] as
    | LucideIconComponent
    | undefined;
  return Icon ?? null;
}

export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  return (
    <section className={cn("py-24 md:py-32", className)}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Desktop: horizontal */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute left-[calc(100%/(2*var(--steps)))] right-[calc(100%/(2*var(--steps)))] top-6 h-px bg-dark-mid" style={{ "--steps": steps.length } as React.CSSProperties} />
            <div className="absolute left-[10%] right-[10%] top-6 h-px bg-dark-mid" />

            {steps.map((step, i) => {
              const Icon = getIcon(step.icon);
              return (
                <ScrollReveal
                  key={i}
                  delay={i * 0.15}
                  className="relative flex flex-1 flex-col items-center text-center"
                >
                  {/* Numbered circle */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-neon bg-dark-deep">
                    {Icon ? (
                      <Icon className="h-5 w-5 text-cyan-neon" />
                    ) : (
                      <span className="font-[family-name:var(--font-display)] text-lg text-cyan-neon">
                        {i + 1}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[200px] text-sm text-ice-white/50">
                    {step.description}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Vertical connecting line */}
            <div className="absolute bottom-0 left-[23px] top-0 w-px bg-dark-mid" />

            {steps.map((step, i) => {
              const Icon = getIcon(step.icon);
              return (
                <ScrollReveal
                  key={i}
                  delay={i * 0.12}
                  className={cn("relative pb-10", i === steps.length - 1 && "pb-0")}
                >
                  {/* Numbered circle */}
                  <div className="absolute -left-8 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-neon bg-dark-deep">
                    {Icon ? (
                      <Icon className="h-5 w-5 text-cyan-neon" />
                    ) : (
                      <span className="font-[family-name:var(--font-display)] text-lg text-cyan-neon">
                        {i + 1}
                      </span>
                    )}
                  </div>

                  <div className="ml-8">
                    <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-ice-white/50">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
