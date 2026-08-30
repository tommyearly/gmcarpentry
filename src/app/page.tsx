import { Hero } from "@/components/home/Hero";
import { HomeSections } from "@/components/home/HomeSections";
import { SiteSaleCard } from "@/components/home/SiteSaleCard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Attic Conversions Dublin | There's Another Room Above You",
  description:
    "Dublin attic conversion specialists. GM Carpentry & Construction turns unused roof space into bedrooms, offices, en-suites and living rooms. Free consultation — 087 615 9429.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeSections />
      <SiteSaleCard />
    </>
  );
}
