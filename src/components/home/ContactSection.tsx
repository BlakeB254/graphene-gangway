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
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-2xl px-4">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl text-cyan-neon text-glow-cyan">
            Enter the Portal
          </h2>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mt-12 flex flex-col items-center gap-4 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-neon"
              >
                <svg
                  className="h-8 w-8 text-cyan-neon"
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
              <p className="font-[family-name:var(--font-display)] text-2xl text-ice-white">
                Message sent!
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm text-cyan-dim hover:text-cyan-neon"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >
              {/* Intent selector */}
              <div className="flex flex-wrap justify-center gap-2">
                {INTENTS.map((intent) => (
                  <button
                    key={intent}
                    type="button"
                    onClick={() => setSelectedIntent(intent)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm transition-colors",
                      selectedIntent === intent
                        ? "border-cyan-neon bg-cyan-neon text-dark-deep"
                        : "border-dark-mid text-ice-white/60 hover:border-cyan-dim hover:text-ice-white"
                    )}
                  >
                    {intent}
                  </button>
                ))}
              </div>

              {/* Name */}
              <input
                type="text"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-dark-mid bg-dark-surface px-4 py-3 text-ice-white placeholder:text-ice-white/30 focus:border-cyan-neon focus:outline-none focus:ring-1 focus:ring-cyan-neon"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-dark-mid bg-dark-surface px-4 py-3 text-ice-white placeholder:text-ice-white/30 focus:border-cyan-neon focus:outline-none focus:ring-1 focus:ring-cyan-neon"
              />

              {/* Message */}
              <textarea
                placeholder="Your message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-md border border-dark-mid bg-dark-surface px-4 py-3 text-ice-white placeholder:text-ice-white/30 focus:border-cyan-neon focus:outline-none focus:ring-1 focus:ring-cyan-neon"
              />

              {/* Error message */}
              {status === "error" && (
                <p className="text-center text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-cyan-neon py-3 font-[family-name:var(--font-display)] text-lg text-dark-deep transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
