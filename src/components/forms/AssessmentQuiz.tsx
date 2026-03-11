"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronRight, Sparkles, Calendar, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// --- Types ---

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
}

interface Recommendation {
  serviceId: string;
  serviceName: string;
  price: string;
  reasoning: string;
  link: string;
  features: string[];
}

// --- Questions ---

const QUESTIONS: QuizQuestion[] = [
  {
    id: "stage",
    question: "What stage is your business?",
    options: [
      "Just an idea",
      "Early stage (0-1 year)",
      "Established (1-5 years)",
      "Scaling (5+ years)",
    ],
  },
  {
    id: "needs",
    question: "What do you need most?",
    options: [
      "Brand identity",
      "Business plan",
      "Website",
      "Content marketing",
      "AI tools",
      "Everything — the full package",
    ],
  },
  {
    id: "budget",
    question: "What's your budget range?",
    options: [
      "Under $500",
      "$500 - $2,000",
      "$2,000 - $5,000",
      "$5,000 - $15,000",
      "$15,000+",
    ],
  },
  {
    id: "timeline",
    question: "When do you want to launch?",
    options: ["ASAP", "1-3 months", "3-6 months", "Just exploring"],
  },
];

// --- Recommendation Engine ---

function getRecommendation(answers: Record<string, string>): Recommendation {
  const { stage, needs, budget } = answers;

  // Just an idea + Under $500 -> Brand Kit
  if (stage === "Just an idea" && budget === "Under $500") {
    return {
      serviceId: "brand-kit",
      serviceName: "Brand Kit",
      price: "$99",
      reasoning:
        "You're at the idea stage with a lean budget. A professional Brand Kit gives you a polished identity to start building momentum — logo, colors, typography, and social media assets included.",
      link: "/services/brand-kit",
      features: [
        "Primary logo + variations",
        "Color palette & typography",
        "Social media backgrounds",
        "Brand guidelines document",
        "Full file package (PNG/SVG/PDF)",
      ],
    };
  }

  // Just an idea + $500-$2K -> Biz Starter Kit
  if (stage === "Just an idea" && budget === "$500 - $2,000") {
    return {
      serviceId: "biz-starter-kit",
      serviceName: "Biz Starter Kit",
      price: "$199",
      reasoning:
        "You have a bigger vision and the budget to back it up. The Biz Starter Kit turns your idea into a bank-ready business plan with market research, financials, and a pitch deck — plus a free Brand Kit.",
      link: "/services/biz-starter-kit",
      features: [
        "Professional business plan",
        "Target market research",
        "Financial projections",
        "Pitch deck framework",
        "Brand Kit included free",
      ],
    };
  }

  // Early/Established + Website + $500-$2K -> Portfolio Website
  if (
    (stage === "Early stage (0-1 year)" || stage === "Established (1-5 years)") &&
    needs === "Website" &&
    budget === "$500 - $2,000"
  ) {
    return {
      serviceId: "web-development",
      serviceName: "Portfolio Website",
      price: "$1,500",
      reasoning:
        "Your business needs a professional online presence. A custom Portfolio Website with admin panel and 6-month support will let you showcase your work and attract clients.",
      link: "/services/web-development",
      features: [
        "Custom design",
        "Fully responsive",
        "Content management admin panel",
        "Brand Kit included free",
        "6-month support",
      ],
    };
  }

  // Any + Website + $2K-$5K -> E-Commerce Website
  if (needs === "Website" && budget === "$2,000 - $5,000") {
    return {
      serviceId: "web-development",
      serviceName: "E-Commerce Website",
      price: "$2,500",
      reasoning:
        "With your budget, you can get a full e-commerce website with product management, shopping cart, payment processing, and an admin panel to run everything yourself.",
      link: "/services/web-development",
      features: [
        "Full e-commerce admin panel",
        "Shopping cart & payments",
        "Coupon/deal generator",
        "Order tracking",
        "Brand Kit + Biz Starter Kit included free",
      ],
    };
  }

  // Any + Content marketing -> Brand Automations Standard
  if (needs === "Content marketing") {
    return {
      serviceId: "brand-automations",
      serviceName: "Brand Automations Standard",
      price: "$2,000/mo",
      reasoning:
        "Content marketing is your priority, and Brand Automations puts it on autopilot. You'll get 15 posts/day across 5 channels, a monthly content calendar, blog content, and analytics — all hands-free.",
      link: "/services/brand-automations",
      features: [
        "5 social media channels",
        "15 posts per day",
        "Monthly content calendar",
        "Blog & newsletter content",
        "Monthly analytics report",
      ],
    };
  }

  // Any + AI tools -> AI Knowledge Base
  if (needs === "AI tools") {
    return {
      serviceId: "ai-knowledge-base",
      serviceName: "Personal AI Knowledge Base",
      price: "$1,500+",
      reasoning:
        "A Personal AI Knowledge Base gives you a custom AI trained on your business data. It runs on your device, knows your business inside and out, and requires no subscription.",
      link: "/services/ai-knowledge-base",
      features: [
        "Custom AI model trained on your data",
        "Business knowledge graph",
        "Self-expansion portal",
        "Device deployment",
        "No subscription — yours to keep",
      ],
    };
  }

  // Any + Everything + $5K-$15K -> Portfolio Launch Package
  if (needs === "Everything — the full package" && budget === "$5,000 - $15,000") {
    return {
      serviceId: "portfolio-launch",
      serviceName: "Portfolio Launch Package",
      price: "$13,500",
      reasoning:
        "You want the full package and your budget aligns perfectly with the Portfolio Launch Package. You'll get a custom website, 6 months of content automations, an AI Knowledge Base, Brand Kit, Biz Starter Kit, and our Performance Guarantee.",
      link: "/pricing",
      features: [
        "Custom portfolio website",
        "6 months Brand Automations (Standard)",
        "Personal AI Knowledge Base",
        "Brand Kit + Biz Starter Kit included",
        "Performance Guarantee",
      ],
    };
  }

  // Any + Everything + $15K+ -> E-Commerce Launch Package
  if (needs === "Everything — the full package" && budget === "$15,000+") {
    return {
      serviceId: "ecommerce-launch",
      serviceName: "E-Commerce Launch Package",
      price: "$14,000",
      reasoning:
        "You're going all-in, and the E-Commerce Launch Package is the ultimate business-in-a-box. Full e-commerce site, 6 months of automated content, AI Knowledge Base, and our Performance Guarantee.",
      link: "/pricing",
      features: [
        "Full e-commerce website",
        "6 months Brand Automations (Standard)",
        "Personal AI Knowledge Base",
        "Brand Kit + Biz Starter Kit included",
        "Performance Guarantee",
      ],
    };
  }

  // Default: suggest based on budget bracket
  if (budget === "Under $500") {
    return {
      serviceId: "brand-kit",
      serviceName: "Brand Kit",
      price: "$99",
      reasoning:
        "Based on your budget, a Brand Kit is the smartest first step. Get a professional identity that sets you apart — logo, colors, typography, and all the assets you need.",
      link: "/services/brand-kit",
      features: [
        "Primary logo + variations",
        "Color palette & typography",
        "Social media backgrounds",
        "Brand guidelines document",
        "Full file package",
      ],
    };
  }

  if (budget === "$500 - $2,000") {
    return {
      serviceId: "biz-starter-kit",
      serviceName: "Biz Starter Kit",
      price: "$199",
      reasoning:
        "Based on your budget and goals, the Biz Starter Kit gives you a solid foundation — a professional business plan, market research, financial projections, and a free Brand Kit.",
      link: "/services/biz-starter-kit",
      features: [
        "Professional business plan",
        "Target market research",
        "Financial projections",
        "Pitch deck framework",
        "Brand Kit included free",
      ],
    };
  }

  if (budget === "$2,000 - $5,000") {
    return {
      serviceId: "web-development",
      serviceName: "E-Commerce Website",
      price: "$2,500",
      reasoning:
        "Your budget opens the door to a custom e-commerce website. You'll get a fully functional online store with product management, payments, and an admin panel.",
      link: "/services/web-development",
      features: [
        "Full e-commerce admin panel",
        "Shopping cart & payments",
        "Coupon/deal generator",
        "Order tracking",
        "6-month support",
      ],
    };
  }

  // $5K+ default
  return {
    serviceId: "portfolio-launch",
    serviceName: "Portfolio Launch Package",
    price: "$13,500",
    reasoning:
      "With your budget, the Portfolio Launch Package gives you maximum value — a custom website, 6 months of automated content, AI Knowledge Base, and our Performance Guarantee. Everything you need to launch and grow.",
    link: "/pricing",
    features: [
      "Custom portfolio website",
      "6 months Brand Automations (Standard)",
      "Personal AI Knowledge Base",
      "Brand Kit + Biz Starter Kit included",
      "Performance Guarantee",
    ],
  };
}

