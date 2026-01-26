import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode;
}

function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn("flex-1 w-full flex-col gap-12", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export { Section };
