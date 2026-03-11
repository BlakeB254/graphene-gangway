"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Save, ChevronUp, ChevronDown, Eye, EyeOff, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProgramSectionRow, ProgramSectionType } from "@/lib/shared/types";

interface AdminSectionListProps {
  programId: number;
  initialSections: ProgramSectionRow[];
}

const SECTION_TYPES: { value: ProgramSectionType; label: string }[] = [
  { value: "rich_text", label: "Rich Text" },
  { value: "faq", label: "FAQ" },
  { value: "timeline", label: "Timeline" },
  { value: "testimonials", label: "Testimonials" },
  { value: "gallery", label: "Gallery" },
  { value: "stats", label: "Stats" },
  { value: "documents", label: "Documents" },
  { value: "cta", label: "Call to Action" },
  { value: "video", label: "Video" },
  { value: "embed", label: "Embed (HTML)" },
];

function getDefaultContent(type: ProgramSectionType): Record<string, unknown> {
  switch (type) {
    case "rich_text": return { html: "<p>Enter content here...</p>" };
    case "faq": return { items: [{ question: "Sample question?", answer: "Sample answer." }] };
    case "timeline": return { items: [{ title: "Step 1", description: "Description" }] };
    case "testimonials": return { items: [{ authorName: "Name", quote: "Testimonial text" }] };
    case "gallery": return { items: [] };
    case "stats": return { items: [{ value: "0", label: "Stat", suffix: "+" }] };
    case "documents": return { items: [] };
    case "cta": return { heading: "Ready to start?", primaryLabel: "Get Started", primaryHref: "/contact" };
    case "video": return { url: "", caption: "" };
    case "embed": return { html: "" };
  }
}

