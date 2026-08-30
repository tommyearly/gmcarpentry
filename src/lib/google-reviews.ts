// TODO:
// Replace demo review data with Google Places API response
// once GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID are available.

import { gmCarpentryGoogleReviews, type GoogleBusinessRating } from "@/data/google-reviews";

export type { GoogleBusinessRating, GoogleReview } from "@/data/google-reviews";

/**
 * Presentation-layer entry point.
 * Swap this implementation for a Places API fetch later — components stay the same.
 */
export function getGoogleBusinessReviews(): GoogleBusinessRating {
  return gmCarpentryGoogleReviews;
}

export function formatRating(rating: number) {
  return rating.toFixed(1);
}

export function initialsFromName(name: string) {
  const parts = name.replace(/\./g, "").trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}
