"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Target,
  Trophy,
  Users,
  Briefcase,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Rocket,
} from "lucide-react";

const FEATURES = [
  {
    icon: Target,
    title: "8-Factor Match Scoring",
    description:
      "Our intelligent algorithm matches opportunities to your unique profile across 8 dimensions.",
  },
  {
    icon: Briefcase,
    title: "Curated Opportunities",
    description:
      "Scholarships, internships, competitions, hackathons, and more from top organizations.",
  },
  {
    icon: Trophy,
    title: "Gamified Achievements",
    description:
      "Earn badges, track milestones, and climb the leaderboard as you grow your career.",
  },
  {
    icon: Users,
    title: "Community Network",
    description:
      "Connect with mentors, peers, and organizations in the YN Academy ecosystem.",
  },
];

const PROGRAM_PHASES = [
  {
    icon: GraduationCap,
    label: "Phase 1",
    title: "Onboard",
    description: "Create your profile and tell us about your skills, interests, and goals.",
  },
  {
    icon: Target,
    label: "Phase 2",
    title: "Discover",
    description: "Browse personalized opportunity recommendations matched to your profile.",
  },
  {
    icon: Rocket,
    label: "Phase 3",
    title: "Apply & Grow",
    description: "Apply to opportunities, earn rewards, and build your professional portfolio.",
  },
];

export function YnaLandingContent() {
  return (
    <div className="min-h-screen bg-dark-deep">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-neon/3 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-neon/20 bg-cyan-neon/5 px-4 py-1.5 text-sm text-cyan-neon">
              <Sparkles className="h-4 w-4" />
              by Graphene Gangway
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold text-ice-white leading-tight font-[family-name:var(--font-display)]">
              YN Academy
            </h1>
            <p className="mt-2 text-xl sm:text-2xl text-cyan-neon/80 font-[family-name:var(--font-script)]">
              From the system to the system administrator
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-ice-white/60">
              Discover scholarships, competitions, internships, and career
              opportunities matched to your skills and interests with our
              intelligent 8-factor scoring system.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/yna/signup"
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-8 py-3.5",
                  "bg-cyan-neon text-dark-deep font-semibold text-sm",
                  "transition-all hover:shadow-lg hover:shadow-cyan-neon/30",
                  "glow-cyan"
                )}
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/yna/login"
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-8 py-3.5",
                  "border border-cyan-neon/20 text-cyan-neon text-sm font-medium",
                  "transition-all hover:bg-cyan-neon/5 hover:border-cyan-neon/40"
                )}
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ice-white font-[family-name:var(--font-display)]">
              How It Works
            </h2>
            <p className="mt-4 text-ice-white/50">
              A personalized platform designed for young professionals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "rounded-lg border border-dark-mid/50 bg-dark-surface/50 p-6",
                  "transition-all hover:border-cyan-neon/20 hover:shadow-lg hover:shadow-cyan-neon/5"
                )}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-neon/10 border border-cyan-neon/20">
                  <feature.icon className="h-6 w-6 text-cyan-neon" />
                </div>
                <h3 className="text-lg font-semibold text-ice-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-ice-white/50">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Phases */}
      <section className="py-20 sm:py-28 border-t border-dark-mid/30">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ice-white font-[family-name:var(--font-display)]">
              Your Journey
            </h2>
          </div>

          <div className="space-y-8">
            {PROGRAM_PHASES.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-neon/10 border border-cyan-neon/20">
                  <phase.icon className="h-7 w-7 text-cyan-neon" />
                </div>
                <div>
                  <p className="text-xs font-medium text-cyan-neon/60 uppercase tracking-wider mb-1">
                    {phase.label}
                  </p>
                  <h3 className="text-xl font-semibold text-ice-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-ice-white/50">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 border-t border-dark-mid/30">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ice-white font-[family-name:var(--font-display)] mb-4">
            Ready to Start?
          </h2>
          <p className="text-lg text-ice-white/50 mb-8">
            Join YN Academy and unlock personalized opportunities matched to
            your unique skills, interests, and career goals.
          </p>
          <Link
            href="/yna/signup"
            className={cn(
              "inline-flex items-center gap-2 rounded-lg px-10 py-4",
              "bg-cyan-neon text-dark-deep font-semibold",
              "transition-all hover:shadow-lg hover:shadow-cyan-neon/30",
              "glow-cyan"
            )}
          >
            Create Your Account <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
