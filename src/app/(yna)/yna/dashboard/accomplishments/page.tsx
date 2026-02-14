import type { Metadata } from "next";
import { getSession } from "@/lib/session";
import { getYnaRewards } from "@/lib/yna/db";
import { AccomplishmentsContent } from "./content";

export const metadata: Metadata = {
  title: "Accomplishments",
};

interface RewardRow {
  id: string;
  type: string;
  badge_name: string | null;
  title: string;
  description: string | null;
  amount: number | null;
  earned_at: string;
}

export default async function AccomplishmentsPage() {
  const session = await getSession();
  const rawRewards = await getYnaRewards(session!.email);
  const rewards = rawRewards as unknown as RewardRow[];

  return <AccomplishmentsContent rewards={rewards} />;
}
