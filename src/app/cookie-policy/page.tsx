import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: "Cookies used on gmcarpentry.ie.",
  path: "/cookie-policy",
});

export default function CookiePage() {
  return (
    <article className="container-site max-w-3xl py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]} />
      <h1 className="section-title text-charcoal">Cookie Policy</h1>
      <p className="mt-6 text-muted">
        We use a small essential cookie (or localStorage flag) so the cookie notice stays dismissed. If Google Analytics or Microsoft Clarity are configured, those products set their own cookies as described in their documentation. reCAPTCHA may set cookies when the enquiry form is used.
      </p>
    </article>
  );
}
