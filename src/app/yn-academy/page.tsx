import type { Metadata } from "next";
import { YNAcademyContent } from "./content";

export const metadata: Metadata = {
  title: "YN Academy",
  description:
    "Technology education for the next generation. From the system to the system administrator.",
  openGraph: {
    title: "YN Academy | Graphene Gangway",
    description:
      "Technology education for the next generation in North Lawndale, Chicago.",
  },
};

export default function YNAcademyPage() {
  return <YNAcademyContent />;
}
