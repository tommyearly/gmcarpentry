import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { enquiryBusinessEmail, enquiryCustomerEmail } from "@/lib/email";
import { buildMetadata } from "@/lib/seo";
import type { EnquiryRequest } from "@/types/enquiry";

export const metadata = buildMetadata({
  title: "Email preview",
  description: "Internal preview of GM Carpentry enquiry emails.",
  path: "/email-preview",
  noIndex: true,
});

const attic: EnquiryRequest = {
  id: "preview-attic",
  reference: "GM-2026-001001",
  createdAt: new Date().toISOString(),
  enquiryType: "full-attic",
  intendedUse: "bedroom-ensuite",
  area: "Castleknock",
  message: "We would like a bedroom and en-suite if the roof allows.",
  name: "Jane Murphy",
  phone: "087 000 0000",
  email: "customer@example.com",
  callbackTime: "After 5pm",
  sourceUrl: "https://gmcarpentry.ie/contact",
  referrer: "https://www.google.com/",
  utmSource: "google",
  utmMedium: "organic",
};

const extension: EnquiryRequest = {
  ...attic,
  id: "preview-ext",
  reference: "GM-2026-001002",
  enquiryType: "extension",
  intendedUse: "",
  area: "Swords",
  message: "Rear kitchen extension — looking for a conversation, not a price by email.",
};

const generic: EnquiryRequest = {
  ...attic,
  id: "preview-gen",
  reference: "GM-2026-001003",
  enquiryType: "unsure",
  intendedUse: "other",
  area: "Dublin 15",
  message: "Not sure if we should convert or extend. Can someone visit?",
};

const previewMail = { imageMode: "url" as const };

const previews = [
  { id: "attic-customer", label: "Attic enquiry → customer", mail: enquiryCustomerEmail(attic, previewMail) },
  { id: "attic-business", label: "Attic enquiry → GM", mail: enquiryBusinessEmail(attic, previewMail) },
  { id: "ext-customer", label: "Extension enquiry → customer", mail: enquiryCustomerEmail(extension, previewMail) },
  { id: "ext-business", label: "Extension enquiry → GM", mail: enquiryBusinessEmail(extension, previewMail) },
  { id: "gen-customer", label: "Generic enquiry → customer", mail: enquiryCustomerEmail(generic, previewMail) },
  { id: "gen-business", label: "Generic enquiry → GM", mail: enquiryBusinessEmail(generic, previewMail) },
];

export default function EmailPreviewPage() {
  return (
    <section className="container-site py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Email preview" }]} />
      <h1 className="section-title text-charcoal">Email template preview</h1>
      <p className="lead mt-4">Internal only. noindex. Each live enquiry sends the customer email and the GM inbox email.</p>
      <div className="mt-10 space-y-10">
        {previews.map((preview) => (
          <article key={preview.id} className="overflow-hidden border border-limestone bg-white">
            <div className="border-b border-limestone px-5 py-4">
              <h2 className="text-lg font-semibold">{preview.label}</h2>
              <p className="text-sm text-muted">{preview.mail.subject}</p>
            </div>
            <iframe title={preview.label} srcDoc={preview.mail.html} className="h-[720px] w-full bg-cream" />
          </article>
        ))}
      </div>
    </section>
  );
}
