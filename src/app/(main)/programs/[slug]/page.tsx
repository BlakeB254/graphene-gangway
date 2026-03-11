import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProgramBySlug, listProgramSections } from "@/lib/programs";
import { ProgramSectionRenderer } from "@/components/programs/ProgramSectionRenderer";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";
import { Badge } from "@/components/common/Badge";

export const dynamic = "force-dynamic";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);
  if (!program) return { title: "Program Not Found" };
  return {
    title: program.title,
    description: program.tagline || program.description || `Learn about ${program.title} at Graphene Gangway.`,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);

  if (!program || program.status === "draft") {
    notFound();
  }

  const sections = await listProgramSections(program.id);
  const visibleSections = sections.filter((s) => s.is_visible);

  return (
    <>
      <section className="relative overflow-hidden">
        {program.hero_image && (
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={program.hero_image} alt="" className="h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/80 to-dark-deep" />
          </div>
        )}
        <SectionWrapper className="relative">
          <ScrollAnimation>
            {program.status === "coming_soon" && (
              <Badge variant="warning" className="mb-4">Coming Soon</Badge>
            )}
            <h1 className="mb-4 font-[family-name:var(--font-display)] text-5xl tracking-wider text-ice-white md:text-7xl">
              {program.title}
            </h1>
            {program.tagline && (
              <p className="max-w-3xl text-xl text-ice-white/70 md:text-2xl">{program.tagline}</p>
            )}
            {program.description && (
              <p className="mt-4 max-w-2xl leading-relaxed text-ice-white/50">{program.description}</p>
            )}
          </ScrollAnimation>
        </SectionWrapper>
      </section>

      {visibleSections.map((section) => (
        <ProgramSectionRenderer key={section.id} section={section} />
      ))}
    </>
  );
}
