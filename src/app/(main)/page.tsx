import { HeroPortal } from "@/components/home/HeroPortal";
import { NorthLawndaleCallout } from "@/components/home/NorthLawndaleCallout";
import { MissionSection } from "@/components/home/MissionSection";
import { ThreePortals } from "@/components/home/ThreePortals";
import { ImpactCounters } from "@/components/home/ImpactCounters";
import { MerchTeaser } from "@/components/home/MerchTeaser";
import { ContactSection } from "@/components/home/ContactSection";
import { GlowDivider } from "@/components/animations/GlowDivider";
import { ScrollMarquee } from "@/components/animations/ScrollMarquee";
import { FloatingOrbs } from "@/components/animations/FloatingOrbs";

export default function Home() {
  return (
    <>
      <FloatingOrbs />
      <HeroPortal />
      <NorthLawndaleCallout />
      <ScrollMarquee text="COMMUNITY" direction="left" />
      <GlowDivider />
      <MissionSection />
      <ScrollMarquee text="TECHNOLOGY" direction="right" />
      <GlowDivider />
      <ThreePortals />
      <GlowDivider />
      <ImpactCounters />
      <ScrollMarquee text="INNOVATION" direction="left" />
      <GlowDivider />
      <MerchTeaser />
      <GlowDivider />
      <ContactSection />
    </>
  );
}
