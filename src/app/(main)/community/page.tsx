import type { Metadata } from "next";
import { CommunityContent } from "./content";

export const metadata: Metadata = {
  title: "Community | North Lawndale",
  description:
    "Explore North Lawndale, Chicago — Community Area #29. Graphene Gangway is rooted in this vibrant West Side neighborhood, building economic empowerment through technology.",
  openGraph: {
    title: "Our Community: North Lawndale | Graphene Gangway",
    description:
      "Data, stories, and resources about North Lawndale — the Chicago community Graphene Gangway calls home.",
  },
};

export default function CommunityPage() {
  return <CommunityContent />;
}
