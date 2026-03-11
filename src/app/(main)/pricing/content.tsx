"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PricingTable } from "@/components/sections/PricingTable";
import { PackageComparison } from "@/components/sections/PackageComparison";
import { InteractiveCalculator } from "@/components/sections/InteractiveCalculator";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Shield,
  Check,
  X,
  Clock,
  Phone,
  ClipboardCheck,
  Sparkles,
  Zap,
  AlertTriangle,
} from "lucide-react";

/* ─── Hero ─── */
function PricingHero() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* Gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-neon/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-neon/20 bg-cyan-neon/5 px-4 py-1.5 text-xs font-medium tracking-widest text-cyan-neon uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            No hidden fees. Ever.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-[family-name:var(--font-display)] text-5xl leading-tight tracking-wider text-ice-white md:text-7xl">
            Transparent Pricing
            <br />
            <span className="text-cyan-neon text-glow-cyan">
              for Every Stage
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ice-white/60">
            From a $99 brand kit to a full-stack launch package with a
            Performance Guarantee — every dollar is accounted for. Pick what
            you need, or bundle and save.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#packages"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-neon px-8 py-3.5 text-sm font-semibold text-dark-deep shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
            >
              View Launch Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-neon/30 px-8 py-3.5 text-sm font-semibold text-cyan-neon transition-all hover:border-cyan-neon/60 hover:bg-cyan-neon/5"
            >
              Build Your Own
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Individual Services Grid ─── */
function IndividualServicesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-5xl">
              Individual Services
            </h2>
            <p className="mt-4 text-ice-white/50">
              Everything a la carte — expand any service to see tiers and
              details
            </p>
          </div>
        </ScrollReveal>

        <PricingTable />
      </div>
    </section>
  );
}

