"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlowDivider } from "@/components/animations/GlowDivider";
import { HexGrid } from "@/components/backgrounds/HexGrid";
import { CommunityMap } from "@/components/sections/CommunityMap";
import { CommunityDashboard } from "@/components/sections/CommunityDashboard";
import {
  MapPin,
  Heart,
  Handshake,
  Database,
  Activity,
  BarChart3,
  FileText,
  ArrowRight,
  Rocket,
  GraduationCap,
  Phone,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const PARTNERS = [
  {
    name: "Hampton House",
    description:
      "A cornerstone North Lawndale institution providing community space, programming, and cultural events that strengthen neighborhood bonds.",
  },
  {
    name: "Monday Coffee",
    description:
      "Weekly community gathering fostering connection, collaboration, and conversation among North Lawndale residents and entrepreneurs.",
  },
  {
    name: "Lawndale Christian Health Center",
    description:
      "Comprehensive healthcare services rooted in the community, addressing both physical and mental wellness for North Lawndale families.",
  },
  {
    name: "North Lawndale Employment Network",
    description:
      "Workforce development and job training programs that create pathways to economic stability for community residents.",
  },
];

const DATA_RESOURCES = [
  {
    name: "City of Chicago Data Portal",
    description:
      "Open data from the City of Chicago including community area profiles, demographics, and public services.",
    url: "https://data.cityofchicago.org/",
    icon: Database,
  },
  {
    name: "Chicago Health Atlas",
    description:
      "Community health indicators, hospital data, and wellness metrics across Chicago neighborhoods.",
    url: "https://chicagohealthatlas.org/",
    icon: Activity,
  },
  {
    name: "CMAP Community Data Snapshot",
    description:
      "Regional planning data from the Chicago Metropolitan Agency for Planning including land use and transportation.",
    url: "https://www.cmap.illinois.gov/data/community-snapshots",
    icon: BarChart3,
  },
  {
    name: "U.S. Census Bureau ACS",
    description:
      "American Community Survey data providing detailed demographic, economic, and housing statistics.",
    url: "https://data.census.gov/",
    icon: FileText,
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function CommunityContent() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-32 md:py-40">
        <HexGrid />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal>
            <p className="mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-dim">
              Community Area #29 &mdash; West Side, Chicago
            </p>
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-5xl tracking-wider text-cyan-neon text-glow-cyan md:text-7xl">
              OUR COMMUNITY: NORTH LAWNDALE
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ice-white/70">
              North Lawndale is more than a pin on a map &mdash; it&rsquo;s home.
              A historic West Side neighborhood with deep cultural roots,
              extraordinary resilience, and a future we&rsquo;re building
              together. Graphene Gangway was born here, and everything we do
              starts here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* ── Community Map ── */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="mb-12 flex items-center justify-center gap-3">
              <MapPin className="h-5 w-5 text-cyan-neon" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
                WHERE WE ARE
              </h2>
            </div>
          </ScrollReveal>
          <CommunityMap />
        </div>
      </section>

      <GlowDivider />

      {/* ── Community Statistics Dashboard ── */}
      <section className="bg-dark-surface/50 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
              By the numbers
            </p>
            <h2 className="mb-16 text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
              COMMUNITY SNAPSHOT
            </h2>
          </ScrollReveal>
          <CommunityDashboard />
        </div>
      </section>

      <GlowDivider />

      {/* ── Community Story ── */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
              ABOUT NORTH LAWNDALE
            </h2>
          </ScrollReveal>

          <div className="space-y-6 text-lg leading-relaxed text-ice-white/70">
            <ScrollReveal delay={0.1}>
              <p>
                North Lawndale sits on Chicago&rsquo;s West Side, stretching
                from the Eisenhower Expressway south to Cermak Road. It&rsquo;s
                one of 77 official community areas in the city and carries the
                designation <strong className="text-ice-white">#29</strong>.
                During the early 20th century, North Lawndale was a thriving
                industrial hub and one of the largest communities of
                Eastern-European immigrants in the Midwest. By the 1960s, it had
                become the heart of Chicago&rsquo;s civil rights movement
                &mdash; Dr.&nbsp;Martin Luther King Jr. lived here during his
                1966 Chicago Freedom Movement campaign.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p>
                Decades of redlining, disinvestment, and policy neglect
                transformed the neighborhood. Factories closed. Jobs
                disappeared. But the people stayed. Community organizations,
                churches, and grassroots leaders continued to fight for better
                schools, safer streets, and economic opportunity. That spirit of
                resilience is North Lawndale&rsquo;s defining characteristic
                &mdash; and it&rsquo;s the foundation Graphene Gangway is built
                on.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p>
                Today, North Lawndale is experiencing a new chapter. Community
                development organizations are driving affordable housing
                initiatives. Local entrepreneurs are opening businesses. And a
                growing network of technology-focused programs is connecting
                residents to the digital economy. The challenges are real
                &mdash; but so is the momentum.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* ── Why We're Here ── */}
      <section className="bg-dark-surface/50 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-10 flex items-center justify-center gap-3">
              <Heart className="h-6 w-6 text-cyan-neon" />
              <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
                WHY WE&rsquo;RE HERE
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mb-8 text-center font-[family-name:var(--font-script)] text-2xl text-cyan-neon md:text-3xl">
              We don&rsquo;t just work in this community &mdash; we&rsquo;re
              part of it.
            </p>
          </ScrollReveal>

          <div className="space-y-6 text-lg leading-relaxed text-ice-white/70">
            <ScrollReveal delay={0.2}>
              <p>
                Graphene Gangway exists because North Lawndale deserves the same
                access to technology, digital skills, and economic opportunity as
                any neighborhood in Chicago. We&rsquo;re not an outside
                organization parachuting in with a program and a press release.
                We live here. We shop here. Our kids go to school here.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p>
                Our mission is economic empowerment through technology. That
                means building websites for local businesses that can&rsquo;t
                afford agency prices. It means teaching young people to code so
                they can create their own futures. It means showing up at
                community meetings, partnering with local organizations, and
                making sure that when the digital economy grows, North Lawndale
                grows with it.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* ── Community Partners ── */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="mb-12 flex items-center justify-center gap-3">
              <Handshake className="h-6 w-6 text-cyan-neon" />
              <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
                COMMUNITY PARTNERS
              </h2>
            </div>
            <p className="mx-auto mb-16 max-w-xl text-center text-ice-white/60">
              We&rsquo;re stronger together. These organizations share our
              commitment to North Lawndale&rsquo;s future.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PARTNERS.map((partner, i) => (
              <ScrollReveal key={partner.name} delay={i * 0.1}>
                <div className="group flex h-full flex-col rounded-xl border border-dark-mid bg-dark-deep/80 p-6 transition-all duration-300 hover:border-cyan-neon/30 hover:bg-dark-deep">
                  <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white transition-colors group-hover:text-cyan-neon">
                    {partner.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-ice-white/55">
                    {partner.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* ── Data Resources ── */}
      <section className="bg-dark-surface/50 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
              Open data
            </p>
            <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
              DATA RESOURCES
            </h2>
            <p className="mx-auto mb-16 max-w-xl text-center text-ice-white/60">
              Explore the public datasets and research that inform our
              understanding of North Lawndale.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {DATA_RESOURCES.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <ScrollReveal key={resource.name} delay={i * 0.1}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-xl border border-dark-mid bg-dark-deep/80 p-6 transition-all duration-300 hover:border-cyan-neon/30 hover:bg-dark-deep"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-neon/10 text-cyan-neon transition-colors group-hover:bg-cyan-neon/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white transition-colors group-hover:text-cyan-neon">
                      {resource.name}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-ice-white/55">
                      {resource.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-xs text-cyan-neon/70 transition-colors group-hover:text-cyan-neon">
                      Explore
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* ── CTA Footer ── */}
      <section className="px-6 py-24 md:py-32 text-center">
        <ScrollReveal>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon text-glow-cyan md:text-5xl">
            READY TO BUILD YOUR BUSINESS
            <br />
            IN NORTH LAWNDALE?
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-ice-white/60">
            Whether you need a website, want to learn tech skills, or are
            looking for a community partner &mdash; we&rsquo;re here.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-cyan-neon px-8 py-3 font-[family-name:var(--font-display)] text-lg tracking-wider text-dark-deep transition-colors duration-300 hover:bg-cyan-dim"
            >
              <Rocket className="h-5 w-5" />
              OUR SERVICES
            </Link>
            <Link
              href="/yn-academy"
              className="inline-flex items-center justify-center gap-2 border border-cyan-neon px-8 py-3 font-[family-name:var(--font-display)] text-lg tracking-wider text-cyan-neon transition-colors duration-300 hover:bg-cyan-neon/10"
            >
              <GraduationCap className="h-5 w-5" />
              YN ACADEMY
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-ice-white/20 px-8 py-3 font-[family-name:var(--font-display)] text-lg tracking-wider text-ice-white/70 transition-colors duration-300 hover:border-ice-white/40 hover:text-ice-white"
            >
              <Phone className="h-5 w-5" />
              CONTACT US
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
