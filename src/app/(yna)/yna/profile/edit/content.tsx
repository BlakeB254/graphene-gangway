"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Save, Loader2 } from "lucide-react";
import { ALL_TRACKS } from "@/lib/yna/types";
import type { Track, DifficultyLevel } from "@/lib/yna/types";

interface ProfileEditContentProps {
  email: string;
  profile: Record<string, unknown> | null;
}

export function ProfileEditContent({ email, profile }: ProfileEditContentProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState((profile?.name as string) || "");
  const [track, setTrack] = useState<Track | "">((profile?.track as Track) || "");
  const [experienceLevel, setExperienceLevel] = useState<DifficultyLevel | "">(
    (profile?.experience_level as DifficultyLevel) || ""
  );
  const [careerGoals, setCareerGoals] = useState((profile?.career_goals as string) || "");
  const [interestsText, setInterestsText] = useState(
    ((profile?.interests as string[]) || []).join(", ")
  );
  const [skillsText, setSkillsText] = useState(
    ((profile?.skills as string[]) || []).join(", ")
  );

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/yna/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          track: track || null,
          experience_level: experienceLevel || null,
          career_goals: careerGoals || null,
          interests: interestsText
            ? interestsText.split(",").map((s) => s.trim()).filter(Boolean)
            : null,
          skills: skillsText
            ? skillsText.split(",").map((s) => s.trim()).filter(Boolean)
            : null,
        }),
      });

      if (res.ok) {
        router.push("/yna/profile");
        router.refresh();
      }
    } catch {
      // Handle error silently
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ice-white font-[family-name:var(--font-display)]">
          Edit Profile
        </h1>
        <p className="mt-1 text-sm text-ice-white/50">
          Update your information to improve match scores
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-5">
        <div className="rounded-lg border border-dark-mid/50 bg-dark-surface/80 p-6 space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="edit-name" className="block text-sm font-medium text-ice-white/70 mb-2">
              Name
            </label>
            <input
              id="edit-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={cn(
                "w-full rounded-lg border border-dark-mid bg-dark-deep/50 px-4 py-2.5",
                "text-sm text-ice-white placeholder:text-ice-white/30",
                "focus:outline-none focus:border-cyan-neon/40 focus:ring-1 focus:ring-cyan-neon/20"
              )}
            />
          </div>

          {/* Track */}
          <div>
            <label htmlFor="edit-track" className="block text-sm font-medium text-ice-white/70 mb-2">
              Track
            </label>
            <select
              id="edit-track"
              value={track}
              onChange={(e) => setTrack(e.target.value as Track)}
              className={cn(
                "w-full rounded-lg border border-dark-mid bg-dark-deep/50 px-4 py-2.5",
                "text-sm text-ice-white",
                "focus:outline-none focus:border-cyan-neon/40 focus:ring-1 focus:ring-cyan-neon/20"
              )}
            >
              <option value="">Select a track</option>
              {ALL_TRACKS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Experience Level */}
          <div>
            <label htmlFor="edit-exp" className="block text-sm font-medium text-ice-white/70 mb-2">
              Experience Level
            </label>
            <select
              id="edit-exp"
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value as DifficultyLevel)}
              className={cn(
                "w-full rounded-lg border border-dark-mid bg-dark-deep/50 px-4 py-2.5",
                "text-sm text-ice-white",
                "focus:outline-none focus:border-cyan-neon/40 focus:ring-1 focus:ring-cyan-neon/20"
              )}
            >
              <option value="">Select level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          {/* Career Goals */}
          <div>
            <label htmlFor="edit-goals" className="block text-sm font-medium text-ice-white/70 mb-2">
              Career Goals
            </label>
            <textarea
              id="edit-goals"
              value={careerGoals}
              onChange={(e) => setCareerGoals(e.target.value)}
              rows={3}
              placeholder="What are your career aspirations?"
              className={cn(
                "w-full rounded-lg border border-dark-mid bg-dark-deep/50 px-4 py-2.5",
                "text-sm text-ice-white placeholder:text-ice-white/30 resize-none",
                "focus:outline-none focus:border-cyan-neon/40 focus:ring-1 focus:ring-cyan-neon/20"
              )}
            />
          </div>

          {/* Interests */}
          <div>
            <label htmlFor="edit-interests" className="block text-sm font-medium text-ice-white/70 mb-2">
              Interests
            </label>
            <input
              id="edit-interests"
              type="text"
              value={interestsText}
              onChange={(e) => setInterestsText(e.target.value)}
              placeholder="e.g. AI, robotics, design (comma-separated)"
              className={cn(
                "w-full rounded-lg border border-dark-mid bg-dark-deep/50 px-4 py-2.5",
                "text-sm text-ice-white placeholder:text-ice-white/30",
                "focus:outline-none focus:border-cyan-neon/40 focus:ring-1 focus:ring-cyan-neon/20"
              )}
            />
          </div>

          {/* Skills */}
          <div>
            <label htmlFor="edit-skills" className="block text-sm font-medium text-ice-white/70 mb-2">
              Skills
            </label>
            <input
              id="edit-skills"
              type="text"
              value={skillsText}
              onChange={(e) => setSkillsText(e.target.value)}
              placeholder="e.g. JavaScript, Python, CAD (comma-separated)"
              className={cn(
                "w-full rounded-lg border border-dark-mid bg-dark-deep/50 px-4 py-2.5",
                "text-sm text-ice-white placeholder:text-ice-white/30",
                "focus:outline-none focus:border-cyan-neon/40 focus:ring-1 focus:ring-cyan-neon/20"
              )}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className={cn(
              "flex items-center gap-2 rounded-lg px-6 py-2.5",
              "bg-cyan-neon text-dark-deep text-sm font-semibold",
              "transition-all hover:shadow-lg hover:shadow-cyan-neon/30",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            {saving ? "Saving..." : "Save Profile"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/yna/profile")}
            className="rounded-lg border border-dark-mid px-6 py-2.5 text-sm text-ice-white/50 hover:text-ice-white/70 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
