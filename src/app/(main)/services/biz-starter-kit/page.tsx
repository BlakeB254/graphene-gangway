import type { Metadata } from "next";
import { BizStarterKitContent } from "./content";

export const metadata: Metadata = {
  title: "Biz Starter Kit — Turn Your Idea Into a Bankable Plan | $199",
  description:
    "Professional business plan, market research, competitive analysis, financial projections, pitch deck, and a free Brand Kit — all for $199. Bank-ready in 2-3 weeks.",
  openGraph: {
    title: "Biz Starter Kit — $199 | Graphene Gangway",
    description:
      "Everything you need to turn your business idea into a bankable plan. Business plan, market research, projections, and more.",
  },
};

export default function BizStarterKitPage() {
  return <BizStarterKitContent />;
}
