export const dynamic = "force-dynamic";

import Link from "next/link";
import { Plus, Edit, Eye, EyeOff } from "lucide-react";
import { listPrograms } from "@/lib/programs";
import { Badge } from "@/components/common/Badge";

export default async function AdminProgramsPage() {
  let programs: Awaited<ReturnType<typeof listPrograms>> = [];
  try {
    programs = await listPrograms();
  } catch {
    // DB not configured or table missing
  }

  const statusBadge = (status: string) => {
    switch (status) {
      case "active": return <Badge variant="success">Active</Badge>;
      case "coming_soon": return <Badge variant="warning">Coming Soon</Badge>;
      case "archived": return <Badge variant="muted">Archived</Badge>;
      default: return <Badge variant="muted">Draft</Badge>;
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon">PROGRAMS</h1>
          <p className="mt-2 text-sm text-ice-white/50">Manage community programs</p>
        </div>
        <Link
          href="/admin/programs/new"
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-4 py-2 text-sm font-bold text-dark-deep transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
        >
          <Plus className="h-4 w-4" />
          New Program
        </Link>
      </div>

      {programs.length > 0 ? (
        <div className="overflow-hidden rounded-xl border border-dark-mid">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-mid bg-dark-surface">
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-ice-white/50">Order</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-ice-white/50">Program</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-ice-white/50">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-ice-white/50">Slug</th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-ice-white/50">Actions</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program) => (
                <tr key={program.id} className="border-b border-dark-mid/50 transition-colors hover:bg-dark-surface/50">
                  <td className="px-4 py-3 text-sm text-ice-white/50">{program.display_order}</td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-ice-white">{program.title}</p>
                    {program.tagline && <p className="text-xs text-ice-white/40">{program.tagline}</p>}
                  </td>
                  <td className="px-4 py-3">{statusBadge(program.status)}</td>
                  <td className="px-4 py-3 font-[family-name:var(--font-mono)] text-xs text-ice-white/40">/{program.slug}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/programs/${program.slug}`} className="rounded-lg p-2 text-ice-white/40 transition-colors hover:bg-dark-surface hover:text-cyan-neon" title="View public page">
                        {program.status === "active" ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                      </Link>
                      <Link href={`/admin/programs/${program.id}/edit`} className="rounded-lg p-2 text-ice-white/40 transition-colors hover:bg-dark-surface hover:text-cyan-neon" title="Edit">
                        <Edit className="h-4 w-4" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="rounded-xl border border-dark-mid bg-dark-surface p-12 text-center">
          <p className="mb-4 text-lg text-ice-white/50">No programs yet</p>
          <Link href="/admin/programs/new" className="inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-4 py-2 text-sm font-bold text-dark-deep">
            <Plus className="h-4 w-4" /> Create Your First Program
          </Link>
        </div>
      )}
    </div>
  );
}
