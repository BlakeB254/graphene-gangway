import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES, LAUNCH_PACKAGES, getServiceBySlug } from "@/lib/services";

interface BundleUpsellProps {
  currentService: string;
  className?: string;
}

export function BundleUpsell({ currentService, className }: BundleUpsellProps) {
  const service = getServiceBySlug(currentService);
  const bestPackage = LAUNCH_PACKAGES.find((pkg) => pkg.popular) ?? LAUNCH_PACKAGES[0];

  if (!service || !bestPackage) return null;

  const crossSells = service.crossSells
    .map((cs) => {
      const target = getServiceBySlug(cs.slug);
      return target ? { ...cs, service: target } : null;
    })
    .filter(Boolean) as { slug: string; message: string; service: (typeof SERVICES)[number] }[];

  return (
    <aside className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Launch Package Upsell */}
        <div className="rounded-xl border border-dark-mid bg-dark-surface p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-neon/10">
              <Package className="h-6 w-6 text-cyan-neon" />
            </div>
            <div className="flex-1">
              <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-ice-white">
                Save more with a Launch Package
              </h3>
              <p className="mt-2 text-ice-white/60">
                Bundle {service.name} with our full launch stack and save up to{" "}
                <span className="font-semibold text-success">
                  ${bestPackage.savings.toLocaleString()}
                </span>{" "}
                ({bestPackage.savingsPercent} off).
              </p>

              <Link
                href="/packages/launch"
                className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-6 py-3 font-bold text-dark-deep transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.35)]"
              >
                View Launch Packages
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Cross-sells */}
        {crossSells.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {crossSells.map((cs) => (
              <Link
                key={cs.slug}
                href={`/services/${cs.slug}`}
                className="group flex items-center justify-between rounded-lg border border-dark-mid bg-dark-surface/50 px-6 py-4 transition-all duration-300 hover:border-cyan-neon/30"
              >
                <span className="text-sm text-ice-white/70 transition-colors group-hover:text-cyan-neon">
                  {cs.message}
                </span>
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-ice-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-neon" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
