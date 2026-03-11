"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";
import { cn } from "@/lib/utils";
import { Users, DollarSign, Home, TrendingDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StatCard {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: boolean;
  source: string;
  sourceUrl: string;
  icon: LucideIcon;
  category: "demographics" | "economic";
}

const STATS: StatCard[] = [
  {
    label: "Population",
    value: 34817,
    source: "U.S. Census Bureau, 2020",
    sourceUrl: "https://data.census.gov/",
    icon: Users,
    category: "demographics",
  },
  {
    label: "Median Age",
    value: 36,
    suffix: " yrs",
    source: "ACS 2019-2023",
    sourceUrl:
      "https://data.census.gov/table/ACSST5Y2023.S0101",
    icon: Users,
    category: "demographics",
  },
  {
    label: "Community Area",
    value: 29,
    prefix: "#",
    suffix: " of 77",
    source: "City of Chicago",
    sourceUrl: "https://data.cityofchicago.org/",
    icon: Users,
    category: "demographics",
  },
  {
    label: "Median Household Income",
    value: 44101,
    prefix: "$",
    source: "ACS 2019-2023",
    sourceUrl:
      "https://data.census.gov/table/ACSST5Y2023.S1901",
    icon: DollarSign,
    category: "economic",
  },
  {
    label: "Poverty Rate",
    value: 27,
    suffix: "%",
    source: "ACS 2019-2023",
    sourceUrl:
      "https://data.census.gov/table/ACSST5Y2023.S1701",
    icon: TrendingDown,
    category: "economic",
  },
  {
    label: "Homeownership Rate",
    value: 37,
    suffix: "%",
    source: "ACS 2019-2023",
    sourceUrl:
      "https://data.census.gov/table/ACSST5Y2023.S2501",
    icon: Home,
    category: "economic",
  },
  {
    label: "Median Rent",
    value: 1192,
    prefix: "$",
    suffix: "/mo",
    source: "ACS 2019-2023",
    sourceUrl:
      "https://data.census.gov/table/ACSST5Y2023.S2501",
    icon: Home,
    category: "economic",
  },
];

function StatCardComponent({
  stat,
  delay,
}: {
  stat: StatCard;
  delay: number;
}) {
  const Icon = stat.icon;

  return (
    <ScrollReveal delay={delay}>
      <div className="group relative flex flex-col items-center rounded-xl border border-[#2A2D35] bg-[#1A1D24]/80 p-6 text-center transition-all duration-300 hover:border-[#00F0FF]/30 hover:bg-[#1A1D24]">
        {/* Icon */}
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] transition-colors group-hover:bg-[#00F0FF]/20">
          <Icon className="h-5 w-5" />
        </div>

        {/* Animated number */}
        <div className="flex items-baseline gap-0.5 text-4xl font-bold text-[#E8FEFF] md:text-5xl">
          {stat.prefix && (
            <span className="font-[family-name:var(--font-display)] text-[#00F0FF]">
              {stat.prefix}
            </span>
          )}
          <Counter
            value={stat.value}
            suffix={stat.suffix || ""}
            className="text-[#E8FEFF]"
          />
        </div>

        {/* Label */}
        <p className="mt-2 font-[family-name:var(--font-body)] text-sm font-medium text-[#E8FEFF]/70">
          {stat.label}
        </p>

        {/* Source */}
        <a
          href={stat.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block font-[family-name:var(--font-mono)] text-[10px] text-[#00B8C4]/60 transition-colors hover:text-[#00F0FF]"
        >
          {stat.source}
        </a>
      </div>
    </ScrollReveal>
  );
}

interface CommunityDashboardProps {
  className?: string;
}

export function CommunityDashboard({ className }: CommunityDashboardProps) {
  const demographics = STATS.filter((s) => s.category === "demographics");
  const economic = STATS.filter((s) => s.category === "economic");

  return (
    <div className={cn("space-y-16", className)}>
      {/* Demographics */}
      <div>
        <ScrollReveal>
          <h3 className="mb-8 text-center font-[family-name:var(--font-display)] text-2xl tracking-wider text-[#00F0FF] uppercase md:text-3xl">
            Demographics
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demographics.map((stat, i) => (
            <StatCardComponent key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* Economic */}
      <div>
        <ScrollReveal>
          <h3 className="mb-8 text-center font-[family-name:var(--font-display)] text-2xl tracking-wider text-[#00F0FF] uppercase md:text-3xl">
            Economic Indicators
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {economic.map((stat, i) => (
            <StatCardComponent key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
}
