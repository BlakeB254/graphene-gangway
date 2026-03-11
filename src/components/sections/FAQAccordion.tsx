"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  items: FAQItem[];
  className?: string;
}

function FAQItemComponent({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-dark-mid/50">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-lg font-medium text-ice-white">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 text-cyan-neon transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 leading-relaxed text-ice-white/60">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQAccordion({
  title = "Frequently Asked Questions",
  items,
  className,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper className={className}>
      <ScrollAnimation>
        <h2 className="mb-12 text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
          {title}
        </h2>
      </ScrollAnimation>
      <div className="mx-auto max-w-3xl">
        {items.map((item, i) => (
          <ScrollAnimation key={i} delay={i * 0.05}>
            <FAQItemComponent
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </ScrollAnimation>
        ))}
      </div>
    </SectionWrapper>
  );
}
