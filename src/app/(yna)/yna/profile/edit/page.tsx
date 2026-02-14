import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getYnaProfile } from "@/lib/yna/db";
import { ProfileEditContent } from "./content";

export const metadata: Metadata = {
  title: "Edit Profile",
};

export default async function YnaProfileEditPage() {
  const session = await getSession();
  if (!session) redirect("/yna/login");

  const profile = await getYnaProfile(session.email);

  return <ProfileEditContent email={session.email} profile={profile} />;
}
