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
  Brain,
  ArrowRight,
  Package,
  Database,
  Smartphone,
  Shield,
  RefreshCw,
  Plug,
  Bot,
  Mail,
  MessageCircle,
  Phone,
  Globe,
  BarChart3,
  Users,
  Lightbulb,
  PenTool,
  BookOpen,
  Headphones,
  Briefcase,
  Calendar,
  FileText,
  Zap,
  Lock,
  Eye,
  Server,
  Network,
  MessageSquare,
  Search,
  Settings,
  Rocket,
} from "lucide-react";

const service = getServiceBySlug("ai-knowledge-base")!;

const TIERS = service.tiers!;

const TIER_ICONS = [Database, Plug, Bot];

const INTEGRATIONS = [
  { name: "Stripe", desc: "Payment data" },
  { name: "QuickBooks", desc: "Accounting" },
  { name: "Shopify", desc: "E-commerce" },
  { name: "Google Analytics", desc: "Web traffic" },
  { name: "HubSpot", desc: "CRM" },
  { name: "Slack", desc: "Team comms" },
  { name: "Gmail / Outlook", desc: "Email" },
  { name: "Google Sheets", desc: "Spreadsheets" },
  { name: "Notion", desc: "Documentation" },
  { name: "Calendly", desc: "Scheduling" },
];

const USE_CASES = [
  { icon: Calendar, title: "Meeting Prep", desc: "\"Brief me on the Johnson account — recent orders, open tickets, and last quarter's revenue.\"" },
  { icon: PenTool, title: "Content Generation", desc: "\"Draft a blog post about our Q4 results using actual metrics from our dashboard.\"" },
  { icon: Users, title: "Team Training", desc: "\"Explain our refund policy, including the exceptions we made for enterprise clients.\"" },
  { icon: Headphones, title: "Customer Service", desc: "\"What's the status of order #4521? When did it ship and what was the tracking number?\"" },
  { icon: Lightbulb, title: "Decision Support", desc: "\"Compare our margins on Product A vs Product B over the last 6 months.\"" },
  { icon: FileText, title: "Report Generation", desc: "\"Create a weekly summary of sales, top products, and inventory alerts.\"" },
];

const CONVERSATION_EXAMPLES = [
  { role: "user", text: "What were our top 3 products last month by revenue?" },
  { role: "ai", text: "Based on your Shopify data, your top 3 products in February were:\n1. Carbon Fiber Case — $12,400 (142 units)\n2. Graphene Shield Pro — $8,900 (67 units)\n3. Nano Charger Kit — $6,200 (310 units)\nTotal revenue was up 18% from January." },
  { role: "user", text: "Draft an email to the team highlighting these wins." },
  { role: "ai", text: "Here's a draft based on your communication style and the data:\n\nSubject: February Sales Highlights — 18% Growth!\n\nTeam, February was a strong month..." },
];

const PRIVACY_POINTS = [
  { icon: Lock, title: "Data Stripped", desc: "Sensitive PII is identified and removed before training. SSNs, passwords, and credentials never enter the model." },
  { icon: Smartphone, title: "Device Deployment", desc: "Your AI runs on your device — not in the cloud. Your data stays with you." },
  { icon: Eye, title: "Transparency", desc: "You see exactly what data goes into training. Nothing hidden, nothing shared." },
  { icon: Shield, title: "No Third-Party Access", desc: "Your model is yours alone. We don't use your data to train other models or share it with anyone." },
];

const PROCESS_KB = [
  { icon: MessageSquare, step: "01", title: "Data Collection", desc: "You share documents, files, and knowledge. We organize and prepare it." },
  { icon: Database, step: "02", title: "Knowledge Graph", desc: "We build a structured knowledge graph from your business data." },
  { icon: Brain, step: "03", title: "Model Training", desc: "Custom Qwen model fine-tuned on your specific business knowledge." },
  { icon: Smartphone, step: "04", title: "Deployment", desc: "Installed on your device with the self-expansion portal." },
];

const PROCESS_CONNECTED = [
  { icon: Plug, step: "05", title: "Integration Setup", desc: "Connect your business tools — Stripe, QuickBooks, Shopify, etc." },
  { icon: RefreshCw, step: "06", title: "Auto-Sync", desc: "Scheduled retraining keeps your AI current with live business data." },
];

const PROCESS_AGENT = [
  { icon: Settings, step: "07", title: "Agent Harness", desc: "Custom workflow automation with triggers, actions, and decision logic." },
  { icon: Rocket, step: "08", title: "Multi-Channel", desc: "Access via chat, voice, SMS, website widget, and API." },
];

