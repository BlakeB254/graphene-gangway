"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HexGrid } from "@/components/backgrounds/HexGrid";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const INTENTS = ["Academy", "Services", "Partnership", "Volunteer", "Merch"];

export function ContactContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [intent, setIntent] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, intent, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-cyan-neon mx-auto mb-6" />
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-cyan-neon text-glow-cyan mb-4">
            MESSAGE SENT
          </h1>
          <p className="text-ice-white/60 mb-8">
            We&apos;ll be in touch soon. Welcome to the portal.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 border border-cyan-neon text-cyan-neon font-[family-name:var(--font-display)] tracking-wider hover:bg-cyan-neon hover:text-dark-deep transition-colors duration-300"
          >
            BACK HOME
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <HexGrid />
      <div className="relative z-10 py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-cyan-neon text-glow-cyan tracking-wider mb-4">
                ENTER THE PORTAL
              </h1>
              <p className="text-ice-white/60">
                Tell us what you&apos;re looking for. We&apos;ll make it happen.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {/* Intent Chips */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {INTENTS.map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIntent(intent === i ? "" : i)}
                  className={cn(
                    "px-4 py-2 rounded-full border text-sm transition-all duration-300",
                    intent === i
                      ? "bg-cyan-neon text-dark-deep border-cyan-neon"
                      : "border-dark-mid text-ice-white/60 hover:border-cyan-neon/40 hover:text-ice-white"
                  )}
                >
                  {i}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-ice-white/50 mb-2 font-[family-name:var(--font-mono)]"
                >
                  NAME
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-surface border border-dark-mid rounded-lg text-ice-white placeholder:text-ice-white/30 focus:outline-none focus:border-cyan-neon/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-ice-white/50 mb-2 font-[family-name:var(--font-mono)]"
                >
                  EMAIL *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-surface border border-dark-mid rounded-lg text-ice-white placeholder:text-ice-white/30 focus:outline-none focus:border-cyan-neon/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-ice-white/50 mb-2 font-[family-name:var(--font-mono)]"
                >
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-surface border border-dark-mid rounded-lg text-ice-white placeholder:text-ice-white/30 focus:outline-none focus:border-cyan-neon/50 transition-colors resize-none"
                  placeholder="Tell us what you need..."
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm font-[family-name:var(--font-mono)]">
                  ERROR: {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting" || !email.trim() || !message.trim()}
                className="w-full py-3 bg-cyan-neon text-dark-deep font-[family-name:var(--font-display)] text-lg tracking-wider hover:bg-cyan-dim transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    SENDING...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
