"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Where is your business right now?",
    subtitle: "BUSINESS STAGE",
    options: [
      { id: "idea", label: "Just an idea", description: "Haven't started yet" },
      { id: "no-online", label: "Operating, no online presence", description: "Running but invisible online" },
      { id: "has-website", label: "Have a website, need more", description: "Online but not growing" },
      { id: "scaling", label: "Established, looking to scale", description: "Ready for the next level" },
    ],
  },
  {
    title: "What's your #1 goal?",
    subtitle: "PRIMARY GOAL",
    options: [
      { id: "brand", label: "Get a professional brand", description: "Logo, colors, identity" },
      { id: "website", label: "Launch a website", description: "Portfolio or e-commerce" },
      { id: "content", label: "Automate content & social", description: "AI-driven marketing" },
      { id: "ai", label: "Build an AI tool", description: "Knowledge base or agent" },
      { id: "full-launch", label: "Complete digital launch", description: "All of the above" },
    ],
  },
  {
    title: "What's your budget range?",
    subtitle: "BUDGET",
    options: [
      { id: "under-500", label: "Under $500", description: "Brand kit or starter" },
      { id: "500-2000", label: "$500 – $2,000", description: "Brand + planning" },
      { id: "2000-5000", label: "$2,000 – $5,000", description: "Website or automations" },
      { id: "5000-15000", label: "$5,000 – $15,000", description: "Full launch package" },
      { id: "15000-plus", label: "$15,000+", description: "Enterprise solution" },
    ],
  },
];

type Answers = Record<number, string>;

function getRecommendation(answers: Answers) {
  const goal = answers[1];
  const budget = answers[2];

  if (goal === "full-launch" || budget === "5000-15000" || budget === "15000-plus") {
    return {
      title: "Launch Package",
      description: "Based on your answers, our Launch Package is the best fit — everything you need to go live with a complete digital presence.",
      services: ["Brand Kit", "Biz Starter Kit", "Website", "Brand Automations", "AI Knowledge Base"],
      href: "/pricing",
      cta: "View Launch Packages",
    };
  }
  if (goal === "brand" || budget === "under-500") {
    return {
      title: "Brand Kit",
      description: "Start with a professional brand identity. Logo, colors, typography, and social templates for $99.",
      services: ["Brand Kit"],
      href: "/services/brand-kit",
      cta: "View Brand Kit",
    };
  }
  if (goal === "website") {
    return {
      title: "Web Development",
      description: "A custom website that works as hard as you do. Includes brand kit free.",
      services: ["Portfolio or E-Commerce Website", "Brand Kit (included free)"],
      href: "/services/web-development",
      cta: "View Web Development",
    };
  }
  if (goal === "content") {
    return {
      title: "Brand Automations",
      description: "AI-powered content across all channels. Your brand, everywhere, every day.",
      services: ["Brand Automations", "Brand Kit (included free)", "Biz Starter Kit (included free)"],
      href: "/services/brand-automations",
      cta: "View Brand Automations",
    };
  }
  if (goal === "ai") {
    return {
      title: "AI Knowledge Base",
      description: "A personal AI trained on your business data, deployed to your devices.",
      services: ["AI Knowledge Base"],
      href: "/services/ai-knowledge-base",
      cta: "View AI Knowledge Base",
    };
  }
  return {
    title: "Biz Starter Kit",
    description: "Turn your business idea into a bankable plan with market research and projections.",
    services: ["Biz Starter Kit", "Brand Kit (included free)"],
    href: "/services/biz-starter-kit",
    cta: "View Biz Starter Kit",
  };
}

export function AssessmentContent() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const totalSteps = STEPS.length + 1; // +1 for contact info
  const isContactStep = step === STEPS.length;
  const isResults = submitted;
  const progress = isResults ? 100 : ((step + 1) / (totalSteps + 1)) * 100;

  function selectOption(optionId: string) {
    setAnswers({ ...answers, [step]: optionId });
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setStep(STEPS.length); // go to contact step
    }
  }

  async function handleSubmit() {
    if (!name || !email) return;
    setSending(true);

    const summary = STEPS.map((s, i) => {
      const opt = s.options.find((o) => o.id === answers[i]);
      return `${s.subtitle}: ${opt?.label ?? "N/A"}`;
    }).join("\n");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          intent: "Assessment",
          message: `Assessment Results:\n${summary}`,
        }),
      });
    } catch {
      // Silent — still show results
    }
    setSending(false);
    setSubmitted(true);
  }

  const recommendation = getRecommendation(answers);

  return (
    <div className="min-h-screen py-32">
      <div className="mx-auto max-w-2xl px-6">
        {/* Progress bar */}
        <div className="mb-12">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-ice-white/40">
              {isResults ? "Complete" : `Step ${step + 1} of ${totalSteps}`}
            </span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-dark-mid">
            <motion.div
              className="h-full bg-cyan-neon"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isResults ? (
            /* ── Results ── */
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="text-center">
                <Sparkles className="mx-auto mb-4 h-12 w-12 text-cyan-neon" />
                <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white">
                  YOUR RECOMMENDATION
                </h2>
              </div>

              <div className="rounded-xl border border-cyan-neon/30 bg-dark-surface/50 p-8">
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-2xl tracking-wider text-cyan-neon">
                  {recommendation.title}
                </h3>
                <p className="mb-6 text-ice-white/70">{recommendation.description}</p>
                <ul className="mb-8 space-y-2">
                  {recommendation.services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-ice-white/60">
                      <Check className="h-4 w-4 text-cyan-neon" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  href={recommendation.href}
                  className="group inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-6 py-3 font-bold text-dark-deep transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                >
                  {recommendation.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <p className="text-center text-sm text-ice-white/40">
                We&apos;ll also send these results to your email. Questions?{" "}
                <Link href="/contact" className="text-cyan-neon hover:underline">
                  Contact us
                </Link>
              </p>
            </motion.div>
          ) : isContactStep ? (
            /* ── Contact Info Step ── */
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
                  Almost done
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
                  Where should we send your results?
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-ice-white/40">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-3 text-ice-white placeholder:text-ice-white/20 focus:border-cyan-neon/50 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-ice-white/40">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-3 text-ice-white placeholder:text-ice-white/20 focus:border-cyan-neon/50 focus:outline-none"
                    placeholder="you@business.com"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 text-sm text-ice-white/40 transition-colors hover:text-ice-white"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!name || !email || sending}
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-6 py-3 font-bold text-dark-deep transition-all hover:scale-105 disabled:opacity-50"
                >
                  {sending ? "Sending..." : "See My Results"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            /* ── Question Steps ── */
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
                  {STEPS[step].subtitle}
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
                  {STEPS[step].title}
                </h2>
              </div>

              <div className="space-y-3">
                {STEPS[step].options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => selectOption(option.id)}
                    className={cn(
                      "w-full rounded-xl border p-5 text-left transition-all duration-200",
                      answers[step] === option.id
                        ? "border-cyan-neon bg-cyan-neon/5"
                        : "border-dark-mid bg-dark-surface hover:border-cyan-neon/30"
                    )}
                  >
                    <p className="font-medium text-ice-white">{option.label}</p>
                    <p className="mt-1 text-sm text-ice-white/40">{option.description}</p>
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 text-sm text-ice-white/40 transition-colors hover:text-ice-white"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
