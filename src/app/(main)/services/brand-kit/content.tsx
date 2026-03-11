"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlowDivider } from "@/components/animations/GlowDivider";
import { HexGrid } from "@/components/backgrounds/HexGrid";
import { Counter } from "@/components/animations/Counter";
import { getServiceBySlug } from "@/lib/services";
import { cn } from "@/lib/utils";
import {
  Check,
  ChevronDown,
  Palette,
  FileImage,
  Droplets,
  Type,
  Smartphone,
  BookOpen,
  FolderArchive,
  ArrowRight,
  Sparkles,
  Package,
  Clock,
  MessageSquare,
  PenTool,
  Send,
} from "lucide-react";

const service = getServiceBySlug("brand-kit")!;

const INCLUDED_ITEMS = [
  { icon: Palette, label: "Primary logo + variations", desc: "Wordmark, icon, stacked, horizontal — every layout you need" },
  { icon: FileImage, label: "Icon set (5 icons)", desc: "Custom icons that match your brand personality" },
  { icon: Droplets, label: "Color palette (HEX/RGB/CMYK)", desc: "Print and digital ready with accessibility contrast ratios" },
  { icon: Type, label: "Typography selection", desc: "Primary and secondary fonts with usage guidelines" },
  { icon: Smartphone, label: "Social media backgrounds", desc: "Sized for every major platform — Instagram, Facebook, X, LinkedIn, YouTube" },
  { icon: BookOpen, label: "Brand guidelines document", desc: "Rules for consistent use across all touchpoints" },
  { icon: FolderArchive, label: "Full file package", desc: "PNG, SVG, PDF, and original source files" },
];

const PROCESS_STEPS = [
  { icon: MessageSquare, step: "01", title: "Brief", desc: "We learn about your business, audience, and aesthetic preferences through a guided questionnaire." },
  { icon: PenTool, step: "02", title: "Design", desc: "Our team creates your full brand identity with multiple concepts to choose from." },
  { icon: Palette, step: "03", title: "Revisions", desc: "Up to 2 rounds of revisions to dial in every detail." },
  { icon: Send, step: "04", title: "Delivery", desc: "Final files delivered in all formats, ready for web, print, and social." },
];

