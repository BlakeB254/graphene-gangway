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
  Briefcase,
  FileText,
  Target,
  Users,
  LayoutGrid,
  TrendingUp,
  Presentation,
  Palette,
  ArrowRight,
  Sparkles,
  Package,
  MessageSquare,
  Search,
  PenTool,
  Eye,
  Send,
  Building2,
  Landmark,
  BadgeCheck,
} from "lucide-react";

const service = getServiceBySlug("biz-starter-kit")!;

const INCLUDED_ITEMS = [
  { icon: FileText, label: "Professional business plan", desc: "Bank-ready format covering executive summary, operations, marketing, and financial strategy" },
  { icon: Target, label: "Target market research", desc: "Demographics, psychographics, market size, and customer personas for your specific niche" },
  { icon: Users, label: "Competitive analysis", desc: "Breakdown of 3-5 direct competitors with SWOT analysis and your competitive advantages" },
  { icon: LayoutGrid, label: "Business model canvas", desc: "Visual one-page framework mapping revenue streams, partnerships, and cost structure" },
  { icon: TrendingUp, label: "Financial projections", desc: "3-year revenue forecast, break-even analysis, and startup cost breakdown" },
  { icon: Presentation, label: "Pitch deck framework", desc: "12-slide template structure for investor or partner presentations" },
  { icon: Palette, label: "Brand Kit included free", desc: "Logo, colors, typography, social assets, and guidelines — a $99 value at no extra cost" },
];

const BANKS_WANT = [
  { icon: FileText, label: "Executive Summary", desc: "Clear vision, mission, and value proposition" },
  { icon: TrendingUp, label: "Financial Projections", desc: "Realistic 3-year revenue and expense forecasts" },
  { icon: Target, label: "Market Analysis", desc: "Proof that demand exists for your product or service" },
  { icon: Building2, label: "Operations Plan", desc: "How you'll actually deliver on your promises" },
  { icon: Landmark, label: "Funding Request", desc: "How much, what for, and how you'll pay it back" },
  { icon: BadgeCheck, label: "Management Team", desc: "Who's running this — and why they're qualified" },
];

const PROCESS_STEPS = [
  { icon: MessageSquare, step: "01", title: "Kickoff", desc: "30-minute call to understand your vision, business idea, and goals." },
  { icon: Search, step: "02", title: "Research", desc: "Deep-dive market research, competitive landscape, and industry analysis." },
  { icon: PenTool, step: "03", title: "Drafting", desc: "We build your business plan, financial projections, and pitch deck." },
  { icon: Eye, step: "04", title: "Review", desc: "You review everything. We refine based on your feedback." },
  { icon: Send, step: "05", title: "Delivery", desc: "Final documents delivered in PDF and editable formats, bank-ready." },
];

