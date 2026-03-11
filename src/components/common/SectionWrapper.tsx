import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function SectionWrapper({ children, className, dark, id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        dark && "bg-gradient-to-b from-dark-deep via-dark-surface/50 to-dark-deep",
        className
      )}
    >
      <div className="section-container">{children}</div>
    </section>
  );
}
