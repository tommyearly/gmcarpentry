# SEO audit — current vs planned

**Canonical:** `https://gmcarpentry.ie`  
**robots.txt:** `User-agent: *` / `Disallow:` empty / sitemap declared  
**Live sitemap:** `https://gmcarpentry.ie/sitemap.xml` returned **500** on audit day — replace with `app/sitemap.ts`

## Current titles / H1s (sample)

| URL | Title | H1 notes |
| --- | --- | --- |
| `/` | Attic Conversion Company - Attic Company in Dublin | “Specialist in Attic Conversions - Dublin” |
| `/attic-converstions.html` | Attic Conversions Specialists and Cost in Dublin | “Leading…” — drop leading |
| `/dormer-attic-conversion.html` | Dormer Attic Conversion Dublin | Strong topic match |
| `/en-suite-attic-conversion.html` | Attic Conversion with en-suite - GM Carpentry & Construction | Keep topic |
| `/attic-conversion-with-stairs.html` | Permanent Attic Stairs - Stairs for Attic Conversion Dublin | Keep topic |
| `/attic-flooring.html` | Attic Flooring Cost in Dublin | No invented prices on new page |
| `/loft-conversion.html` | Loft Conversion - Loft Conversion Specialist in Dublin | Keep loft keyword |
| `/extensions.html` | Home Extensions Dublin - … | Keep |
| `/attic-conversion-clonsilla.html` | Attic Conversion in Clonsilla Dublin - … | Location + project — high value |

Homepage description is a keyword pile. No OG image. No legal pages. Internal links are strong among attic URLs.

## Planned metadata pattern

`{Page intent} | GM Carpentry & Construction`  
Unique title, description, canonical, OG, Twitter, one H1, H2/H3 hierarchy, breadcrumbs, Service/FAQ/Project schema where accurate.

## New sitemap includes

All public canonical routes. Excludes `/api/*`, `/email-preview`, `/email-signature`.

## Redirects

See `URL-MAP.md` and `next.config.ts`. One hop.

## Schema (only supported facts)

- `HomeAndConstructionBusiness` / `LocalBusiness` — name, url, phone, email, address (Priest Town, Kilbride, Dublin 15, IE), areaServed Dublin
- `WebSite`
- `Service` on service pages
- `BreadcrumbList`
- `FAQPage` where FAQs are real
- `VideoObject` for the four YouTube videos (no invented upload dates)
- `Review` only for genuine named reviews, **no** `aggregateRating`
- Do not invent openingHours, priceRange, awards, employee count, founder schema beyond Gareth as a review-mentioned owner

## Location pages

Only project-backed: Clonsilla, Hansfield, Hollywoodrath, Swords. No programmatic suburb mill.
