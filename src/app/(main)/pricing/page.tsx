import type { Metadata } from "next";
import { PricingContent } from "./content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, no-hidden-fee pricing for brand kits, web development, social media automations, AI knowledge bases, and Launch Packages. See what's included free.",
  openGraph: {
    title: "Pricing | Graphene Gangway",
    description:
      "Straightforward pricing for every stage of your business. Individual services, tiered plans, and all-in-one Launch Packages with a Performance Guarantee.",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
