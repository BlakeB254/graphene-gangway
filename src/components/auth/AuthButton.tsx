"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SessionResponse {
  email?: string;
  isAdmin?: boolean;
}

export function AuthButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch("/api/auth/session");
        if (res.ok) {
          const data: SessionResponse = await res.json();
          if (data.email) {
            setAuthenticated(true);
            setIsAdmin(data.isAdmin ?? false);
          }
        }
      } catch {
        // Session check failed — treat as unauthenticated
      } finally {
        setLoading(false);
      }
    }

    checkSession();
  }, []);

  async function handleSignOut() {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.refresh();
    } catch {
      // Logout failed — force refresh anyway
      router.refresh();
    }
  }

  if (loading) {
    return null;
  }

  if (!authenticated) {
    return (
      <Link
        href="/login"
        className={cn(
          "text-sm text-cyan-neon/70 transition-colors hover:text-cyan-neon",
          "rounded-md px-3 py-1.5",
          "border border-transparent hover:border-cyan-neon/20"
        )}
      >
        Sign In
      </Link>
    );
  }

  if (isAdmin) {
    return (
      <Link
        href="/admin"
        className={cn(
          "text-sm text-cyan-neon/70 transition-colors hover:text-cyan-neon",
          "rounded-md px-3 py-1.5",
          "border border-transparent hover:border-cyan-neon/20"
        )}
      >
        Admin
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className={cn(
        "text-sm text-cyan-neon/70 transition-colors hover:text-cyan-neon",
        "rounded-md px-3 py-1.5",
        "border border-transparent hover:border-cyan-neon/20"
      )}
    >
      Sign Out
    </button>
  );
}
