"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlowDivider } from "@/components/animations/GlowDivider";
import { HexGrid } from "@/components/backgrounds/HexGrid";
import {
  Heart,
  Laptop,
  BookOpen,
  Users,
  Building2,
  Handshake,
} from "lucide-react";

const PROGRAMS = [
  {
    icon: Laptop,
    title: "Digital Literacy Labs",
    description:
      "Free computer access and guided workshops for residents who need help navigating the digital world — from email basics to online job applications.",
  },
  {
    icon: BookOpen,
    title: "Resource Navigation",
    description:
      "We help residents find and apply for housing assistance, healthcare, employment, and educational opportunities using digital tools.",
  },
  {
    icon: Users,
    title: "Community Tech Events",
    description:
      "Monthly meetups, hackathons, and tech talks that bring the neighborhood together around innovation and shared learning.",
  },
  {
    icon: Building2,
    title: "Small Business Support",
    description:
      "We help local businesses establish an online presence — from Google Business profiles to social media to basic websites.",
  },
  {
    icon: Heart,
    title: "Youth Mentorship",
    description:
      "Pairing young people with tech professionals who look like them for guidance, career exposure, and real-world project experience.",
  },
  {
    icon: Handshake,
    title: "Partner Programs",
    description:
      "Collaborating with schools, churches, non-profits, and city agencies to extend our reach and multiply our impact.",
  },
];

const STATS = [
  { number: "42%", label: "Poverty rate in North Lawndale" },
  { number: "60%", label: "Households lack broadband" },
  { number: "1 in 3", label: "Adults without basic digital skills" },
];

export function OutreachContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HexGrid />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-script)] text-xl text-cyan-dim mb-4">
              No one left offline.
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-cyan-neon text-glow-cyan tracking-wider mb-6">
              COMMUNITY OUTREACH
            </h1>
            <p className="text-lg text-ice-white/70 max-w-2xl mx-auto">
              We meet people where they are. Our outreach programs connect North
              Lawndale residents to technology, resources, and each other.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* The Problem */}
      <section className="py-24 px-6 bg-dark-surface/50">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white mb-12">
              THE DIGITAL DIVIDE IS REAL
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.15}>
                <div className="text-center">
                  <span className="font-[family-name:var(--font-display)] text-5xl text-cyan-neon text-glow-cyan">
                    {stat.number}
                  </span>
                  <p className="mt-2 text-ice-white/50 text-sm font-[family-name:var(--font-mono)] uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <p className="mt-12 text-ice-white/60 max-w-2xl mx-auto text-lg">
              These aren&apos;t just numbers. They&apos;re our neighbors, our
              families, our community. Graphene Gangway exists to close this gap
              — one person, one connection, one opportunity at a time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Programs */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              HOW WE HELP
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program, i) => (
              <ScrollReveal key={program.title} delay={i * 0.1}>
                <div className="bg-dark-surface border border-dark-mid rounded-lg p-6 hover:border-cyan-neon/30 transition-all duration-300 corner-frame h-full">
                  <program.icon className="w-10 h-10 text-cyan-neon mb-4" />
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-ice-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-ice-white/60 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Get Involved CTA */}
      <section className="py-24 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-cyan-neon text-glow-cyan mb-4">
            GET INVOLVED
          </h2>
          <p className="text-ice-white/60 mb-8 max-w-lg mx-auto">
            Whether you want to volunteer, partner with us, or refer someone who
            needs support — we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-cyan-neon text-dark-deep font-[family-name:var(--font-display)] text-lg tracking-wider hover:bg-cyan-dim transition-colors duration-300"
            >
              VOLUNTEER
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-cyan-neon text-cyan-neon font-[family-name:var(--font-display)] text-lg tracking-wider hover:bg-cyan-neon/10 transition-colors duration-300"
            >
              PARTNER WITH US
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
