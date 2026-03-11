import { HeroPortal } from "@/components/home/HeroPortal";
import { TrustBar } from "@/components/home/TrustBar";
import { ServiceShowcase } from "@/components/home/ServiceShowcase";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ImpactCounters } from "@/components/home/ImpactCounters";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
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
      {/* 2. Trust bar — social proof */}
      <TrustBar />
      <GlowDivider />
      {/* 3. Services — what we build */}
      <ServiceShowcase />
      <GlowDivider />
      {/* 4. How it works — process */}
      <HowItWorks />
      <GlowDivider />
      {/* 5. Impact — proof of results */}
      <ImpactCounters />
      <GlowDivider />
      {/* 6. Testimonials — peer validation */}
      <HomeTestimonials />
      <GlowDivider />
      {/* 7. Mission — brand story */}
      <MissionSection />
      <GlowDivider />
      {/* 8. Guarantee — risk reversal */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollAnimation variant="fade-up">
            <PerformanceGuarantee />
          </ScrollAnimation>
        </div>
      </section>
      <GlowDivider />
      {/* 9. Contact — conversion */}
      <ContactSection />
    </>
  );
}
