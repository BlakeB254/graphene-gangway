"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type FormState = "idle" | "loading" | "success" | "error";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [devEmail, setDevEmail] = useState("");

  const isDevMode =
    typeof window !== "undefined" && window.location.hostname === "localhost";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/auth/magic-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setFormState("error");
        setErrorMessage(data.error || "Something went wrong");
        return;
      }

      setFormState("success");
    } catch {
      setFormState("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  async function handleDevLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/dev-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: devEmail }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        window.location.href = data.isAdmin ? "/admin" : "/";
      }
    } catch {
      console.error("Dev login failed");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-deep">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-neon/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-neon/20 blur-xl" />
            <Image
              src="/logos/gg-mark.png"
              alt="Graphene Gangway"
              width={304}
              height={467}
              quality={100}
              className="relative z-10 w-20 h-auto object-contain"
            />
          </div>
        </div>

        {/* Card */}
        <div className="corner-frame rounded-xl border border-dark-mid bg-dark-surface/80 p-8 backdrop-blur-sm">
          {formState === "success" ? (
            /* Success State */
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="mb-2 font-[family-name:var(--font-display)] text-2xl tracking-wider text-cyan-neon">
                CHECK YOUR EMAIL
              </h2>
              <p className="mb-6 text-sm text-ice-white/60">
                We sent a sign-in link to{" "}
                <span className="font-medium text-ice-white">{email}</span>.
                Click the link to access the portal.
              </p>
              <p className="text-xs text-ice-white/40">
                Link expires in 15 minutes.
              </p>
            </div>
          ) : (
            /* Login Form */
            <>
              <div className="mb-6 text-center">
                <h1 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-cyan-neon">
                  PORTAL ACCESS
                </h1>
                <p className="mt-2 text-sm text-ice-white/60">
                  Enter your email to receive a sign-in link
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-ice-white/50"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-dark-mid bg-dark-deep px-4 py-3 text-ice-white placeholder:text-ice-white/30 focus:border-cyan-neon/50 focus:outline-none focus:ring-1 focus:ring-cyan-neon/30"
                  />
                </div>

                {formState === "error" && (
                  <p className="text-sm text-red-400">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full rounded-lg bg-cyan-neon px-4 py-3 font-[family-name:var(--font-display)] text-lg tracking-widest text-dark-deep transition-all hover:bg-cyan-dim hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {formState === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      SENDING...
                    </span>
                  ) : (
                    "SEND MAGIC LINK"
                  )}
                </button>
              </form>
            </>
          )}

          {/* Dev mode direct login */}
          {isDevMode && formState !== "success" && (
            <div className="mt-6 border-t border-dark-mid pt-6">
              <p className="mb-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-yellow-400/70">
                Dev Mode - Direct Login
              </p>
              <form onSubmit={handleDevLogin} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={devEmail}
                  onChange={(e) => setDevEmail(e.target.value)}
                  placeholder="dev@example.com"
                  className="flex-1 rounded-lg border border-dark-mid bg-dark-deep px-3 py-2 text-sm text-ice-white placeholder:text-ice-white/30 focus:border-yellow-400/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-400 transition-colors hover:bg-yellow-400/20"
                >
                  Login
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-ice-white/40 transition-colors hover:text-cyan-neon"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
