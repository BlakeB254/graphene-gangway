"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { OpportunityCard } from "@/components/yna/OpportunityCard";
import { FilterPanel } from "@/components/yna/FilterPanel";
import { Search, Filter, X } from "lucide-react";
import type { ScoredOpportunity, Track, OpportunityType } from "@/lib/yna/types";

interface JobBoardContentProps {
  opportunities: ScoredOpportunity[];
  savedIds: string[];
  isRanked: boolean;
}

export function JobBoardContent({
  opportunities,
  savedIds: initialSavedIds,
  isRanked,
}: JobBoardContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTracks, setSelectedTracks] = useState<Track[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<OpportunityType[]>([]);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set(initialSavedIds));
  const [showFilters, setShowFilters] = useState(false);

  const filteredOpps = useMemo(() => {
    return opportunities.filter((opp) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        opp.title.toLowerCase().includes(searchLower) ||
        opp.description.toLowerCase().includes(searchLower) ||
        opp.organization.toLowerCase().includes(searchLower) ||
        opp.tracks.some((t) => t.toLowerCase().includes(searchLower));

      const matchesTrack =
        selectedTracks.length === 0 ||
        selectedTracks.some((t) => opp.tracks.includes(t));

      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(opp.type);

      return matchesSearch && matchesTrack && matchesType;
    });
  }, [opportunities, searchQuery, selectedTracks, selectedTypes]);

  function toggleTrack(track: Track) {
    setSelectedTracks((prev) =>
      prev.includes(track) ? prev.filter((t) => t !== track) : [...prev, track]
    );
  }

  function toggleType(type: OpportunityType) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  async function handleSave(id: string) {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

    // Persist to API
    try {
      await fetch("/api/yna/saved", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ opportunityId: id }),
      });
    } catch {
      // Revert on failure
      setSavedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    }
  }

  const hasFilters = selectedTracks.length > 0 || selectedTypes.length > 0;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-ice-white font-[family-name:var(--font-display)]">
          Job Board
        </h1>
        <p className="mt-1 text-sm text-ice-white/50">
          {isRanked
            ? "Opportunities ranked by your match score"
            : "Browse all available opportunities"}
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ice-white/30" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, organization, or track..."
            className={cn(
              "w-full rounded-lg border border-dark-mid bg-dark-surface/50 pl-10 pr-4 py-2.5",
              "text-sm text-ice-white placeholder:text-ice-white/30",
              "focus:outline-none focus:border-cyan-neon/40 focus:ring-1 focus:ring-cyan-neon/20",
              "transition-all"
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
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            "flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm transition-all lg:hidden",
            showFilters || hasFilters
              ? "border-cyan-neon/30 bg-cyan-neon/5 text-cyan-neon"
              : "border-dark-mid bg-dark-surface/50 text-ice-white/50 hover:text-ice-white/70"
          )}
        >
          <Filter className="h-4 w-4" />
          {hasFilters && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-neon text-dark-deep text-xs font-bold">
              {selectedTracks.length + selectedTypes.length}
            </span>
          )}
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filter Sidebar */}
        <div className={cn("lg:col-span-1", showFilters ? "block" : "hidden lg:block")}>
          <FilterPanel
            selectedTracks={selectedTracks}
            selectedTypes={selectedTypes}
            onTrackToggle={toggleTrack}
            onTypeToggle={toggleType}
            onClear={() => {
              setSelectedTracks([]);
              setSelectedTypes([]);
            }}
          />
        </div>

        {/* Opportunity Grid */}
        <div className="lg:col-span-3 space-y-4">
          <p className="text-xs text-ice-white/40">
            Showing {filteredOpps.length} of {opportunities.length} opportunities
          </p>

          {filteredOpps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredOpps.map((opp) => (
                <OpportunityCard
                  key={opp.id}
                  opportunity={opp}
                  matchScore={isRanked ? opp.matchScore : undefined}
                  isSaved={savedIds.has(opp.id)}
                  onSave={handleSave}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dark-mid/30 bg-dark-surface/30 p-12 text-center">
              <Search className="h-12 w-12 text-ice-white/20 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-ice-white mb-2">
                No Matching Opportunities
              </h3>
              <p className="text-sm text-ice-white/40">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
