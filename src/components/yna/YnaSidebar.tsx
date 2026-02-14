"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Briefcase,
  Trophy,
  Bookmark,
  User,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/yna/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/yna/jobs", label: "Job Board", icon: Briefcase },
  { href: "/yna/dashboard/accomplishments", label: "Accomplishments", icon: Trophy },
  { href: "/yna/saved", label: "Saved", icon: Bookmark },
  { href: "/yna/profile", label: "Profile", icon: User },
  { href: "/yna/settings", label: "Settings", icon: Settings },
];

export function YnaSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "hidden lg:flex lg:flex-col lg:w-64 lg:min-h-[calc(100vh-4rem)]",
        "border-r border-dark-mid/50 bg-dark-deep/80 backdrop-blur-sm"
      )}
    >
      {/* Back to GG link */}
      <div className="p-4 border-b border-dark-mid/50">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-ice-white/50 transition-colors hover:text-cyan-neon"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Graphene Gangway
        </Link>
      </div>

      {/* Portal Brand */}
      <div className="px-4 py-6 border-b border-dark-mid/50">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-neon/10 border border-cyan-neon/20">
            <span className="text-cyan-neon font-bold text-sm font-[family-name:var(--font-display)]">
              YN
            </span>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ice-white">
              YN Academy
            </h2>
            <p className="text-xs text-ice-white/40">Member Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/yna/dashboard" && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all",
                isActive
                  ? "bg-cyan-neon/10 text-cyan-neon border border-cyan-neon/20"
                  : "text-ice-white/60 hover:bg-dark-surface hover:text-ice-white"
              )}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Sign Out */}
      <div className="p-3 border-t border-dark-mid/50">
        <form action="/api/auth/logout" method="POST">
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ice-white/40 transition-colors hover:bg-dark-surface hover:text-red-400"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  );
}
