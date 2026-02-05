import type { Metadata } from "next";
import { ContactContent } from "./content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Graphene Gangway. Inquire about YN Academy, tech services, partnerships, and more.",
  openGraph: {
    title: "Contact | Graphene Gangway",
    description: "Enter the portal. Get in touch with Graphene Gangway.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
