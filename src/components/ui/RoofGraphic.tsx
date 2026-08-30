import { cn } from "@/lib/utils";

export function RoofGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 56"
      fill="none"
      aria-hidden="true"
      className={cn("text-gold", className)}
    >
      <path
        d="M8 40 V28 H18 V34 L48 10 L78 34 L98 16 L128 40 H272"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="92" y="22" width="8" height="8" fill="currentColor" />
      <rect x="102" y="22" width="8" height="8" fill="currentColor" />
      <rect x="92" y="32" width="8" height="8" fill="currentColor" />
      <rect x="102" y="32" width="8" height="8" fill="currentColor" />
    </svg>
  );
}
