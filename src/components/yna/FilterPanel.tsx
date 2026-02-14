"use client";

import { cn } from "@/lib/utils";
import { ALL_TRACKS, ALL_OPPORTUNITY_TYPES } from "@/lib/yna/types";
import type { Track, OpportunityType } from "@/lib/yna/types";
import { X } from "lucide-react";

interface FilterPanelProps {
  selectedTracks: Track[];
  selectedTypes: OpportunityType[];
  onTrackToggle: (track: Track) => void;
  onTypeToggle: (type: OpportunityType) => void;
  onClear: () => void;
}

export function FilterPanel({
  selectedTracks,
  selectedTypes,
  onTrackToggle,
  onTypeToggle,
  onClear,
}: FilterPanelProps) {
  const hasFilters = selectedTracks.length > 0 || selectedTypes.length > 0;

  return (
    <div className="rounded-lg border border-dark-mid/50 bg-dark-surface/80 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-ice-white">Filters</h3>
        {hasFilters && (
          <button
            type="button"
            onClick={onClear}
            className="text-xs text-cyan-neon/70 hover:text-cyan-neon transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Track Filter */}
      <div className="mb-4">
        <p className="mb-2 text-xs font-medium text-ice-white/50 uppercase tracking-wider">
          Tracks
        </p>
        <div className="flex flex-wrap gap-1.5">
          {ALL_TRACKS.map((track) => (
            <button
              key={track}
              type="button"
              onClick={() => onTrackToggle(track)}
              className={cn(
                "rounded-md border px-2.5 py-1 text-xs transition-all",
                selectedTracks.includes(track)
                  ? "bg-cyan-neon/10 text-cyan-neon border-cyan-neon/30"
                  : "bg-dark-mid/30 text-ice-white/50 border-dark-mid hover:border-ice-white/20 hover:text-ice-white/70"
              )}
            >
              {track}
            </button>
          ))}
        </div>
      </div>

      {/* Type Filter */}
      <div>
        <p className="mb-2 text-xs font-medium text-ice-white/50 uppercase tracking-wider">
          Type
        </p>
        <div className="flex flex-wrap gap-1.5">
          {ALL_OPPORTUNITY_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => onTypeToggle(type)}
              className={cn(
                "rounded-md border px-2.5 py-1 text-xs transition-all",
                selectedTypes.includes(type)
                  ? "bg-cyan-neon/10 text-cyan-neon border-cyan-neon/30"
                  : "bg-dark-mid/30 text-ice-white/50 border-dark-mid hover:border-ice-white/20 hover:text-ice-white/70"
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filter Tags */}
      {hasFilters && (
        <div className="mt-4 pt-3 border-t border-dark-mid/50">
          <p className="mb-2 text-xs text-ice-white/40">Active filters:</p>
          <div className="flex flex-wrap gap-1.5">
            {selectedTracks.map((track) => (
              <span
                key={track}
                className="inline-flex items-center gap-1 rounded-md bg-cyan-neon/10 border border-cyan-neon/20 px-2 py-0.5 text-xs text-cyan-neon"
              >
                {track}
                <button
                  type="button"
                  onClick={() => onTrackToggle(track)}
                  className="hover:text-ice-white"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            {selectedTypes.map((type) => (
              <span
                key={type}
                className="inline-flex items-center gap-1 rounded-md bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 text-xs text-purple-400"
              >
                {type}
                <button
                  type="button"
                  onClick={() => onTypeToggle(type)}
                  className="hover:text-ice-white"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
