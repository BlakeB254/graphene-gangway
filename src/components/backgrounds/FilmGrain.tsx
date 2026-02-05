"use client";

import { cn } from "@/lib/utils";

interface FilmGrainProps {
  className?: string;
}

export function FilmGrain({ className }: FilmGrainProps) {
  return (
    <div
      className={cn(
        "film-grain pointer-events-none fixed inset-0 z-50",
        className
      )}
      aria-hidden="true"
    />
  );
}
