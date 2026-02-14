import type { Metadata } from "next";
import { getSession } from "@/lib/session";
import { getYnaProfile, getYnaSavedOpportunities } from "@/lib/yna/db";
import { opportunities } from "@/lib/yna/opportunities";
import { rankOpportunities } from "@/lib/yna/ranking";
import { JobBoardContent } from "./content";

export const metadata: Metadata = {
  title: "Job Board",
};

export default async function YnaJobsPage() {
  const session = await getSession();
  const email = session!.email;

  const [profile, savedRows] = await Promise.all([
    getYnaProfile(email),
    getYnaSavedOpportunities(email),
  ]);

  const savedIds = savedRows.map((r: Record<string, unknown>) => r.opportunity_id as string);

  const userProfile = profile
    ? {
        track: profile.track,
        interests: profile.interests,
        skills: profile.skills,
        experienceLevel: profile.experience_level,
        preferredOpportunityTypes: profile.preferred_opportunity_types,
        timeCommitmentPreference: profile.time_commitment_preference,
        locationPreferences: profile.location_preferences,
      }
    : null;

  const rankedOpps = userProfile
    ? rankOpportunities(opportunities, userProfile)
    : opportunities.map((o) => ({
        ...o,
        matchScore: 0,
        matchBreakdown: {
          trackMatch: 0,
          interestAlignment: 0,
          skillMatch: 0,
          experienceLevel: 0,
          ageEligibility: 0,
          opportunityType: 0,
          timeCommitment: 0,
          locationMatch: 0,
        },
      }));

  return (
    <JobBoardContent
      opportunities={rankedOpps}
      savedIds={savedIds}
      isRanked={!!userProfile?.track}
    />
  );
}
