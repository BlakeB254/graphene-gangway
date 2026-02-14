import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "YN Academy",
    template: "%s | YN Academy",
  },
  description:
    "YN Academy by Graphene Gangway — opportunity matching, career development, and gamified achievements for young professionals.",
};

export default function YnaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
