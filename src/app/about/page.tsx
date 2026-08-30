import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ImageOverlay } from "@/components/ui/ImageOverlay";
import { business } from "@/config/business";
import { buildMetadata } from "@/lib/seo";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { GoogleTrustBadge } from "@/components/reviews/GoogleTrustBadge";
import { getGoogleBusinessReviews } from "@/lib/google-reviews";

export const metadata = buildMetadata({
  title: "About GM Carpentry & Construction",
  description:
    "Dublin attic conversion specialists based in Priest Town, Kilbride, Dublin 15. Meet the people customers name in their reviews.",
  path: "/about",
});

export default function AboutPage() {
  const googleReviews = getGoogleBusinessReviews();

  return (
    <>
      <section className="relative overflow-hidden">
        <ImageOverlay
          src="/images/stairs/attic-stairs-2.jpg"
          alt="Attic staircase built by GM Carpentry"
          overlayDirection="ltr"
          overlayStrength="medium"
          priority
          minHeightClass="min-h-[22rem]"
          sizes="100vw"
          contentClassName="hero-copy container-site py-14 md:py-20"
        >
          <Breadcrumbs light items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <p className="eyebrow mb-4 text-white">The company</p>
          <h1 className="display max-w-4xl text-white">Built Around Good Work</h1>
        </ImageOverlay>
      </section>
      <article className="container-site grid gap-12 py-16 lg:grid-cols-2">
        <Reveal className="space-y-6 text-text-muted">
          <p>
            GM Carpentry &amp; Construction are Dublin-based building contractors who specialise in attic conversions and also take on residential and commercial construction: renovations, extensions, carpentry, property maintenance, bathroom fittings and insulation upgrading — as listed on the current About page.
          </p>
          <p>
            Customers consistently name <strong className="text-text">Gareth</strong> as the person they deal with. One Google review calls him the owner. Ken and Pat are named on the Clonsilla conversion. Other reviews thank Kyle, Anto, Amir and Brian. We will not invent biographies beyond that.
          </p>
          <p>
            The company says they have grown through referrals, that they are fully insured, and that they pay attention to detail so jobs finish on time and within the quoted price. Reviews mention evening clean-downs and being kept informed. That is the human version of “project coordination.”
          </p>
          <p>
            We do not publish years in business here. The live site currently says both “since 2012” and “over 20 years” on the same attic page. Until that is settled, the work and the reviews do the talking.
          </p>
          <p>
            Based in {business.address.display}. Call {business.phone} or write to {business.email}.
          </p>
          <Button href="/contact">Get a Free Consultation</Button>
          <GoogleTrustBadge data={googleReviews} />
        </Reveal>
        <ImageReveal className="relative min-h-[420px] overflow-hidden rounded-[1.4rem]">
          <Image src="/images/home/hero-attic-bedroom.jpg" alt="Finished attic conversion" fill className="object-cover" sizes="50vw" />
        </ImageReveal>
      </article>
    </>
  );
}
