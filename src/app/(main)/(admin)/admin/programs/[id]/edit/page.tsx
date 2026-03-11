import { notFound } from "next/navigation";
import { getProgramById, listProgramSections } from "@/lib/programs";
import { AdminProgramForm } from "@/components/programs/AdminProgramForm";
import { AdminSectionList } from "@/components/programs/AdminSectionList";

export default async function EditProgramPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const programId = parseInt(id, 10);
  if (isNaN(programId)) notFound();

  const program = await getProgramById(programId);
  if (!program) notFound();

  const sections = await listProgramSections(programId);

  return (
    <div className="space-y-12">
      <AdminProgramForm program={program} />

      <div className="border-t border-dark-mid pt-12">
        <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl tracking-wider text-ice-white">
          PAGE SECTIONS
        </h2>
        <AdminSectionList programId={programId} initialSections={sections} />
      </div>
    </div>
  );
}