const FAQS = [
  {
    q: "What kind of data can I feed into the Knowledge Base?",
    a: "Documents (PDF, Word, text), spreadsheets, presentations, emails, chat logs, SOPs, product catalogs, FAQs, meeting notes — essentially any text-based business knowledge. The Connected KB tier also pulls live data from integrated platforms.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. We strip sensitive PII before training, deploy the model to your device (not the cloud), and never share your data with third parties. Your model is exclusively yours.",
  },
  {
    q: "What model do you use?",
    a: "We fine-tune Qwen models — open-source, high-performance AI that runs efficiently on consumer hardware. This means no API costs and no dependency on OpenAI, Google, or any external provider.",
  },
  {
    q: "Can the AI take actions or just answer questions?",
    a: "The Knowledge Base and Connected KB tiers are query-only — they answer questions based on your data. The Business Agent tier can take actions: send emails, create tasks, generate reports, and trigger workflows.",
  },
  {
    q: "How does conversation-intent updating work?",
    a: "In the Business Agent tier, when you correct the AI or provide new information during a conversation, it learns from that interaction in real-time. The more you use it, the smarter it gets.",
  },
  {
    q: "What devices can I run this on?",
    a: "Any modern smartphone or laptop with sufficient storage. We optimize the model size for your hardware. Typical deployment: 4-8GB model file, runs on devices with 8GB+ RAM.",
  },
  {
    q: "How do integrations work?",
    a: "Connected KB and Business Agent tiers use secure API connections to your business tools. We set up OAuth connections — you authorize access, and the AI syncs data on a schedule you control (weekly, bi-weekly, or monthly).",
  },
  {
    q: "What's the difference between Connected KB and Business Agent?",
    a: "Connected KB syncs data and answers questions. Business Agent does everything Connected KB does, plus takes actions — sending emails, creating tasks, generating reports, and automating workflows across your connected tools.",
  },
  {
    q: "Can I add more integrations later?",
    a: "Yes. Connected KB includes up to 5 integrations, Business Agent includes 10. Additional integrations can be added for a setup fee.",
  },
  {
    q: "Is there a subscription for Tier 1?",
    a: "No. The base Knowledge Base is a one-time $1,500 fee. You own it forever with no monthly costs. Only Connected KB ($200/mo) and Business Agent ($500/mo) have ongoing subscriptions for live data sync and maintenance.",
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
          open ? "max-h-[500px] pb-5 px-5" : "max-h-0"
        )}
      >
        <p className="text-ice-white/60 text-sm leading-relaxed whitespace-pre-line">{a}</p>
      </div>
    </div>
  );
}

