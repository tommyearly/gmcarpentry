import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/Button";
import { ImageOverlay } from "@/components/ui/ImageOverlay";
import { ShortEnquiryForm } from "@/components/forms/ShortEnquiryForm";
import { getProject } from "@/data/projects";
import { business } from "@/config/business";
import { absoluteUrl } from "@/lib/utils";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";

export function ProjectPage({ slug }: { slug: string }) {
  const project = getProject(slug);
  if (!project) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.name,
    description: project.summary,
    image: project.gallery.map((image) => absoluteUrl(image.src)),
  };

  return (
    <>
      <StructuredData data={schema} />
      <section className="relative overflow-hidden">
        <ImageOverlay
          src={project.hero.src}
          alt={project.hero.alt}
          overlayDirection="ltr"
          overlayStrength="medium"
          priority
          minHeightClass="min-h-[28rem]"
          sizes="100vw"
          contentClassName="hero-copy container-site py-14 md:py-20"
        >
          <Breadcrumbs
            light
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: project.location },
            ]}
          />
          <p className="eyebrow mb-4 text-white">
            {project.area}
          </p>
          <h1 className="display max-w-4xl text-white">
            {project.location}
            <br />
            {project.type}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">{project.summary}</p>
        </ImageOverlay>
      </section>

      <article className="container-site grid gap-12 py-16 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-10">
          <section>
            <h2 className="h3 text-purple-deep">Project overview</h2>
            <dl className="mt-4 grid gap-3 text-text-muted sm:grid-cols-2">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-subtle">Location</dt>
                <dd>
                  {project.location}, {project.area}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-subtle">Type</dt>
                <dd>{project.type}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-subtle">Verified features</dt>
                <dd>{project.features.join(" · ")}</dd>
              </div>
            </dl>
          </section>
          <section>
            <h2 className="h3 text-purple-deep">The brief</h2>
            <p className="mt-4 text-muted">{project.brief}</p>
          </section>
          <section>
            <h2 className="h3 text-purple-deep">The transformation</h2>
            <p className="mt-4 text-muted">{project.transformation}</p>
          </section>
          {project.review ? (
            <blockquote className="surface p-6">
              <p className="text-xl font-semibold leading-snug text-purple-deep">“{project.review.quote}”</p>
              <footer className="mt-4 text-sm text-muted">
                {project.review.name} — {project.review.sourceLabel}
              </footer>
            </blockquote>
          ) : null}
          <section>
            <h2 className="h3 text-purple-deep">Project gallery</h2>
            <div className="mt-6">
              <GalleryLightbox items={project.gallery} />
            </div>
          </section>
          <p>
            <Button href={project.relatedService.href} variant="outline">
              {project.relatedService.label}
            </Button>
          </p>
        </div>
        <aside>
          <ShortEnquiryForm defaultType="full-attic" />
          <div className="mt-6">
            <Button href="/contact" className="w-full">
              Discuss your attic
            </Button>
            <p className="mt-3 text-center text-sm text-muted">or call {business.phone}</p>
          </div>
        </aside>
      </article>
    </>
  );
}
