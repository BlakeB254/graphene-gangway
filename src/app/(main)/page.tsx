import { HeroPortal } from "@/components/home/HeroPortal";
import { ServiceShowcase } from "@/components/home/ServiceShowcase";
import { HowItWorks } from "@/components/home/HowItWorks";
import { MissionSection } from "@/components/home/MissionSection";
import { ContactSection } from "@/components/home/ContactSection";
import { PerformanceGuarantee } from "@/components/sections/PerformanceGuarantee";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";
import { GlowDivider } from "@/components/animations/GlowDivider";
import { FloatingOrbs } from "@/components/animations/FloatingOrbs";

export default function Home() {
  return (
    <>
      <FloatingOrbs />
      {/* 1. Hero — brand impression + CTA */}
      <HeroPortal />
      <GlowDivider />
      {/* 2. Services — what we build */}
      <ServiceShowcase />
      <GlowDivider />
      {/* 3. How it works — process */}
      <HowItWorks />
      <GlowDivider />
      {/* 4. Mission — brand story */}
      <MissionSection />
      <GlowDivider />
      {/* 5. Guarantee — risk reversal */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollAnimation variant="fade-up">
            <PerformanceGuarantee />
          </ScrollAnimation>
        </div>
      </section>
      <GlowDivider />
      {/* 6. Contact — conversion */}
      <ContactSection />
    </>
  );
}
