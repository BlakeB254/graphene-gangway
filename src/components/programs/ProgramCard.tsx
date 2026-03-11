import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/common/Badge";
import type { ProgramRow } from "@/lib/shared/types";

interface ProgramCardProps {
  program: ProgramRow;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const href = program.external_link || program.internal_route || `/programs/${program.slug}`;
  const isExternal = !!program.external_link;

  return (
    <Link
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-dark-mid bg-dark-surface p-6 transition-all",
        "hover:border-cyan-neon/30 hover:shadow-[0_0_20px_rgba(0,240,255,0.08)]",
        "hover:-translate-y-1"
      )}
    >
      {program.hero_image && (
        <div className="mb-4 aspect-video overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={program.hero_image}
            alt={program.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}

      {program.status === "coming_soon" && (
        <Badge variant="warning" className="mb-3">Coming Soon</Badge>
      )}
      {program.status === "active" && (
        <Badge variant="success" className="mb-3">Active</Badge>
      )}

      <h3 className="mb-2 font-[family-name:var(--font-display)] text-2xl tracking-wider text-ice-white">
        {program.title}
      </h3>

      {program.tagline && (
        <p className="mb-4 text-sm text-ice-white/60">{program.tagline}</p>
      )}

      {program.description && (
        <p className="mb-4 text-sm leading-relaxed text-ice-white/50 line-clamp-3">
          {program.description}
        </p>
      )}

      <span className="inline-flex items-center gap-1 text-sm font-medium text-cyan-neon transition-all group-hover:gap-2">
        Learn More <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
