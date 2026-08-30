import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFaqs, planningNote } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Attic Conversion Advice & FAQ Dublin",
  description:
    "Practical attic conversion questions for Dublin homeowners — planning, en-suites, stairs, cost variables and how GM Carpentry works.",
  path: "/advice",
});

export default function AdvicePage() {
  return (
    <section className="container-site py-16 md:py-24">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Advice" }]} />
      <SectionHeading
        eyebrow="Advice"
        title="Questions before you commit the roof."
        lede="Rewritten from the live site’s FAQs. Planning answers are qualified. No invented prices or programmes."
      />
      <div className="mt-12">
        <FAQAccordion items={homeFaqs} />
      </div>
      <aside className="surface mt-12 max-w-3xl p-6 text-text-muted">
        <h2 className="text-xl font-bold text-purple-deep">Planning &amp; Building Regulations</h2>
        <p className="mt-3">{planningNote}</p>
        <p className="mt-3">
          Official starting points:{" "}
          <a className="font-semibold underline-offset-2 hover:underline" href="https://www.gov.ie/en/publication/97e0d-planning-permission/" target="_blank" rel="noopener noreferrer">
            gov.ie on planning permission
          </a>
          . Your local planning authority has the last word on your house.
        </p>
      </aside>
    </section>
  );
}
