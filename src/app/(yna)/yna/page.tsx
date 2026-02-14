import type { Metadata } from "next";
import { YnaLandingContent } from "./content";

export const metadata: Metadata = {
  title: "YN Academy — Opportunity Matching Platform",
  description:
    "Discover scholarships, competitions, internships, and career opportunities matched to your skills and interests. Powered by Graphene Gangway.",
};

export default function YnaLandingPage() {
  return <YnaLandingContent />;
}
