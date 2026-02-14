"use client";

import { cn } from "@/lib/utils";
import { Trophy, Award, Star, Zap, Target, Medal } from "lucide-react";

// Default badges that all members can earn
const DEFAULT_BADGES = [
  {
    id: "profile-complete",
    name: "Profile Pro",
    description: "Completed your member profile",
    icon: Star,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10 border-yellow-500/20",
  },
  {
    id: "first-save",
    name: "Bookworm",
    description: "Saved your first opportunity",
    icon: Target,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    id: "first-apply",
    name: "Go-Getter",
    description: "Applied to your first opportunity",
    icon: Zap,
    color: "text-cyan-neon",
    bgColor: "bg-cyan-neon/10 border-cyan-neon/20",
  },
  {
    id: "five-apps",
    name: "Hustler",
    description: "Applied to 5 opportunities",
    icon: Medal,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10 border-purple-500/20",
  },
  {
    id: "streak-7",
    name: "On Fire",
    description: "7-day login streak",
    icon: Zap,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10 border-orange-500/20",
  },
  {
    id: "high-match",
    name: "Perfect Match",
    description: "Scored 90%+ on an opportunity match",
    icon: Award,
    color: "text-rose-400",
    bgColor: "bg-rose-500/10 border-rose-500/20",
  },
];

interface AccomplishmentsContentProps {
  rewards: Array<{
    id: string;
    type: string;
    badge_name: string | null;
    title: string;
    description: string | null;
    amount: number | null;
    earned_at: string;
  }>;
}

export function AccomplishmentsContent({ rewards }: AccomplishmentsContentProps) {
  const earnedBadgeIds = new Set(
    rewards.filter((r) => r.type === "badge").map((r) => r.badge_name)
  );

  const totalPoints = rewards
    .filter((r) => r.type === "points")
    .reduce((sum, r) => sum + (r.amount ?? 0), 0);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-ice-white font-[family-name:var(--font-display)]">
          Accomplishments
        </h1>
        <p className="mt-1 text-sm text-ice-white/50">
          Your badges, milestones, and reward history
        </p>
      </div>

      {/* Points Summary */}
      <div className="rounded-lg border border-cyan-neon/20 bg-cyan-neon/5 p-6 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-neon/10 border border-cyan-neon/20">
          <Trophy className="h-7 w-7 text-cyan-neon" />
        </div>
        <div>
          <p className="text-sm text-ice-white/50">Total Points</p>
          <p className="text-3xl font-bold text-cyan-neon">{totalPoints}</p>
        </div>
      </div>

      {/* Badges Grid */}
      <div>
        <h2 className="text-lg font-semibold text-ice-white mb-4">Badges</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEFAULT_BADGES.map((badge) => {
            const earned = earnedBadgeIds.has(badge.id);
            const Icon = badge.icon;

            return (
              <div
                key={badge.id}
                className={cn(
                  "rounded-lg border p-5 transition-all",
                  earned
                    ? badge.bgColor
                    : "border-dark-mid/30 bg-dark-surface/30 opacity-50"
                )}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg",
                      earned ? badge.bgColor : "bg-dark-mid/30"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-5 w-5",
                        earned ? badge.color : "text-ice-white/30"
                      )}
                    />
                  </div>
                  <div>
                    <h3 className={cn("text-sm font-semibold", earned ? "text-ice-white" : "text-ice-white/40")}>
                      {badge.name}
                    </h3>
                    <p className="text-xs text-ice-white/40 mt-0.5">
                      {badge.description}
                    </p>
                    {earned && (
                      <p className="text-xs text-emerald-400 mt-1">Earned</p>
                    )}
                    {!earned && (
                      <p className="text-xs text-ice-white/20 mt-1">Locked</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reward History */}
      {rewards.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-ice-white mb-4">
            Reward History
          </h2>
          <div className="space-y-2">
            {rewards.map((reward) => (
              <div
                key={reward.id}
                className="flex items-center justify-between rounded-lg border border-dark-mid/30 bg-dark-surface/30 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-neon/10">
                    <Award className="h-4 w-4 text-cyan-neon" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ice-white">
                      {reward.title}
                    </p>
                    {reward.description && (
                      <p className="text-xs text-ice-white/40">
                        {reward.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  {reward.amount && (
                    <p className="text-sm font-semibold text-cyan-neon">
                      +{reward.amount} pts
                    </p>
                  )}
                  <p className="text-xs text-ice-white/30">
                    {new Date(reward.earned_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {rewards.length === 0 && (
        <div className="rounded-lg border border-dark-mid/30 bg-dark-surface/30 p-12 text-center">
          <Trophy className="h-12 w-12 text-ice-white/20 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-ice-white mb-2">
            No Rewards Yet
          </h3>
          <p className="text-sm text-ice-white/40">
            Start applying to opportunities and completing challenges to earn
            rewards and badges.
          </p>
        </div>
      )}
    </div>
  );
}
