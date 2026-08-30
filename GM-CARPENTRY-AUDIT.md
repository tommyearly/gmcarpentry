# GM Carpentry & Construction — Live Site Audit

**Audited:** 30 August 2026  
**Source of truth:** [https://gmcarpentry.ie/](https://gmcarpentry.ie/)  
**Canonical on live site:** `https://gmcarpentry.ie/` (apex, confirmed via `<link rel="canonical">`)  
**www:** `https://www.gmcarpentry.ie/` serves the same site (no redirect currently)

---

## Business overview

GM Carpentry & Construction is a Dublin-based building contractor that **specialises in attic conversions** and also offers home extensions, renovations, and general carpentry.

**Verified public contact**

| Field | Value | Source |
| --- | --- | --- |
| Phone | 087 615 9429 / +353 87 615 9429 | Header, footer, CTAs, every page |
| Email | info@gmcarpentry.ie | Footer, contact, FAQ |
| Address (homepage FAQ) | Priest Town, Dublin 15 | `/` FAQ |
| Address (attic microsite footer) | Priest Town, Kilbride, Co. Dublin | `attics.gmcarpentry.ie` |
| Facebook | [Gm Carpentry Construction](https://www.facebook.com/people/Gm-Carpentry-Construction/100063498672550/) | Footer |
| X / Twitter | [Gmcarpentry2](https://x.com/Gmcarpentry2) | Footer |
| Google Place | `0x48676d5471505f81:0x123fb7c357b91b95` | Review widget / review links |

**People named in genuine customer reviews (do not invent biographies)**

- **Gareth** — referred to as the owner in Harneet K’s Google review; named across multiple reviews
- **Ken** and **Pat** — named on the Clonsilla page and in reviews
- **Kyle, Anto, Amir, Brian** — named in Pentek Francisc’s Google review

---

## Current navigation

**Header:** Home · About · Services · Recent Projects · Gallery · Contact  
**Footer services:** Attic Conversion · Modern Attic Conversion · Dormer Attic Conversion · Loft Conversion · Attic Stairs · Attic Flooring · Attic to Living Space · En-suite Attic  
**Hero slides:** Attic Conversions, Dormer, En-suite, Hollywoodrath, Hansfield, Clonsilla

Mobile: hamburger + lime/yellow circular call button.

---

## Current pages / URLs

See `URL-MAP.md` for the full migration table. Live 200 pages discovered:

### Core
- `/` homepage
- `/about.html`
- `/services.html`
- `/contact.html`
- `/recent-projects.html`
- `/gallery.html`
- `/portfolio.html` (alternate gallery)
- `/video.html`

### Attic services
- `/attic-converstions.html` **(established typo URL — do not drop)**
- `/full-modern-attic-conversion-dublin.html`
- `/dormer-attic-conversion.html`
- `/en-suite-attic-conversion.html`
- `/attic-conversion-with-stairs.html`
- `/attic-flooring.html`
- `/attic-living-space.html`
- `/loft-conversion.html`

### Secondary services
- `/extensions.html`
- `/renovations.html`
- `/general-carpentry-services.html`

### Project case studies
- `/attic-conversion-clonsilla.html`
- `/attic-conversion-hansfield.html`
- `/attic-conversion-hollywoodrath.html`
- `/attic-conversions-hollywoodrath.html` (duplicate Hollywoodrath URL)
- `/attic-conversion-swords.html`

### Related property
- `https://attics.gmcarpentry.ie/` — separate attic-focused microsite (not this rebuild’s host)

### Confirmed 404s (do not invent)
`/attic-conversions.html`, `/attic-stairs.html`, `/dormer-attic-conversion-dublin.html`, `/home-renovations.html`, `/general-carpentry.html`, `/carpentry.html`, `/privacy.html`, `/privacy-policy.html`, `/terms.html`

---

## Services (commercial hierarchy)

**Primary — Attic conversions**
Modern / full conversion · Dormer · En-suite · Permanent stairs · Flooring · Living space / loft

**Secondary**
Home extensions (rear / side; extra room, kitchen, dining, downstairs bathroom)  
Home renovations (one quote, one contact; plumbing, heating, plastering, walls, flooring, windows/doors)  
General carpentry (doors, flooring, wardrobes, decking, stairs, kitchens)

**Mentioned but not major nav items**
New builds, property maintenance, bathroom fittings, insulation upgrading, business renovations, roofs, banisters, kitchen refacing. Preserve as supporting copy only.

---

## Projects (verified)

| Location | Verified features | Review |
| --- | --- | --- |
| Clonsilla (Lisa) | Staircase, windows | Full 5-star Google review naming Gareth, Ken, Pat |
| Hansfield | New stair + en-suite bathroom | None on page |
| Hollywoodrath | Extra living space; one URL also mentions a stair matching existing stairs | None on page |
| Swords, Co. Dublin | Stair designed to match existing main stairs | None on page |

Kilternan appears only on `attics.gmcarpentry.ie` — **no dedicated main-site project page**. Do not invent a Kilternan case study.

---

## Videos (YouTube, live homepage + `/video.html`)

| ID | Title (oEmbed) |
| --- | --- |
| `6Mub-bSAtbg` | Attic Conversion Dublin by GM Carpentry & Construction |
| `x8V-psC6ANE` | Home Office Attic Conversion Dublin by GM Carpentry & Construction |
| `lK1Qpby1LBE` | Title not retrieved (timeout) — treat as a genuine GM attic project video |
| `ORcUre-hzUs` | Attic Conversions with Bathroom Dublin Ireland |

See `VIDEO-AUDIT.md`.

---

## Testimonials (genuine only)

**Google widget on homepage (live, Aug 2026):** displayed **4.9 from 181 reviews**. Do **not** hard-code aggregate schema — widget values change. Link to Google instead.

**Quoted on-site**
- Lisa, Clonsilla — full review on homepage + project page
- Grace O’Mahony, Pentek Francisc, Harneet K, Ollie Mac Craith — Google widget
- Vivian Peralta, Jerry Noble, Tomasz Walczak, Ania Kumar, xiyang Cheng, Emma Marshall, More Living Burger, Graham Duke, Carla Abrantres — `/video.html`

---

## FAQs

Homepage, attic-converstions, dormer, en-suite, stairs, flooring, loft, living-space, and modern pages all have FAQ blocks. Content is repetitive and often overconfident on planning. Rewrite; keep questions and facts. See `FACT-CHECK.md`.

---

## SEO assets (current)

- Titles exist but are generic / keyword-stuffed
- Homepage meta: “Attic conversion Specialists based in Dublin all qualified tradesmen used only and best insulation used engineer overlooking project and certificates included.”
- Canonical on homepage: `https://gmcarpentry.ie/`
- `robots.txt` allows all; sitemap URL returns **500**
- No Open Graph image on homepage
- No privacy/cookie/terms pages
- Elfsight Google Reviews widget + reCAPTCHA v2 on contact form
- Fonts: Montserrat, Open Sans, Roboto, Droid Sans, Lobster

See `SEO-AUDIT.md`.

---

## Strengths

- Real finished attic photography and staircase photography
- Real project locations (Clonsilla, Hansfield, Hollywoodrath, Swords)
- Real YouTube project videos
- Genuine Google reviews naming the team
- Strong attic-conversion topical coverage and Dublin relevance
- Established `.html` URLs with index history
- Clear phone + email
- Free consultation / free estimate / free quotation messaging
- “Qualified professional tradesmen” footer claim

---

## Weaknesses

- Dated Bootstrap/template design; construction-yellow + black logo used as a 2015 builder look
- Homepage is a service dump rather than a transformation story
- Typo URL (`attic-converstions`) and duplicate Hollywoodrath URLs
- Conflicting years-in-business claims (2012 vs 20+ years)
- Overconfident planning-permission copy
- Thin project pages (short copy, weak storytelling)
- Gallery is a dated thumbnail grid
- Multiple YouTube embeds loaded eagerly
- Sitemap 500; no legal pages; no OG
- Forms are a single short message box
- No sticky mobile quote CTA of production quality
- SEO copy is repetitive and grammatically weak

---

## Conversion opportunities

1. Lead with **There’s another room above you.**
2. Hero = finished attic, not tools.
3. Multi-step attic enquiry + short form fallback.
4. Sticky mobile **Call / Get quote**.
5. Case studies from real projects + videos.
6. Trust via real reviews (Gareth / Ken / Pat), not invented awards.
7. Professional confirmation + internal lead emails.
