import type { Metadata } from "next";
import { YnaLoginContent } from "./content";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your YN Academy account.",
};

export default function YnaLoginPage() {
  return <YnaLoginContent />;
}
