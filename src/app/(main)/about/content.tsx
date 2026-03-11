"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Eye,
  Zap,
  ArrowRight,
  Globe,
  Palette,
  Code,
  Users,
  Heart,
} from "lucide-react";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { Badge } from "@/components/common/Badge";

const VALUES = [
  {
    icon: Target,
    title: "Community First",
    description:
      "Every decision we make starts with one question: does this serve North Lawndale? We build for our neighbors, not for metrics.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "We share our process, our progress, and our challenges openly. Trust is built through honesty, not polished presentations.",
  },
  {
    icon: Zap,
    title: "Action Over Talk",
    description:
      "We don't wait for permission or perfect conditions. We build, we iterate, we ship. Progress happens when you start.",
  },
];

const SERVICES_OVERVIEW = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built to serve your vision and your community.",
  },
  {
    icon: Palette,
    title: "Brand & Design",
    description:
      "Logo design, brand kits, and visual identity packages at prices the neighborhood can afford.",
  },
  {
    icon: Code,
    title: "Tech Solutions",
    description:
      "IT support, digital tools setup, and custom software to help local businesses thrive.",
  },
];

const JOURNEY = [
  {
    year: "2024",
    title: "The Spark",
    description:
      "The idea for Graphene Gangway is born — a community-driven technology initiative rooted in North Lawndale. Late nights sketching the vision, talking to neighbors, and believing something bigger was possible.",
  },
  {
    year: "2025",
    title: "Foundation",
    description:
      "First website launch, YN Academy pilot program, and initial partnerships with local organizations. The community starts showing up — and showing out.",
  },
  {
    year: "2026",
    title: "Growth",
    description:
      "Expanding programs, launching tech services, and building a sustainable model for community technology access. From one neighborhood to a blueprint for the nation.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <SectionWrapper>
        <ScrollAnimation>
          <Badge variant="accent" className="mb-6">
            <Heart className="mr-1.5 h-3 w-3" />
            Who We Are
          </Badge>
          <h1 className="mb-4 font-[family-name:var(--font-display)] text-5xl tracking-wider text-ice-white md:text-6xl lg:text-7xl">
            ABOUT GRAPHENE GANGWAY
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-ice-white/60">
            A community technology initiative bridging the digital divide in
            North Lawndale, Chicago — through education, affordable services,
            and grassroots action.
          </p>
        </ScrollAnimation>
      </SectionWrapper>

      {/* ── Mission Statement ──────────────────────────────── */}
      <SectionWrapper dark>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <ScrollAnimation variant="slide-left">
            <div className="flex justify-center">
              <Image
                src="/logos/graphene-gangway-transparent.png"
                alt="Graphene Gangway — Full Logo"
                width={768}
                height={1376}
                quality={100}
                className="h-auto w-64 object-contain glow-cyan-strong md:w-80"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="slide-right" delay={0.1}>
            <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
              Our Mission
            </p>
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
              TECHNOLOGY FOR THE PEOPLE
            </h2>
            <div className="space-y-4 text-ice-white/60">
              <p>
                We believe technology should be a bridge, not a barrier. Too
                many communities have been left behind by the digital economy
                — locked out by cost, access, and systemic disinvestment.
              </p>
              <p className="font-[family-name:var(--font-script)] text-2xl text-cyan-neon">
                We&apos;re not waiting for someone to save us. We&apos;re
                building our own bridge.
              </p>
              <p>
                Graphene Gangway provides free technology education, affordable
                tech services, and community programs that put real tools in
                people&apos;s hands. Not charity — capacity.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </SectionWrapper>

      {/* ── The Story ──────────────────────────────────────── */}
      <SectionWrapper>
        <ScrollAnimation>
          <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
            Where It Started
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
            OUR STORY
          </h2>
          <p className="mb-12 max-w-3xl text-ice-white/50">
            Graphene Gangway was founded in North Lawndale, Chicago — a
            neighborhood on the West Side where 42% of residents live below the
            poverty line and most households lack reliable broadband. The
            &quot;digital economy&quot; everyone talks about? It was passing
            this community by.
          </p>
        </ScrollAnimation>

        <div className="space-y-8">
          {JOURNEY.map((item, i) => (
            <ScrollAnimation key={item.year} delay={i * 0.1}>
              <div className="flex gap-6 rounded-xl border border-dark-mid bg-dark-surface/30 p-6 transition-colors hover:border-cyan-neon/30 md:p-8">
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-neon/30 bg-dark-deep">
                    <span className="font-[family-name:var(--font-display)] text-lg text-cyan-neon">
                      {item.year}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl tracking-wider text-ice-white">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="text-sm leading-relaxed text-ice-white/50">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Values ─────────────────────────────────────────── */}
      <SectionWrapper dark>
        <ScrollAnimation>
          <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
            What We Stand For
          </p>
          <h2 className="mb-12 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
            OUR VALUES
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <ScrollAnimation key={value.title} delay={i * 0.15}>
              <div className="text-center">
                <value.icon className="mx-auto mb-4 h-10 w-10 text-cyan-neon" />
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wider text-ice-white">
                  {value.title.toUpperCase()}
                </h3>
                <p className="text-sm leading-relaxed text-ice-white/50">
                  {value.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Team ───────────────────────────────────────────── */}
      <SectionWrapper>
        <ScrollAnimation>
          <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
            The People
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
            OUR TEAM
          </h2>
          <p className="mb-8 max-w-2xl text-ice-white/50">
            Graphene Gangway is powered by people who believe in what this
            community can become. We&apos;re builders, educators, and
            organizers from North Lawndale and beyond.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="rounded-xl border border-dashed border-cyan-neon/20 bg-dark-surface/20 p-12 text-center">
            <Users className="mx-auto mb-4 h-10 w-10 text-cyan-neon/40" />
            <p className="mb-2 font-[family-name:var(--font-display)] text-xl tracking-wider text-ice-white/70">
              OUR TEAM IS GROWING
            </p>
            <p className="mx-auto max-w-md text-sm text-ice-white/40">
              We&apos;re building out our team profiles. Check back soon to
              meet the people behind the mission — or{" "}
              <Link
                href="/contact"
                className="text-cyan-neon hover:underline"
              >
                reach out
              </Link>{" "}
              if you want to join us.
            </p>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* ── Services Overview ──────────────────────────────── */}
      <SectionWrapper dark>
        <ScrollAnimation>
          <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
            What We Offer
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
            OUR SERVICES
          </h2>
          <p className="mb-12 max-w-2xl text-ice-white/50">
            Affordable technology services built for small businesses,
            nonprofits, and entrepreneurs in our community.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES_OVERVIEW.map((service, i) => (
            <ScrollAnimation key={service.title} delay={i * 0.1}>
              <div className="rounded-xl border border-dark-mid bg-dark-surface/30 p-6 transition-colors hover:border-cyan-neon/30">
                <service.icon className="mb-4 h-8 w-8 text-cyan-neon" />
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg tracking-wider text-ice-white">
                  {service.title.toUpperCase()}
                </h3>
                <p className="text-sm leading-relaxed text-ice-white/50">
                  {service.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-neon bg-cyan-neon/10 px-6 py-3 font-[family-name:var(--font-mono)] text-sm text-cyan-neon transition-colors hover:bg-cyan-neon/20"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* ── Community Impact ───────────────────────────────── */}
      <SectionWrapper>
        <ScrollAnimation>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
                Our Roots
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
                COMMUNITY IMPACT
              </h2>
              <p className="max-w-xl text-ice-white/50">
                Everything we build is rooted in North Lawndale. Our programs,
                services, and outreach efforts are designed to create lasting
                change — not quick fixes. See how we&apos;re making a
                difference.
              </p>
            </div>
            <Link
              href="/community"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-neon bg-cyan-neon/10 px-6 py-3 font-[family-name:var(--font-mono)] text-sm text-cyan-neon transition-colors hover:bg-cyan-neon/20"
            >
              Our Community
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* ── CTA ────────────────────────────────────────────── */}
      <SectionWrapper dark>
        <ScrollAnimation>
          <div className="text-center">
            <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
              Let&apos;s Build Together
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
              READY TO WORK WITH US?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-ice-white/50">
              Whether you need a website, want to learn tech skills, or have a
              project in mind — we&apos;re here to help. Start with a free
              assessment and let&apos;s figure it out together.
            </p>
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 bg-cyan-neon px-8 py-3 font-[family-name:var(--font-display)] text-lg tracking-wider text-dark-deep transition-colors hover:bg-cyan-dim"
            >
              GET STARTED
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </ScrollAnimation>
      </SectionWrapper>
    </>
  );
}
