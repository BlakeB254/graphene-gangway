import { MinimalFooter } from "@/components/layout/MinimalFooter";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      <MinimalFooter />
    </>
  );
}
