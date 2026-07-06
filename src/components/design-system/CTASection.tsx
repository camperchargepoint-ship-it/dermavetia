import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import Button from "./Button";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  className?: string;
};

export default function CTASection({
  eyebrow,
  title,
  children,
  primaryAction,
  secondaryAction,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("bg-[var(--color-bg)] px-5 py-16 sm:px-8 lg:px-10", className)}>
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[var(--color-primary)] p-7 shadow-[0_30px_90px_rgba(15,15,15,0.16)] sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            {eyebrow ? <p className="eyebrow text-[var(--color-soft)]">{eyebrow}</p> : null}
            <h2 className={cn("heading-lg text-white", eyebrow && "mt-4")}>{title}</h2>
            {children ? (
              <div className="mt-5 max-w-3xl text-lead text-[var(--color-soft)]">
                {children}
              </div>
            ) : null}
          </div>
          {(primaryAction || secondaryAction) ? (
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              {primaryAction ? (
                <Button href={primaryAction.href} variant="secondary">
                  {primaryAction.label}
                </Button>
              ) : null}
              {secondaryAction ? (
                <Button
                  href={secondaryAction.href}
                  variant="secondary"
                  className="border-white/30 bg-transparent text-white hover:bg-white hover:text-[var(--color-primary)]"
                >
                  {secondaryAction.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
