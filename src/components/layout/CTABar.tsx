"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTABarProps {
  label?: string;
  href?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}

export function CTABar({
  label = "Get Started",
  href = "/pricing",
  secondaryLabel,
  secondaryHref,
  className,
}: CTABarProps) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 border-t border-dark-mid bg-dark-deep/95 backdrop-blur-md p-3 md:hidden",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Link
          href={href}
          className="flex-1 rounded-lg bg-cyan-neon py-3 text-center font-bold text-dark-deep transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
        >
          {label}
        </Link>
        {secondaryLabel && secondaryHref && (
          <Link
            href={secondaryHref}
            className="rounded-lg border border-cyan-neon/30 px-4 py-3 text-center text-sm font-medium text-cyan-neon transition-colors hover:bg-cyan-neon/10"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
