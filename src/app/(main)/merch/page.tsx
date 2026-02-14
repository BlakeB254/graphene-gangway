import type { Metadata } from "next";
import { MerchContent } from "./content";

export const metadata: Metadata = {
  title: "Merch",
  description:
    "Rep the movement. Shop Graphene Gangway apparel and accessories. Every purchase supports community technology programs in North Lawndale.",
  openGraph: {
    title: "Merch | Graphene Gangway",
    description:
      "Wear the portal. Every purchase fuels community tech programs.",
  },
};

export default function MerchPage() {
  return <MerchContent />;
}
