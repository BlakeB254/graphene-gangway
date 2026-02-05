"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlowDivider } from "@/components/animations/GlowDivider";
import { HexGrid } from "@/components/backgrounds/HexGrid";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const PLACEHOLDER_POSTS = [
  {
    title: "Why North Lawndale Needs a Tech Hub",
    excerpt:
      "The digital divide isn't just about internet access — it's about opportunity, education, and economic mobility. Here's why we're building Graphene Gangway.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Mission",
  },
  {
    title: "Inside YN Academy: Our First Cohort",
    excerpt:
      "Meet the students who are learning to code, build websites, and launch careers in technology. Their stories will change how you think about potential.",
    date: "Coming Soon",
    readTime: "8 min read",
    category: "Programs",
  },
  {
    title: "Building a Community Tech Stack",
    excerpt:
      "What does it take to build technology infrastructure for a neighborhood? We break down our approach to sustainable, community-driven tech solutions.",
    date: "Coming Soon",
    readTime: "6 min read",
    category: "Tech",
  },
];

export function BlogContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HexGrid />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-script)] text-xl text-cyan-dim mb-4">
              Dispatches from the portal.
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-cyan-neon text-glow-cyan tracking-wider mb-6">
              BLOG
            </h1>
            <p className="text-lg text-ice-white/70 max-w-2xl mx-auto">
              Stories, updates, and insights from the Graphene Gangway community.
              Follow our journey building technology access in North Lawndale.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Posts */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {PLACEHOLDER_POSTS.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 0.1}>
                <article className="group bg-dark-surface border border-dark-mid rounded-lg p-8 hover:border-cyan-neon/30 transition-all duration-300 corner-frame">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest text-cyan-neon/60 px-2 py-1 border border-cyan-neon/20 rounded">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-ice-white/30">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-ice-white/30">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-ice-white mb-3 group-hover:text-cyan-neon transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-ice-white/60 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm text-cyan-neon/70 group-hover:text-cyan-neon transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Subscribe CTA */}
      <section className="py-24 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-cyan-neon text-glow-cyan mb-4">
            STAY IN THE LOOP
          </h2>
          <p className="text-ice-white/60 mb-8 max-w-md mx-auto">
            New posts are coming soon. Reach out and we&apos;ll keep you updated.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-cyan-neon text-dark-deep font-[family-name:var(--font-display)] text-lg tracking-wider hover:bg-cyan-dim transition-colors duration-300"
          >
            SUBSCRIBE
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
