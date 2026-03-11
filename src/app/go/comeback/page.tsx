"use client";

import { LandingHero } from "@/components/sections/LandingHero";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  Clock,
  Shield,
  Star,
  ArrowRight,
  Check,
  Gift,
  HelpCircle,
  Lock,
  Headphones,
} from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "Saved", label: "Your Spot" },
  { value: "Limited", label: "Time Offer" },
  { value: "100%", label: "Risk-Free" },
  { value: "6 mo", label: "Free Support" },
];

const REASONS_TO_COME_BACK = [
  {
    icon: Lock,
    title: "Your Spot Is Reserved",
    description: "We've held your place. Pricing and availability won't last forever, but right now everything is exactly where you left it.",
  },
  {
    icon: Shield,
    title: "No Risk",
    description: "Every project comes with 6 months of support. If something isn't right, we fix it. No fine print.",
  },
  {
    icon: Gift,
    title: "Promotional Pricing",
    description: "Current rates are introductory. When they go up, they go up for everyone — but not for you if you lock in now.",
  },
  {
    icon: Headphones,
    title: "Personal Support",
    description: "You're not a ticket number. Every client gets direct access to our team for the full 6-month support period.",
  },
];

const FAQS = [
  {
    q: "I'm not sure if this is the right time.",
    a: "There's never a perfect time. But the longer you wait, the longer your competitors have a head start. We handle the heavy lifting — you just show up with your ideas.",
  },
  {
    q: "What if I can't afford the full amount right now?",
    a: "We offer payment plans on all packages. Put down a deposit and pay the rest monthly. No interest, no hidden fees.",
  },
  {
    q: "How do I know this will actually work for my business?",
    a: "Book a free call and we'll assess your situation honestly. If we don't think we can deliver results, we'll tell you. Our Performance Guarantee backs that up with real stakes.",
  },
  {
    q: "I've been burned by agencies before.",
    a: "We get it. That's why you own everything we build — code, design, brand assets. No lock-in, no monthly platform fees, no vendor dependency. If you ever want to walk away, you take everything with you.",
  },
  {
    q: "Can I start with something small?",
    a: "Absolutely. The Brand Kit ($99) or Biz Starter Kit ($199) are perfect entry points. Scale up when you're ready.",
  },
];

const SERVICES_SUMMARY = [
  { name: "Brand Kit", price: "$99", note: "Logo, colors, social assets" },
  { name: "Biz Starter Kit", price: "$199", note: "Business plan, research, projections" },
  { name: "Portfolio Website", price: "$1,500", note: "Custom design, admin panel" },
  { name: "E-Commerce Site", price: "$2,500", note: "Full store with cart & payments" },
  { name: "Brand Automations", price: "From $1,200/mo", note: "Content across all channels" },
  { name: "AI Knowledge Base", price: "From $1,500", note: "Your own AI, on your device" },
];

export default function ComebackLandingPage() {
  return (
    <>
      {/* 1. HERO */}
      <LandingHero
        headline="We Saved Your Spot"
        subheadline="You were looking at something earlier. Good news — your spot is still available and current promotional pricing is still active. But not for long."
        primaryCTA={{ label: "Complete Your Order", href: "/contact?action=complete" }}
        secondaryCTA={{ label: "Book a Call", href: "/contact" }}
        badge="WELCOME BACK"
      />

      {/* 2. SOCIAL PROOF STRIP */}
      <section className="border-y border-dark-mid/30 bg-dark-surface/50 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {STATS.map((stat) => (
            <ScrollReveal key={stat.label} variant="fadeUp">
              <div className="text-center">
                <p className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-cyan-neon">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-ice-white/50">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* URGENCY BANNER */}
      <section className="py-8">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 rounded-lg border border-warning/30 bg-warning/10 px-6 py-4">
              <Clock className="h-5 w-5 text-warning" />
              <p className="text-sm font-medium text-warning">
                Promotional pricing ends soon. Lock in your rate before it increases.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. REASONS TO COME BACK */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Why Now Is the Right Time
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {REASONS_TO_COME_BACK.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-neon/10">
                    <item.icon className="h-6 w-6 text-cyan-neon" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ice-white/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK SERVICE OVERVIEW */}
      <section className="border-t border-dark-mid/30 bg-dark-surface/30 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Pick Up Where You Left Off
            </h2>
          </ScrollReveal>

          <div className="mt-12 space-y-3">
            {SERVICES_SUMMARY.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.06}>
                <Link
                  href={`/contact?service=${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex items-center justify-between rounded-lg border border-dark-mid bg-dark-surface p-4 transition-all hover:border-cyan-neon/30"
                >
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-cyan-neon" />
                    <div>
                      <span className="font-[family-name:var(--font-display)] tracking-wide text-ice-white group-hover:text-cyan-neon">
                        {service.name}
                      </span>
                      <p className="text-xs text-ice-white/40">{service.note}</p>
                    </div>
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-sm text-cyan-neon">
                    {service.price}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CASE STUDY SNIPPET */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="corner-frame rounded-xl border border-dark-mid bg-dark-surface p-8">
              <div className="flex items-center gap-2 text-warning">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed text-ice-white/80">
                &ldquo;I almost didn&apos;t pull the trigger. Then I realized I&apos;d been &lsquo;thinking about it&rsquo; for 6 months while my competitors were already online. Best decision I made was just starting.&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-[family-name:var(--font-display)] tracking-wide text-ice-white">
                  Client Name
                </p>
                <p className="text-sm text-ice-white/40">
                  Founder, Consulting Firm — Chicago, IL
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. FAQ — ADDRESSING HESITATIONS */}
      <section className="border-t border-dark-mid/30 bg-dark-surface/30 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Still on the Fence?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-ice-white/50">
              We hear these concerns a lot. Here are honest answers.
            </p>
          </ScrollReveal>
          <div className="mt-12 space-y-6">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="rounded-lg border border-dark-mid bg-dark-surface p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-dim" />
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide text-ice-white">
                        {faq.q}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ice-white/50">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-ice-white sm:text-4xl">
              Your Spot Won&apos;t Wait Forever
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ice-white/50">
              Promotional pricing is still active. Payment plans are available. And we&apos;re ready to start whenever you are.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact?action=complete"
                className={cn(
                  "glow-cyan inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-8 py-3.5",
                  "font-[family-name:var(--font-display)] tracking-wider text-dark-deep",
                  "transition-all hover:bg-cyan-light hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                )}
              >
                Complete Your Order
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center rounded-lg border border-ice-white/20 px-8 py-3.5",
                  "font-[family-name:var(--font-display)] tracking-wider text-ice-white/80",
                  "transition-all hover:border-cyan-neon/40 hover:text-cyan-neon"
                )}
              >
                Book a Call First
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
