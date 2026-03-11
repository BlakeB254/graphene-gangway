"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/common/SectionWrapper";

interface Testimonial {
  quote: string;
  authorName: string;
  authorRole?: string;
  authorImage?: string;
  rating?: number;
}

interface TestimonialCarouselProps {
  title?: string;
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export function TestimonialCarousel({
  title = "What Our Clients Say",
  testimonials,
  autoPlay = true,
  interval = 5000,
  className,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next, testimonials.length]);

  if (testimonials.length === 0) return null;

  const t = testimonials[current];

  return (
    <SectionWrapper className={className}>
      <h2 className="mb-12 text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
        {title}
      </h2>
      <div className="relative mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {t.rating && (
              <div className="mb-4 flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-warning text-brand-warning" />
                ))}
              </div>
            )}
            <blockquote className="mb-6 text-xl leading-relaxed text-ice-white/80 md:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              {t.authorImage ? (
                <div className="h-10 w-10 overflow-hidden rounded-full border border-cyan-neon/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.authorImage} alt={t.authorName} className="h-full w-full object-cover" />
                </div>
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-neon/30 bg-dark-surface text-sm font-bold text-cyan-neon">
                  {t.authorName.charAt(0)}
                </div>
              )}
              <div className="text-left">
                <p className="font-medium text-ice-white">{t.authorName}</p>
                {t.authorRole && <p className="text-sm text-ice-white/50">{t.authorRole}</p>}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {testimonials.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-dark-mid p-2 text-ice-white/50 transition-colors hover:border-cyan-neon/30 hover:text-cyan-neon"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-dark-mid p-2 text-ice-white/50 transition-colors hover:border-cyan-neon/30 hover:text-cyan-neon"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === current ? "w-8 bg-cyan-neon" : "w-2 bg-dark-mid"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </SectionWrapper>
  );
}
