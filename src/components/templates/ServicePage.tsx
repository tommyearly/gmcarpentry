import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ImageOverlay } from "@/components/ui/ImageOverlay";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { ShortEnquiryForm } from "@/components/forms/ShortEnquiryForm";
import { ProjectCard } from "@/components/home/ProjectCard";
import type { FAQ } from "@/data/faqs";
import { planningNote } from "@/data/faqs";
import { projects } from "@/data/projects";
import { business, displayPhone, telHref } from "@/config/business";
import { absoluteUrl } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { GoogleTrustBadge } from "@/components/reviews/GoogleTrustBadge";
import { getGoogleBusinessReviews } from "@/lib/google-reviews";

export type ServiceContent = {
  path: string;
  title: string;
  eyebrow: string;
  h1: React.ReactNode;
  lede: string;
  hero: { src: string; alt: string };
  enquiryType: string;
  related: { label: string; href: string }[];
  projectSlugs?: string[];
  faqs: FAQ[];
  sections: { title: string; body: React.ReactNode }[];
  showPlanning?: boolean;
};

export function ServicePage({ content }: { content: ServiceContent }) {
  const googleReviews = getGoogleBusinessReviews();
  const relatedProjects = projects.filter((project) => content.projectSlugs?.includes(project.slug));
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title,
    provider: { "@type": "LocalBusiness", name: business.name, telephone: "+353876159429" },
    areaServed: "Dublin",
    url: absoluteUrl(content.path),
  };

  return (
    <>
      <StructuredData data={serviceSchema} />
      <section className="relative overflow-hidden">
        <ImageOverlay
          src={content.hero.src}
          alt={content.hero.alt}
          overlayDirection="ltr"
          overlayStrength="medium"
          priority
          minHeightClass="min-h-[28rem]"
          sizes="100vw"
          contentClassName="hero-copy container-site py-14 md:py-20"
        >
          <Breadcrumbs
            light
            items={
              content.path.startsWith("/attic-conversions/")
                ? [
                    { label: "Home", href: "/" },
                    { label: "Attic conversions", href: "/attic-conversions" },
                    { label: content.title },
                  ]
                : [
                    { label: "Home", href: "/" },
                    { label: content.title },
                  ]
            }
          />
          <p className="eyebrow mb-4 text-white">{content.eyebrow}</p>
          <h1 className="display max-w-4xl text-white">{content.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{content.lede}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Get a Free Consultation
            </Button>
            <Button href={telHref()} variant="ghost" size="lg">
              <Phone className="icon-phone size-5 text-gold-bright" />
              Call {displayPhone()}
            </Button>
          </div>
          <GoogleTrustBadge data={googleReviews} variant="hero" />
        </ImageOverlay>
      </section>

      <article className="container-site grid gap-12 py-16 lg:grid-cols-[1.4fr_0.8fr] lg:py-24">
        <div className="space-y-12">
          {content.sections.map((section) => (
            <Reveal as="section" key={section.title}>
              <h2 className="h3 text-purple-deep">{section.title}</h2>
              <div className="mt-4 space-y-4 text-text-muted">{section.body}</div>
            </Reveal>
          ))}
          {content.showPlanning ? <p className="text-sm text-text-muted">{planningNote}</p> : null}
        </div>
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <ShortEnquiryForm defaultType={content.enquiryType} />
            <GoogleTrustBadge data={googleReviews} className="mt-4" />
          </Reveal>
        </aside>
      </article>

      {relatedProjects.length ? (
        <section className="container-site pb-16">
          <h2 className="section-title text-text">Related projects</h2>
          <Stagger className="mt-8 grid gap-6 md:grid-cols-2">
            {relatedProjects.map((project, index) => (
              <StaggerItem key={project.slug} index={index}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      ) : null}

      <section className="container-site pb-16">
        <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.16em] text-purple">Related services</h2>
        <div className="flex flex-wrap gap-3">
          {content.related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-purple/15 bg-white px-4 py-2 text-sm font-semibold text-purple-deep hover:bg-purple-soft"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="container-site pb-24">
        <FAQAccordion items={content.faqs} heading="Questions people actually ask" />
      </section>
    </>
  );
}
