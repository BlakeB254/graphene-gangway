import type { Metadata } from "next";
import { AIKnowledgeBaseContent } from "./content";

export const metadata: Metadata = {
  title: "AI Knowledge Base — A Personal AI That Knows Your Business",
  description:
    "Custom AI trained on your business data. 3 tiers: Knowledge Base ($1,500), Connected KB ($2,500 + $200/mo), Business Agent ($5,000 + $500/mo). Privacy-safe, deployed to your device.",
  openGraph: {
    title: "Personal AI Knowledge Base | Graphene Gangway",
    description:
      "A personal AI that actually knows your business. Custom-trained, privacy-safe, and deployed to your device. From $1,500.",
  },
};

export default function AIKnowledgeBasePage() {
  return <AIKnowledgeBaseContent />;
}
