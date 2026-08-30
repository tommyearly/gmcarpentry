import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const legacyRedirects = [
  ["/about.html", "/about"],
  ["/services.html", "/attic-conversions"],
  ["/contact.html", "/contact"],
  ["/recent-projects.html", "/projects"],
  ["/gallery.html", "/gallery"],
  ["/portfolio.html", "/gallery"],
  ["/video.html", "/videos"],
  ["/attic-converstions.html", "/attic-conversions"],
  ["/full-modern-attic-conversion-dublin.html", "/attic-conversions/modern"],
  ["/dormer-attic-conversion.html", "/attic-conversions/dormer"],
  ["/en-suite-attic-conversion.html", "/attic-conversions/en-suite"],
  ["/attic-conversion-with-stairs.html", "/attic-conversions/stairs"],
  ["/attic-flooring.html", "/attic-conversions/flooring"],
  ["/attic-living-space.html", "/attic-conversions/living-space"],
  ["/loft-conversion.html", "/loft-conversion"],
  ["/extensions.html", "/extensions"],
  ["/renovations.html", "/renovations"],
  ["/general-carpentry-services.html", "/carpentry"],
  ["/attic-conversion-clonsilla.html", "/projects/clonsilla"],
  ["/attic-conversion-hansfield.html", "/projects/hansfield"],
  ["/attic-conversion-hollywoodrath.html", "/projects/hollywoodrath"],
  ["/attic-conversions-hollywoodrath.html", "/projects/hollywoodrath"],
  ["/attic-conversion-swords.html", "/projects/swords"],
] as const;

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        source: "/images/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gmcarpentry.ie" }],
        destination: "https://gmcarpentry.ie/:path*",
        permanent: true,
      },
      ...legacyRedirects.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
