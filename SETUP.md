# Setup — GM Carpentry & Construction website

## Install

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
npm run lint
```

## Environment

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, default `https://gmcarpentry.ie` |
| `NEXT_PUBLIC_PHONE` | Public phone |
| `NEXT_PUBLIC_EMAIL` | Public email |
| `CONTACT_TO_EMAIL` | Private inbox for lead notifications |
| `EMAIL_FROM` | Verified Resend from-address |
| `EMAIL_PROVIDER` | `resend` |
| `RESEND_API_KEY` | Server-only |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` | Optional v3. Skipped in local if unset |
| `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_CLARITY_ID` | Optional |
| `NEXT_PUBLIC_DESIGN_PANEL` | `true` to show the design control panel |

Never commit `.env.local` or API keys.

## Email

Forms POST to `/api/enquiry`. Each successful enquiry sends:

1. Customer confirmation  
2. Internal lead email  

Preview templates at `/email-preview` (`noindex`).  
Gmail/Outlook signature: `/email-signature` and `public/email-signature.html`.

Until `RESEND_API_KEY` and `EMAIL_FROM` are set, submissions return a clear error asking the visitor to call.

## Domain

Canonical: `https://gmcarpentry.ie`  
`www` → apex (308/301 via middleware + `next.config.ts`).  
Legacy `.html` URLs 301 to the new routes (see `URL-MAP.md`).

Point DNS to the host (Vercel or other Node host). After DNS, verify Resend domain for `gmcarpentry.ie`.

## Analytics

Phone, form, and CTA clicks fire `window.dataLayer` / custom events only when a tracker is configured. UTM query params are forwarded into the internal lead email.

## Design panel

Dev-only theme controls (colours, type scale, radius). Persists to `localStorage`. Disable in production unless `NEXT_PUBLIC_DESIGN_PANEL=true`.
