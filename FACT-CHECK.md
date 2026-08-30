# Fact-check — GM Carpentry & Construction

Rule: if two pages conflict, do **not** pick the more impressive number. Use neutral wording until the owner verifies.

| Claim | URL | Conflict? | Verification Required? | Final Decision |
| --- | --- | --- | --- | --- |
| “We’ve been in business for over 20 years” | `/attic-converstions.html` H1/FAQ | **Yes** — same page later says “since 2012” | Yes | **Omit years.** Do not show 20+ or 2012 until owner confirms. |
| “We’ve been in business since 2012” | `/attic-converstions.html` body | Conflicts with 20+ years on same page | Yes | Omit. 2012→2026 is 14 years, not 20+. |
| “Over 20 years experience between them” | `/full-modern-attic-conversion-dublin.html` | Related to team experience, not company age | Yes | Omit numeric years. “Experienced, qualified tradesmen” is enough. |
| Structural engineer with “20+ years” / “20 years” | `attics.gmcarpentry.ie` | Not on main site; two wordings | Yes | Do **not** claim a named engineer or 20+ years. Homepage meta mentions “engineer overlooking project and certificates included” — phrase as: *Projects can include engineer oversight and certification where the work requires it.* |
| “Over 150 reviews” and “perfect 5 star rating” | `attics.gmcarpentry.ie` | Homepage widget showed **4.9 (181)** on 30 Aug 2026 | Yes | Do **not** hard-code rating/count or use `aggregateRating` schema. Link to Google reviews. |
| “Hundreds of customers” | `/dormer-attic-conversion.html` | Unverified | Yes | Omit. |
| “Licensed, insured, and bonded” | `/dormer-attic-conversion.html` | “Bonded” is US terminology | Yes | Use **fully insured** only (stated on `/about.html`). Omit licensed/bonded. |
| “100% satisfaction guarantee” | `/dormer-attic-conversion.html` | Unverified terms | Yes | Omit. About page says “all our work is guaranteed” without terms — do not invent a guarantee product. |
| “Attic conversions do not require planning permission” / “don’t require planning permission because they are classified as internal alterations” | `/dormer-attic-conversion.html`, `/en-suite-attic-conversion.html` | Overgeneralised; dormers alter the roof | **Yes — legal** | **Never repeat as fact.** Use: planning depends on the type and scope of conversion; external roof changes may affect requirements; Building Regulations can apply; discuss during consultation. Link official guidance. |
| “In most cases, attic conversions fall under permitted development rights” | `/attic-living-space.html` | Softer but still too certain | Yes | Qualify the same way. |
| “GM takes care of all necessary permits and inspections” | `/dormer-attic-conversion.html` FAQ | May overstate | Yes | Say GM can discuss what the project is likely to need. Do not promise they obtain every permit. |
| Increased property value / 30% more floor space / 50% more floor space | Loft + flooring pages | Generic marketing maths | Yes | Do not present as a guarantee. “Many Dublin homes have unused roof space that can become a usable room” is enough. |
| “Leading attic conversion company” / “top contractors in Ireland” | Homepage, about | Superlative, unverified | Yes | Do not use “leading” or “top in Ireland”. |
| “Fully insured” | `/about.html` | Stated by the business; no policy documents seen | Soft | May say **fully insured** as the company states it. Do not invent insurer, cover, or amounts. |
| “All our work is guaranteed” | `/about.html` | No terms | Yes | Do not publish guarantee wording beyond inviting the customer to ask about workmanship terms. |
| “Qualified professional tradesmen” | Site-wide footer | Consistent | Low | **Use.** |
| Free consultation / visit / measurements / free quotation | Contact, homepage, most service pages | Consistent | Low | **Use.** Do not imply a booking is confirmed. |
| One point of contact / one quote / one invoice for renovations | `/renovations.html` | Consistent on that page | Low | **Use on renovations page.** |
| Extensions: “we cover all counties in Ireland” | `/extensions.html` | Broader than attic “Dublin and other counties” | Soft | Attics: Dublin and surrounding areas. Extensions/renovations: Ireland-wide *as the live site states*, without inventing a branch network. |
| Base: Priest Town, Dublin 15 vs Priest Town, Kilbride, Co. Dublin | `/` FAQ vs `attics.gmcarpentry.ie` | Complementary, not contradictory | Soft | **Priest Town, Kilbride, Dublin 15** |
| Gareth is the owner | Harneet K Google review | Customer-stated | Low | May refer to Gareth as the owner *as customers do*. No invented biography. |
| Team: Ken, Pat, Kyle, Anto, Amir, Brian | Reviews / Clonsilla page | Named by customers | Low | May name them only in review context. |
| Clonsilla project: stairs + windows; Lisa review | Project page | Consistent | No | **Use.** |
| Hansfield: new stair + en-suite | Project page | Consistent | No | **Use.** Do not invent other features. |
| Hollywoodrath: extra living space; one URL mentions a matching stair | Two Hollywoodrath URLs differ slightly | Soft | Stair claim appears on `/attic-conversion-hollywoodrath.html` only. Prefer “extra living space”; mention stair only on that project if used. |
| Swords: stair matching existing main stairs | Project page | Consistent | No | **Use.** |
| 3-week job (Ollie Mac Craith) | Google review | Specific to that job | No | Quote in the review only. Do **not** publish “attic conversions take 3 weeks”. |
| New builds / commercial / SEAI / CIF / Safe Electric | Various service lists | No evidence of memberships | Yes | Do not invent accreditations. New builds / commercial remain *mentioned* only as the about page lists them — do not make them nav items. |
| Office hours, Eircode, landline, WhatsApp | Not published | — | Yes | **Do not invent.** |
| Cost / starting prices | Not published (only “call for estimate”) | — | — | **No prices.** |

## Planning / Building Regulations — implementation wording

> Planning requirements depend on the type and scope of the conversion. External roof alterations, including some dormers, can change what is needed. Building Regulations can apply even where planning permission does not. GM Carpentry can discuss your project during a free consultation. This website is not planning or legal advice. Official guidance: [gov.ie planning](https://www.gov.ie/en/publication/97e0d-planning-permission/) and your local planning authority.

Recommend owner/legal review of this wording before production launch.
