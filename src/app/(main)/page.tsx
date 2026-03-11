import { HeroPortal } from "@/components/home/HeroPortal";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { AutomationExperience } from "@/components/home/AutomationExperience";
import { PortfolioShowcase } from "@/components/home/PortfolioShowcase";
import { LaunchPackageSpotlight } from "@/components/home/LaunchPackageSpotlight";
import { SocialProof } from "@/components/home/SocialProof";
import { CommunitySection } from "@/components/home/CommunitySection";
import { CTAFooterSection } from "@/components/home/CTAFooterSection";
import { GlowDivider } from "@/components/animations/GlowDivider";
import { FloatingOrbs } from "@/components/animations/FloatingOrbs";

export default function Home() {
  return (
    <>
      <FloatingOrbs />
      <HeroPortal />
      <GlowDivider />
      <ServicesOverview />
      <GlowDivider />
      <AutomationExperience />
      <GlowDivider />
      <PortfolioShowcase />
      <GlowDivider />
      <LaunchPackageSpotlight />
      <GlowDivider />
      <SocialProof />
      <GlowDivider />
      <CommunitySection />
      <GlowDivider />
      <CTAFooterSection />
    </>
  );
}
