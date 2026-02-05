import { HeroPortal } from "@/components/home/HeroPortal";
import { MissionSection } from "@/components/home/MissionSection";
import { ThreePortals } from "@/components/home/ThreePortals";
import { ImpactCounters } from "@/components/home/ImpactCounters";
import { MerchTeaser } from "@/components/home/MerchTeaser";
import { ContactSection } from "@/components/home/ContactSection";
import { GlowDivider } from "@/components/animations/GlowDivider";

export default function Home() {
  return (
    <>
      <HeroPortal />
      <GlowDivider />
      <MissionSection />
      <GlowDivider />
      <ThreePortals />
      <GlowDivider />
      <ImpactCounters />
      <GlowDivider />
      <MerchTeaser />
      <GlowDivider />
      <ContactSection />
    </>
  );
}
