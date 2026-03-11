"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Step data                                                          */
/* ------------------------------------------------------------------ */

const STEPS = [
  {
    title: "Where is your business right now?",
    subtitle: "BUSINESS STAGE",
    options: [
      { id: "idea", label: "Just an idea", description: "Haven't started yet" },
      { id: "no-online", label: "Operating but no online presence", description: "Running but invisible online" },
      { id: "has-website", label: "Have a website but need more", description: "Online but not growing" },
      { id: "scaling", label: "Established and looking to scale", description: "Ready for the next level" },
    ],
  },
  {
    title: "What's your #1 goal?",
    subtitle: "PRIMARY GOAL",
    options: [
      { id: "brand", label: "Get a professional brand", description: "Logo, colors, identity" },
      { id: "website", label: "Launch a website", description: "Portfolio or e-commerce" },
      { id: "content", label: "Automate my content/social", description: "AI-driven marketing" },
      { id: "ai", label: "Build an AI tool for my business", description: "Knowledge base or agent" },
      { id: "full-launch", label: "Complete digital launch (all of the above)", description: "Everything at once" },
    ],
  },
  {
    title: "What's your budget?",
    subtitle: "BUDGET RANGE",
    options: [
      { id: "under-500", label: "Under $500", description: "Brand kit or starter" },
      { id: "500-2000", label: "$500 - $2,000", description: "Brand + planning" },
      { id: "2000-5000", label: "$2,000 - $5,000", description: "Website or automations" },
      { id: "5000-15000", label: "$5,000 - $15,000", description: "Full launch package" },
      { id: "15000-plus", label: "$15,000+", description: "Enterprise solution" },
    ],
  },
];

type Answers = Record<number, string>;

/* ------------------------------------------------------------------ */
/*  Recommendation engine                                              */
/* ------------------------------------------------------------------ */

interface Recommendation {
  title: string;
  description: string;
  href: string;
}

