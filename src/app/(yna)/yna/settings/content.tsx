"use client";

import { cn } from "@/lib/utils";
import { Bell, Shield, Trash2, Mail, LogOut } from "lucide-react";

interface SettingsContentProps {
  email: string;
}

export function SettingsContent({ email }: SettingsContentProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-ice-white font-[family-name:var(--font-display)]">
          Settings
        </h1>
        <p className="mt-1 text-sm text-ice-white/50">
          Manage your account preferences
        </p>
      </div>

      {/* Account */}
      <div className="rounded-lg border border-dark-mid/50 bg-dark-surface/80 p-6">
        <h2 className="text-sm font-semibold text-ice-white mb-4 flex items-center gap-2">
          <Shield className="h-4 w-4 text-cyan-neon" />
          Account
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-sm text-ice-white">Email</p>
              <p className="text-xs text-ice-white/40">{email}</p>
            </div>
          </div>
          <div className="border-t border-dark-mid/30 pt-4">
            <form action="/api/auth/logout" method="POST">
              <button
                type="submit"
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm",
                  "border border-red-500/20 text-red-400",
                  "transition-all hover:bg-red-500/5"
                )}
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="rounded-lg border border-dark-mid/50 bg-dark-surface/80 p-6">
        <h2 className="text-sm font-semibold text-ice-white mb-4 flex items-center gap-2">
          <Bell className="h-4 w-4 text-purple-400" />
          Notifications
        </h2>
        <div className="space-y-3">
          <label className="flex items-center justify-between py-2 cursor-pointer">
            <div>
              <p className="text-sm text-ice-white">New Opportunities</p>
              <p className="text-xs text-ice-white/40">
                Get notified when new opportunities match your profile
              </p>
            </div>
            <div className="relative">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-10 h-5 rounded-full bg-dark-mid peer-checked:bg-cyan-neon/30 transition-colors" />
              <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-ice-white/50 peer-checked:bg-cyan-neon peer-checked:translate-x-5 transition-all" />
            </div>
          </label>
          <label className="flex items-center justify-between py-2 cursor-pointer">
            <div>
              <p className="text-sm text-ice-white">Application Updates</p>
              <p className="text-xs text-ice-white/40">
                Status changes on your applications
              </p>
            </div>
            <div className="relative">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-10 h-5 rounded-full bg-dark-mid peer-checked:bg-cyan-neon/30 transition-colors" />
              <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-ice-white/50 peer-checked:bg-cyan-neon peer-checked:translate-x-5 transition-all" />
            </div>
          </label>
          <label className="flex items-center justify-between py-2 cursor-pointer">
            <div>
              <p className="text-sm text-ice-white">Weekly Digest</p>
              <p className="text-xs text-ice-white/40">
                A summary of top opportunities each week
              </p>
            </div>
            <div className="relative">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-5 rounded-full bg-dark-mid peer-checked:bg-cyan-neon/30 transition-colors" />
              <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-ice-white/50 peer-checked:bg-cyan-neon peer-checked:translate-x-5 transition-all" />
            </div>
          </label>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="text-sm font-semibold text-red-400 mb-4 flex items-center gap-2">
          <Trash2 className="h-4 w-4" />
          Danger Zone
        </h2>
        <p className="text-xs text-ice-white/40 mb-4">
          Permanently delete your YNA account and all associated data. This
          action cannot be undone.
        </p>
        <button
          type="button"
          disabled
          className={cn(
            "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm",
            "border border-red-500/30 text-red-400/50",
            "cursor-not-allowed opacity-50"
          )}
        >
          <Trash2 className="h-4 w-4" />
          Delete Account (Coming Soon)
        </button>
      </div>
    </div>
  );
}
