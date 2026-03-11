"use client";

import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";

interface TimelineStep {
  title: string;
  description: string;
  icon?: string;
}

interface ProcessTimelineProps {
  title?: string;
  steps: TimelineStep[];
  className?: string;
}

export function ProcessTimeline({
  title = "Our Process",
  steps,
  className,
}: ProcessTimelineProps) {
  return (
    <SectionWrapper className={className}>
      <ScrollAnimation>
        <h2 className="mb-16 text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
          {title}
        </h2>
      </ScrollAnimation>

      {/* Desktop: horizontal */}
      <div className="hidden items-start justify-between gap-4 md:flex">
        {steps.map((step, i) => (
          <ScrollAnimation key={i} delay={i * 0.1} className="flex-1 text-center">
            <div className="relative">
              {i < steps.length - 1 && (
                <div className="absolute left-1/2 top-5 h-px w-full bg-gradient-to-r from-cyan-neon/40 to-cyan-neon/10" />
              )}
              <div className="relative mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-neon/30 bg-dark-surface">
                <div className="h-3 w-3 rounded-full bg-cyan-neon" />
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-ice-white/50">
                {step.description}
              </p>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="flex flex-col gap-8 md:hidden">
        {steps.map((step, i) => (
          <ScrollAnimation key={i} delay={i * 0.08} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-cyan-neon/30 bg-dark-surface">
                <div className="h-3 w-3 rounded-full bg-cyan-neon" />
              </div>
              {i < steps.length - 1 && (
                <div className="mt-2 h-full w-px bg-gradient-to-b from-cyan-neon/30 to-transparent" />
              )}
            </div>
            <div className="pb-4">
              <h3 className="mb-1 font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-ice-white/50">
                {step.description}
              </p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </SectionWrapper>
  );
}
