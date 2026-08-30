import type { GoogleBusinessRating } from "@/data/google-reviews";
import { formatRating } from "@/lib/google-reviews";
import { StarRating } from "@/components/reviews/StarRating";
import { GoogleMark } from "@/components/reviews/GoogleMark";
import { cn } from "@/lib/utils";

type Props = {
  data: GoogleBusinessRating;
  variant?: "hero" | "compact" | "inline";
  className?: string;
};

export function GoogleTrustBadge({ data, variant = "compact", className }: Props) {
  const rating = formatRating(data.rating);

  if (variant === "inline") {
    return (
      <p className={cn("inline-flex flex-wrap items-center gap-2 text-sm font-semibold", className)}>
        <StarRating rating={data.rating} size="sm" />
        <span>
          {rating} Google Rating
        </span>
      </p>
    );
  }

  if (variant === "hero") {
    return (
      <div className={cn("mt-6 inline-flex items-center gap-3 rounded-xl bg-white/12 px-3 py-2 text-white backdrop-blur-sm", className)}>
        <GoogleMark className="size-5" />
        <div>
          <div className="flex items-center gap-2">
            <StarRating rating={data.rating} size="sm" animate />
            <span className="text-sm font-bold">Excellent on Google</span>
          </div>
          <p className="text-xs text-white/80">
            {rating} from {data.reviewCount} reviews
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("surface flex items-center gap-3 p-4", className)}>
      <GoogleMark className="size-6" />
      <div>
        <div className="flex items-center gap-2">
          <StarRating rating={data.rating} size="sm" animate />
          <p className="text-sm font-bold text-purple-deep">Rated {rating} on Google</p>
        </div>
        <p className="text-xs text-text-muted">Based on {data.reviewCount} reviews</p>
      </div>
    </div>
  );
}
