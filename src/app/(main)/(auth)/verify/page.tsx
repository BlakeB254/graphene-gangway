"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type VerifyState = "verifying" | "success" | "error";

function VerifyContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [state, setState] = useState<VerifyState>("verifying");
  const [isAdmin, setIsAdmin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setState("error");
      setErrorMessage("No verification token provided.");
      return;
    }

    async function verify() {
      try {
        const res = await fetch("/api/auth/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        const data = await res.json();

        if (!res.ok) {
          setState("error");
          setErrorMessage(data.error || "Verification failed.");
          return;
        }

        setIsAdmin(data.isAdmin);
        setState("success");

        // Redirect after short delay
        setTimeout(() => {
          window.location.href = data.isAdmin ? "/admin" : "/";
        }, 2000);
      } catch {
        setState("error");
        setErrorMessage("Network error. Please try again.");
      }
    }

    verify();
  }, [token]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-deep">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-neon/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="corner-frame rounded-xl border border-dark-mid bg-dark-surface/80 p-8 backdrop-blur-sm">
          {/* Verifying State */}
          {state === "verifying" && (
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                <svg
                  className="h-12 w-12 animate-spin text-cyan-neon"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              </div>
              <h2 className="mb-2 font-[family-name:var(--font-display)] text-2xl tracking-wider text-cyan-neon">
                VERIFYING
              </h2>
              <p className="text-sm text-ice-white/60">
                Validating your sign-in link...
              </p>
            </div>
          )}

          {/* Success State */}
          {state === "success" && (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-neon/30 bg-cyan-neon/10">
                <svg
                  className="h-8 w-8 text-cyan-neon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="mb-2 font-[family-name:var(--font-display)] text-2xl tracking-wider text-cyan-neon">
                ACCESS GRANTED
              </h2>
              <p className="mb-4 text-sm text-ice-white/60">
                You have been signed in successfully.
              </p>
              <p className="font-[family-name:var(--font-mono)] text-xs text-ice-white/40">
                Redirecting to {isAdmin ? "admin dashboard" : "home"}...
              </p>
            </div>
          )}

          {/* Error State */}
          {state === "error" && (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-red-400/30 bg-red-400/10">
                <svg
                  className="h-8 w-8 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h2 className="mb-2 font-[family-name:var(--font-display)] text-2xl tracking-wider text-red-400">
                VERIFICATION FAILED
              </h2>
              <p className="mb-6 text-sm text-ice-white/60">{errorMessage}</p>
              <Link
                href="/login"
                className="inline-block rounded-lg bg-cyan-neon px-6 py-3 font-[family-name:var(--font-display)] tracking-widest text-dark-deep transition-all hover:bg-cyan-dim hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                REQUEST NEW LINK
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-deep">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-neon/20 border-t-cyan-neon" />
        </div>
      }
    >
      <VerifyContent />
    </Suspense>
  );
}
