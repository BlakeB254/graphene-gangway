"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ProgramRow, ProgramStatus } from "@/lib/shared/types";

interface AdminProgramFormProps {
  program?: ProgramRow;
}

const STATUS_OPTIONS: { value: ProgramStatus; label: string }[] = [
  { value: "draft", label: "Draft" },
  { value: "active", label: "Active" },
  { value: "coming_soon", label: "Coming Soon" },
  { value: "archived", label: "Archived" },
];

export function AdminProgramForm({ program }: AdminProgramFormProps) {
  const router = useRouter();
  const isEditing = !!program;

  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState(program?.title ?? "");
  const [slug, setSlug] = useState(program?.slug ?? "");
  const [tagline, setTagline] = useState(program?.tagline ?? "");
  const [description, setDescription] = useState(program?.description ?? "");
  const [heroImage, setHeroImage] = useState(program?.hero_image ?? "");
  const [icon, setIcon] = useState(program?.icon ?? "");
  const [accentColor, setAccentColor] = useState(program?.accent_color ?? "#00F0FF");
  const [status, setStatus] = useState<ProgramStatus>(program?.status ?? "draft");
  const [displayOrder, setDisplayOrder] = useState(program?.display_order ?? 0);
  const [externalLink, setExternalLink] = useState(program?.external_link ?? "");
  const [internalRoute, setInternalRoute] = useState(program?.internal_route ?? "");

  function autoSlug(name: string) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const body = {
      slug,
      title,
      tagline: tagline || null,
      description: description || null,
      hero_image: heroImage || null,
      icon: icon || null,
      accent_color: accentColor || null,
      status,
      display_order: displayOrder,
      external_link: externalLink || null,
      internal_route: internalRoute || null,
    };

    try {
      const url = isEditing ? `/api/programs/${program.id}` : "/api/programs";
      const method = isEditing ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save program");
      }

      const data = await res.json();
      if (isEditing) {
        router.refresh();
      } else {
        router.push(`/admin/programs/${data.program.id}/edit`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!program) return;
    if (!confirm("Delete this program and all its sections? This cannot be undone.")) return;

    setDeleting(true);
    try {
      const res = await fetch(`/api/programs/${program.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      router.push("/admin/programs");
    } catch {
      setError("Failed to delete program");
      setDeleting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/programs"
            className="rounded-lg p-2 text-ice-white/40 transition-colors hover:bg-dark-surface hover:text-cyan-neon"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon">
            {isEditing ? "EDIT PROGRAM" : "NEW PROGRAM"}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          {isEditing && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={deleting}
              className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 px-4 py-2 text-sm text-red-400 transition-colors hover:bg-red-500/10 disabled:opacity-50"
            >
              <Trash2 className="h-4 w-4" />
              {deleting ? "Deleting…" : "Delete"}
            </button>
          )}
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-4 py-2 text-sm font-bold text-dark-deep transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>

      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* Main Fields */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs font-medium uppercase tracking-wider text-ice-white/50">Title *</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (!isEditing) setSlug(autoSlug(e.target.value));
            }}
            className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-2.5 text-ice-white placeholder:text-ice-white/30 focus:border-cyan-neon/50 focus:outline-none"
            placeholder="YN Academy"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium uppercase tracking-wider text-ice-white/50">Slug *</label>
          <input
            type="text"
            required
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-2.5 font-[family-name:var(--font-mono)] text-sm text-ice-white placeholder:text-ice-white/30 focus:border-cyan-neon/50 focus:outline-none"
            placeholder="yn-academy"
          />
        </div>

        <div className="space-y-1.5 lg:col-span-2">
          <label className="text-xs font-medium uppercase tracking-wider text-ice-white/50">Tagline</label>
          <input
            type="text"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-2.5 text-ice-white placeholder:text-ice-white/30 focus:border-cyan-neon/50 focus:outline-none"
            placeholder="Youth technology education program"
          />
        </div>

        <div className="space-y-1.5 lg:col-span-2">
          <label className="text-xs font-medium uppercase tracking-wider text-ice-white/50">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-2.5 text-ice-white placeholder:text-ice-white/30 focus:border-cyan-neon/50 focus:outline-none"
            placeholder="Full program description…"
          />
        </div>
      </div>

      {/* Media & Appearance */}
      <div className="rounded-xl border border-dark-mid p-6">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-ice-white/50">
          Media & Appearance
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-ice-white/50">Hero Image URL</label>
            <input
              type="text"
              value={heroImage}
              onChange={(e) => setHeroImage(e.target.value)}
              className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-2.5 text-sm text-ice-white placeholder:text-ice-white/30 focus:border-cyan-neon/50 focus:outline-none"
              placeholder="/images/programs/hero.jpg"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-ice-white/50">Icon (Lucide name)</label>
            <input
              type="text"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-2.5 text-sm text-ice-white placeholder:text-ice-white/30 focus:border-cyan-neon/50 focus:outline-none"
              placeholder="GraduationCap"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-ice-white/50">Accent Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="h-10 w-12 cursor-pointer rounded border border-dark-mid bg-dark-surface"
              />
              <input
                type="text"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-2.5 font-[family-name:var(--font-mono)] text-sm text-ice-white focus:border-cyan-neon/50 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="rounded-xl border border-dark-mid p-6">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-ice-white/50">
          Settings
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-ice-white/50">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as ProgramStatus)}
              className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-2.5 text-ice-white focus:border-cyan-neon/50 focus:outline-none"
            >
              {STATUS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-ice-white/50">Display Order</label>
            <input
              type="number"
              value={displayOrder}
              onChange={(e) => setDisplayOrder(parseInt(e.target.value, 10) || 0)}
              className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-2.5 text-ice-white focus:border-cyan-neon/50 focus:outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-ice-white/50">External Link</label>
            <input
              type="text"
              value={externalLink}
              onChange={(e) => setExternalLink(e.target.value)}
              className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-2.5 text-sm text-ice-white placeholder:text-ice-white/30 focus:border-cyan-neon/50 focus:outline-none"
              placeholder="https://..."
            />
          </div>
        </div>
      </div>
    </form>
  );
}
