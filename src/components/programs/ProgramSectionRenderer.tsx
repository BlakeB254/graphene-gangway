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
  GalleryContent, StatsContent, DocumentsContent, CTAContent, VideoContent,
} from "@/lib/shared/types";

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
