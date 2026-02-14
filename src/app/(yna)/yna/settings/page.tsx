import type { Metadata } from "next";
import { getSession } from "@/lib/session";
import { SettingsContent } from "./content";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function YnaSettingsPage() {
  const session = await getSession();
  return <SettingsContent email={session!.email} />;
}
