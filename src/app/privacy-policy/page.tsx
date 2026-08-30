import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { business } from "@/config/business";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How GM Carpentry & Construction handles enquiry data.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <article className="container-site prose-gm max-w-3xl py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <h1 className="section-title text-charcoal">Privacy Policy</h1>
      <p className="mt-6 text-muted">
        {business.name} (“we”) collect the name, phone number, email address, area and project details you type into our enquiry forms so we can respond to your request. We also receive technical data such as a referrer URL and any UTM parameters present on the page, which helps us see how you found the site.
      </p>
      <p className="mt-4 text-muted">
        Forms are processed on our hosting platform and emailed to our inbox via our email provider. We do not sell your details. We keep enquiry records for as long as we need them to manage the conversation and our legal obligations, then delete or archive them.
      </p>
      <p className="mt-4 text-muted">
        If reCAPTCHA is enabled, Google processes a security token under their terms. Analytics tools run only when we have configured them.
      </p>
      <p className="mt-4 text-muted">
        To ask about your data, email {business.email} or write to {business.address.display}.
      </p>
    </article>
  );
}
