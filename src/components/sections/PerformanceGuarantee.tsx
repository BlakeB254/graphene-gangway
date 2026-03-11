import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/common/Badge";

interface PerformanceGuaranteeProps {
  className?: string;
  compact?: boolean;
}

export function PerformanceGuarantee({
  className,
  compact,
}: PerformanceGuaranteeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-cyan-neon/20 bg-gradient-to-r from-dark-surface to-dark-deep",
        compact ? "p-6" : "p-8 md:p-12",
        className
      )}
    >
      <div className="absolute bottom-0 left-0 top-0 w-1 bg-cyan-neon" />

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 rounded-full border border-cyan-neon/30 bg-cyan-neon/10 p-3">
          <Shield className="h-6 w-6 text-cyan-neon" />
        </div>
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-ice-white">
              PERFORMANCE GUARANTEE
            </h3>
            <Badge variant="warning">Up to $12,000 value</Badge>
          </div>
          <p className="leading-relaxed text-ice-white/70">
            If we don&apos;t hit your target metrics in 6 months, we continue
            your brand automations for 6 more months — free. That&apos;s up to
            $12,000 in additional service.
          </p>
          {!compact && (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Agree on Targets",
                  desc: "Measurable metrics at kickoff",
                },
                {
                  step: "2",
                  title: "Measure at 6 Months",
                  desc: "Data-driven evaluation",
                },
                {
                  step: "3",
                  title: "Guarantee Kicks In",
                  desc: "6 more months free if missed",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-lg border border-dark-mid bg-dark-deep/50 p-4"
                >
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-neon/10 text-sm font-bold text-cyan-neon">
                    {item.step}
                  </div>
                  <p className="font-medium text-ice-white">{item.title}</p>
                  <p className="text-xs text-ice-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
