import type { Metadata } from "next";
import { Geist, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { PageTransition } from "@/components/motion/PageTransition";
import { Analytics } from "@/components/layout/Analytics";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { DesignPanel } from "@/components/design/DesignPanel";
import { StructuredData } from "@/components/seo/StructuredData";
import { business } from "@/config/business";
import { absoluteUrl } from "@/lib/utils";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gmcarpentry.ie"),
  title: {
    default: "Attic Conversions Dublin | GM Carpentry & Construction",
    template: "%s | GM Carpentry & Construction",
  },
  description: business.description,
  applicationName: business.name,
  icons: {
    icon: [{ url: "/images/logo/logo-mark.png", type: "image/png" }],
    apple: [{ url: "/images/logo/logo-mark.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    siteName: business.name,
    images: [{ url: "/images/og/og-attic.jpg", width: 1000, height: 750, alt: business.tagline }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor", "LocalBusiness"],
    name: business.name,
    url: business.domain,
    description: business.description,
    telephone: "+353876159429",
    email: business.email,
    image: absoluteUrl("/images/logo/logo.png"),
    logo: absoluteUrl("/images/logo/logo.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      postalCode: business.address.area,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    areaServed: ["Dublin", "Dublin 15", "County Dublin"],
    sameAs: [business.social.facebook, business.social.twitter],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: absoluteUrl("/"),
  };

  return (
    <html lang="en-IE" className={`${manrope.variable} ${geist.variable} js-motion`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-gold focus:px-4 focus:py-2 focus:text-purple-deep">
          Skip to content
        </a>
        <StructuredData data={[localBusiness, website]} />
        <ScrollProgress />
        <AnnouncementBar />
        <Header />
        <main id="main" className="pb-mobile-cta min-h-[60vh]">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <StickyMobileCTA />
        <CookieBanner />
        <Analytics />
        <DesignPanel />
      </body>
    </html>
  );
}
