// 8-factor match scoring algorithm — migrated from yna-portal/server/utils/rankingAlgorithm.ts

import type { Opportunity, UserProfile, ScoredOpportunity, MatchBreakdown } from "./types";

/**
 * Ranks opportunities based on user profile using 8-factor scoring.
 * Total score: 100 points.
 */
export function rankOpportunities(
  opportunities: Opportunity[],
  profile: UserProfile
): ScoredOpportunity[] {
  return opportunities
    .map((opportunity) => {
      const matchBreakdown: MatchBreakdown = {
        trackMatch: calculateTrackMatch(opportunity, profile),
        interestAlignment: calculateInterestAlignment(opportunity, profile),
        skillMatch: calculateSkillMatch(opportunity, profile),
        experienceLevel: calculateExperienceLevel(opportunity, profile),
        ageEligibility: calculateAgeEligibility(opportunity),
        opportunityType: calculateOpportunityType(opportunity, profile),
        timeCommitment: calculateTimeCommitment(opportunity, profile),
        locationMatch: calculateLocationMatch(opportunity, profile),
      };

      const matchScore = Object.values(matchBreakdown).reduce(
        (sum, score) => sum + score,
        0
      );

      return { ...opportunity, matchScore, matchBreakdown };
    })
    .sort((a, b) => b.matchScore - a.matchScore);
}

/** Track Match (25 points) */
function calculateTrackMatch(opportunity: Opportunity, profile: UserProfile): number {
  if (!profile.track) return 0;
  if (opportunity.tracks.includes(profile.track)) return 25;
  if (opportunity.tracks.includes("General")) return 10;
  return 0;
}

/** Interest Alignment (20 points) */
function calculateInterestAlignment(opportunity: Opportunity, profile: UserProfile): number {
  if (!profile.interests || profile.interests.length === 0) return 0;
  const oppText = `${opportunity.title} ${opportunity.description} ${opportunity.organization}`.toLowerCase();
  const matchingInterests = profile.interests.filter((interest) =>
    oppText.includes(interest.toLowerCase())
  );
  return Math.round((matchingInterests.length / profile.interests.length) * 20);
}

/** Skill Match (15 points) */
function calculateSkillMatch(opportunity: Opportunity, profile: UserProfile): number {
  if (!profile.skills || profile.skills.length === 0) return 5;
  if (!opportunity.requirements.skills || opportunity.requirements.skills.length === 0) return 10;
  const oppSkills = opportunity.requirements.skills.map((s) => s.toLowerCase());
  const matchingSkills = profile.skills.filter((skill) =>
    oppSkills.some((os) => os.includes(skill.toLowerCase()))
  );
  return Math.round((matchingSkills.length / opportunity.requirements.skills.length) * 15);
}

/** Experience Level (10 points) */
function calculateExperienceLevel(opportunity: Opportunity, profile: UserProfile): number {
  if (!profile.experienceLevel || !opportunity.difficulty) return 5;
  const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];
  const userLevel = levels.indexOf(profile.experienceLevel);
  const oppLevel = levels.indexOf(opportunity.difficulty);
  if (userLevel === oppLevel) return 10;
  if (Math.abs(userLevel - oppLevel) === 1) return 7;
  if (Math.abs(userLevel - oppLevel) === 2) return 3;
  return 0;
}

/** Age Eligibility (10 points) */
function calculateAgeEligibility(opportunity: Opportunity): number {
  if (!opportunity.requirements.age) return 10;
  return 10; // Assume eligible for now; parse age ranges in production
}

/** Opportunity Type Preference (10 points) */
function calculateOpportunityType(opportunity: Opportunity, profile: UserProfile): number {
  if (!profile.preferredOpportunityTypes || profile.preferredOpportunityTypes.length === 0)
    return 5;
  if (profile.preferredOpportunityTypes.includes(opportunity.type)) return 10;
  return 2;
}

/** Time Commitment (5 points) */
function calculateTimeCommitment(opportunity: Opportunity, profile: UserProfile): number {
  if (!profile.timeCommitmentPreference || !opportunity.timeCommitment) return 3;
  const oppCommitment = opportunity.timeCommitment.toLowerCase();
  const userPref = profile.timeCommitmentPreference.toLowerCase();
  if (oppCommitment.includes(userPref)) return 5;
  if (userPref === "high" && (oppCommitment.includes("medium") || oppCommitment.includes("low")))
    return 4;
  if (userPref === "medium" && oppCommitment.includes("low")) return 4;
  return 1;
}

/** Location Match (5 points) */
function calculateLocationMatch(opportunity: Opportunity, profile: UserProfile): number {
  if (!profile.locationPreferences || profile.locationPreferences.length === 0) return 3;
  const location = opportunity.location.toLowerCase();
  if (location.includes("remote") || location.includes("virtual")) return 5;
  for (const pref of profile.locationPreferences) {
    if (location.includes(pref.toLowerCase())) return 5;
  }
  return 1;
}
