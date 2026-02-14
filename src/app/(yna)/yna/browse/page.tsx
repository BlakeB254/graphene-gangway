import type { Metadata } from "next";
import { opportunities } from "@/lib/yna/opportunities";
import { BrowseContent } from "./content";

export const metadata: Metadata = {
  title: "Browse Opportunities",
  description: "Browse all available opportunities at YN Academy.",
};

export default function YnaBrowsePage() {
  return <BrowseContent opportunities={opportunities} />;
}
