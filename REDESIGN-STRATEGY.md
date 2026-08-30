# Redesign strategy — GM Carpentry & Construction

## Positioning

**Dublin attic-conversion specialists** who can also handle extensions, renovations, and carpentry.  
Not a generic builder. Not a kitchen brand. Not a handyman list.

## Primary customer

Dublin homeowners (often families) who need another bedroom, office, en-suite, or living space and would rather use the roof they already have than move house.

## Big creative idea

# THERE'S ANOTHER ROOM ABOVE YOU.

Subline: **GM Carpentry & Construction transforms unused Dublin attic spaces into beautifully finished rooms designed around the way you live.**

Journey: See the possibility → see real GM projects → trust the people → request a free consultation.

## Design direction

Architectural drawing × finished interior × craft.  
Roofline motif from the existing logo, refined. No hammers, hard hats, or construction-tape clichés.

## Colour system

Derived from the live logo (charcoal + construction yellow + grey roofline), then refined so it feels like timber and architecture rather than hazard tape.

| Token | Hex | Role |
| --- | --- | --- |
| `--gm-charcoal` | `#141614` | Ink, header, footer |
| `--gm-ink` | `#1C211C` | Body text |
| `--gm-gold` | `#C9A227` | Refined logo yellow — CTAs, accents |
| `--gm-gold-bright` | `#E0C04A` | Hover / highlight |
| `--gm-cream` | `#F4F0E8` | Page wash |
| `--gm-white` | `#FBFAF7` | Surfaces |
| `--gm-limestone` | `#D8D4CB` | Borders, lines |
| `--gm-timber` | `#B77A45` | Warm secondary accent |
| `--gm-sage` | `#809083` | Muted support |
| `--gm-forest` | `#1E2E22` | Deep panels |

Existing **logo file is retained**. Presentation is modernised around it.

## Typography

- Display / UI: **Manrope** (`next/font`)
- Editorial accent: **Instrument Serif**
- Hero: `clamp(4rem, 8vw, 8.5rem)`
- Section: `clamp(2.6rem, 5vw, 5.5rem)`
- Body: 18–20px desktop, 16–18px mobile

## Imagery

Real GM photography first. Hero = finished attic bedroom with roof window. Project galleries from Clonsilla, Hansfield, Hollywoodrath, Swords. Stairs and en-suite from live assets. No AI interiors replacing real work.

## Project strategy

Four real case studies. Editorial cards, not a thumbnail dump. Videos click-to-load.

## Conversion strategy

Announcement bar + header phone + “Get a free consultation”.  
Multi-step attic form on `/contact`. Short form on service pages.  
Sticky mobile Call / Get quote.  
Customer + internal emails with `GM-YYYY-XXXXXX` references.

## Mobile strategy

Logo + call + menu. Large menu. Safe-area sticky CTA. Forms use `tel` / `email` input modes.

## Animation

Roofline transformation (unused → planned → built → lived in). Subtle reveals. `prefers-reduced-motion` respected. No scroll hijack.
