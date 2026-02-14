"use client";

import { OpportunityCard } from "@/components/yna/OpportunityCard";
import { Bookmark } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Opportunity } from "@/lib/yna/types";

interface SavedContentProps {
  opportunities: Opportunity[];
}

export function SavedContent({ opportunities }: SavedContentProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-ice-white font-[family-name:var(--font-display)]">
          Saved Opportunities
        </h1>
        <p className="mt-1 text-sm text-ice-white/50">
          Your bookmarked opportunities ({opportunities.length})
        </p>
      </div>

      {opportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {opportunities.map((opp) => (
            <OpportunityCard key={opp.id} opportunity={opp} isSaved />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dark-mid/30 bg-dark-surface/30 p-12 text-center">
          <Bookmark className="h-12 w-12 text-ice-white/20 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-ice-white mb-2">
            No Saved Opportunities
          </h3>
          <p className="text-sm text-ice-white/40 mb-6">
            Browse the job board and save opportunities you are interested in
          </p>
          <Link
            href="/yna/jobs"
            className={cn(
              "inline-flex items-center gap-2 rounded-lg px-6 py-2.5",
              "bg-cyan-neon text-dark-deep text-sm font-semibold",
              "transition-all hover:shadow-lg hover:shadow-cyan-neon/30"
            )}
          >
            Browse Opportunities
          </Link>
        </div>
      )}
    </div>
  );
}
