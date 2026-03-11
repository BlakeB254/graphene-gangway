"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  title?: string;
  image?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const current = testimonials[activeIndex];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative overflow-hidden rounded-xl bg-dark-surface p-8 md:p-12">
          <Quote className="mb-6 h-8 w-8 text-cyan-neon/30" />

          <div className="relative min-h-[180px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_e, info) => {
                  if (info.offset.x < -80) {
                    goTo((activeIndex + 1) % testimonials.length);
                  } else if (info.offset.x > 80) {
                    goTo(
                      (activeIndex - 1 + testimonials.length) %
                        testimonials.length
                    );
                  }
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                <p className="text-lg italic leading-relaxed text-ice-white/80 md:text-xl">
                  &ldquo;{current.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-4">
                  {current.image && (
                    <Image
                      src={current.image}
                      alt={current.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-ice-white">
                      {current.name}
                    </p>
                    {current.title && (
                      <p className="text-sm text-ice-white/50">
                        {current.title}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          {testimonials.length > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === activeIndex
                      ? "w-6 bg-cyan-neon"
                      : "w-2 bg-ice-white/20 hover:bg-ice-white/40"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
