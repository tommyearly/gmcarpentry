"use client";

import { telHref, displayPhone } from "@/config/business";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function TrackedTelLink({
  className,
  children,
  source,
  "aria-label": ariaLabel,
}: {
  className?: string;
  children?: React.ReactNode;
  source: string;
  "aria-label"?: string;
}) {
  return (
    <a
      href={telHref()}
      className={cn("focus-ring", className)}
      aria-label={ariaLabel}
      onClick={() => track("phone_click", { source })}
    >
      {children ?? displayPhone()}
    </a>
  );
}
