import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoCard } from "@/components/home/VideoCard";
import { reviews } from "@/data/reviews";
import { videos } from "@/data/videos";
import { absoluteUrl } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Attic Conversion Videos Dublin",
  description: "Watch GM Carpentry attic conversion videos — finished Dublin rooms, a home office conversion, and an attic bathroom.",
  path: "/videos",
});

export default function VideosPage() {
  const schema = videos.map((video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: absoluteUrl(video.poster),
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
  }));

  return (
    <section className="container-site py-16 md:py-24">
      <StructuredData data={schema} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Videos" }]} />
      <SectionHeading eyebrow="See the transformation" title="Project videos." lede="Click to load YouTube. We do not invent upload dates." />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      <h2 className="mt-20 section-title text-charcoal">Reviews published with the videos</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {reviews.slice(5).map((review) => (
          <blockquote key={review.name} className="border border-limestone bg-white p-6">
            <p className="text-charcoal">“{review.quote}”</p>
            <footer className="mt-4 text-sm text-muted">{review.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
