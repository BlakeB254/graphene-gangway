import Link from "next/link";
import { FileText, Download } from "lucide-react";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ScrollAnimation } from "@/components/common/ScrollAnimation";
import type { ProgramSectionRow } from "@/lib/shared/types";
import type {
  RichTextContent, FAQContent, TimelineContent, TestimonialsContent,
  GalleryContent, StatsContent, DocumentsContent, CTAContent, VideoContent, CardsContent,
} from "@/lib/shared/types";
import * as LucideIcons from "lucide-react";

function RichTextSection({ title, content }: { title?: string | null; content: RichTextContent }) {
  return (
    <SectionWrapper>
      <ScrollAnimation>
        {title && (
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
            {title}
          </h2>
        )}
        <div
          className="prose prose-invert max-w-none prose-p:text-ice-white/70 prose-headings:font-[family-name:var(--font-display)] prose-headings:tracking-wider prose-a:text-cyan-neon"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </ScrollAnimation>
    </SectionWrapper>
  );
}

function GallerySection({ title, content }: { title?: string | null; content: GalleryContent }) {
  return (
    <SectionWrapper>
      {title && (
        <ScrollAnimation>
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">{title}</h2>
        </ScrollAnimation>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item, i) => (
          <ScrollAnimation key={i} delay={i * 0.05}>
            <div className="overflow-hidden rounded-lg border border-dark-mid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.alt} className="aspect-video w-full object-cover" />
              {item.caption && <p className="p-3 text-sm text-ice-white/50">{item.caption}</p>}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </SectionWrapper>
  );
}

function StatsSection({ title, content }: { title?: string | null; content: StatsContent }) {
  return (
    <SectionWrapper dark>
      {title && (
        <ScrollAnimation>
          <h2 className="mb-12 text-center font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">{title}</h2>
        </ScrollAnimation>
      )}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {content.items.map((item, i) => (
          <ScrollAnimation key={i} delay={i * 0.1} className="text-center">
            <p className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon md:text-5xl">
              {item.value}{item.suffix}
            </p>
            <p className="mt-2 text-sm text-ice-white/60">{item.label}</p>
          </ScrollAnimation>
        ))}
      </div>
    </SectionWrapper>
  );
}

function DocumentsSection({ title, content }: { title?: string | null; content: DocumentsContent }) {
  return (
    <SectionWrapper>
      {title && (
        <ScrollAnimation>
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">{title}</h2>
        </ScrollAnimation>
      )}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {content.items.map((item, i) => (
          <ScrollAnimation key={i} delay={i * 0.05}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-dark-mid bg-dark-surface p-4 transition-all hover:border-cyan-neon/30"
            >
              <FileText className="h-5 w-5 flex-shrink-0 text-cyan-neon" />
              <span className="flex-1 text-sm text-ice-white">{item.title}</span>
              {item.fileType && <span className="text-xs uppercase text-ice-white/40">{item.fileType}</span>}
              <Download className="h-4 w-4 text-ice-white/40" />
            </a>
          </ScrollAnimation>
        ))}
      </div>
    </SectionWrapper>
  );
}

function CTASection({ content }: { content: CTAContent }) {
  return (
    <SectionWrapper dark>
      <ScrollAnimation className="text-center">
        <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
          {content.heading}
        </h2>
        {content.description && (
          <p className="mx-auto mb-8 max-w-2xl text-lg text-ice-white/60">{content.description}</p>
        )}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={content.primaryHref}
            className="rounded-lg bg-cyan-neon px-8 py-3 font-bold text-dark-deep transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            {content.primaryLabel}
          </Link>
          {content.secondaryLabel && content.secondaryHref && (
            <Link
              href={content.secondaryHref}
              className="rounded-lg border border-cyan-neon/30 px-8 py-3 font-medium text-cyan-neon transition-colors hover:bg-cyan-neon/10"
            >
              {content.secondaryLabel}
            </Link>
          )}
        </div>
      </ScrollAnimation>
    </SectionWrapper>
  );
}

function VideoSection({ title, content }: { title?: string | null; content: VideoContent }) {
  return (
    <SectionWrapper>
      {title && (
        <ScrollAnimation>
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">{title}</h2>
        </ScrollAnimation>
      )}
      <ScrollAnimation>
        <div className="overflow-hidden rounded-xl border border-dark-mid">
          <video src={content.url} poster={content.poster} controls className="w-full" />
          {content.caption && <p className="p-4 text-sm text-ice-white/50">{content.caption}</p>}
        </div>
      </ScrollAnimation>
    </SectionWrapper>
  );
}

function CardsSection({ title, content }: { title?: string | null; content: CardsContent }) {
  const cols = content.columns ?? 3;
  const gridClass =
    cols === 2 ? "grid-cols-1 sm:grid-cols-2" :
    cols === 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" :
    "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <SectionWrapper>
      {title && (
        <ScrollAnimation>
          <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl tracking-wider text-ice-white md:text-4xl">
            {title}
          </h2>
        </ScrollAnimation>
      )}
      <div className={`grid ${gridClass} gap-6`}>
        {content.items.map((card, i) => {
          const IconComponent = card.icon
            ? (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[card.icon]
            : null;
          const accentStyle = card.accentColor ? { color: card.accentColor } : {};
          const borderHover = card.accentColor
            ? { "--card-accent": card.accentColor } as React.CSSProperties
            : {};

          const inner = (
            <div
              className="group relative h-full overflow-hidden rounded-xl border border-dark-mid bg-dark-surface p-6 transition-all hover:border-cyan-neon/30 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.06)]"
              style={borderHover}
            >
              {IconComponent && (
                <div className="mb-4 inline-flex rounded-lg bg-dark-deep p-3" style={accentStyle}>
                  <IconComponent className="h-6 w-6" />
                </div>
              )}
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl tracking-wider text-ice-white">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-ice-white/60">{card.description}</p>
              {card.tags && card.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-dark-deep px-3 py-1 text-xs text-ice-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {card.href && (
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-neon">
                  Explore <LucideIcons.ArrowRight className="h-3.5 w-3.5" />
                </span>
              )}
            </div>
          );

          return (
            <ScrollAnimation key={i} delay={i * 0.08}>
              {card.href ? (
                <Link
                  href={card.href}
                  {...(card.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="block h-full"
                >
                  {inner}
                </Link>
              ) : (
                inner
              )}
            </ScrollAnimation>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

interface ProgramSectionRendererProps {
  section: ProgramSectionRow;
}

export function ProgramSectionRenderer({ section }: ProgramSectionRendererProps) {
  if (!section.is_visible) return null;
  const content = section.content as Record<string, unknown>;

  switch (section.section_type) {
    case "rich_text":
      return <RichTextSection title={section.title} content={content as unknown as RichTextContent} />;
    case "faq":
      return <FAQAccordion title={section.title ?? "FAQ"} items={(content as unknown as FAQContent).items} />;
    case "timeline":
      return <ProcessTimeline title={section.title ?? "Process"} steps={(content as unknown as TimelineContent).items} />;
    case "testimonials":
      return <TestimonialCarousel title={section.title ?? "Testimonials"} testimonials={(content as unknown as TestimonialsContent).items} />;
    case "gallery":
      return <GallerySection title={section.title} content={content as unknown as GalleryContent} />;
    case "stats":
      return <StatsSection title={section.title} content={content as unknown as StatsContent} />;
    case "documents":
      return <DocumentsSection title={section.title} content={content as unknown as DocumentsContent} />;
    case "cta":
      return <CTASection content={content as unknown as CTAContent} />;
    case "video":
      return <VideoSection title={section.title} content={content as unknown as VideoContent} />;
    case "cards":
      return <CardsSection title={section.title} content={content as unknown as CardsContent} />;
    case "embed":
      return (
        <SectionWrapper>
          <div dangerouslySetInnerHTML={{ __html: (content as { html: string }).html }} />
        </SectionWrapper>
      );
    default:
      return null;
  }
}
