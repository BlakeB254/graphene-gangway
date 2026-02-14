"use client";

import Link from "next/link";
import { Menu, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface YnaHeaderProps {
  title?: string;
  showBackToGG?: boolean;
}

export function YnaHeader({ title = "YN Academy", showBackToGG = false }: YnaHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 lg:hidden",
        "bg-dark-deep/95 backdrop-blur-md",
        "border-b border-dark-mid/50"
      )}
    >
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {showBackToGG && (
            <Link
              href="/"
              className="flex items-center text-ice-white/50 hover:text-cyan-neon transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </Link>
          )}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-neon/10 border border-cyan-neon/20">
              <span className="text-cyan-neon font-bold text-xs">YN</span>
            </div>
            <span className="text-sm font-semibold text-ice-white">{title}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
