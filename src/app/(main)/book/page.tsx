import type { Metadata } from "next";
import { CalEmbed } from "@/components/booking/CalEmbed";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";

export const metadata: Metadata = {
  title: "Book a Call | Graphene Gangway",
  description:
    "Schedule a free discovery call with Graphene Gangway. Let's talk about your project.",
};

export default function BookPage() {
  return (
    <div className="min-h-screen">
      <SectionWrapper className="pt-32 pb-20">
        <ScrollAnimation variant="fade-up">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-cyan-neon/70">
              Free Discovery Call
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl tracking-wider text-cyan-neon text-glow-cyan md:text-7xl">
              LET&apos;S TALK
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg text-ice-white/70">
              Book a free 30-minute call. We&apos;ll learn about your business
              and recommend the right path forward.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mx-auto mt-12 max-w-3xl">
          <CalEmbed />
        </div>
      </SectionWrapper>
    </div>
  );
}
