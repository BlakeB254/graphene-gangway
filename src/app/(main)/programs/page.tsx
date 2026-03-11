import type { Metadata } from "next";
import { listPrograms } from "@/lib/programs";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore Graphene Gangway programs — technology education, community development, and more.",
};

export const dynamic = "force-dynamic";

export default async function ProgramsPage() {
  const programs = await listPrograms("active");

  return (
    <>
      <SectionWrapper>
        <ScrollAnimation>
          <h1 className="mb-4 font-[family-name:var(--font-display)] text-5xl tracking-wider text-ice-white md:text-6xl">
            OUR PROGRAMS
          </h1>
          <p className="max-w-2xl text-lg text-ice-white/60">
            Community-powered programs bridging the digital divide through education, mentorship, and real-world technology training.
          </p>
        </ScrollAnimation>
      </SectionWrapper>

      <SectionWrapper>
        {programs.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => (
              <ScrollAnimation key={program.id} delay={i * 0.1}>
                <ProgramCard program={program} />
              </ScrollAnimation>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dark-mid bg-dark-surface p-12 text-center">
            <p className="text-lg text-ice-white/50">Programs coming soon. Check back later!</p>
          </div>
        )}
      </SectionWrapper>
    </>
  );
}