const FAQS = [
  {
    q: "Is this plan actually accepted by banks?",
    a: "Yes. Our business plans follow SBA-recommended formatting and include all the sections that banks and lenders want to see — executive summary, market analysis, financial projections, operations plan, and more.",
  },
  {
    q: "What if I don't have a business idea yet?",
    a: "This service is designed for people who already have a concept. If you're still in the brainstorming phase, book a discovery call and we can help you evaluate your options before committing.",
  },
  {
    q: "How detailed are the financial projections?",
    a: "We provide 3-year projections including revenue forecasts, expense breakdowns, break-even analysis, and startup cost estimates. They're realistic, not inflated — banks see through fluff.",
  },
  {
    q: "Can I use the pitch deck to raise investment?",
    a: "The pitch deck framework is designed for multiple audiences — bank lenders, angel investors, or potential partners. You'll get a 12-slide structure with guidance on what goes in each slide.",
  },
  {
    q: "How long does it take?",
    a: "Typically 2-3 weeks from kickoff to final delivery. The timeline depends on how quickly you can provide initial information and feedback on drafts.",
  },
  {
    q: "Is the Brand Kit really included free?",
    a: "Yes. Every Biz Starter Kit includes a full Brand Kit at no extra cost — logo, colors, typography, social media assets, and brand guidelines. That's a $99 value included free.",
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

export function BizStarterKitContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HexGrid />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon/70 tracking-widest uppercase mb-4">
              Business Planning &amp; Strategy
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl text-cyan-neon text-glow-cyan tracking-wider mb-6">
              TURN YOUR BUSINESS IDEA INTO A BANKABLE PLAN
            </h1>
            <p className="text-lg md:text-xl text-ice-white/70 max-w-2xl mx-auto mb-8">
              {service.tagline}
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="font-[family-name:var(--font-display)] text-5xl text-cyan-neon">
                $199
              </span>
            </div>
            <p className="text-ice-white/40 text-sm mt-3">
              {service.turnaround} turnaround &bull; Brand Kit included free
            </p>
          </ScrollReveal>
        </div>
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
              Everything a bank, investor, or partner needs to take you seriously.
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

      {/* Banks Want to See Section */}
      <section className="py-20 md:py-28 px-6 bg-dark-surface/50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-4">
              WHAT BANKS WANT TO SEE
            </h2>
            <p className="text-ice-white/50 text-center max-w-xl mx-auto mb-16">
              Most loan applications fail because of incomplete or unstructured plans.
              We cover every box banks need checked.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BANKS_WANT.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <div className="bg-dark-surface border border-dark-mid rounded-lg p-6 text-center hover:border-cyan-neon/30 transition-colors">
                  <item.icon className="w-8 h-8 text-cyan-neon mx-auto mb-3" />
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-ice-white mb-2">
                    {item.label}
                  </h3>
                  <p className="text-ice-white/50 text-sm">{item.desc}</p>
                  <Check className="w-5 h-5 text-success mx-auto mt-3" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <p className="text-center text-cyan-neon/70 font-[family-name:var(--font-mono)] text-sm mt-12">
              All covered in your Biz Starter Kit &mdash; formatted to SBA standards.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Market Comparison */}
      <section className="py-20 md:py-28 px-6">
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
                  $<Counter value={199} />
                </p>
                <p className="text-ice-white/40 text-xs">Full plan + Brand Kit included</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-dark-surface border border-dark-mid rounded-lg p-8 text-center opacity-60">
                <p className="text-ice-white/50 text-sm mb-2">Business Consultant</p>
                <p className="font-[family-name:var(--font-display)] text-4xl text-ice-white/50 mb-2">
                  $1,000+
                </p>
                <p className="text-ice-white/30 text-xs">Plan only, no brand assets</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-dark-surface border border-dark-mid rounded-lg p-8 text-center opacity-60">
                <p className="text-ice-white/50 text-sm mb-2">SCORE/SBA Workshop</p>
                <p className="font-[family-name:var(--font-display)] text-4xl text-ice-white/50 mb-2">
                  Free
                </p>
                <p className="text-ice-white/30 text-xs">DIY template, no custom research</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Process */}
      <section className="py-20 md:py-28 px-6 bg-dark-surface/50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              THE PROCESS
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
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
      <section className="py-20 md:py-28 px-6">
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
            READY TO GET FUNDED?
          </h2>
          <p className="text-ice-white/60 mb-10 max-w-md mx-auto">
            Turn your idea into a plan that banks and investors take seriously.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?service=biz-starter-kit"
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
              PLAN DONE? TIME TO BUILD.
            </h2>
            <p className="text-ice-white/60 mb-6 max-w-lg mx-auto">
              Pair your Biz Starter Kit with a custom website and save with a Launch Package.
              Includes automations, AI, and our Performance Guarantee.
            </p>
            <Link
              href="/services/web-development"
              className="inline-flex items-center gap-2 text-cyan-neon hover:text-cyan-dim transition-colors font-[family-name:var(--font-display)] tracking-wider"
            >
              SEE WEB DEVELOPMENT <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