function getRecommendations(answers: Answers): Recommendation[] {
  const stage = answers[0];
  const goal = answers[1];
  const budget = answers[2];
  const recs: Recommendation[] = [];

  // Brand Kit — good for everyone starting out or wanting brand
  if (
    goal === "brand" ||
    goal === "full-launch" ||
    stage === "idea" ||
    stage === "no-online"
  ) {
    recs.push({
      title: "Brand Kit",
      description:
        "Logo, colors, typography, social templates, and brand guidelines to look professional from day one.",
      href: "/services/brand-kit",
    });
  }

  // Biz Starter Kit — for ideas and new businesses
  if (stage === "idea" || (stage === "no-online" && budget !== "under-500")) {
    recs.push({
      title: "Biz Starter Kit",
      description:
        "Business plan, market research, competitive analysis, and pitch deck to turn your idea into a bankable plan.",
      href: "/services/biz-starter-kit",
    });
  }

  // Web Development — for website goals or scaling
  if (
    goal === "website" ||
    goal === "full-launch" ||
    stage === "no-online" ||
    (stage === "has-website" && budget !== "under-500")
  ) {
    recs.push({
      title: "Web Development",
      description:
        "Custom portfolio or e-commerce website with 6 months of support included.",
      href: "/services/web-development",
    });
  }

  // Brand Automations — for content/social automation or scaling
  if (
    goal === "content" ||
    goal === "full-launch" ||
    stage === "scaling" ||
    (stage === "has-website" &&
      (budget === "2000-5000" || budget === "5000-15000" || budget === "15000-plus"))
  ) {
    recs.push({
      title: "Brand Automations",
      description:
        "AI-powered content creation, scheduling, and distribution across all your channels.",
      href: "/services/brand-automations",
    });
  }

  // AI Knowledge Base — for AI tool goal or higher budgets
  if (
    goal === "ai" ||
    goal === "full-launch" ||
    (stage === "scaling" && (budget === "5000-15000" || budget === "15000-plus"))
  ) {
    recs.push({
      title: "Personal AI Knowledge Base",
      description:
        "A custom AI trained on your business data, deployed to your devices. It actually knows your business.",
      href: "/services/ai-knowledge-base",
    });
  }

  // Fallback
  if (recs.length === 0) {
    recs.push({
      title: "Brand Kit",
      description:
        "Start with a professional brand identity. Logo, colors, typography, and social templates.",
      href: "/services/brand-kit",
    });
  }

  return recs;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function AssessmentContent() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // Steps: 0-2 = questions, 3 = contact, 4 = results
  const totalSteps = 5;
  const isContactStep = step === STEPS.length;
  const isResults = submitted;
  const displayStep = isResults ? 5 : step + 1;
  const progress = (displayStep / totalSteps) * 100;

  function selectOption(optionId: string) {
    setAnswers({ ...answers, [step]: optionId });
  }

  function goNext() {
    if (step < STEPS.length && !answers[step]) return;
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else if (step === STEPS.length - 1) {
      setStep(STEPS.length); // contact step
    } else if (isContactStep) {
      handleSubmit();
    }
  }

  function goBack() {
    if (step > 0) setStep(step - 1);
  }

  async function handleSubmit() {
    if (!name.trim() || !email.trim()) return;
    setSending(true);
    setError("");

    const summary = STEPS.map((s, i) => {
      const opt = s.options.find((o) => o.id === answers[i]);
      return `${s.subtitle}: ${opt?.label ?? "N/A"}`;
    }).join("\n");

    const message = [
      summary,
      phone ? `Phone: ${phone}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          intent: "Assessment",
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit");
      }

      setSending(false);
      setSubmitted(true);
    } catch (err) {
      setSending(false);
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const canProceed =
    step < STEPS.length
      ? !!answers[step]
      : isContactStep
        ? name.trim() !== "" && email.trim() !== ""
        : true;

  const recommendations = getRecommendations(answers);

  return (
    <div className="min-h-screen py-32">
      <div className="mx-auto max-w-2xl px-6">
        {/* Header */}
        <div className="mb-4 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon text-glow-cyan md:text-5xl">
            FREE ASSESSMENT
          </h1>
          <p className="mt-3 text-ice-white/60">
            Answer a few questions. We&apos;ll tell you exactly what you need.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-12">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-ice-white/40">
              {isResults ? "Complete" : `Step ${displayStep} of ${totalSteps}`}
            </span>
            <span className="font-[family-name:var(--font-mono)] text-xs text-cyan-neon/60">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-dark-mid">
            <motion.div
              className="h-full rounded-full bg-cyan-neon"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Step content */}
        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait">
            {isResults ? (
              /* ---- Results ---- */
              <motion.div
                key="results"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-neon bg-cyan-neon/10">
                    <Check className="h-8 w-8 text-cyan-neon" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-ice-white md:text-3xl">
                    YOUR RECOMMENDED SERVICES
                  </h2>
                  <p className="mt-3 text-ice-white/50">
                    Based on your answers, here&apos;s what we recommend for
                    your business.
                  </p>
                </div>

                <div className="space-y-4">
                  {recommendations.map((rec, idx) => (
                    <motion.div
                      key={rec.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.15, duration: 0.4 }}
                    >
                      <Link
                        href={rec.href}
                        className="group block rounded-xl border border-dark-mid bg-dark-deep p-6 transition-all duration-300 hover:border-cyan-neon/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.08)]"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wider text-ice-white transition-colors group-hover:text-cyan-neon">
                              {rec.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-ice-white/50">
                              {rec.description}
                            </p>
                          </div>
                          <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-ice-white/30 transition-all duration-200 group-hover:translate-x-1 group-hover:text-cyan-neon" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-8 py-3 font-[family-name:var(--font-display)] text-lg tracking-wider text-dark-deep transition-colors duration-300 hover:bg-cyan-dim"
                  >
                    LET&apos;S TALK
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <p className="text-sm text-ice-white/30">
                    We&apos;ll reach out within 24 hours with a custom plan.
                  </p>
                </div>
              </motion.div>
            ) : isContactStep ? (
              /* ---- Contact Info Step ---- */
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
                    CONTACT INFO
                  </p>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
                    How can we reach you?
                  </h2>
                </div>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="assess-name"
                      className="mb-1.5 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-ice-white/40"
                    >
                      NAME *
                    </label>
                    <input
                      id="assess-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-3 text-ice-white placeholder:text-ice-white/20 focus:border-cyan-neon/50 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="assess-email"
                      className="mb-1.5 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-ice-white/40"
                    >
                      EMAIL *
                    </label>
                    <input
                      id="assess-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-3 text-ice-white placeholder:text-ice-white/20 focus:border-cyan-neon/50 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="assess-phone"
                      className="mb-1.5 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-ice-white/40"
                    >
                      PHONE{" "}
                      <span className="text-ice-white/20">(optional)</span>
                    </label>
                    <input
                      id="assess-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-lg border border-dark-mid bg-dark-surface px-4 py-3 text-ice-white placeholder:text-ice-white/20 focus:border-cyan-neon/50 focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-sm font-[family-name:var(--font-mono)] text-red-400">
                    ERROR: {error}
                  </p>
                )}
              </motion.div>
            ) : (
              /* ---- Question Steps ---- */
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
                          ? "border-cyan-neon bg-cyan-neon/5 glow-cyan"
                          : "border-dark-mid bg-dark-deep hover:border-cyan-neon/30"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-ice-white">
                            {option.label}
                          </p>
                          <p className="mt-1 text-sm text-ice-white/40">
                            {option.description}
                          </p>
                        </div>
                        {answers[step] === option.id && (
                          <Check className="h-5 w-5 shrink-0 text-cyan-neon" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {!isResults && (
          <div className="mt-10 flex items-center justify-between border-t border-dark-mid pt-8">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className={cn(
                "flex items-center gap-2 rounded-lg px-6 py-3 font-[family-name:var(--font-display)] tracking-wider transition-all duration-300",
                step === 0
                  ? "cursor-not-allowed text-ice-white/20"
                  : "border border-dark-mid text-ice-white/60 hover:border-ice-white/30 hover:text-ice-white"
              )}
            >
              <ArrowLeft className="h-4 w-4" />
              BACK
            </button>

            <button
              type="button"
              onClick={goNext}
              disabled={!canProceed || sending}
              className={cn(
                "flex items-center gap-2 rounded-lg px-8 py-3 font-[family-name:var(--font-display)] tracking-wider transition-all duration-300",
                canProceed && !sending
                  ? "bg-cyan-neon text-dark-deep hover:bg-cyan-dim"
                  : "cursor-not-allowed bg-dark-mid text-ice-white/30"
              )}
            >
              {sending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  SUBMITTING...
                </>
              ) : isContactStep ? (
                <>
                  SEE RESULTS
                  <Check className="h-4 w-4" />
                </>
              ) : (
                <>
                  NEXT
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
