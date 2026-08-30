import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryFiltered } from "@/components/gallery/GalleryFiltered";
import { galleryItems } from "@/data/gallery";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gallery",
  description: "Photographs of GM Carpentry attic conversions, stairs, en-suites, extensions and carpentry in Dublin.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <section className="container-site py-16 md:py-24">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />
      <SectionHeading
        eyebrow="Work"
        title="Real rooms. Real stairs."
        lede="Every image is from the live GM Carpentry website. Filter by the work you care about."
      />
      <div className="mt-10">
        <GalleryFiltered items={galleryItems} />
      </div>
    </section>
  );
}
