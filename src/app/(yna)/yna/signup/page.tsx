import type { Metadata } from "next";
import { YnaSignupContent } from "./content";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your YN Academy account and start discovering opportunities.",
};

export default function YnaSignupPage() {
  return <YnaSignupContent />;
}
