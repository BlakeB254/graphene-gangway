import type { Metadata } from "next";
import { WebDevelopmentContent } from "./content";

export const metadata: Metadata = {
  title: "Web Development — Custom Websites That Work As Hard As You Do",
  description:
    "Custom portfolio websites from $1,500 and full e-commerce from $2,500. Responsive design, admin panel, 6-month support, and full independence. Brand Kit included free.",
  openGraph: {
    title: "Web Development | Graphene Gangway",
    description:
      "Custom-designed, responsive websites with admin panel, 6-month support, and full ownership. Portfolio from $1,500, E-Commerce from $2,500.",
  },
};

export default function WebDevelopmentPage() {
  return <WebDevelopmentContent />;
}
