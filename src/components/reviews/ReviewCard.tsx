"use client";

import { useState } from "react";
import type { GoogleReview } from "@/data/google-reviews";
import { initialsFromName } from "@/lib/google-reviews";
import { StarRating } from "@/components/reviews/StarRating";
import { GoogleMark } from "@/components/reviews/GoogleMark";

export function ReviewCard({ review }: { review: GoogleReview }) {
  const [expanded, setExpanded] = useState(false);
  const long = review.text.length > 220;
  const initials = review.authorInitials || initialsFromName(review.authorName);

  return (
    <article className="card-lift surface flex h-full flex-col p-5 md:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex size-11 items-center justify-center rounded-full bg-purple text-sm font-bold text-white">
            {initials}
          </span>
          <div>
            <p className="font-bold text-purple-deep">{review.authorName}</p>
            <p className="text-xs text-text-subtle">{review.relativeTime}</p>
          </div>
        </div>
        <GoogleMark className="size-5 shrink-0 opacity-80" />
      </div>
      <div className="mt-3">
        <StarRating rating={review.rating} size="sm" />
      </div>
      <p className={long && !expanded ? "review-clamp mt-4 text-[0.95rem] leading-relaxed text-text-muted" : "mt-4 text-[0.95rem] leading-relaxed text-text-muted"}>
        {review.text}
      </p>
      {long ? (
        <button
          type="button"
          className="focus-ring mt-3 self-start text-sm font-semibold text-purple underline-offset-4 hover:underline"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </article>
  );
}
