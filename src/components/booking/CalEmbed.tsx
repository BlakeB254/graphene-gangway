"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar, ExternalLink } from "lucide-react";

interface CalEmbedProps {
  calLink?: string;
  className?: string;
}

const DEFAULT_CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK;

export function CalEmbed({ calLink, className }: CalEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const link = calLink || DEFAULT_CAL_LINK;

  useEffect(() => {
    if (!link || typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).Cal) {
        (window as any).Cal("init", { origin: "https://cal.com" });
        (window as any).Cal("inline", {
          elementOrSelector: ref.current,
          calLink: link,
          config: {
            theme: "dark",
          },
        });
        setLoaded(true);
      }
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [link]);

  if (!link) {
    return (
      <div className={cn("rounded-xl border border-dark-mid bg-dark-surface/40 p-8 text-center", className)}>
        <Calendar className="mx-auto mb-4 h-10 w-10 text-cyan-neon/50" />
        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
          BOOK A CALL
        </h3>
        <p className="mt-2 text-sm text-ice-white/50">
          Scheduling is being set up. In the meantime, reach out through our contact form.
        </p>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <div ref={ref} className="min-h-[500px] rounded-xl" />
      {!loaded && (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-neon/20 border-t-cyan-neon" />
        </div>
      )}
      <p className="mt-3 text-center text-xs text-ice-white/30">
        <a
          href={`https://cal.com/${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-cyan-neon/50"
        >
          Open in new tab <ExternalLink className="h-3 w-3" />
        </a>
      </p>
    </div>
  );
}
