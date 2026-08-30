// DEMO DATA ONLY
// Replace with Google Places API data before using as a live verified review feed.

// TODO:
// Replace demo review data with Google Places API response
// once GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID are available.

import { business } from "@/config/business";

export type GoogleReview = {
  id: string;
  authorName: string;
  authorInitials?: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeTime: string;
};

export type GoogleBusinessRating = {
  businessName: string;
  rating: number;
  reviewCount: number;
  googleMapsUrl: string;
  reviews: GoogleReview[];
};

export const gmCarpentryGoogleReviews: GoogleBusinessRating = {
  businessName: "GM Carpentry",
  rating: 5.0,
  reviewCount: 24,
  googleMapsUrl: business.googleReviewsUrl,
  reviews: [
    {
      id: "demo-sarah-m",
      authorName: "Sarah M.",
      authorInitials: "SM",
      rating: 5,
      relativeTime: "2 months ago",
      text: "Gareth came out, looked at the attic and talked through what would actually work. No hard sell. The stairs and the room itself are tidy, and they cleaned down every evening which made a huge difference living in the house while the work was on.",
    },
    {
      id: "demo-david-k",
      authorName: "David K.",
      authorInitials: "DK",
      rating: 5,
      relativeTime: "3 months ago",
      text: "We needed under-stairs storage and a pair of alcove units done properly, not the usual MDF job. Measurements were spot on and the finish matches the rest of the room. Communication was straightforward — texts when they were running late, nothing more complicated than that.",
    },
    {
      id: "demo-emma-r",
      authorName: "Emma R.",
      authorInitials: "ER",
      rating: 5,
      relativeTime: "4 months ago",
      text: "Attic conversion in Dublin 15. The team were easy to have around and the room is brighter than I expected. We changed our mind on the wardrobe layout halfway through and they just worked it out. Would use them again for the kitchen if we ever get that far.",
    },
    {
      id: "demo-paul-c",
      authorName: "Paul C.",
      authorInitials: "PC",
      rating: 5,
      relativeTime: "5 months ago",
      text: "Custom cabinetry for a spare room we were turning into an office. Solid work, square doors, no rattling. Took a bit longer than the first date they mentioned because of a material delay, but they told us and it didn’t become a problem.",
    },
    {
      id: "demo-michelle-d",
      authorName: "Michelle D.",
      authorInitials: "MD",
      rating: 5,
      relativeTime: "6 months ago",
      text: "Fitted wardrobes and some joinery around a new attic stairs. Detail is good — the skirting and the door lining actually line up, which is rarer than it should be. Price was what we agreed. House was left usable at the end of each day.",
    },
    {
      id: "demo-james-t",
      authorName: "James T.",
      authorInitials: "JT",
      rating: 5,
      relativeTime: "8 months ago",
      text: "Had GM in for an attic bedroom and a small bit of kitchen carpentry afterwards. Reliable enough that we didn’t have to chase anyone. The finishing is clean. If you want someone who talks sense about what’s possible in an Irish roof, they’re worth a call.",
    },
  ],
};
