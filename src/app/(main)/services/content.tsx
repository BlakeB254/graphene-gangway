"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlowDivider } from "@/components/animations/GlowDivider";
import { HexGrid } from "@/components/backgrounds/HexGrid";
import { SERVICES, LAUNCH_PACKAGES } from "@/lib/services";
import {
  Palette,
  Briefcase,
  Globe,
  Zap,
  Brain,
  ArrowRight,
  Sparkles,
  Package,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Briefcase,
  Globe,
  Zap,
  Brain,
};

export function ServicesHubContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HexGrid />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon/70 tracking-widest uppercase mb-4">
              Full-Service Digital Solutions
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-cyan-neon text-glow-cyan tracking-wider mb-6">
              OUR SERVICES
            </h1>
            <p className="text-lg text-ice-white/70 max-w-2xl mx-auto">
              From brand identity to AI-powered business intelligence &mdash;
              everything your business needs to launch, grow, and dominate.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Services Grid */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-4">
              WHAT WE BUILD
            </h2>
            <p className="text-ice-white/50 text-center max-w-xl mx-auto mb-16">
              Five core services designed to take your business from idea to
              market leader. Each one works alone or together.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const IconComponent = ICON_MAP[service.icon];
              return (
                <ScrollReveal key={service.id} delay={i * 0.1}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block h-full"
                  >
                    <div className="bg-dark-surface border border-dark-mid rounded-lg p-6 hover:border-cyan-neon/40 transition-all duration-300 corner-frame h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        {IconComponent && (
                          <IconComponent className="w-8 h-8 text-cyan-neon shrink-0" />
                        )}
                        <h3 className="font-[family-name:var(--font-display)] text-2xl text-ice-white group-hover:text-cyan-neon transition-colors">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-ice-white/50 text-sm leading-relaxed mb-4 flex-1">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-dark-mid">
                        <span className="font-[family-name:var(--font-display)] text-lg text-cyan-neon">
                          {service.priceLabel}
                        </span>
                        <span className="text-ice-white/40 group-hover:text-cyan-neon flex items-center gap-1 text-sm transition-colors">
                          Learn more{" "}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}

            {/* Launch Packages Card */}
            <ScrollReveal delay={SERVICES.length * 0.1}>
              <Link href="/packages/launch" className="group block h-full">
                <div className="bg-dark-surface border border-cyan-neon/20 rounded-lg p-6 hover:border-cyan-neon/40 transition-all duration-300 corner-frame h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-3 right-3 bg-cyan-neon/10 text-cyan-neon text-xs font-[family-name:var(--font-mono)] px-2 py-1 rounded">
                    SAVE UP TO 12.5%
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <Package className="w-8 h-8 text-cyan-neon shrink-0" />
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-ice-white group-hover:text-cyan-neon transition-colors">
                      Launch Packages
                    </h3>
                  </div>
                  <p className="text-ice-white/50 text-sm leading-relaxed mb-4 flex-1">
                    Bundle your website, automations, AI, and brand kit into a
                    single package and save. Includes our Performance Guarantee.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-dark-mid">
                    <span className="font-[family-name:var(--font-display)] text-lg text-cyan-neon">
                      From $13,500
                    </span>
                    <span className="text-ice-white/40 group-hover:text-cyan-neon flex items-center gap-1 text-sm transition-colors">
                      View packages{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* How It Works */}
      <section className="py-20 md:py-28 px-6 bg-dark-surface/50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              HOW IT WORKS
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Tell us about your business, goals, and vision. We listen first.",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "We design a tailored plan that fits your needs and budget.",
              },
              {
                step: "03",
                title: "Build",
                desc: "Our team brings it to life with modern tools and best practices.",
              },
              {
                step: "04",
                title: "Launch",
                desc: "We deploy, optimize, and support you through growth.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.15}>
                <div className="text-center">
                  <span className="font-[family-name:var(--font-display)] text-5xl text-cyan-neon/20">
                    {item.step}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-ice-white mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-ice-white/50 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Free Brand Kit Banner */}
      <section className="py-20 md:py-28 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto bg-dark-surface border border-cyan-neon/20 rounded-lg p-8 md:p-12 text-center corner-frame">
            <Sparkles className="w-10 h-10 text-cyan-neon mx-auto mb-4" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-ice-white mb-4">
              BRAND KIT INCLUDED FREE
            </h2>
            <p className="text-ice-white/60 mb-6 max-w-lg mx-auto">
              Every website, automations, or AI service comes with a
              professional Brand Kit at no extra cost. That&apos;s a $99 value
              &mdash; on us.
            </p>
            <Link
              href="/services/brand-kit"
              className="inline-flex items-center gap-2 text-cyan-neon hover:text-cyan-dim transition-colors font-[family-name:var(--font-display)] tracking-wider"
            >
              SEE WHAT&apos;S INCLUDED{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <GlowDivider />

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-cyan-neon text-glow-cyan mb-4">
            READY TO BUILD?
          </h2>
          <p className="text-ice-white/60 mb-10 max-w-md mx-auto">
            Not sure where to start? Take our quick assessment or book a free
            discovery call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-cyan-neon text-dark-deep font-[family-name:var(--font-display)] text-lg tracking-wider hover:bg-cyan-dim transition-colors duration-300"
            >
              GET STARTED
            </Link>
            <Link
              href="/contact?type=call"
              className="px-8 py-3 border border-cyan-neon text-cyan-neon font-[family-name:var(--font-display)] text-lg tracking-wider hover:bg-cyan-neon/10 transition-colors duration-300"
            >
              BOOK A CALL
            </Link>
            <Link
              href="/assessment"
              className="px-8 py-3 text-ice-white/60 hover:text-cyan-neon font-[family-name:var(--font-display)] text-lg tracking-wider transition-colors duration-300"
            >
              TAKE ASSESSMENT
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