export function AIKnowledgeBaseContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HexGrid />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon/70 tracking-widest uppercase mb-4">
              Personal AI &amp; Business Intelligence
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl text-cyan-neon text-glow-cyan tracking-wider mb-6">
              A PERSONAL AI THAT ACTUALLY KNOWS YOUR BUSINESS
            </h1>
            <p className="text-lg md:text-xl text-ice-white/70 max-w-2xl mx-auto mb-8">
              {service.tagline}
            </p>
            <p className="font-[family-name:var(--font-display)] text-2xl text-ice-white/60">
              From $1,500
            </p>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* 3-Tier Comparison */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-4">
              CHOOSE YOUR TIER
            </h2>
            <p className="text-ice-white/50 text-center max-w-xl mx-auto mb-16">
              From a simple knowledge base to a full autonomous business agent.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TIERS.map((tier, i) => {
              const TierIcon = TIER_ICONS[i];
              return (
                <ScrollReveal key={tier.name} delay={i * 0.1}>
                  <div
                    className={cn(
                      "bg-dark-surface border rounded-lg p-8 h-full flex flex-col relative",
                      tier.popular
                        ? "border-cyan-neon/40"
                        : "border-dark-mid hover:border-cyan-neon/30 transition-colors"
                    )}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-neon text-dark-deep text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </div>
                    )}
                    <TierIcon className="w-10 h-10 text-cyan-neon mb-4" />
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-ice-white mb-2">
                      {tier.name.toUpperCase()}
                    </h3>
                    <p className="text-ice-white/50 text-sm mb-4">{tier.description}</p>
                    <p className="font-[family-name:var(--font-display)] text-3xl text-cyan-neon mb-6">
                      {tier.priceLabel}
                    </p>
                    <ul className="space-y-3 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                          <span className="text-ice-white/70 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/contact?service=ai-knowledge-base&tier=${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className={cn(
                        "mt-8 block text-center px-6 py-3 font-[family-name:var(--font-display)] tracking-wider transition-colors",
                        tier.popular
                          ? "bg-cyan-neon text-dark-deep hover:bg-cyan-dim"
                          : "border border-cyan-neon text-cyan-neon hover:bg-cyan-neon/10"
                      )}
                    >
                      GET STARTED
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Conversation Example */}
      <section className="py-20 md:py-28 px-6 bg-dark-surface/50">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-4">
              SEE IT IN ACTION
            </h2>
            <p className="text-ice-white/50 text-center max-w-xl mx-auto mb-16">
              Your AI knows your business inside out. Here&apos;s what a real conversation looks like.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-dark-deep border border-dark-mid rounded-lg p-6 space-y-4">
              {CONVERSATION_EXAMPLES.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex gap-3",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-lg p-4",
                      msg.role === "user"
                        ? "bg-cyan-neon/10 border border-cyan-neon/20"
                        : "bg-dark-surface border border-dark-mid"
                    )}
                  >
                    <p className="text-xs font-[family-name:var(--font-mono)] text-cyan-neon/50 mb-2">
                      {msg.role === "user" ? "YOU" : "YOUR AI"}
                    </p>
                    <p className="text-ice-white/80 text-sm whitespace-pre-line leading-relaxed">
                      {msg.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Integrations */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-4">
              INTEGRATIONS
            </h2>
            <p className="text-ice-white/50 text-center max-w-xl mx-auto mb-4">
              Connected KB and Business Agent tiers sync with your favorite tools.
            </p>
            <p className="text-cyan-neon/50 text-center text-sm font-[family-name:var(--font-mono)] mb-16">
              Available with Connected KB &amp; Business Agent tiers
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {INTEGRATIONS.map((integration, i) => (
              <ScrollReveal key={integration.name} delay={i * 0.05}>
                <div className="bg-dark-surface border border-dark-mid rounded-lg p-4 text-center hover:border-cyan-neon/30 transition-colors">
                  <Plug className="w-6 h-6 text-cyan-neon mx-auto mb-2" />
                  <p className="text-ice-white text-sm font-medium">{integration.name}</p>
                  <p className="text-ice-white/40 text-xs">{integration.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Use Cases */}
      <section className="py-20 md:py-28 px-6 bg-dark-surface/50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-4">
              USE CASES
            </h2>
            <p className="text-ice-white/50 text-center max-w-xl mx-auto mb-16">
              Your AI assistant handles the tasks that eat up your day.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="bg-dark-surface border border-dark-mid rounded-lg p-6 hover:border-cyan-neon/30 transition-colors h-full">
                  <item.icon className="w-8 h-8 text-cyan-neon mb-3" />
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-ice-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-ice-white/50 text-sm italic leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Privacy & Security */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <Shield className="w-12 h-12 text-cyan-neon mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-4">
              PRIVACY &amp; SECURITY
            </h2>
            <p className="text-ice-white/50 text-center max-w-xl mx-auto mb-16">
              Your business data is sensitive. We treat it that way.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PRIVACY_POINTS.map((point, i) => (
              <ScrollReveal key={point.title} delay={i * 0.1}>
                <div className="flex gap-4 bg-dark-surface border border-dark-mid rounded-lg p-5 hover:border-cyan-neon/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-cyan-neon/10 flex items-center justify-center shrink-0">
                    <point.icon className="w-5 h-5 text-cyan-neon" />
                  </div>
                  <div>
                    <h3 className="text-ice-white font-medium mb-1">{point.title}</h3>
                    <p className="text-ice-white/50 text-sm">{point.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Process Timeline */}
      <section className="py-20 md:py-28 px-6 bg-dark-surface/50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-ice-white text-center mb-16">
              THE PROCESS
            </h2>
          </ScrollReveal>

          {/* KB Steps — All tiers */}
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon/60 tracking-wider uppercase mb-8 text-center">
              All Tiers
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {PROCESS_KB.map((item, i) => (
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

          {/* Connected KB additions */}
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon/60 tracking-wider uppercase mb-8 text-center">
              + Connected KB &amp; Business Agent
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
            {PROCESS_CONNECTED.map((item, i) => (
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

          {/* Business Agent additions */}
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon/60 tracking-wider uppercase mb-8 text-center">
              + Business Agent Only
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {PROCESS_AGENT.map((item, i) => (
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
            READY FOR YOUR OWN AI?
          </h2>
          <p className="text-ice-white/60 mb-10 max-w-md mx-auto">
            Get a personal AI that knows every detail of your business &mdash; deployed to your device.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?service=ai-knowledge-base"
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
              Bundle your AI Knowledge Base with a custom website, 6 months of automations,
              Brand Kit, and Biz Starter Kit. Save up to 12.5% plus our Performance Guarantee.
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
