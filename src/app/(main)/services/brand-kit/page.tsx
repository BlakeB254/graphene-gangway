import type { Metadata } from "next";
import { BrandKitContent } from "./content";

export const metadata: Metadata = {
  title: "Brand Kit — Professional Brand Identity | $99",
  description:
    "Professional brand identity package for $99. Logo, color palette, typography, social media assets, and brand guidelines. Included FREE with any website, automations, or AI service.",
  openGraph: {
    title: "Brand Kit — $99 | Graphene Gangway",
    description:
      "Look professional from day one. Logo, colors, typography, social media assets, and brand guidelines.",
  },
};

export default function BrandKitPage() {
  return <BrandKitContent />;
}
