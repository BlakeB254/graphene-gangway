import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Graphene Gangway is a full-service digital agency in North Lawndale, Chicago. Learn about our mission, team, and commitment to empowering businesses through technology.",
  openGraph: {
    title: "About | Graphene Gangway",
    description:
      "Our mission, our story, and the people behind Graphene Gangway.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
