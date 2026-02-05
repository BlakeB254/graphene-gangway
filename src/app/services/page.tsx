import type { Metadata } from "next";
import { ServicesContent } from "./content";

export const metadata: Metadata = {
  title: "Tech Services",
  description:
    "Professional web development, IT support, and digital solutions from Graphene Gangway. Serving North Lawndale and greater Chicago.",
  openGraph: {
    title: "Tech Services | Graphene Gangway",
    description:
      "Web development, IT support, and digital solutions for your business.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
