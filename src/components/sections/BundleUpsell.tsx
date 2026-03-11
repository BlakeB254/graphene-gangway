import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/common/Badge";

interface BundleUpsellProps {
  currentServiceId: string;
  targetServiceName: string;
  targetServiceHref: string;
  message: string;
  savings?: string;
  className?: string;
}

export function BundleUpsell({
  targetServiceName,
  targetServiceHref,
  message,
  savings,
  className,
}: BundleUpsellProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-cyan-neon/10 bg-dark-surface/50 p-6 md:p-8",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
        <div className="flex-1">
          <p className="mb-1 text-lg font-medium text-ice-white">{message}</p>
          {savings && <Badge variant="success">Save {savings}</Badge>}
        </div>
        <Link
          href={targetServiceHref}
          className="group inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-6 py-3 font-bold text-dark-deep transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
        >
          View {targetServiceName}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
