import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Palette,
  Briefcase,
  Monitor,
  Zap,
  Brain,
  Check,
  ArrowRight,
} from "lucide-react";
import { getServiceBySlug, getCrossSellServices } from "@/lib/services-data";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { Badge } from "@/components/common/Badge";
import { BundleUpsell } from "@/components/sections/BundleUpsell";
import { cn } from "@/lib/utils";

/* ── Icon lookup ─────────────────────────────────── */
const iconMap: Record<string, any> = { Palette, Briefcase, Monitor, Zap, Brain };

/* ── Dynamic metadata ────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.name} | Graphene Gangway`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | Graphene Gangway`,
      description: service.shortDescription,
    },
  };
}

/* ── Page ─────────────────────────────────────────── */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon];
  const crossSells = getCrossSellServices(service.id);

  return (
    <div className="min-h-screen">
      {/* ── Hero ──────────────────────────────────── */}
      <SectionWrapper className="pt-32 pb-20">
        <ScrollAnimation variant="fade-up">
          <div className="mx-auto max-w-3xl text-center">
            {Icon && (
              <Icon className="mx-auto mb-6 h-14 w-14 text-cyan-neon" />
            )}
            <h1 className="font-[family-name:var(--font-display)] text-5xl tracking-wider text-cyan-neon text-glow-cyan md:text-7xl">
              {service.name.toUpperCase()}
            </h1>
            <p className="mt-4 font-[family-name:var(--font-script)] text-xl text-cyan-dim">
              {service.tagline}
            </p>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ice-white/70">
              {service.shortDescription}
            </p>
            {service.turnaround && (
              <p className="mt-4 text-sm text-ice-white/40">
                Typical turnaround: {service.turnaround}
              </p>
            )}
          </div>
        </ScrollAnimation>
      </SectionWrapper>

      {/* ── Pricing Tiers ─────────────────────────── */}
      <SectionWrapper dark id="tiers">
        <ScrollAnimation variant="fade-up">
          <h2 className="mb-16 text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white">
            {service.tiers.length > 1 ? "CHOOSE YOUR TIER" : "WHAT'S INCLUDED"}
          </h2>
        </ScrollAnimation>

        <div
          className={cn(
            "mx-auto grid gap-8",
            service.tiers.length === 1
              ? "max-w-lg grid-cols-1"
              : service.tiers.length === 2
                ? "max-w-3xl grid-cols-1 md:grid-cols-2"
                : service.tiers.length === 3
                  ? "max-w-5xl grid-cols-1 md:grid-cols-3"
                  : "max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {service.tiers.map((tier, i) => {
            const isPopular = tier.badge === "popular";
            const isBestValue = tier.badge === "best-value";
            const hasBadge = !!tier.badge;

            return (
              <ScrollAnimation key={tier.name} variant="fade-up" delay={i * 0.1}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-xl border bg-dark-surface/60 p-8 transition-all duration-300",
                    isPopular
                      ? "border-cyan-neon/40 shadow-[0_0_30px_rgba(0,240,255,0.08)]"
                      : isBestValue
                        ? "border-brand-success/40"
                        : "border-dark-mid hover:border-dark-mid/80"
                  )}
                >
                  {/* Badge */}
                  {hasBadge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge
                        variant={isPopular ? "accent" : isBestValue ? "success" : "muted"}
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

                  {/* Tier name */}
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl tracking-wide text-ice-white">
                    {tier.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-4 mb-6">
                    <span className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-cyan-neon">
                      {tier.priceLabel}
                    </span>
                    {tier.period && (
                      <span className="ml-2 text-sm text-ice-white/40">
                        {tier.period === "monthly" ? "/month" : "one-time"}
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="mb-6 h-px w-full bg-dark-mid" />

                  {/* Features */}
                  <ul className="mb-8 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-neon" />
                        <span className="text-sm leading-relaxed text-ice-white/70">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Included free callout */}
                  {tier.includedFree && tier.includedFree.length > 0 && (
                    <div className="mb-6 rounded-lg bg-brand-success/5 px-4 py-3">
                      <p className="text-xs font-medium text-brand-success">
                        Included free: {tier.includedFree.join(", ")}
                      </p>
                    </div>
                  )}

                  {/* CTA button */}
                  <Link
                    href="/pricing"
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

      {/* ── Cross-sell ────────────────────────────── */}
      {crossSells.length > 0 && (
        <SectionWrapper>
          <ScrollAnimation variant="fade-up">
            <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white">
              LEVEL UP YOUR STACK
            </h2>
          </ScrollAnimation>

          <div className="mx-auto max-w-3xl space-y-6">
            {crossSells.map((cs, i) => (
              <ScrollAnimation key={cs.service.id} variant="fade-up" delay={i * 0.1}>
                <BundleUpsell
                  currentServiceId={service.id}
                  targetServiceName={cs.service.name}
                  targetServiceHref={`/services/${cs.service.slug}`}
                  message={cs.message}
                />
              </ScrollAnimation>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* ── Final CTA ────────────────────────────── */}
      <SectionWrapper dark className="text-center">
        <ScrollAnimation variant="fade-up">
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon text-glow-cyan">
            READY TO GET STARTED?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-ice-white/60">
            Take our free assessment and we&apos;ll recommend the best package
            for your goals.
          </p>
          <Link
            href="/assessment"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-8 py-4 font-[family-name:var(--font-display)] text-lg tracking-wider text-dark-deep transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(0,240,255,0.3)]"
          >
            START YOUR ASSESSMENT
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollAnimation>
      </SectionWrapper>
    </div>
  );
}
