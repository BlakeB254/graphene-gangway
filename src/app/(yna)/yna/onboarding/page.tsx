import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { OnboardingContent } from "./content";

export const metadata: Metadata = {
  title: "Onboarding",
};

export default async function YnaOnboardingPage() {
  const session = await getSession();
  if (!session) redirect("/yna/login");

  return <OnboardingContent email={session.email} />;
}
