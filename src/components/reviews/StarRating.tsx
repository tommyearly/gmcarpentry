import { cn } from "@/lib/utils";

type Props = {
  rating: number;
  size?: "sm" | "md";
  animate?: boolean;
  className?: string;
};

export function StarRating({ rating, size = "md", animate = false, className }: Props) {
  const dim = size === "sm" ? "size-3.5" : "size-4";

  return (
    <span className={cn("inline-flex items-center gap-0.5 text-gold", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className={cn(dim, animate && "star-pop")}
          style={animate ? { animationDelay: `${index * 50}ms` } : undefined}
          aria-hidden="true"
        >
          <path
            fill={index < Math.round(rating) ? "currentColor" : "rgba(201, 162, 39, 0.22)"}
            d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.1 5.06 16.71l.94-5.5-4-3.9 5.53-.8L10 1.5z"
          />
        </svg>
      ))}
    </span>
  );
}