const FAQS = [
  {
    q: "What if I already have a logo?",
    a: "No problem. We can work with your existing logo and build the rest of the brand kit around it — colors, typography, social assets, and guidelines.",
  },
  {
    q: "How many revision rounds do I get?",
    a: "Two rounds of revisions are included. Most clients are happy after the first round, but we want to make sure everything is dialed in.",
  },
  {
    q: "What file formats will I receive?",
    a: "PNG (transparent + white background), SVG (scalable vector), PDF (print-ready), and the original source file so you can edit anything later.",
  },
  {
    q: "Can I use this for print materials too?",
    a: "Absolutely. We deliver CMYK color values and high-resolution files specifically for print. Business cards, flyers, signage — you're covered.",
  },
  {
    q: "How long does the process take?",
    a: "Typically 5-10 business days from kickoff to final delivery, depending on revision turnaround time.",
  },
  {
    q: "Is it really free with other services?",
    a: "Yes. When you purchase any website, automations, or AI knowledge base service, your Brand Kit is included at no additional cost. That's a $99 value — on us.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-dark-mid rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-surface/50 transition-colors"
      >
        <span className="text-ice-white font-medium pr-4">{q}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-cyan-neon shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 pb-5 px-5" : "max-h-0"
        )}
      >
        <p className="text-ice-white/60 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export function BrandKitContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HexGrid />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon/70 tracking-widest uppercase mb-4">
              Professional Brand Identity
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-cyan-neon text-glow-cyan tracking-wider mb-6">
              BRAND KIT
            </h1>
            <p className="text-lg md:text-xl text-ice-white/70 max-w-2xl mx-auto mb-8">
              {service.tagline}
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="font-[family-name:var(--font-display)] text-5xl text-cyan-neon">
                $99
              </span>
            </div>
            <p className="text-ice-white/40 text-sm mt-3">
              {service.turnaround} turnaround
            </p>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Free Badge */}
      <section className="py-12 px-6">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto bg-cyan-neon/5 border border-cyan-neon/20 rounded-lg p-6 text-center">
            <Sparkles className="w-8 h-8 text-cyan-neon mx-auto mb-3" />
            <p className="font-[family-name:var(--font-display)] text-xl text-cyan-neon tracking-wider mb-1">
              INCLUDED FREE
            </p>
            <p className="text-ice-white/60 text-sm">
              with any website, automations, or AI service
            </p>
          </div>
        </ScrollReveal>
      </section>

      <GlowDivider />

      {/* What's Included */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-4">
              WHAT&apos;S INCLUDED
            </h2>
            <p className="text-ice-white/50 text-center max-w-xl mx-auto mb-16">
              Everything you need to look professional across every platform and touchpoint.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INCLUDED_ITEMS.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <div className="flex gap-4 bg-dark-surface border border-dark-mid rounded-lg p-5 hover:border-cyan-neon/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-cyan-neon/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-cyan-neon" />
                  </div>
                  <div>
                    <h3 className="text-ice-white font-medium mb-1">{item.label}</h3>
                    <p className="text-ice-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Market Comparison */}
      <section className="py-20 md:py-28 px-6 bg-dark-surface/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              HOW WE COMPARE
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-dark-surface border border-cyan-neon/40 rounded-lg p-8 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-neon text-dark-deep text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </div>
                <p className="text-ice-white/50 text-sm mb-2">Graphene Gangway</p>
                <p className="font-[family-name:var(--font-display)] text-4xl text-cyan-neon mb-2">
                  $<Counter value={99} />
                </p>
                <p className="text-ice-white/40 text-xs">Full brand kit + source files</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-dark-surface border border-dark-mid rounded-lg p-8 text-center opacity-60">
                <p className="text-ice-white/50 text-sm mb-2">Freelance Designer</p>
                <p className="font-[family-name:var(--font-display)] text-4xl text-ice-white/50 mb-2">
                  $500+
                </p>
                <p className="text-ice-white/30 text-xs">Logo only, limited revisions</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-dark-surface border border-dark-mid rounded-lg p-8 text-center opacity-60">
                <p className="text-ice-white/50 text-sm mb-2">Agency</p>
                <p className="font-[family-name:var(--font-display)] text-4xl text-ice-white/50 mb-2">
                  $2,000+
                </p>
                <p className="text-ice-white/30 text-xs">Full brand package, 4-6 week timeline</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Process */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              THE PROCESS
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.12}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-cyan-neon/10 border border-cyan-neon/30 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-cyan-neon" />
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon/50">
                    {item.step}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-ice-white mt-1 mb-2">
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

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 bg-dark-surface/50">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              QUESTIONS & ANSWERS
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <FAQItem q={faq.q} a={faq.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Triple CTA */}
      <section className="py-20 md:py-28 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-cyan-neon text-glow-cyan mb-4">
            READY TO LOOK THE PART?
          </h2>
          <p className="text-ice-white/60 mb-10 max-w-md mx-auto">
            Get a professional brand identity in as little as 5 business days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?service=brand-kit"
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

      <GlowDivider />

      {/* Cross-Sell */}
      <section className="py-20 md:py-28 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto bg-dark-surface border border-dark-mid rounded-lg p-8 md:p-12 text-center corner-frame">
            <Package className="w-10 h-10 text-cyan-neon mx-auto mb-4" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-ice-white mb-4">
              SAVE MORE WITH A LAUNCH PACKAGE
            </h2>
            <p className="text-ice-white/60 mb-6 max-w-lg mx-auto">
              Bundle your brand kit with a website, automations, and AI — and save up to 12.5%.
              Includes our Performance Guarantee.
            </p>
            <Link
              href="/packages/launch"
              className="inline-flex items-center gap-2 text-cyan-neon hover:text-cyan-dim transition-colors font-[family-name:var(--font-display)] tracking-wider"
            >
              VIEW LAUNCH PACKAGES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
