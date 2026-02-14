"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  User,
  Mail,
  MapPin,
  GraduationCap,
  Target,
  Wrench,
  Clock,
  Edit3,
} from "lucide-react";

interface ProfileContentProps {
  email: string;
  profile: Record<string, unknown> | null;
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | null | undefined;
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-dark-mid/30 last:border-0">
      <Icon className="h-4 w-4 text-ice-white/30 mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-xs text-ice-white/40">{label}</p>
        <p className="text-sm text-ice-white">
          {value || <span className="text-ice-white/20">Not set</span>}
        </p>
      </div>
    </div>
  );
}

export function ProfileContent({ email, profile }: ProfileContentProps) {
  const interests = (profile?.interests as string[]) || [];
  const skills = (profile?.skills as string[]) || [];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-ice-white font-[family-name:var(--font-display)]">
            Your Profile
          </h1>
          <p className="mt-1 text-sm text-ice-white/50">
            Manage your personal information and preferences
          </p>
        </div>
        <Link
          href="/yna/profile/edit"
          className={cn(
            "flex items-center gap-2 rounded-lg px-4 py-2",
            "border border-cyan-neon/20 text-cyan-neon text-sm font-medium",
            "transition-all hover:bg-cyan-neon/5"
          )}
        >
          <Edit3 className="h-4 w-4" />
          Edit
        </Link>
      </div>

      {/* Profile Card */}
      <div className="rounded-lg border border-dark-mid/50 bg-dark-surface/80 p-6">
        {/* Avatar & Name */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-dark-mid/30">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-neon/10 border border-cyan-neon/20">
            <User className="h-8 w-8 text-cyan-neon" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ice-white">
              {(profile?.name as string) || email.split("@")[0]}
            </h2>
            <p className="text-sm text-ice-white/50">{email}</p>
          </div>
        </div>

        <InfoRow icon={Mail} label="Email" value={email} />
        <InfoRow
          icon={GraduationCap}
          label="Track"
          value={profile?.track as string}
        />
        <InfoRow
          icon={GraduationCap}
          label="Experience Level"
          value={profile?.experience_level as string}
        />
        <InfoRow
          icon={Target}
          label="Career Goals"
          value={profile?.career_goals as string}
        />
        <InfoRow
          icon={Clock}
          label="Time Commitment"
          value={profile?.time_commitment_preference as string}
        />
        <InfoRow
          icon={MapPin}
          label="Location Preferences"
          value={
            (profile?.location_preferences as string[])?.join(", ") || null
          }
        />
      </div>

      {/* Skills & Interests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-lg border border-dark-mid/50 bg-dark-surface/80 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-4 w-4 text-cyan-neon" />
            <h3 className="text-sm font-semibold text-ice-white">Interests</h3>
          </div>
          {interests.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-md border border-dark-mid bg-dark-mid/30 px-2.5 py-1 text-xs text-ice-white/60"
                >
                  {interest}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-ice-white/30">No interests added yet</p>
          )}
        </div>

        <div className="rounded-lg border border-dark-mid/50 bg-dark-surface/80 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Wrench className="h-4 w-4 text-purple-400" />
            <h3 className="text-sm font-semibold text-ice-white">Skills</h3>
          </div>
          {skills.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-dark-mid bg-dark-mid/30 px-2.5 py-1 text-xs text-ice-white/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-ice-white/30">No skills added yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
