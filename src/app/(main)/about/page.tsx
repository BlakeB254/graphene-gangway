import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Graphene Gangway is a community technology initiative in North Lawndale, Chicago. Learn about our mission, our team, and our vision for the future.",
  openGraph: {
    title: "About | Graphene Gangway",
    description:
      "Our mission, our story, and the people behind Graphene Gangway.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
