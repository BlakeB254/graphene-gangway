import type { Metadata } from "next";
import { AssessmentQuiz } from "@/components/forms/AssessmentQuiz";

export const metadata: Metadata = {
  title: "Assessment",
  description:
    "Take our quick assessment to find the perfect Graphene Gangway service for your business. Get a personalized recommendation in under 2 minutes.",
  openGraph: {
    title: "Assessment | Graphene Gangway",
    description:
      "Find the right service for your business. Take our 4-question assessment and get a personalized recommendation.",
  },
};

export default function AssessmentPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1
          className="text-5xl md:text-7xl text-ice-white tracking-wide mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Find Your <span className="text-cyan-neon">Perfect Fit</span>
        </h1>
        <p
          className="text-lg text-ice-white/60 max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Answer 4 quick questions and we&apos;ll recommend the best service or
          package for your business.
        </p>
      </div>

      <AssessmentQuiz />
    </section>
  );
}