/* ─── Launch Packages (prominent) ─── */
function LaunchPackagesSection() {
  return (
    <section id="packages" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium tracking-widest text-cyan-neon uppercase">
              Best Value
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-5xl">
              Launch Packages
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ice-white/50">
              Website, content engine, personal AI, six months of support, and
              a Performance Guarantee — all in one package.
            </p>
          </div>
        </ScrollReveal>

        <PackageComparison />

        {/* Performance Guarantee banner */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 rounded-2xl border border-cyan-neon/20 bg-gradient-to-r from-cyan-neon/5 via-transparent to-cyan-neon/5 p-8 text-center md:p-12">
            <Shield className="mx-auto mb-4 h-10 w-10 text-cyan-neon" />
            <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-ice-white md:text-3xl">
              The Performance Guarantee
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-ice-white/60">
              If we don&apos;t hit your target metrics in 6 months, we continue
              your brand automations for 6 more months — free. That&apos;s up
              to $12,000 in additional service.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Interactive Calculator ─── */
function CalculatorSection() {
  return (
    <section id="calculator" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-5xl">
              Build Your Package
            </h2>
            <p className="mt-4 text-ice-white/50">
              Mix and match services — we&apos;ll calculate the total and
              suggest savings
            </p>
          </div>
        </ScrollReveal>

        <InteractiveCalculator />
      </div>
    </section>
  );
}

/* ─── Comparison Table ─── */
const comparisonRows = [
  {
    feature: "Custom website",
    us: true,
    agency: true,
    diy: "Template only",
    platforms: "Template only",
  },
  {
    feature: "Brand identity",
    us: "Included free",
    agency: "$2-5K extra",
    diy: "DIY",
    platforms: false,
  },
  {
    feature: "Social media content",
    us: "6 mo included",
    agency: "$3-8K/mo",
    diy: "Your time",
    platforms: false,
  },
  {
    feature: "AI Knowledge Base",
    us: true,
    agency: false,
    diy: false,
    platforms: false,
  },
  {
    feature: "Performance Guarantee",
    us: true,
    agency: false,
    diy: false,
    platforms: false,
  },
  {
    feature: "You own everything",
    us: true,
    agency: "Varies",
    diy: true,
    platforms: false,
  },
  {
    feature: "6-month support",
    us: true,
    agency: "$$$",
    diy: false,
    platforms: "Email only",
  },
  {
    feature: "Time to launch",
    us: "4-6 weeks",
    agency: "3-6 months",
    diy: "Months+",
    platforms: "Days (limited)",
  },
];

function ComparisonSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-5xl">
              How We Compare
            </h2>
            <p className="mt-4 text-ice-white/50">
              See the real cost of alternatives
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead>
                <tr className="border-b border-ice-white/10">
                  <th className="pb-4 pr-4 font-medium text-ice-white/40" />
                  <th className="pb-4 px-4 text-center">
                    <div className="rounded-lg bg-cyan-neon/10 px-3 py-2">
                      <span className="font-[family-name:var(--font-display)] text-lg tracking-wide text-cyan-neon">
                        Graphene Gangway
                      </span>
                      <p className="mt-0.5 font-[family-name:var(--font-mono)] text-xs text-ice-white/50">
                        $13.5-14K
                      </p>
                    </div>
                  </th>
                  <th className="pb-4 px-4 text-center">
                    <span className="font-semibold text-ice-white/70">
                      Typical Agency
                    </span>
                    <p className="mt-0.5 font-[family-name:var(--font-mono)] text-xs text-ice-white/40">
                      $15-50K+
                    </p>
                  </th>
                  <th className="pb-4 px-4 text-center">
                    <span className="font-semibold text-ice-white/70">
                      DIY
                    </span>
                    <p className="mt-0.5 font-[family-name:var(--font-mono)] text-xs text-ice-white/40">
                      $500-2K + time
                    </p>
                  </th>
                  <th className="pb-4 px-4 text-center">
                    <span className="font-semibold text-ice-white/70">
                      Platforms
                    </span>
                    <p className="mt-0.5 font-[family-name:var(--font-mono)] text-xs text-ice-white/40">
                      $300-600/yr
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className="border-b border-ice-white/5"
                  >
                    <td className="py-4 pr-4 font-medium text-ice-white/70">
                      {row.feature}
                    </td>
                    {(
                      [row.us, row.agency, row.diy, row.platforms] as (
                        | boolean
                        | string
                      )[]
                    ).map((val, j) => (
                      <td key={j} className="px-4 py-4 text-center">
                        {val === true ? (
                          <Check className="mx-auto h-5 w-5 text-cyan-neon" />
                        ) : val === false ? (
                          <X className="mx-auto h-5 w-5 text-ice-white/20" />
                        ) : (
                          <span
                            className={cn(
                              "text-xs",
                              j === 0
                                ? "font-medium text-success"
                                : "text-ice-white/40"
                            )}
                          >
                            {val}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Trust & Urgency ─── */
function TrustSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal>
            <div className="rounded-2xl border border-warning/20 bg-warning/5 p-8">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-6 w-6 text-warning" />
                <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                  Promotional Pricing
                </h3>
              </div>
              <p className="text-sm text-ice-white/60">
                These are launch prices — available for a limited time as we
                build our portfolio. Lock in today&apos;s rates before they
                increase.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-warning/30 bg-warning/10 px-4 py-1.5">
                <AlertTriangle className="h-3.5 w-3.5 text-warning" />
                <span className="text-xs font-medium text-warning">
                  Limited time offer
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-cyan-neon/20 bg-cyan-neon/5 p-8">
              <div className="mb-4 flex items-center gap-3">
                <Shield className="h-6 w-6 text-cyan-neon" />
                <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                  Satisfaction Guaranteed
                </h3>
              </div>
              <p className="text-sm text-ice-white/60">
                We don&apos;t consider a project done until you&apos;re
                satisfied. Our 6-month support window covers bug fixes, minor
                updates, and optimization — no extra charge.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-neon/30 bg-cyan-neon/10 px-4 py-1.5">
                <Check className="h-3.5 w-3.5 text-cyan-neon" />
                <span className="text-xs font-medium text-cyan-neon">
                  6-month support included
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Triple CTA ─── */
function TripleCTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-5xl">
              Ready to Launch?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ice-white/50">
              Choose your path — we&apos;ll meet you wherever you are.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* CTA 1 */}
            <Link
              href="/contact"
              className="group flex flex-col items-center rounded-2xl border border-cyan-neon/30 bg-dark-surface/60 p-8 text-center transition-all hover:border-cyan-neon/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-neon/10">
                <Zap className="h-7 w-7 text-cyan-neon" />
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                Get Started Now
              </h3>
              <p className="mb-4 text-sm text-ice-white/50">
                Know what you need? Let&apos;s go.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-neon group-hover:gap-3 transition-all">
                Start Checkout
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* CTA 2 */}
            <Link
              href="/about"
              className="group flex flex-col items-center rounded-2xl border border-ice-white/10 bg-dark-surface/60 p-8 text-center transition-all hover:border-cyan-neon/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-neon/10">
                <Phone className="h-7 w-7 text-cyan-neon" />
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                Book a Free Call
              </h3>
              <p className="mb-4 text-sm text-ice-white/50">
                Not sure yet? Let&apos;s talk it through.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-neon group-hover:gap-3 transition-all">
                Schedule Call
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* CTA 3 */}
            <Link
              href="/assessment"
              className="group flex flex-col items-center rounded-2xl border border-ice-white/10 bg-dark-surface/60 p-8 text-center transition-all hover:border-cyan-neon/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-neon/10">
                <ClipboardCheck className="h-7 w-7 text-cyan-neon" />
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                Take the Assessment
              </h3>
              <p className="mb-4 text-sm text-ice-white/50">
                Find out exactly what your business needs.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-neon group-hover:gap-3 transition-all">
                Start Assessment
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Page Content ─── */
export function PricingContent() {
  return (
    <div className="min-h-screen bg-dark-deep">
      <PricingHero />
      <IndividualServicesSection />
      <LaunchPackagesSection />
      <CalculatorSection />
      <ComparisonSection />
      <TrustSection />
      <TripleCTA />
    </div>
  );
}
