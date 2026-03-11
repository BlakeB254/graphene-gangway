import { PERFORMANCE_GUARANTEE } from "@/lib/services";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

export function PerformanceGuarantee({ className }: { className?: string }) {
  return (
    <section className={cn("py-24 md:py-32", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="rounded-xl border-l-4 border-cyan-neon bg-gradient-to-r from-teal-deep/20 to-transparent p-8 md:p-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-5xl">
              {PERFORMANCE_GUARANTEE.headline}
            </h2>

            <p className="mt-4 max-w-3xl text-lg text-ice-white/70">
              {PERFORMANCE_GUARANTEE.statement}
            </p>

            {/* 3-step visual */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {PERFORMANCE_GUARANTEE.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-cyan-neon/40 bg-dark-deep">
                    <span className="font-[family-name:var(--font-display)] text-lg text-cyan-neon">
                      {i + 1}
                    </span>
                  </div>
                  <p className="pt-2 text-sm text-ice-white/60">{step}</p>
                </div>
              ))}
            </div>

            {/* Value badge */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-warning/30 bg-warning/10 px-5 py-2">
              <span className="font-[family-name:var(--font-display)] text-xl text-warning">
                {PERFORMANCE_GUARANTEE.value}
              </span>
              <span className="text-sm text-warning/80">value guarantee</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
