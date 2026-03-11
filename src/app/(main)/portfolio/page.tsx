import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { Badge } from "@/components/common/Badge";

export const metadata: Metadata = {
  title: "Portfolio | Graphene Gangway",
  description:
    "See the work Graphene Gangway has done for clients in North Lawndale and beyond — websites, brand kits, and digital solutions.",
  openGraph: {
    title: "Our Work | Graphene Gangway",
    description:
      "Explore our portfolio of websites, brands, and digital projects built for the community.",
  },
};

const PORTFOLIO_ITEMS = [
  {
    name: "Lawndale Eats",
    client: "Local Restaurant Collective",
    category: "Web Development",
  },
  {
    name: "Westside Youth Hub",
    client: "Community Nonprofit",
    category: "Brand & Website",
  },
  {
    name: "GreenBlock Gardens",
    client: "Urban Agriculture Startup",
    category: "Brand Identity",
  },
  {
    name: "Crown Cuts Barbershop",
    client: "Local Small Business",
    category: "Web Development",
  },
  {
    name: "North Lawndale Arts Council",
    client: "Arts Organization",
    category: "Digital Strategy",
  },
  {
    name: "BlockWorks Construction",
    client: "Contractor Services",
    category: "Brand & Website",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <SectionWrapper>
        <ScrollAnimation>
          <Badge variant="accent" className="mb-6">
            Portfolio
          </Badge>
          <h1 className="mb-4 font-[family-name:var(--font-display)] text-5xl tracking-wider text-ice-white md:text-6xl lg:text-7xl">
            OUR WORK
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-ice-white/60">
            Every project we take on is a chance to put real tools in
            someone&apos;s hands. Here&apos;s a look at what we&apos;ve been
            building.
          </p>
        </ScrollAnimation>
      </SectionWrapper>

      {/* ── Portfolio Grid ─────────────────────────────────── */}
      <SectionWrapper dark>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((project, i) => (
            <ScrollAnimation key={project.name} delay={i * 0.08}>
              <div className="group rounded-xl border border-dark-mid bg-dark-surface/30 transition-colors hover:border-cyan-neon/30">
                {/* Image placeholder */}
                <div className="flex h-48 items-center justify-center rounded-t-xl bg-dark-deep/50">
                  <div className="text-center">
                    <ImageIcon className="mx-auto mb-2 h-8 w-8 text-ice-white/20" />
                    <p className="font-[family-name:var(--font-mono)] text-xs text-ice-white/20">
                      Coming soon
                    </p>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <p className="mb-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
                    {project.category}
                  </p>
                  <h3 className="mb-1 font-[family-name:var(--font-display)] text-xl tracking-wider text-ice-white">
                    {project.name.toUpperCase()}
                  </h3>
                  <p className="text-sm text-ice-white/40">
                    {project.client}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* ── CTA ────────────────────────────────────────────── */}
      <SectionWrapper>
        <ScrollAnimation>
          <div className="text-center">
            <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon">
              Your Project Could Be Next
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
              WANT TO BE OUR NEXT SUCCESS STORY?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-ice-white/50">
              We work with small businesses, nonprofits, and entrepreneurs who
              are ready to level up their digital presence. Start with a free
              assessment.
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
