"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlowDivider } from "@/components/animations/GlowDivider";
import { HexGrid } from "@/components/backgrounds/HexGrid";
import { GraduationCap, Clock, Users, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const PROGRAM_TRACKS = [
  {
    name: "Digital Foundations",
    ages: "12-15",
    duration: "8 weeks",
    skills: [
      "Computer literacy",
      "Internet safety",
      "Basic coding (Scratch/Python)",
      "Digital citizenship",
    ],
  },
  {
    name: "Code Builders",
    ages: "15-18",
    duration: "12 weeks",
    skills: [
      "Web development (HTML/CSS/JS)",
      "UI/UX basics",
      "Version control (Git)",
      "Portfolio building",
    ],
  },
  {
    name: "Tech Careers",
    ages: "18-25",
    duration: "16 weeks",
    skills: [
      "Full-stack development",
      "Cloud computing",
      "IT certification prep",
      "Career readiness",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "Who can enroll in YN Academy?",
    a: "YN Academy is open to residents of North Lawndale and surrounding Chicago communities, ages 12-25. No prior tech experience is required.",
  },
  {
    q: "Is there a cost to attend?",
    a: "All YN Academy programs are completely free. We also provide equipment, internet access, and supplies during sessions.",
  },
  {
    q: "What schedule do classes follow?",
    a: "Classes run after school (4-6 PM) on weekdays and Saturday mornings (10 AM-12 PM). Schedules vary by program track.",
  },
  {
    q: "Can case workers refer clients?",
    a: "Absolutely. We work closely with case workers, schools, and community organizations. Contact us for referral partnerships.",
  },
];

export function YNAcademyContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HexGrid />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-script)] text-xl text-cyan-dim mb-4">
              From the system to the system administrator.
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-cyan-neon text-glow-cyan tracking-wider mb-6">
              YN ACADEMY
            </h1>
            <p className="text-lg text-ice-white/70 max-w-2xl mx-auto">
              Technology education designed for North Lawndale&apos;s next
              generation. We don&apos;t just teach code — we build futures.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Program Tracks */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              PROGRAM TRACKS
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAM_TRACKS.map((track, i) => (
              <ScrollReveal key={track.name} delay={i * 0.15}>
                <div className="bg-dark-surface border border-dark-mid rounded-lg p-6 hover:border-cyan-neon/30 transition-all duration-300 corner-frame h-full">
                  <GraduationCap className="w-10 h-10 text-cyan-neon mb-4" />
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-ice-white mb-2">
                    {track.name}
                  </h3>
                  <div className="flex gap-4 text-sm text-ice-white/50 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> Ages {track.ages}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {track.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {track.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-ice-white/60 text-sm flex items-start gap-2"
                      >
                        <span className="text-cyan-neon mt-1">&#x2022;</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Day in the Life */}
      <section className="py-24 px-6 bg-dark-surface/50">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white mb-8">
              A DAY IN THE LIFE
            </h2>
            <div className="space-y-6 text-ice-white/70 text-lg">
              <p>
                Students arrive to a fully equipped lab. Laptops powered on,
                mentors ready. The first 20 minutes are &quot;open
                hack&quot; — work on anything you want.
              </p>
              <p>
                Then we dive into the day&apos;s lesson. It&apos;s never just
                theory. Every session ends with something you built, something
                you can show.
              </p>
              <p className="font-[family-name:var(--font-script)] text-2xl text-cyan-neon">
                &quot;I didn&apos;t know I could do this.&quot; — Every student,
                week one.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-12">
              FREQUENTLY ASKED
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left bg-dark-surface border border-dark-mid rounded-lg p-5 hover:border-cyan-neon/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-ice-white font-medium">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-neon transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openFaq === i && (
                    <p className="mt-4 text-ice-white/60 text-sm">{item.a}</p>
                  )}
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Enrollment CTA */}
      <section className="py-24 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-cyan-neon text-glow-cyan mb-4">
            READY TO START?
          </h2>
          <p className="text-ice-white/60 mb-8 max-w-md mx-auto">
            Enrollment is open. Reach out to learn about upcoming cohorts and
            get started.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-cyan-neon text-dark-deep font-[family-name:var(--font-display)] text-lg tracking-wider hover:bg-cyan-dim transition-colors duration-300"
          >
            ENROLL NOW
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
