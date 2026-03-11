import type { Metadata } from "next";
import { MinimalFooter } from "@/components/layout/MinimalFooter";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// TODO: Capture UTM parameters (utm_source, utm_medium, utm_campaign, utm_content, utm_term)
// via client-side script and store in cookie / session for attribution tracking.

export default function GoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-dark-deep">
      <main className="flex-1">{children}</main>
      <MinimalFooter />
    </div>
  );
}
