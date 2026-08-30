import type { GoogleBusinessRating } from "@/data/google-reviews";
import { formatRating } from "@/lib/google-reviews";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { CountUp } from "@/components/motion/CountUp";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { StarRating } from "@/components/reviews/StarRating";
import { GoogleMark } from "@/components/reviews/GoogleMark";
import { Button } from "@/components/ui/Button";

type Props = {
  data: GoogleBusinessRating;
};

export function GoogleReviews({ data }: Props) {
  return (
    <section className="container-site py-16 md:py-24">
      <Reveal>
        <p className="eyebrow mb-3">Google reviews</p>
        <h2 className="display-md text-purple">What our customers say.</h2>
        <p className="lead mt-4">
          Feedback from customers who chose GM Carpentry for bespoke carpentry and joinery projects.
        </p>
      </Reveal>

      <Reveal delay={80} className="mt-10">
        <div className="surface flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between md:p-7">
          <div className="flex items-center gap-4">
            <GoogleMark className="size-8" />
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <StarRating rating={data.rating} animate />
                <p className="text-4xl font-bold tracking-tight text-purple-deep">
                  <CountUp value={data.rating} decimals={1} />
                </p>
              </div>
              <p className="mt-1 text-sm text-text-muted">
                Based on {data.reviewCount} Google reviews
              </p>
            </div>
          </div>
          <p className="sr-only">
            {formatRating(data.rating)} out of 5 from {data.reviewCount} Google reviews
          </p>
        </div>
      </Reveal>

      <Stagger className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {data.reviews.map((review, index) => (
          <StaggerItem key={review.id} index={index} className="h-full">
            <ReviewCard review={review} />
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-10">
        <Button href={data.googleMapsUrl} target="_blank" rel="noopener noreferrer" variant="outline">
          Read All Reviews on Google
          <span className="icon-nudge" aria-hidden="true">
            →
          </span>
        </Button>
      </Reveal>
    </section>
  );
}
