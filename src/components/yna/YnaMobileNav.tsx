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
} from "lucide-react";

const MOBILE_NAV_ITEMS = [
  { href: "/yna/dashboard", label: "Home", icon: LayoutDashboard },
  { href: "/yna/jobs", label: "Jobs", icon: Briefcase },
  { href: "/yna/dashboard/accomplishments", label: "Wins", icon: Trophy },
  { href: "/yna/saved", label: "Saved", icon: Bookmark },
  { href: "/yna/profile", label: "Profile", icon: User },
];

export function YnaMobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 lg:hidden",
        "bg-dark-deep/95 backdrop-blur-md",
        "border-t border-dark-mid/50",
        "safe-area-bottom"
      )}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {MOBILE_NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/yna/dashboard" && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 transition-colors",
                isActive
                  ? "text-cyan-neon"
                  : "text-ice-white/40 hover:text-ice-white/60"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
