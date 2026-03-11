import type { Metadata } from "next";
import { BrandAutomationsContent } from "./content";

export const metadata: Metadata = {
  title: "Brand Automations — Your Brand, Everywhere, Every Day",
  description:
    "Automated social media content creation, scheduling, and distribution across all channels. 4 tiers from $1,200/mo to $5,000/mo. Up to 30 posts per day across 7+ channels.",
  openGraph: {
    title: "Brand Automations | Graphene Gangway",
    description:
      "Your brand, everywhere, every day — without lifting a finger. Automated content creation, scheduling, and distribution from $1,200/mo.",
  },
};

export default function BrandAutomationsPage() {
  return <BrandAutomationsContent />;
}
