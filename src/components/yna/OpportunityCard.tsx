"use client";

import { cn } from "@/lib/utils";
import { Calendar, MapPin, Clock, Award, ExternalLink, Bookmark } from "lucide-react";
import type { Opportunity } from "@/lib/yna/types";

interface OpportunityCardProps {
  opportunity: Opportunity;
  matchScore?: number;
  isSaved?: boolean;
  onSave?: (id: string) => void;
}

function getDifficultyColor(difficulty?: string) {
  switch (difficulty) {
    case "Beginner":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    case "Advanced":
      return "bg-orange-500/10 text-orange-400 border-orange-500/20";
    case "Expert":
      return "bg-red-500/10 text-red-400 border-red-500/20";
    default:
      return "bg-dark-mid text-ice-white/60 border-dark-mid";
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case "Scholarship":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    case "Competition":
      return "bg-cyan-neon/10 text-cyan-neon border-cyan-neon/20";
    case "Job":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "Grant":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    case "Internship":
      return "bg-teal-500/10 text-teal-400 border-teal-500/20";
    case "Event":
      return "bg-pink-500/10 text-pink-400 border-pink-500/20";
    case "Workshop":
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    case "Hackathon":
      return "bg-violet-500/10 text-violet-400 border-violet-500/20";
    default:
      return "bg-dark-mid text-ice-white/60 border-dark-mid";
  }
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "Ongoing";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function OpportunityCard({
  opportunity,
  matchScore,
  isSaved = false,
  onSave,
}: OpportunityCardProps) {
  const deadlineDate =
    opportunity.dates.applicationClose || opportunity.dates.eventDate;

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-lg border border-dark-mid/50",
        "bg-dark-surface/80 p-5 transition-all hover:border-cyan-neon/20",
        "hover:shadow-lg hover:shadow-cyan-neon/5"
      )}
    >
      {/* Match Score Badge */}
      {matchScore != null && matchScore > 0 && (
        <div className="absolute -top-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-neon text-dark-deep text-xs font-bold shadow-lg shadow-cyan-neon/30">
          {matchScore}%
        </div>
      )}

      {/* Header */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-ice-white group-hover:text-cyan-neon transition-colors leading-tight">
          {opportunity.title}
        </h3>
        <p className="mt-1 text-sm text-ice-white/50">{opportunity.organization}</p>
      </div>

      {/* Badges */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        <span
          className={cn(
            "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium",
            getTypeColor(opportunity.type)
          )}
        >
          {opportunity.type}
        </span>
        {opportunity.tracks.slice(0, 2).map((track) => (
          <span
            key={track}
            className="inline-flex items-center rounded-md border border-dark-mid bg-dark-mid/50 px-2 py-0.5 text-xs text-ice-white/60"
          >
            {track}
          </span>
        ))}
        {opportunity.difficulty && (
          <span
            className={cn(
              "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium",
              getDifficultyColor(opportunity.difficulty)
            )}
          >
            {opportunity.difficulty}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mb-4 text-sm text-ice-white/60 line-clamp-2">
        {opportunity.description}
      </p>

      {/* Info Grid */}
      <div className="mb-4 space-y-2 text-sm">
        <div className="flex items-center gap-2 text-ice-white/40">
          <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
          <span>Deadline: {formatDate(deadlineDate)}</span>
        </div>
        <div className="flex items-center gap-2 text-ice-white/40">
          <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
          <span>{opportunity.location}</span>
        </div>
        {opportunity.timeCommitment && (
          <div className="flex items-center gap-2 text-ice-white/40">
            <Clock className="h-3.5 w-3.5 flex-shrink-0" />
            <span>{opportunity.timeCommitment}</span>
          </div>
        )}
        {opportunity.benefits.monetary && (
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <Award className="h-3.5 w-3.5 flex-shrink-0" />
            <span>{opportunity.benefits.monetary}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto flex gap-2">
        <a
          href={opportunity.applicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5",
            "bg-cyan-neon/10 text-cyan-neon text-sm font-medium",
            "border border-cyan-neon/20 transition-all",
            "hover:bg-cyan-neon/20 hover:shadow-md hover:shadow-cyan-neon/10"
          )}
        >
          Apply <ExternalLink className="h-3.5 w-3.5" />
        </a>
        {onSave && (
          <button
            type="button"
            onClick={() => onSave(opportunity.id)}
            className={cn(
              "flex items-center justify-center rounded-lg px-3 py-2.5 transition-all border",
              isSaved
                ? "bg-cyan-neon/10 text-cyan-neon border-cyan-neon/20"
                : "bg-dark-mid/50 text-ice-white/40 border-dark-mid hover:text-ice-white/60 hover:border-ice-white/20"
            )}
            aria-label={isSaved ? "Remove from saved" : "Save opportunity"}
          >
            <Bookmark className={cn("h-4 w-4", isSaved && "fill-current")} />
          </button>
        )}
      </div>
    </div>
  );
}
