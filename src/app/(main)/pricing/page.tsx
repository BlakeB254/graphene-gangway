import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SERVICES, LAUNCH_PACKAGES } from "@/lib/services-data";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { Badge } from "@/components/common/Badge";
import { PerformanceGuarantee } from "@/components/sections/PerformanceGuarantee";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing | Graphene Gangway",
  description:
    "Transparent pricing for web development, brand kits, business plans, automations, and AI services. No hidden fees.",
  openGraph: {
    title: "Pricing | Graphene Gangway",
    description:
      "Transparent pricing. No hidden fees. Launch packages and individual services.",
  },
};

/* ── Helpers ───────────────────────────────────────── */

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/* ── FAQ Data ──────────────────────────────────────── */

const FAQ_ITEMS = [
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, ACH bank transfers, and payment plans on launch packages. We invoice through Stripe for full transparency.",
  },
  {
    q: "Are there any hidden fees?",
    a: "Never. The prices listed are what you pay. Domain registration and hosting fees are separate (typically $12-20/year for a domain and $0-20/month for hosting) and we help you set those up under your own accounts so you own everything.",
  },
  {
    q: "What does the 6-month support include?",
    a: "Bug fixes, minor content updates, security patches, and performance monitoring. It does not include major redesigns or new feature development, which can be quoted separately.",
  },
  {
    q: "Can I upgrade from a launch package later?",
    a: "Absolutely. Launch packages are designed to get you going. You can add individual services or upgrade tiers at any time. We credit your existing package value toward upgrades.",
  },
  {
    q: "How does the Performance Guarantee work?",
    a: "At kickoff we agree on measurable targets (traffic, leads, engagement). If we don\u2019t hit them within 6 months, we continue your brand automations for another 6 months at no charge \u2014 up to $12,000 in additional service.",
  },
  {
    q: "Do I own my website and content?",
    a: "Yes. 100%. You own the code, the design, the content, and the domain. After the support period ends, you have full independence to host and manage everything yourself or continue with us.",
  },
];

