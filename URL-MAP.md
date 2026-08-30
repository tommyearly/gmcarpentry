# URL Map — GM Carpentry & Construction

**Canonical host:** `https://gmcarpentry.ie` (apex, matching live homepage canonical)  
**www:** 301 `https://www.gmcarpentry.ie/*` → `https://gmcarpentry.ie/*`  
**Strategy:** Clean App Router URLs as canonical. One-hop 301 from every live `.html` URL. The historical typo `/attic-converstions.html` is preserved as a redirect, never as a public canonical.

| Existing URL | New Canonical URL | Keep existing as public? | 301? | Internal links updated? | Notes |
| --- | --- | --- | --- | --- | --- |
| `/` | `/` | Yes | No | Yes | Homepage |
| `/about.html` | `/about` | Via 301 | Yes | Yes | |
| `/services.html` | `/attic-conversions` | Via 301 | Yes | Yes | Services hub was attic-led; map to primary service |
| `/contact.html` | `/contact` | Via 301 | Yes | Yes | Free consultation experience |
| `/recent-projects.html` | `/projects` | Via 301 | Yes | Yes | |
| `/gallery.html` | `/gallery` | Via 301 | Yes | Yes | |
| `/portfolio.html` | `/gallery` | Via 301 | Yes | Yes | Duplicate gallery |
| `/video.html` | `/videos` | Via 301 | Yes | Yes | |
| `/attic-converstions.html` | `/attic-conversions` | Via 301 only | Yes | Yes | **Do not “fix” without 301** |
| `/full-modern-attic-conversion-dublin.html` | `/attic-conversions/modern` | Via 301 | Yes | Yes | |
| `/dormer-attic-conversion.html` | `/attic-conversions/dormer` | Via 301 | Yes | Yes | |
| `/en-suite-attic-conversion.html` | `/attic-conversions/en-suite` | Via 301 | Yes | Yes | |
| `/attic-conversion-with-stairs.html` | `/attic-conversions/stairs` | Via 301 | Yes | Yes | `/attic-stairs.html` is 404 — new clean URL is fine |
| `/attic-flooring.html` | `/attic-conversions/flooring` | Via 301 | Yes | Yes | |
| `/attic-living-space.html` | `/attic-conversions/living-space` | Via 301 | Yes | Yes | |
| `/loft-conversion.html` | `/loft-conversion` | Via 301 | Yes | Yes | Keep loft as its own indexed topic |
| `/extensions.html` | `/extensions` | Via 301 | Yes | Yes | |
| `/renovations.html` | `/renovations` | Via 301 | Yes | Yes | |
| `/general-carpentry-services.html` | `/carpentry` | Via 301 | Yes | Yes | |
| `/attic-conversion-clonsilla.html` | `/projects/clonsilla` | Via 301 | Yes | Yes | |
| `/attic-conversion-hansfield.html` | `/projects/hansfield` | Via 301 | Yes | Yes | |
| `/attic-conversion-hollywoodrath.html` | `/projects/hollywoodrath` | Via 301 | Yes | Yes | |
| `/attic-conversions-hollywoodrath.html` | `/projects/hollywoodrath` | Via 301 | Yes | Yes | Duplicate |
| `/attic-conversion-swords.html` | `/projects/swords` | Via 301 | Yes | Yes | |
| — | `/advice` | New | — | Yes | FAQ / planning advice hub |
| — | `/privacy-policy` | New | — | Yes | Did not exist |
| — | `/cookie-policy` | New | — | Yes | Did not exist |
| — | `/terms` | New | — | Yes | Did not exist |
| `/email-preview` | `/email-preview` | Dev/internal | No | N/A | `noindex` — excluded from sitemap |
| `/email-signature` | `/email-signature` | Internal | No | N/A | `noindex` |
| `attics.gmcarpentry.ie` | Unchanged | External microsite | No | Link only if useful | Out of scope for this host |

No redirect chains. Old URL → final canonical in one hop.
