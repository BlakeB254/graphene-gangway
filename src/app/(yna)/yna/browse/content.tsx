"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { OpportunityCard } from "@/components/yna/OpportunityCard";
import { FilterPanel } from "@/components/yna/FilterPanel";
import { Search, X, ArrowRight } from "lucide-react";
import type { Opportunity, Track, OpportunityType } from "@/lib/yna/types";

interface BrowseContentProps {
  opportunities: Opportunity[];
}

export function BrowseContent({ opportunities }: BrowseContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTracks, setSelectedTracks] = useState<Track[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<OpportunityType[]>([]);

  const filteredOpps = useMemo(() => {
    return opportunities.filter((opp) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        opp.title.toLowerCase().includes(searchLower) ||
        opp.description.toLowerCase().includes(searchLower) ||
        opp.organization.toLowerCase().includes(searchLower);

      const matchesTrack =
        selectedTracks.length === 0 ||
        selectedTracks.some((t) => opp.tracks.includes(t));

      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(opp.type);

      return matchesSearch && matchesTrack && matchesType;
    });
  }, [opportunities, searchQuery, selectedTracks, selectedTypes]);

  return (
    <div className="min-h-screen bg-dark-deep">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-ice-white font-[family-name:var(--font-display)]">
              Browse Opportunities
            </h1>
            <p className="mt-1 text-sm text-ice-white/50">
              Explore all available opportunities. Sign in for personalized matching.
            </p>
          </div>
          <Link
            href="/yna/login"
            className={cn(
              "hidden sm:inline-flex items-center gap-2 rounded-lg px-5 py-2.5",
              "border border-cyan-neon/20 text-cyan-neon text-sm font-medium",
              "transition-all hover:bg-cyan-neon/5"
            )}
          >
            Sign In <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ice-white/30" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search opportunities..."
            className={cn(
              "w-full rounded-lg border border-dark-mid bg-dark-surface/50 pl-10 pr-10 py-3",
              "text-sm text-ice-white placeholder:text-ice-white/30",
              "focus:outline-none focus:border-cyan-neon/40 focus:ring-1 focus:ring-cyan-neon/20"
            )}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ice-white/30 hover:text-ice-white/60"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FilterPanel
              selectedTracks={selectedTracks}
              selectedTypes={selectedTypes}
              onTrackToggle={(t) =>
                setSelectedTracks((prev) =>
                  prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
                )
              }
              onTypeToggle={(t) =>
                setSelectedTypes((prev) =>
                  prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
                )
              }
              onClear={() => {
                setSelectedTracks([]);
                setSelectedTypes([]);
              }}
            />
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs text-ice-white/40 mb-4">
              Showing {filteredOpps.length} of {opportunities.length} opportunities
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredOpps.map((opp) => (
                <OpportunityCard key={opp.id} opportunity={opp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
