"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplitText } from "@/components/animations/SplitText";
import { Counter } from "@/components/animations/Counter";

function WordByWordParagraph({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <p ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: delay + i * 0.025,
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </p>
  );
}

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: columns move at different speeds for depth
  const leftY = useTransform(scrollYProgress, [0, 1], [80, -30]);
  const rightY = useTransform(scrollYProgress, [0, 1], [40, -60]);

  // Decorative line grows with scroll
  const lineScale = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  // Stat glow pulse
  const statGlow = useTransform(scrollYProgress, [0.25, 0.45, 0.6], [0, 0.5, 0]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
      {/* Horizontal decorative line */}
      <motion.div
        style={{ scaleX: lineScale }}
        className="absolute left-0 right-0 top-1/2 h-px origin-left bg-gradient-to-r from-transparent via-cyan-neon/10 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Left: Big stat — parallaxes upward */}
          <motion.div style={{ y: leftY }}>
            <div className="relative">
              {/* Glow burst behind the number */}
              <motion.div
                style={{ opacity: statGlow }}
                className="pointer-events-none absolute -inset-12 flex items-center justify-center"
              >
                <div
                  className="h-56 w-56 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 70%)",
                  }}
                />
              </motion.div>

              <ScrollReveal variant="fadeLeft">
                <p className="mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
                  <SplitText
                    text="North Lawndale, Chicago"
                    variant="glitch"
                    stagger={0.02}
                    mode="chars"
                  />
                </p>
                <Counter
                  value={42}
                  suffix="%"
                  className="text-8xl text-ice-white md:text-9xl"
                />
                <div className="mt-3">
                  <SplitText
                    text="OF RESIDENTS BELOW THE POVERTY LINE"
                    mode="words"
                    stagger={0.06}
                    startDelay={0.4}
                    variant="rise"
                    className="font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white/30 md:text-2xl"
                  />
                </div>
              </ScrollReveal>
            </div>
          </motion.div>

          {/* Right: Mission text — parallaxes at different rate */}
          <motion.div style={{ y: rightY }}>
            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div className="space-y-6">
                <p className="font-[family-name:var(--font-script)] text-3xl text-cyan-neon">
                  <SplitText
                    text="We're not waiting for someone to save us."
                    mode="words"
                    stagger={0.06}
                    startDelay={0.1}
                    variant="rise"
                  />
                </p>
                <WordByWordParagraph
                  text="Graphene Gangway is a community technology initiative born in the heart of Chicago's West Side. We build bridges across the digital divide through hands-on education, affordable tech services, and outreach programs that connect residents to real opportunities."
                  className="font-[family-name:var(--font-body)] text-lg leading-relaxed text-ice-white/45"
                  delay={0.3}
                />
                <WordByWordParagraph
                  text="Technology is the gangway — and we're making sure our community walks through it."
                  className="font-[family-name:var(--font-body)] text-lg leading-relaxed text-ice-white/45"
                  delay={0.6}
                />
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
