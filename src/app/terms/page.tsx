import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { business } from "@/config/business";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms",
  description: "Website terms for GM Carpentry & Construction.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="container-site max-w-3xl py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <h1 className="section-title text-charcoal">Terms</h1>
      <p className="mt-6 text-muted">
        This website describes services offered by {business.name}. Submitting a form is a request for contact, not a contract and not a confirmed booking. Any contract is formed only when we agree the work with you in writing. Information about planning and Building Regulations is general and is not professional advice. Call {business.phone} if something on the site is unclear.
      </p>
    </article>
  );
}
