import type { Metadata } from "next";
import { getSession } from "@/lib/session";
import { getYnaDashboardStats, getYnaProfile } from "@/lib/yna/db";
import { opportunities } from "@/lib/yna/opportunities";
import { rankOpportunities } from "@/lib/yna/ranking";
import { DashboardContent } from "./content";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function YnaDashboardPage() {
  const session = await getSession();
  const email = session!.email;

  const [stats, profile] = await Promise.all([
    getYnaDashboardStats(email),
    getYnaProfile(email),
  ]);

  // Server-side match scoring
  const userProfile = profile
    ? {
        track: profile.track,
        interests: profile.interests,
        skills: profile.skills,
        experienceLevel: profile.experience_level,
        preferredOpportunityTypes: profile.preferred_opportunity_types,
        timeCommitmentPreference: profile.time_commitment_preference,
        locationPreferences: profile.location_preferences,
        profileCompletionScore: profile.profile_completion_score,
      }
    : null;

  const rankedOpps = userProfile
    ? rankOpportunities(opportunities, userProfile).slice(0, 5)
    : opportunities.slice(0, 5).map((o) => ({ ...o, matchScore: 0, matchBreakdown: { trackMatch: 0, interestAlignment: 0, skillMatch: 0, experienceLevel: 0, ageEligibility: 0, opportunityType: 0, timeCommitment: 0, locationMatch: 0 } }));

  return (
    <DashboardContent
      email={email}
      stats={stats}
      profileCompletion={stats.profileCompletion}
      isRanked={!!userProfile?.track}
      topOpportunities={rankedOpps}
    />
  );
}
