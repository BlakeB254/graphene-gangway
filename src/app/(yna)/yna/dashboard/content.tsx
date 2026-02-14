"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { StatCard } from "@/components/yna/StatCard";
import { OpportunityCard } from "@/components/yna/OpportunityCard";
import {
  User,
  FileCheck,
  Bookmark,
  TrendingUp,
  Target,
  ArrowRight,
  Trophy,
} from "lucide-react";
import type { DashboardStats, ScoredOpportunity } from "@/lib/yna/types";

interface DashboardContentProps {
  email: string;
  stats: DashboardStats;
  profileCompletion: number;
  isRanked: boolean;
  topOpportunities: ScoredOpportunity[];
}

export function DashboardContent({
  email,
  stats,
  profileCompletion,
  isRanked,
  topOpportunities,
}: DashboardContentProps) {
  const displayName = email.split("@")[0];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-ice-white font-[family-name:var(--font-display)]">
          Welcome back, {displayName}
        </h1>
        <p className="mt-1 text-sm text-ice-white/50">
          Here is your personalized dashboard
        </p>
      </div>

      {/* Profile Completion Alert */}
      {profileCompletion < 100 && (
        <div
          className={cn(
            "rounded-lg border border-cyan-neon/20 bg-cyan-neon/5 p-5",
            "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          )}
        >
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-cyan-neon mb-1">
              Complete Your Profile
            </h3>
            <p className="text-xs text-ice-white/50">
              {profileCompletion === 0
                ? "Set up your profile to get personalized opportunity recommendations."
                : "Finish setting up your profile to unlock better match scores."}
            </p>
            <div className="mt-3 h-2 w-full max-w-xs rounded-full bg-dark-mid overflow-hidden">
              <div
                className="h-full rounded-full bg-cyan-neon transition-all duration-500"
                style={{ width: `${profileCompletion}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-ice-white/30">
              {profileCompletion}% complete
            </p>
          </div>
          <Link
            href="/yna/onboarding"
            className={cn(
              "inline-flex items-center gap-2 rounded-lg px-5 py-2.5",
              "bg-cyan-neon text-dark-deep text-sm font-semibold",
              "transition-all hover:shadow-lg hover:shadow-cyan-neon/30",
              "flex-shrink-0"
            )}
          >
            {profileCompletion === 0 ? "Get Started" : "Continue"}{" "}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Profile"
          value={`${profileCompletion}%`}
          subtitle={
            profileCompletion === 100
              ? "Profile is complete"
              : "Complete to unlock features"
          }
          icon={User}
          accentColor="cyan"
        />
        <StatCard
          title="Applications"
          value={stats.totalApplications}
          subtitle={`${stats.pendingApplications} pending review`}
          icon={FileCheck}
          accentColor="purple"
        />
        <StatCard
          title="Saved"
          value={stats.savedOpportunities}
          subtitle="Bookmarked opportunities"
          icon={Bookmark}
          accentColor="emerald"
        />
        <StatCard
          title="Match Quality"
          value={isRanked ? "Active" : "General"}
          subtitle={
            isRanked
              ? "Personalized recommendations"
              : "Complete profile for personalization"
          }
          icon={TrendingUp}
          accentColor={isRanked ? "amber" : "rose"}
        />
      </div>

      {/* Recommendations */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg font-semibold text-ice-white">
              {isRanked ? "Recommended For You" : "Featured Opportunities"}
            </h2>
            <p className="text-xs text-ice-white/40">
              {isRanked
                ? "Top opportunities based on your profile"
                : "Complete your profile for personalized recommendations"}
            </p>
          </div>
          <Link
            href="/yna/jobs"
            className="text-sm text-cyan-neon/70 hover:text-cyan-neon transition-colors flex items-center gap-1"
          >
            View All <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {topOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {topOpportunities.map((opp) => (
              <OpportunityCard
                key={opp.id}
                opportunity={opp}
                matchScore={isRanked ? opp.matchScore : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dark-mid/50 bg-dark-surface/50 p-12 text-center">
            <Trophy className="h-12 w-12 text-ice-white/20 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-ice-white mb-2">
              No Opportunities Yet
            </h3>
            <p className="text-sm text-ice-white/40 mb-6">
              Complete your profile to see personalized recommendations
            </p>
            <Link
              href="/yna/onboarding"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-6 py-2.5",
                "bg-cyan-neon text-dark-deep text-sm font-semibold",
                "transition-all hover:shadow-lg hover:shadow-cyan-neon/30"
              )}
            >
              Complete Profile
            </Link>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/yna/jobs"
          className={cn(
            "rounded-lg border border-dark-mid/50 bg-dark-surface/50 p-5",
            "transition-all hover:border-cyan-neon/20 hover:shadow-lg hover:shadow-cyan-neon/5",
            "group"
          )}
        >
          <Target className="h-6 w-6 text-cyan-neon mb-3" />
          <h3 className="font-semibold text-ice-white group-hover:text-cyan-neon transition-colors mb-1">
            Browse Opportunities
          </h3>
          <p className="text-xs text-ice-white/40">
            Explore all available opportunities
          </p>
        </Link>

        <Link
          href="/yna/profile"
          className={cn(
            "rounded-lg border border-dark-mid/50 bg-dark-surface/50 p-5",
            "transition-all hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/5",
            "group"
          )}
        >
          <User className="h-6 w-6 text-purple-400 mb-3" />
          <h3 className="font-semibold text-ice-white group-hover:text-purple-400 transition-colors mb-1">
            Edit Profile
          </h3>
          <p className="text-xs text-ice-white/40">
            Update your interests and preferences
          </p>
        </Link>

        <Link
          href="/yna/saved"
          className={cn(
            "rounded-lg border border-dark-mid/50 bg-dark-surface/50 p-5",
            "transition-all hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/5",
            "group"
          )}
        >
          <Bookmark className="h-6 w-6 text-emerald-400 mb-3" />
          <h3 className="font-semibold text-ice-white group-hover:text-emerald-400 transition-colors mb-1">
            Saved Opportunities
          </h3>
          <p className="text-xs text-ice-white/40">
            Access your bookmarked opportunities
          </p>
        </Link>
      </div>
    </div>
  );
}
