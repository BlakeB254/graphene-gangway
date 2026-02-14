"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Mail, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export function YnaLoginContent() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/auth/magic-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send magic link");
      }

      setStatus("sent");

      // In dev mode, auto-redirect if dev URL is provided
      if (data.devModeUrl) {
        window.location.href = data.devModeUrl;
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className="min-h-screen bg-dark-deep flex items-center justify-center px-4">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-neon/3 blur-[100px]" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/yna" className="inline-block mb-6">
            <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-cyan-neon/10 border border-cyan-neon/20">
              <span className="text-cyan-neon font-bold text-lg font-[family-name:var(--font-display)]">
                YN
              </span>
            </div>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-ice-white font-[family-name:var(--font-display)]">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-ice-white/50">
            Sign in to access your personalized opportunity board
          </p>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-dark-mid/50 bg-dark-surface/80 p-8 backdrop-blur-sm">
          {status === "sent" ? (
            <div className="text-center py-4">
              <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-lg font-semibold text-ice-white mb-2">
                Check Your Email
              </h2>
              <p className="text-sm text-ice-white/50">
                We sent a magic link to{" "}
                <span className="text-cyan-neon">{email}</span>. Click the link
                to sign in.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setEmail("");
                }}
                className="mt-6 text-sm text-cyan-neon/70 hover:text-cyan-neon transition-colors"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === "error" && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-3">
                  <p className="text-sm text-red-400">{errorMessage}</p>
                </div>
              )}

              <div>
                <label
                  htmlFor="yna-email"
                  className="block text-sm font-medium text-ice-white/70 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ice-white/30" />
                  <input
                    id="yna-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className={cn(
                      "w-full rounded-lg border border-dark-mid bg-dark-deep/50 pl-10 pr-4 py-3",
                      "text-sm text-ice-white placeholder:text-ice-white/30",
                      "focus:outline-none focus:border-cyan-neon/40 focus:ring-1 focus:ring-cyan-neon/20",
                      "transition-all"
                    )}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending" || !email}
                className={cn(
                  "flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3",
                  "bg-cyan-neon text-dark-deep font-semibold text-sm",
                  "transition-all hover:shadow-lg hover:shadow-cyan-neon/30",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending Magic Link...
                  </>
                ) : (
                  <>
                    Send Magic Link <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-6 pt-4 border-t border-dark-mid/50 text-center">
            <p className="text-sm text-ice-white/40">
              Don&apos;t have an account?{" "}
              <Link
                href="/yna/signup"
                className="text-cyan-neon/70 hover:text-cyan-neon transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-6 text-center">
          <Link
            href="/yna"
            className="text-sm text-ice-white/30 hover:text-ice-white/50 transition-colors"
          >
            Back to YN Academy
          </Link>
        </div>
      </div>
    </div>
  );
}
