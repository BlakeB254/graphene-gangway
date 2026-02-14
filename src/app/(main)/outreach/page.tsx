import type { Metadata } from "next";
import { OutreachContent } from "./content";

export const metadata: Metadata = {
  title: "Community Outreach",
  description:
    "Graphene Gangway connects North Lawndale residents to technology resources, digital literacy programs, and community support networks.",
  openGraph: {
    title: "Community Outreach | Graphene Gangway",
    description:
      "Connecting North Lawndale residents to technology and opportunity.",
  },
};

export default function OutreachPage() {
  return <OutreachContent />;
}
