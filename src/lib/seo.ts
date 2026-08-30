import type { Metadata } from "next";
import { business } from "@/config/business";
import { absoluteUrl } from "@/lib/utils";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage = "/images/og/og-attic.jpg",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(business.name) ? title : `${title} | ${business.name}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: business.name,
      locale: "en_IE",
      type: "website",
      images: [{ url: absoluteUrl(ogImage), width: 1000, height: 750, alt: business.tagline }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(ogImage)],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
