import type { Metadata } from "next";
import { AssessmentContent } from "./content";

export const metadata: Metadata = {
  title: "Free Assessment",
  description:
    "Find out which Graphene Gangway services are right for your business. Take our free assessment to get a personalized recommendation.",
  openGraph: {
    title: "Free Assessment | Graphene Gangway",
    description:
      "Answer a few questions and get a personalized service recommendation.",
  },
};

export default function AssessmentPage() {
  return <AssessmentContent />;
}
