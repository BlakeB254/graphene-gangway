"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlowDivider } from "@/components/animations/GlowDivider";
import { HexGrid } from "@/components/backgrounds/HexGrid";
import { Code, Monitor, Wifi, Shield, Palette, Database } from "lucide-react";

const SERVICES = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites, web applications, and e-commerce platforms built with modern technologies. From landing pages to full-stack solutions.",
  },
  {
    icon: Monitor,
    title: "IT Support",
    description:
      "Hardware setup, troubleshooting, network configuration, and ongoing tech support for small businesses and community organizations.",
  },
  {
    icon: Palette,
    title: "Digital Design",
    description:
      "Brand identity, logo design, social media graphics, and marketing materials that make your business stand out.",
  },
  {
    icon: Wifi,
    title: "Network Setup",
    description:
      "Wi-Fi installation, network infrastructure, and connectivity solutions for offices, community centers, and events.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Security assessments, data protection consulting, and digital safety training for organizations of all sizes.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Database management, reporting dashboards, and data-driven insights to help you make smarter decisions.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and challenges.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We design a solution that fits your needs and budget.",
  },
  {
    step: "03",
    title: "Build",
    description: "Our team brings the plan to life with modern tools.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy your project and stay on for ongoing support.",
  },
];

export function ServicesContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HexGrid />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-script)] text-xl text-cyan-dim mb-4">
              Built by the community, for the community.
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-cyan-neon text-glow-cyan tracking-wider mb-6">
              TECH SERVICES
            </h1>
            <p className="text-lg text-ice-white/70 max-w-2xl mx-auto">
              Professional technology solutions at community prices. We help
              small businesses and organizations in North Lawndale and beyond
              build their digital presence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              WHAT WE DO
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="bg-dark-surface border border-dark-mid rounded-lg p-6 hover:border-cyan-neon/30 transition-all duration-300 corner-frame h-full">
                  <service.icon className="w-10 h-10 text-cyan-neon mb-4" />
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-ice-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-ice-white/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Process */}
      <section className="py-24 px-6 bg-dark-surface/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              OUR PROCESS
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.15}>
                <div className="text-center">
                  <span className="font-[family-name:var(--font-display)] text-5xl text-cyan-neon/20">
                    {step.step}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-ice-white mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ice-white/50 text-sm">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-cyan-neon text-glow-cyan mb-4">
            LET&apos;S BUILD SOMETHING
          </h2>
          <p className="text-ice-white/60 mb-8 max-w-md mx-auto">
            Tell us about your project. We&apos;ll put together a plan that
            works for you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-cyan-neon text-dark-deep font-[family-name:var(--font-display)] text-lg tracking-wider hover:bg-cyan-dim transition-colors duration-300"
          >
            GET A QUOTE
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