// --- Slide Variants ---

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

// --- Component ---

export function AssessmentQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [direction, setDirection] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const totalSteps = QUESTIONS.length;
  const progress = isComplete ? 100 : (currentStep / totalSteps) * 100;

  const handleSelect = useCallback(
    (option: string) => {
      const question = QUESTIONS[currentStep];
      const newAnswers = { ...answers, [question.id]: option };
      setAnswers(newAnswers);

      setTimeout(() => {
        if (currentStep < totalSteps - 1) {
          setDirection(1);
          setCurrentStep((prev) => prev + 1);
        } else {
          const result = getRecommendation(newAnswers);
          setRecommendation(result);
          setIsComplete(true);
        }
      }, 300);
    },
    [currentStep, answers, totalSteps]
  );

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const handleRestart = useCallback(() => {
    setCurrentStep(0);
    setAnswers({});
    setDirection(0);
    setIsComplete(false);
    setRecommendation(null);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-mono text-ice-white/60" style={{ fontFamily: "var(--font-mono)" }}>
            {isComplete ? "Complete" : `Step ${currentStep + 1} of ${totalSteps}`}
          </span>
          <span className="text-sm font-mono text-cyan-neon" style={{ fontFamily: "var(--font-mono)" }}>
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1.5 bg-dark-mid rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-cyan-neon rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Question Area */}
      <div className="relative min-h-[420px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {!isComplete ? (
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Back Button */}
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-ice-white/50 hover:text-cyan-neon transition-colors mb-6 group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    Back
                  </span>
                </button>
              )}

              {/* Question */}
              <h2
                className="text-3xl md:text-4xl text-ice-white mb-8 tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {QUESTIONS[currentStep].question}
              </h2>

              {/* Options */}
              <div className="grid gap-3">
                {QUESTIONS[currentStep].options.map((option) => {
                  const isSelected = answers[QUESTIONS[currentStep].id] === option;
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className={cn(
                        "w-full text-left p-5 rounded-xl border-2 transition-all duration-200",
                        "hover:border-cyan-neon hover:bg-cyan-neon/5",
                        isSelected
                          ? "border-cyan-neon bg-cyan-neon/5"
                          : "border-dark-mid bg-dark-surface"
                      )}
                    >
                      <span
                        className={cn(
                          "text-base md:text-lg transition-colors",
                          isSelected ? "text-cyan-neon" : "text-ice-white/80"
                        )}
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            /* Results */
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {recommendation && (
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-6 h-6 text-cyan-neon" />
                    <h2
                      className="text-3xl md:text-4xl text-ice-white tracking-wide"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Your Personalized Recommendation
                    </h2>
                  </div>

                  {/* Recommendation Card */}
                  <div className="border-2 border-cyan-neon/30 bg-dark-surface rounded-2xl p-8 mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <h3
                          className="text-2xl md:text-3xl text-cyan-neon tracking-wide"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {recommendation.serviceName}
                        </h3>
                        <p
                          className="text-2xl text-ice-white mt-1"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {recommendation.price}
                        </p>
                      </div>
                    </div>

                    <p
                      className="text-ice-white/70 leading-relaxed mb-6"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {recommendation.reasoning}
                    </p>

                    {/* Features */}
                    <div className="border-t border-dark-mid pt-6">
                      <h4
                        className="text-sm uppercase tracking-widest text-ice-white/40 mb-4"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        What&apos;s Included
                      </h4>
                      <ul className="space-y-2">
                        {recommendation.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <ChevronRight className="w-4 h-4 text-cyan-neon mt-0.5 shrink-0" />
                            <span
                              className="text-ice-white/80 text-sm"
                              style={{ fontFamily: "var(--font-body)" }}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/pricing"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-neon text-dark-deep font-semibold hover:bg-cyan-neon/90 transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Get Started
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-cyan-neon text-cyan-neon hover:bg-cyan-neon/10 transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <Calendar className="w-4 h-4" />
                      Book a Call
                    </Link>
                    <Link
                      href={recommendation.link}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-ice-white/70 hover:text-cyan-neon transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <BookOpen className="w-4 h-4" />
                      Learn More
                    </Link>
                  </div>

                  {/* Restart */}
                  <div className="mt-8 text-center">
                    <button
                      onClick={handleRestart}
                      className="text-sm text-ice-white/40 hover:text-cyan-neon transition-colors"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Retake Assessment
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