export function AdminSectionList({ programId, initialSections }: AdminSectionListProps) {
  const router = useRouter();
  const [sections, setSections] = useState<ProgramSectionRow[]>(initialSections);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saving, setSaving] = useState<number | null>(null);
  const [adding, setAdding] = useState(false);
  const [newType, setNewType] = useState<ProgramSectionType>("rich_text");
  const [newTitle, setNewTitle] = useState("");

  async function handleAddSection() {
    setAdding(true);
    try {
      const res = await fetch(`/api/programs/${programId}/sections`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section_type: newType,
          title: newTitle || null,
          content: getDefaultContent(newType),
          display_order: sections.length,
          is_visible: true,
        }),
      });
      if (!res.ok) throw new Error("Failed to add section");
      const data = await res.json();
      setSections([...sections, data.section]);
      setNewTitle("");
      setNewType("rich_text");
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to add section");
    } finally {
      setAdding(false);
    }
  }

  async function handleDeleteSection(sectionId: number) {
    if (!confirm("Delete this section?")) return;
    try {
      const res = await fetch(`/api/programs/${programId}/sections/${sectionId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      setSections(sections.filter((s) => s.id !== sectionId));
    } catch {
      alert("Failed to delete section");
    }
  }

  async function handleToggleVisibility(section: ProgramSectionRow) {
    try {
      const res = await fetch(`/api/programs/${programId}/sections/${section.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_visible: !section.is_visible }),
      });
      if (!res.ok) throw new Error("Failed to update");
      const data = await res.json();
      setSections(sections.map((s) => (s.id === section.id ? data.section : s)));
    } catch {
      alert("Failed to toggle visibility");
    }
  }

  async function handleMoveSection(sectionId: number, direction: "up" | "down") {
    const idx = sections.findIndex((s) => s.id === sectionId);
    if (idx === -1) return;
    const swapIdx = direction === "up" ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= sections.length) return;

    const updated = [...sections];
    [updated[idx], updated[swapIdx]] = [updated[swapIdx], updated[idx]];

    const promises = updated.map((s, i) =>
      fetch(`/api/programs/${programId}/sections/${s.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ display_order: i }),
      })
    );

    setSections(updated.map((s, i) => ({ ...s, display_order: i })));

    try {
      await Promise.all(promises);
    } catch {
      router.refresh();
    }
  }

  async function handleSaveContent(section: ProgramSectionRow, contentJson: string, title: string) {
    setSaving(section.id);
    try {
      const content = JSON.parse(contentJson);
      const res = await fetch(`/api/programs/${programId}/sections/${section.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, title: title || null }),
      });
      if (!res.ok) throw new Error("Failed to save");
      const data = await res.json();
      setSections(sections.map((s) => (s.id === section.id ? data.section : s)));
      setEditingId(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Invalid JSON or save failed");
    } finally {
      setSaving(null);
    }
  }

  return (
    <div className="space-y-4">
      {sections.length > 0 ? (
        <div className="space-y-2">
          {sections.map((section, idx) => (
            <div
              key={section.id}
              className={cn(
                "rounded-lg border border-dark-mid bg-dark-surface transition-colors",
                !section.is_visible && "opacity-50"
              )}
            >
              <div className="flex items-center gap-3 px-4 py-3">
                <GripVertical className="h-4 w-4 flex-shrink-0 text-ice-white/20" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-dark-deep px-2 py-0.5 font-[family-name:var(--font-mono)] text-xs text-cyan-neon">
                      {section.section_type}
                    </span>
                    <span className="text-sm text-ice-white">
                      {section.title || "(untitled)"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleMoveSection(section.id, "up")}
                    disabled={idx === 0}
                    className="rounded p-1.5 text-ice-white/30 transition-colors hover:bg-dark-deep hover:text-ice-white disabled:opacity-30"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveSection(section.id, "down")}
                    disabled={idx === sections.length - 1}
                    className="rounded p-1.5 text-ice-white/30 transition-colors hover:bg-dark-deep hover:text-ice-white disabled:opacity-30"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleToggleVisibility(section)}
                    className="rounded p-1.5 text-ice-white/30 transition-colors hover:bg-dark-deep hover:text-ice-white"
                    title={section.is_visible ? "Hide section" : "Show section"}
                  >
                    {section.is_visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingId(editingId === section.id ? null : section.id)}
                    className="rounded p-1.5 text-ice-white/30 transition-colors hover:bg-dark-deep hover:text-cyan-neon"
                  >
                    <Save className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteSection(section.id)}
                    className="rounded p-1.5 text-ice-white/30 transition-colors hover:bg-dark-deep hover:text-red-400"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {editingId === section.id && (
                <SectionEditor
                  section={section}
                  saving={saving === section.id}
                  onSave={(content, title) => handleSaveContent(section, content, title)}
                  onCancel={() => setEditingId(null)}
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="py-8 text-center text-sm text-ice-white/40">
          No sections yet. Add one below.
        </p>
      )}

      {/* Add Section */}
      <div className="rounded-lg border border-dashed border-dark-mid p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1 space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-ice-white/50">Section Type</label>
            <select
              value={newType}
              onChange={(e) => setNewType(e.target.value as ProgramSectionType)}
              className="w-full rounded-lg border border-dark-mid bg-dark-surface px-3 py-2 text-sm text-ice-white focus:border-cyan-neon/50 focus:outline-none"
            >
              {SECTION_TYPES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-ice-white/50">Section Title (optional)</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full rounded-lg border border-dark-mid bg-dark-surface px-3 py-2 text-sm text-ice-white placeholder:text-ice-white/30 focus:border-cyan-neon/50 focus:outline-none"
              placeholder="e.g., About Our Program"
            />
          </div>
          <button
            type="button"
            onClick={handleAddSection}
            disabled={adding}
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-4 py-2 text-sm font-bold text-dark-deep transition-all hover:scale-105 disabled:opacity-50"
          >
            <Plus className="h-4 w-4" />
            {adding ? "Adding…" : "Add Section"}
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionEditor({
  section,
  saving,
  onSave,
  onCancel,
}: {
  section: ProgramSectionRow;
  saving: boolean;
  onSave: (content: string, title: string) => void;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState(section.title ?? "");
  const [contentJson, setContentJson] = useState(
    JSON.stringify(section.content, null, 2)
  );

  return (
    <div className="border-t border-dark-mid px-4 py-4">
      <div className="space-y-3">
        <div className="space-y-1.5">
          <label className="text-xs font-medium uppercase tracking-wider text-ice-white/50">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-dark-mid bg-dark-deep px-3 py-2 text-sm text-ice-white placeholder:text-ice-white/30 focus:border-cyan-neon/50 focus:outline-none"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium uppercase tracking-wider text-ice-white/50">
            Content (JSON)
          </label>
          <textarea
            value={contentJson}
            onChange={(e) => setContentJson(e.target.value)}
            rows={12}
            className="w-full rounded-lg border border-dark-mid bg-dark-deep px-3 py-2 font-[family-name:var(--font-mono)] text-xs text-ice-white focus:border-cyan-neon/50 focus:outline-none"
            spellCheck={false}
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onSave(contentJson, title)}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-4 py-2 text-sm font-bold text-dark-deep transition-all hover:scale-105 disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            {saving ? "Saving…" : "Save Content"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-dark-mid px-4 py-2 text-sm text-ice-white/50 transition-colors hover:text-ice-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
