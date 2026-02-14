import type { Metadata } from "next";
import { getSession } from "@/lib/session";
import { getYnaSavedOpportunities } from "@/lib/yna/db";
import { opportunities } from "@/lib/yna/opportunities";
import { SavedContent } from "./content";

export const metadata: Metadata = {
  title: "Saved Opportunities",
};

export default async function YnaSavedPage() {
  const session = await getSession();
  const savedRows = await getYnaSavedOpportunities(session!.email);

  const savedIds = savedRows.map((r: Record<string, unknown>) => r.opportunity_id as string);
  const savedOpps = opportunities.filter((o) => savedIds.includes(o.id));

  return <SavedContent opportunities={savedOpps} />;
}