/* ── Page ──────────────────────────────────────────── */

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ──────────────────────────────────── */}
      <SectionWrapper className="pb-20 pt-32">
        <ScrollAnimation variant="fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-cyan-neon/70">
              Simple &amp; Transparent
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl tracking-wider text-cyan-neon text-glow-cyan md:text-7xl">
              PRICING
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ice-white/70">
              Transparent pricing. No hidden fees. Pick a launch package to save
              or build your own stack with individual services.
            </p>
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* ── Launch Packages ───────────────────────── */}
      <SectionWrapper dark id="launch-packages">
        <ScrollAnimation variant="fade-up">
          <div className="mb-16 text-center">
            <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon/60">
              Best Value
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white">
              LAUNCH PACKAGES
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ice-white/50">
              Everything you need to go live. Bundled for savings with our
              Performance Guarantee included.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {LAUNCH_PACKAGES.map((pkg, i) => {
            const isPopular = !!pkg.badge;

            return (
              <ScrollAnimation key={pkg.id} variant="fade-up" delay={i * 0.12}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border bg-dark-surface/60 p-8 transition-all duration-300 md:p-10",
                    isPopular
                      ? "border-cyan-neon/40 shadow-[0_0_40px_rgba(0,240,255,0.08)]"
                      : "border-dark-mid hover:border-dark-mid/80"
                  )}
                >
                  {/* Badge */}
                  {pkg.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="accent">{pkg.badge}</Badge>
                    </div>
                  )}

                  {/* Package name */}
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white">
                    {pkg.name}
                  </h3>

                  {/* Savings badge */}
                  <div className="mt-3">
                    <Badge variant="success">
                      Save {pkg.savingsPercent} ({formatCurrency(pkg.savings)})
                    </Badge>
                  </div>

                  {/* Upfront price */}
                  <div className="mt-6">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg text-ice-white/40 line-through">
                        {formatCurrency(pkg.alaCarteTotal)}
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-5xl tracking-wide text-cyan-neon">
                        {formatCurrency(pkg.upfrontPrice)}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-ice-white/40">
                      one-time upfront
                    </p>
                  </div>

                  {/* Monthly option */}
                  <div className="mt-4 rounded-lg border border-dark-mid bg-dark-deep/50 px-4 py-3">
                    <p className="text-sm text-ice-white/70">
                      <span className="font-medium text-ice-white">
                        Or {formatCurrency(pkg.monthlyOption.down)} down
                      </span>{" "}
                      + {formatCurrency(pkg.monthlyOption.monthly)}/mo for{" "}
                      {pkg.monthlyOption.months} months
                    </p>
                    <p className="mt-0.5 font-[family-name:var(--font-mono)] text-xs text-ice-white/40">
                      Total:{" "}
                      {formatCurrency(
                        pkg.monthlyOption.down +
                          pkg.monthlyOption.monthly * pkg.monthlyOption.months
                      )}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px w-full bg-dark-mid" />

                  {/* Included services */}
                  <p className="mb-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-ice-white/50">
                    What&apos;s included
                  </p>
                  <ul className="mb-8 flex-1 space-y-3">
                    {pkg.services.map((service) => (
                      <li key={service} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-neon" />
                        <span className="text-sm leading-relaxed text-ice-white/70">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Guarantee callout */}
                  <div className="mb-6 rounded-lg border border-cyan-neon/10 bg-cyan-neon/5 px-4 py-3">
                    <p className="text-xs leading-relaxed text-cyan-neon/80">
                      <span className="font-semibold text-cyan-neon">
                        Performance Guarantee:
                      </span>{" "}
                      {pkg.guarantee}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/book"
                    className={cn(
                      "group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-center font-bold transition-all duration-300",
                      isPopular
                        ? "bg-cyan-neon text-dark-deep hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                        : "border border-cyan-neon/30 text-cyan-neon hover:bg-cyan-neon/10"
                    )}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ── Individual Services ───────────────────── */}
      <SectionWrapper id="individual-services">
        <ScrollAnimation variant="fade-up">
          <div className="mb-16 text-center">
            <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-cyan-neon/60">
              Build Your Own Stack
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white">
              INDIVIDUAL SERVICES
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ice-white/50">
              Need just one thing? Every service is available individually.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mx-auto max-w-5xl space-y-6">
          {SERVICES.map((service, si) => (
            <ScrollAnimation key={service.id} variant="fade-up" delay={si * 0.06}>
              <div className="rounded-xl border border-dark-mid bg-dark-surface/40 p-6 transition-colors hover:border-dark-mid/80 md:p-8">
                {/* Service header */}
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group inline-flex items-center gap-2"
                    >
                      <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-ice-white group-hover:text-cyan-neon">
                        {service.name}
                      </h3>
                      <ArrowRight className="h-4 w-4 text-ice-white/30 transition-all group-hover:translate-x-1 group-hover:text-cyan-neon" />
                    </Link>
                    <p className="mt-1 text-sm text-ice-white/50">
                      {service.tagline}
                    </p>
                  </div>
                  {service.turnaround && (
                    <span className="self-start whitespace-nowrap font-[family-name:var(--font-mono)] text-xs text-ice-white/30">
                      {service.turnaround}
                    </span>
                  )}
                </div>

                {/* Tier grid */}
                <div
                  className={cn(
                    "grid gap-4",
                    service.tiers.length === 1
                      ? "grid-cols-1"
                      : service.tiers.length === 2
                        ? "grid-cols-1 sm:grid-cols-2"
                        : service.tiers.length === 3
                          ? "grid-cols-1 sm:grid-cols-3"
                          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                  )}
                >
                  {service.tiers.map((tier) => {
                    const isPopular = tier.badge === "popular";
                    const isBestValue = tier.badge === "best-value";

                    return (
                      <div
                        key={tier.name}
                        className={cn(
                          "relative rounded-lg border bg-dark-deep/50 p-4",
                          isPopular
                            ? "border-cyan-neon/30"
                            : isBestValue
                              ? "border-brand-success/30"
                              : "border-dark-mid/50"
                        )}
                      >
                        {tier.badge && (
                          <div className="absolute -top-2.5 left-3">
                            <Badge
                              variant={
                                isPopular
                                  ? "accent"
                                  : isBestValue
                                    ? "success"
                                    : "muted"
                              }
                              className="text-[10px]"
                            >
                              {tier.badge === "popular"
                                ? "Most Popular"
                                : tier.badge === "best-value"
                                  ? "Best Value"
                                  : tier.badge === "featured"
                                    ? "Featured"
                                    : tier.badge}
                            </Badge>
                          </div>
                        )}

                        <p className="mt-1 text-sm font-medium text-ice-white/80">
                          {tier.name}
                        </p>
                        <p className="mt-2 font-[family-name:var(--font-display)] text-2xl tracking-wide text-cyan-neon">
                          {tier.priceLabel}
                        </p>
                        <p className="text-xs text-ice-white/40">
                          {tier.period === "monthly" ? "/month" : "one-time"}
                        </p>

                        {/* Compact feature list */}
                        <ul className="mt-3 space-y-1.5">
                          {tier.features.slice(0, 4).map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-2 text-xs text-ice-white/50"
                            >
                              <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-cyan-neon/60" />
                              {f}
                            </li>
                          ))}
                          {tier.features.length > 4 && (
                            <li className="text-xs text-ice-white/30">
                              +{tier.features.length - 4} more
                            </li>
                          )}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Performance Guarantee ─────────────────── */}
      <SectionWrapper dark>
        <ScrollAnimation variant="fade-up">
          <div className="mx-auto max-w-4xl">
            <PerformanceGuarantee />
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* ── FAQ ───────────────────────────────────── */}
      <SectionWrapper id="faq">
        <ScrollAnimation variant="fade-up">
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white">
              COMMON QUESTIONS
            </h2>
            <p className="mx-auto mt-4 max-w-md text-ice-white/50">
              Got questions? We&apos;ve got answers.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mx-auto max-w-3xl space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <ScrollAnimation key={i} variant="fade-up" delay={i * 0.05}>
              <details className="group rounded-xl border border-dark-mid bg-dark-surface/40 transition-colors open:border-cyan-neon/20">
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-ice-white transition-colors hover:text-cyan-neon [&::-webkit-details-marker]:hidden">
                  <span className="pr-4 font-medium">{item.q}</span>
                  <span className="flex-shrink-0 text-ice-white/30 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-dark-mid px-6 py-5">
                  <p className="text-sm leading-relaxed text-ice-white/60">
                    {item.a}
                  </p>
                </div>
              </details>
            </ScrollAnimation>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Final CTA + Inquiry Form ──────────────── */}
      <SectionWrapper dark>
        <ScrollAnimation variant="fade-up">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon text-glow-cyan">
              READY TO LAUNCH?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-ice-white/60">
              Tell us about your project and we&apos;ll get back to you within
              24 hours with a custom proposal.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation variant="fade-up" delay={0.1}>
          <div className="mx-auto mt-10 max-w-xl rounded-xl border border-dark-mid bg-dark-surface/40 p-8">
            <InquiryForm source="pricing-page" />
          </div>
        </ScrollAnimation>
      </SectionWrapper>
    </div>
  );
}
