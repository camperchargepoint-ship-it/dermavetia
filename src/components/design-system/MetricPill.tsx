import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type MetricPillProps = HTMLAttributes<HTMLDivElement> & {
  value: string;
  label: string;
};

export default function MetricPill({
  value,
  label,
  className,
  ...props
}: MetricPillProps) {
  return (
    <div
      className={cn(
        "rounded-full border border-[var(--color-soft)] bg-white px-5 py-3 shadow-[0_14px_34px_rgba(15,15,15,0.045)]",
        className,
      )}
      {...props}
    >
      <p className="text-sm font-semibold text-[var(--color-primary)]">{value}</p>
      <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">{label}</p>
    </div>
  );
}
