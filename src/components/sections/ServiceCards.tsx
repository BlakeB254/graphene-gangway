"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/services";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

type LucideIconComponent = React.ComponentType<{ className?: string }>;

function getIcon(iconName: string): LucideIconComponent {
  const Icon = (LucideIcons as Record<string, unknown>)[iconName] as
    | LucideIconComponent
    | undefined;
  return Icon ?? LucideIcons.Box;
}

export function ServiceCards() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan-neon/70">
            What we build
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-4xl tracking-wider text-ice-white md:text-5xl">
            OUR SERVICES
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = getIcon(service.icon);
            // Center the last 2 items when there are 5 services
            const isLastRow =
              SERVICES.length === 5 && i >= 3;

            return (
              <ScrollReveal
                key={service.id}
                delay={i * 0.1}
                className={cn(
                  isLastRow && i === 3 && "lg:col-start-1 lg:col-end-2 lg:ml-auto lg:w-full lg:max-w-[calc(100%)] lg:justify-self-end",
                  isLastRow && i === 4 && "lg:col-start-3 lg:col-end-4 lg:mr-auto lg:w-full"
                )}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-dark-mid bg-dark-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-neon/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] md:p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-neon/10">
                    <Icon className="h-6 w-6 text-cyan-neon" />
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                    {service.name}
                  </h3>

                  <p className="mt-2 line-clamp-1 text-sm text-ice-white/50">
                    {service.tagline}
                  </p>

                  <div className="mt-auto pt-4">
                    <span className="font-[family-name:var(--font-display)] text-lg text-cyan-neon">
                      {service.priceLabel}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm text-ice-white/40 transition-colors duration-300 group-hover:text-cyan-neon">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
