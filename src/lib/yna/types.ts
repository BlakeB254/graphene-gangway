// YNA Portal types — migrated from yna-portal/shared/types/opportunity.ts

export type Track =
  | "Engineering"
  | "Media"
  | "IT/Coding"
  | "Business"
  | "Athletics"
  | "Communications"
  | "Agriculture"
  | "General";

export type OpportunityType =
  | "Scholarship"
  | "Competition"
  | "Job"
  | "Grant"
  | "Internship"
  | "Event"
  | "Workshop"
  | "Hackathon";

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export type RewardType = "monetary" | "equipment" | "recognition" | "experience";

export interface OpportunityRequirements {
  age?: string;
  skills?: string[];
  experience?: DifficultyLevel;
  eligibility?: string[];
}

export interface OpportunityDates {
  applicationOpen?: string;
  applicationClose?: string;
  programStart?: string;
  programEnd?: string;
  eventDate?: string;
}

export interface OpportunityBenefits {
  monetary?: string;
  equipment?: string[];
  experience?: string;
  mentorship?: boolean;
  certificate?: boolean;
  type?: RewardType[];
}

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: OpportunityType;
  tracks: Track[];
  description: string;
  requirements: OpportunityRequirements;
  dates: OpportunityDates;
  benefits: OpportunityBenefits;
  applicationUrl: string;
  location: string;
  timeCommitment?: string;
  successRate?: string;
  alumniNotes?: string;
  difficulty?: DifficultyLevel;
}

export interface MatchBreakdown {
  trackMatch: number;
  interestAlignment: number;
  skillMatch: number;
  experienceLevel: number;
  ageEligibility: number;
  opportunityType: number;
  timeCommitment: number;
  locationMatch: number;
}

export interface ScoredOpportunity extends Opportunity {
  matchScore: number;
  matchBreakdown: MatchBreakdown;
}

export interface UserProfile {
  track?: Track;
  interests?: string[];
  skills?: string[];
  experienceLevel?: DifficultyLevel;
  preferredOpportunityTypes?: OpportunityType[];
  timeCommitmentPreference?: string;
  locationPreferences?: string[];
  profileCompletionScore?: number;
}

export interface DashboardStats {
  totalApplications: number;
  pendingApplications: number;
  acceptedApplications: number;
  savedOpportunities: number;
  profileCompletion: number;
}

export type ViewMode = "grid" | "list" | "calendar";

export interface YnaSessionData {
  email: string;
  isAdmin: boolean;
  ynaRole?: "member" | "organization";
}

export const ALL_TRACKS: Track[] = [
  "Engineering",
  "Media",
  "IT/Coding",
  "Business",
  "Athletics",
  "Communications",
  "Agriculture",
  "General",
];

export const ALL_OPPORTUNITY_TYPES: OpportunityType[] = [
  "Scholarship",
  "Competition",
  "Job",
  "Grant",
  "Internship",
  "Event",
  "Workshop",
  "Hackathon",
];
