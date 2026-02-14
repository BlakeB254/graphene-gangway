"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { ALL_TRACKS } from "@/lib/yna/types";
import type { Track, DifficultyLevel } from "@/lib/yna/types";

const INTEREST_OPTIONS = [
  "AI & Machine Learning", "Web Development", "Mobile Apps", "Cybersecurity",
  "Game Development", "Data Science", "Robotics", "Graphic Design",
  "Video Production", "Music Production", "Photography", "Writing",
  "Public Speaking", "Entrepreneurship", "Sports Analytics", "Agriculture",
];

const SKILL_OPTIONS = [
  "JavaScript", "Python", "Java", "HTML/CSS", "React", "Node.js",
  "SQL", "Git", "Photoshop", "Illustrator", "Video Editing",
  "3D Modeling", "Leadership", "Communication", "Problem Solving",
  "Project Management",
];

const STEPS = ["Track", "Interests", "Skills", "Goals"];

interface OnboardingContentProps {
  email: string;
}

export function OnboardingContent({ email }: OnboardingContentProps) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [saving, setSaving] = useState(false);

  // Form state
  const [track, setTrack] = useState<Track | "">("");
  const [interests, setInterests] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [experienceLevel, setExperienceLevel] = useState<DifficultyLevel | "">("");
  const [careerGoals, setCareerGoals] = useState("");

  function toggleItem(list: string[], item: string, setter: (v: string[]) => void) {
    setter(
      list.includes(item)
        ? list.filter((i) => i !== item)
        : [...list, item]
    );
  }

  async function handleComplete() {
    setSaving(true);
    try {
      const res = await fetch("/api/yna/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          track: track || null,
          interests: interests.length > 0 ? interests : null,
          skills: skills.length > 0 ? skills : null,
          experience_level: experienceLevel || null,
          career_goals: careerGoals || null,
          onboarding_completed: true,
          profile_completion_score: calculateCompletion(),
        }),
      });

      if (res.ok) {
        router.push("/yna/dashboard");
        router.refresh();
      }
    } catch {
      // Handle error
    } finally {
      setSaving(false);
    }
  }

  function calculateCompletion(): number {
    let score = 0;
    if (track) score += 25;
    if (interests.length > 0) score += 25;
    if (skills.length > 0) score += 25;
    if (experienceLevel || careerGoals) score += 25;
    return score;
  }

  return (
    <div className="min-h-screen bg-dark-deep flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all",
                    i < step
                      ? "bg-cyan-neon text-dark-deep"
                      : i === step
                      ? "bg-cyan-neon/20 text-cyan-neon border border-cyan-neon/40"
                      : "bg-dark-mid text-ice-white/30"
                  )}
                >
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span
                  className={cn(
                    "text-xs hidden sm:inline",
                    i === step ? "text-cyan-neon" : "text-ice-white/30"
                  )}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1 w-full rounded-full bg-dark-mid overflow-hidden">
            <div
              className="h-full rounded-full bg-cyan-neon transition-all duration-300"
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="rounded-xl border border-dark-mid/50 bg-dark-surface/80 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {step === 0 && (
                <div>
                  <h2 className="text-xl font-bold text-ice-white mb-2">
                    Choose Your Track
                  </h2>
                  <p className="text-sm text-ice-white/50 mb-6">
                    Select the track that best describes your primary interest
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {ALL_TRACKS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTrack(t)}
                        className={cn(
                          "rounded-lg border p-3 text-sm text-center transition-all",
                          track === t
                            ? "border-cyan-neon/40 bg-cyan-neon/10 text-cyan-neon"
                            : "border-dark-mid text-ice-white/50 hover:border-ice-white/20"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="text-xl font-bold text-ice-white mb-2">
                    What Are You Interested In?
                  </h2>
                  <p className="text-sm text-ice-white/50 mb-6">
                    Select all that apply ({interests.length} selected)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {INTEREST_OPTIONS.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleItem(interests, item, setInterests)}
                        className={cn(
                          "rounded-lg border px-3 py-2 text-sm transition-all",
                          interests.includes(item)
                            ? "border-cyan-neon/40 bg-cyan-neon/10 text-cyan-neon"
                            : "border-dark-mid text-ice-white/50 hover:border-ice-white/20"
                        )}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-xl font-bold text-ice-white mb-2">
                    What Skills Do You Have?
                  </h2>
                  <p className="text-sm text-ice-white/50 mb-6">
                    Select all that apply ({skills.length} selected)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SKILL_OPTIONS.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleItem(skills, item, setSkills)}
                        className={cn(
                          "rounded-lg border px-3 py-2 text-sm transition-all",
                          skills.includes(item)
                            ? "border-purple-500/40 bg-purple-500/10 text-purple-400"
                            : "border-dark-mid text-ice-white/50 hover:border-ice-white/20"
                        )}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <h2 className="text-xl font-bold text-ice-white mb-2">
                    Your Goals
                  </h2>
                  <p className="text-sm text-ice-white/50 mb-6">
                    Help us understand where you are headed
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-ice-white/70 mb-2">
                      Experience Level
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {(["Beginner", "Intermediate", "Advanced", "Expert"] as DifficultyLevel[]).map(
                        (level) => (
                          <button
                            key={level}
                            type="button"
                            onClick={() => setExperienceLevel(level)}
                            className={cn(
                              "rounded-lg border p-3 text-sm text-center transition-all",
                              experienceLevel === level
                                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                                : "border-dark-mid text-ice-white/50 hover:border-ice-white/20"
                            )}
                          >
                            {level}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="onboard-goals" className="block text-sm font-medium text-ice-white/70 mb-2">
                      Career Goals
                    </label>
                    <textarea
                      id="onboard-goals"
                      value={careerGoals}
                      onChange={(e) => setCareerGoals(e.target.value)}
                      rows={3}
                      placeholder="What do you want to achieve?"
                      className={cn(
                        "w-full rounded-lg border border-dark-mid bg-dark-deep/50 px-4 py-2.5",
                        "text-sm text-ice-white placeholder:text-ice-white/30 resize-none",
                        "focus:outline-none focus:border-cyan-neon/40 focus:ring-1 focus:ring-cyan-neon/20"
                      )}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-dark-mid/30">
            <button
              type="button"
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className={cn(
                "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm transition-all",
                step === 0
                  ? "text-ice-white/20 cursor-not-allowed"
                  : "text-ice-white/50 hover:text-ice-white"
              )}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-6 py-2.5",
                  "bg-cyan-neon text-dark-deep text-sm font-semibold",
                  "transition-all hover:shadow-lg hover:shadow-cyan-neon/30"
                )}
              >
                Next <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleComplete}
                disabled={saving}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-6 py-2.5",
                  "bg-cyan-neon text-dark-deep text-sm font-semibold",
                  "transition-all hover:shadow-lg hover:shadow-cyan-neon/30",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {saving ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    Complete Setup <Check className="h-4 w-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
