import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardVariant = "soft" | "glass";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: CardVariant;
};

const cardVariants: Record<CardVariant, string> = {
  soft: "card-soft",
  glass: "card-glass",
};

export default function Card({
  children,
  className,
  variant = "soft",
  ...props
}: CardProps) {
  return (
    <div className={cn(cardVariants[variant], "p-6 sm:p-8", className)} {...props}>
      {children}
    </div>
  );
}
