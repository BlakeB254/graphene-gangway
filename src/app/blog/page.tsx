import type { Metadata } from "next";
import { BlogContent } from "./content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, updates, and insights from Graphene Gangway. Follow our journey building technology access in North Lawndale, Chicago.",
  openGraph: {
    title: "Blog | Graphene Gangway",
    description: "Stories and updates from the Graphene Gangway community.",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
