import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

interface MainProps extends ComponentPropsWithoutRef<"main"> {
  children: React.ReactNode;
}

function Main({ children, className, ...props }: MainProps) {
  return (
    <main
      className={cn("w-full h-full min-h-180 flex p-6 gap-6", className)}
      {...props}
    >
      {children}
    </main>
  );
}
export { Main };
