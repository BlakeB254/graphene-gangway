"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { IMPACT_STATS } from "@/lib/constants";
import { Counter } from "@/components/animations/Counter";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Restaurant Owner",
    quote:
      "Graphene Gangway gave us a brand, a website, and a social media engine all at once. Our online orders tripled in 3 months.",
    rating: 5,
  },
  {
    name: "Jasmine R.",
    role: "Boutique Founder",
    quote:
      "The automation system is incredible. I used to spend hours on content — now it runs itself while I focus on my business.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Fitness Studio Owner",
    quote:
      "From zero online presence to a full digital ecosystem. The launch package was worth every penny.",
    rating: 5,
  },
];

export function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-dark-deep py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Stats bar */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {IMPACT_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                className="text-4xl text-cyan-neon md:text-5xl"
              />
              <div className="mx-auto mt-3 h-px w-8 bg-cyan-neon/20" />
              <p className="mt-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-ice-white/35">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <ScrollReveal delay={0.3}>
          <p className="mb-3 mt-24 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
            What our clients say
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
            TRUSTED BY BUILDERS
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
      className={cn(
        "rounded-2xl border border-dark-mid bg-dark-surface/50 p-8",
        "transition-all duration-300",
        "hover:border-cyan-neon/20"
      )}
    >
      {/* Stars */}
      <div className="mb-4 flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-cyan-neon text-cyan-neon"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-ice-white/50">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-neon/20 bg-cyan-neon/5">
          <span className="font-[family-name:var(--font-display)] text-sm text-cyan-neon">
            {testimonial.name[0]}
          </span>
        </div>
        <div>
          <p className="font-[family-name:var(--font-display)] text-sm tracking-wider text-ice-white">
            {testimonial.name}
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-ice-white/30">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
