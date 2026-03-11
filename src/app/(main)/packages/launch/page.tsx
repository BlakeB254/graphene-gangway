import type { Metadata } from "next";
import { LaunchPackagesContent } from "./content";

export const metadata: Metadata = {
  title: "Launch Packages",
  description:
    "Website, content engine, personal AI, six months of support, and a Performance Guarantee — all in one Launch Package. Portfolio Launch from $13,500 or E-Commerce Launch from $14,000.",
  openGraph: {
    title: "Launch Packages | Graphene Gangway",
    description:
      "Everything your business needs to launch and grow. Custom website, 6 months of content, AI knowledge base, and a Performance Guarantee.",
  },
};

export default function LaunchPackagesPage() {
  return <LaunchPackagesContent />;
}
