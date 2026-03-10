import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UrbanTextures } from "@/components/backgrounds/UrbanTextures";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UrbanTextures />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
