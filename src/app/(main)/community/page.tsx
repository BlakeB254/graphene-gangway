import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Users,
  GraduationCap,
  Briefcase,
  Heart,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { Badge } from "@/components/common/Badge";
import { IMPACT_STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Community | Graphene Gangway",
  description:
    "Graphene Gangway is rooted in North Lawndale, Chicago — bridging the digital divide through education, affordable services, and community outreach.",
  openGraph: {
    title: "Our Community | Graphene Gangway",
    description:
      "North Lawndale is the heart of everything we do. See how Graphene Gangway is building digital equity on the West Side of Chicago.",
  },
};

const NORTH_LAWNDALE_STATS = [
  {
    label: "Population",
    value: "~35,000",
    description: "Residents on Chicago's West Side",
  },
  {
    label: "Poverty Rate",
    value: "42%",
    description: "Nearly half of residents live below the poverty line",
  },
  {
    label: "Median Income",
    value: "$30K",
    description: "Compared to Chicago's $65K median",
  },
  {
    label: "Digital Access",
    value: "< 50%",
    description: "Households with reliable broadband internet",
  },
];

const INITIATIVES = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Technology training programs for youth and adults — from digital literacy fundamentals to advanced web development and AI tools.",
  },
  {
    icon: Briefcase,
    title: "Affordable Services",
    description:
      "Brand kits, websites, and business plans at prices the community can actually afford. No predatory upsells, no hidden fees.",
  },
  {
    icon: Users,
    title: "Community Outreach",
    description:
      "Door-to-door engagement, pop-up workshops, and partnerships with local organizations to meet people where they are.",
  },
  {
    icon: Heart,
    title: "Mentorship",
    description:
      "One-on-one guidance connecting aspiring entrepreneurs and tech learners with experienced professionals and real-world projects.",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <SectionWrapper>
        <ScrollAnimation>
          <Badge variant="accent" className="mb-6">
            <MapPin className="mr-1.5 h-3 w-3" />
            North Lawndale, Chicago
          </Badge>
          <h1 className="mb-4 font-[family-name:var(--font-display)] text-5xl tracking-wider text-ice-white md:text-6xl lg:text-7xl">
            OUR COMMUNITY
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-ice-white/60">
            North Lawndale is the heart of everything we do. We&apos;re not
            building from the outside — we&apos;re building from within,
            creating digital pathways for a neighborhood that has been
            overlooked for too long.
          </p>
          <p className="mt-3 font-[family-name:var(--font-mono)] text-xs text-ice-white/30">
            41.8603° N, 87.7192° W
          </p>
        </ScrollAnimation>
      </SectionWrapper>

      {/* ── North Lawndale Stats ───────────────────────────── */}
      <SectionWrapper dark>
        <ScrollAnimation>
          <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
            The Reality
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
            NORTH LAWNDALE BY THE NUMBERS
          </h2>
          <p className="mb-12 max-w-2xl text-ice-white/50">
            These numbers aren&apos;t just statistics — they represent our
            neighbors, our families, and the daily challenges that drive our
            mission.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NORTH_LAWNDALE_STATS.map((stat, i) => (
            <ScrollAnimation key={stat.label} delay={i * 0.1}>
              <div className="rounded-xl border border-dark-mid bg-dark-surface/30 p-6">
                <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
                  {stat.label}
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ice-white/40">
                  {stat.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* ── What We're Doing ──────────────────────────────── */}
      <SectionWrapper>
        <ScrollAnimation>
          <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
            Bridging the Digital Divide
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
            WHAT WE&apos;RE DOING
          </h2>
          <p className="mb-12 max-w-2xl text-ice-white/50">
            Graphene Gangway exists to close the gap between North Lawndale and
            the digital economy. We do it through four pillars — each one
            designed to meet the community where it is and move it forward.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {INITIATIVES.map((item, i) => (
            <ScrollAnimation key={item.title} delay={i * 0.1}>
              <div className="group rounded-xl border border-dark-mid bg-dark-surface/30 p-8 transition-colors hover:border-cyan-neon/30">
                <item.icon className="mb-4 h-8 w-8 text-cyan-neon" />
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl tracking-wider text-ice-white">
                  {item.title.toUpperCase()}
                </h3>
                <p className="text-sm leading-relaxed text-ice-white/50">
                  {item.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Impact Numbers ────────────────────────────────── */}
      <SectionWrapper dark>
        <ScrollAnimation>
          <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
            Our Progress
          </p>
          <h2 className="mb-12 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
            IMPACT SO FAR
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {IMPACT_STATS.map((stat, i) => (
            <ScrollAnimation key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-[family-name:var(--font-display)] text-5xl tracking-wider text-cyan-neon md:text-6xl">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-ice-white/50">
                  {stat.label}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Programs Preview ──────────────────────────────── */}
      <SectionWrapper>
        <ScrollAnimation>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
                Get Started
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
                OUR PROGRAMS
              </h2>
              <p className="max-w-xl text-ice-white/50">
                From YN Academy&apos;s youth technology training to business
                development workshops, our programs are built to create real
                opportunity in North Lawndale. Every program is free or
                heavily subsidized.
              </p>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-neon bg-cyan-neon/10 px-6 py-3 font-[family-name:var(--font-mono)] text-sm text-cyan-neon transition-colors hover:bg-cyan-neon/20"
            >
              View All Programs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* ── Get Involved CTA ──────────────────────────────── */}
      <SectionWrapper dark>
        <ScrollAnimation>
          <div className="text-center">
            <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
              Join the Movement
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
              GET INVOLVED
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-ice-white/50">
              Whether you want to partner with us, volunteer your skills, or
              get services for your business — there&apos;s a place for you at
              Graphene Gangway.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ScrollAnimation delay={0}>
            <div className="rounded-xl border border-dark-mid bg-dark-surface/30 p-8 text-center">
              <Briefcase className="mx-auto mb-4 h-8 w-8 text-cyan-neon" />
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg tracking-wider text-ice-white">
                PARTNER
              </h3>
              <p className="mb-6 text-sm text-ice-white/40">
                Organizations and businesses aligned with our mission can
                collaborate on programs, sponsorships, or service delivery.
              </p>
              <Link
                href="/contact"
                className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon hover:underline"
              >
                Become a partner &rarr;
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <div className="rounded-xl border border-dark-mid bg-dark-surface/30 p-8 text-center">
              <Heart className="mx-auto mb-4 h-8 w-8 text-cyan-neon" />
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg tracking-wider text-ice-white">
                VOLUNTEER
              </h3>
              <p className="mb-6 text-sm text-ice-white/40">
                Teach a workshop, mentor a student, or help with community
                events. Your time and expertise make a direct impact.
              </p>
              <Link
                href="/contact"
                className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon hover:underline"
              >
                Sign up to volunteer &rarr;
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="rounded-xl border border-dark-mid bg-dark-surface/30 p-8 text-center">
              <GraduationCap className="mx-auto mb-4 h-8 w-8 text-cyan-neon" />
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg tracking-wider text-ice-white">
                GET SERVICES
              </h3>
              <p className="mb-6 text-sm text-ice-white/40">
                Need a website, brand kit, or business plan? We built
                Graphene Gangway for you. Explore our affordable packages.
              </p>
              <Link
                href="/services"
                className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon hover:underline"
              >
                Browse services &rarr;
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </SectionWrapper>
    </>
  );
}
