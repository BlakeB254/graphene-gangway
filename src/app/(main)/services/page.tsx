import type { Metadata } from "next";
import { ServicesHubContent } from "./content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional brand kits, business plans, custom websites, social media automations, and AI knowledge bases. Full-service digital solutions from Graphene Gangway.",
  openGraph: {
    title: "Services | Graphene Gangway",
    description:
      "From brand identity to AI-powered business tools — everything your business needs to launch and grow.",
  },
};

export default function ServicesPage() {
  return <ServicesHubContent />;
}
