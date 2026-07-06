import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export default function PageShell({ children, className }: PageShellProps) {
  return (
    <main className={cn("min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)]", className)}>
      {children}
    </main>
  );
}
