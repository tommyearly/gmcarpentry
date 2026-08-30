import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { TrackedTelLink } from "@/components/seo/TrackedTelLink";
import { business, displayEmail, displayPhone, mailtoHref } from "@/config/business";
import { buildMetadata } from "@/lib/seo";
import { Reveal } from "@/components/motion/Reveal";
import { GoogleTrustBadge } from "@/components/reviews/GoogleTrustBadge";
import { getGoogleBusinessReviews } from "@/lib/google-reviews";

export const metadata = buildMetadata({
  title: "Free Consultation | Contact",
  description:
    "Request a free attic consultation and estimate from GM Carpentry & Construction. Call 087 615 9429 or send a project enquiry.",
  path: "/contact",
});

export default function ContactPage() {
  const googleReviews = getGoogleBusinessReviews();

  return (
    <section className="container-site grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
      <Reveal>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        <p className="eyebrow mb-4">Free consultation &amp; estimate</p>
        <h1 className="display-md text-purple-deep">
          See what’s possible with your attic
        </h1>
        <p className="lead mt-5">
          Tell us a little about your home and what you’d like to create. GM can arrange a visit, take measurements and talk through options. Submitting the form is a request — not a confirmed booking.
        </p>
        <dl className="mt-8 space-y-3 text-muted">
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.16em] text-subtle">Phone</dt>
            <dd>
              <TrackedTelLink source="contact" className="font-semibold text-charcoal hover:text-gold">
                {displayPhone()}
              </TrackedTelLink>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.16em] text-subtle">Email</dt>
            <dd>
              <a href={mailtoHref()} className="font-semibold text-charcoal hover:text-gold">
                {displayEmail()}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.16em] text-subtle">Based</dt>
            <dd>{business.address.display}</dd>
          </div>
        </dl>
        <GoogleTrustBadge data={googleReviews} className="mt-8" />
      </Reveal>
      <Reveal delay={80}>
        <ConsultationForm />
      </Reveal>
    </section>
  );
}
