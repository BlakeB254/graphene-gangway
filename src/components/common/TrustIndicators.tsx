import { Star, Users, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustIndicatorsProps {
  className?: string;
  layout?: "horizontal" | "vertical";
}

const indicators = [
  { icon: Users, label: "87+ Businesses Served", value: "87+" },
  { icon: Star, label: "5-Star Reviews", value: "5.0" },
  { icon: Building2, label: "Brands Managed", value: "15+" },
];

export function TrustIndicators({ className, layout = "horizontal" }: TrustIndicatorsProps) {
  return (
    <div
      className={cn(
        "flex gap-6",
        layout === "horizontal" ? "flex-wrap items-center" : "flex-col",
        className
      )}
    >
      {indicators.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-sm text-ice-white/60">
          <item.icon className="h-4 w-4 text-cyan-neon" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
