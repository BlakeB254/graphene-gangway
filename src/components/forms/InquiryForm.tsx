"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface InquiryFormProps {
  serviceId?: string;
  tierName?: string;
  source?: string;
  className?: string;
}

type FormState = "idle" | "submitting" | "success" | "error";

export function InquiryForm({ serviceId, tierName, source = "website", className }: InquiryFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone") || undefined,
          service: serviceId || data.get("service") || undefined,
          tier: tierName || undefined,
          budget: data.get("budget") || undefined,
          message: data.get("message"),
          source,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Something went wrong");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className={cn("w-full", className)}>
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-brand-success/30 bg-brand-success/5 p-8 text-center"
          >
            <CheckCircle className="mx-auto mb-4 h-10 w-10 text-brand-success" />
            <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-ice-white">
              MESSAGE SENT!
            </h3>
            <p className="mt-2 text-sm text-ice-white/60">
              We&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setState("idle")}
              className="mt-4 text-sm text-cyan-neon hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="inq-name" className="mb-1.5 block text-sm font-medium text-ice-white/70">
                  Name *
                </label>
                <input
                  id="inq-name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-dark-mid bg-dark-deep px-4 py-3 text-sm text-ice-white placeholder-ice-white/30 transition-colors focus:border-cyan-neon/50 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="inq-email" className="mb-1.5 block text-sm font-medium text-ice-white/70">
                  Email *
                </label>
                <input
                  id="inq-email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-dark-mid bg-dark-deep px-4 py-3 text-sm text-ice-white placeholder-ice-white/30 transition-colors focus:border-cyan-neon/50 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="inq-phone" className="mb-1.5 block text-sm font-medium text-ice-white/70">
                Phone <span className="text-ice-white/30">(optional)</span>
              </label>
              <input
                id="inq-phone"
                name="phone"
                type="tel"
                className="w-full rounded-lg border border-dark-mid bg-dark-deep px-4 py-3 text-sm text-ice-white placeholder-ice-white/30 transition-colors focus:border-cyan-neon/50 focus:outline-none"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Service selector (only shown if no serviceId prop) */}
            {!serviceId && (
              <div>
                <label htmlFor="inq-service" className="mb-1.5 block text-sm font-medium text-ice-white/70">
                  What do you need?
                </label>
                <select
                  id="inq-service"
                  name="service"
                  className="w-full rounded-lg border border-dark-mid bg-dark-deep px-4 py-3 text-sm text-ice-white transition-colors focus:border-cyan-neon/50 focus:outline-none"
                >
                  <option value="">Select a service...</option>
                  <option value="brand-design">Brand & Design</option>
                  <option value="web-development">Web Development</option>
                  <option value="business-planning">Business Planning</option>
                  <option value="content-automation">Content & Automation</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="launch-package">Launch Package</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
            )}

            {/* Budget */}
            <div>
              <label htmlFor="inq-budget" className="mb-1.5 block text-sm font-medium text-ice-white/70">
                Budget range <span className="text-ice-white/30">(optional)</span>
              </label>
              <select
                id="inq-budget"
                name="budget"
                className="w-full rounded-lg border border-dark-mid bg-dark-deep px-4 py-3 text-sm text-ice-white transition-colors focus:border-cyan-neon/50 focus:outline-none"
              >
                <option value="">Select...</option>
                <option value="under-500">Under $500</option>
                <option value="500-2000">$500 - $2,000</option>
                <option value="2000-5000">$2,000 - $5,000</option>
                <option value="5000-15000">$5,000 - $15,000</option>
                <option value="15000-plus">$15,000+</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="inq-message" className="mb-1.5 block text-sm font-medium text-ice-white/70">
                Tell us about your project *
              </label>
              <textarea
                id="inq-message"
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-dark-mid bg-dark-deep px-4 py-3 text-sm text-ice-white placeholder-ice-white/30 transition-colors focus:border-cyan-neon/50 focus:outline-none"
                placeholder="What are you looking to build?"
              />
            </div>

            {/* Error */}
            {state === "error" && (
              <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {errorMsg}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={state === "submitting"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-neon px-6 py-3 font-[family-name:var(--font-display)] tracking-wider text-dark-deep transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] disabled:opacity-50 disabled:hover:scale-100"
            >
              {state === "submitting" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  SENDING...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  SEND INQUIRY
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
