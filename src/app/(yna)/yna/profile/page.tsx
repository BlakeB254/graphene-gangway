import type { Metadata } from "next";
import { getSession } from "@/lib/session";
import { getYnaProfile } from "@/lib/yna/db";
import { ProfileContent } from "./content";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function YnaProfilePage() {
  const session = await getSession();
  const profile = await getYnaProfile(session!.email);

  return <ProfileContent email={session!.email} profile={profile} />;
}
