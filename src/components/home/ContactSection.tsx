"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const INTENTS = ["Academy", "Services", "Partnership", "Volunteer", "Merch"] as const;
type Intent = (typeof INTENTS)[number];

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedIntent, setSelectedIntent] = useState<Intent>("Academy");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, intent: selectedIntent, message }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
            Get in touch
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
            ENTER THE PORTAL
          </h2>
        </ScrollReveal>

        <div className="mt-12 rounded-2xl border border-dark-mid bg-dark-surface/50 p-8 backdrop-blur-sm md:p-10">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4 py-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" as const, stiffness: 200, damping: 15 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-neon/30 bg-cyan-neon/10"
                >
                  <svg
                    className="h-7 w-7 text-cyan-neon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <p className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-ice-white">
                  MESSAGE SENT
                </p>
                <p className="text-sm text-ice-white/40">
                  We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 font-[family-name:var(--font-mono)] text-xs text-cyan-neon transition-colors hover:text-ice-white"
                >
                  Send another →
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Intent selector */}
                <div>
                  <label className="mb-2 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-ice-white/30">
                    I&apos;m interested in
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {INTENTS.map((intent) => (
                      <button
                        key={intent}
                        type="button"
                        onClick={() => setSelectedIntent(intent)}
                        className={cn(
                          "rounded-full border px-4 py-1.5 font-[family-name:var(--font-mono)] text-xs transition-all",
                          selectedIntent === intent
                            ? "border-cyan-neon bg-cyan-neon text-dark-deep"
                            : "border-dark-mid text-ice-white/40 hover:border-ice-white/20 hover:text-ice-white/60"
                        )}
                      >
                        {intent}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name + Email row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-ice-white/30">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-dark-mid bg-dark-deep px-4 py-3 text-sm text-ice-white placeholder:text-ice-white/20 focus:border-cyan-neon/50 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-ice-white/30">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-dark-mid bg-dark-deep px-4 py-3 text-sm text-ice-white placeholder:text-ice-white/20 focus:border-cyan-neon/50 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-ice-white/30">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-lg border border-dark-mid bg-dark-deep px-4 py-3 text-sm text-ice-white placeholder:text-ice-white/20 focus:border-cyan-neon/50 focus:outline-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="text-center font-[family-name:var(--font-mono)] text-xs text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-neon py-3.5 font-[family-name:var(--font-display)] text-lg tracking-wider text-dark-deep transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
