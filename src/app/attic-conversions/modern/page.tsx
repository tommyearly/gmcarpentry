import { ServicePage } from "@/components/templates/ServicePage";
import { homeFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Full Modern Attic Conversion Dublin",
  description:
    "Full modern attic conversions in Dublin — insulation, stairs, windows and finishes. Free consultation with GM Carpentry & Construction.",
  path: "/attic-conversions/modern",
});

export default function ModernPage() {
  return (
    <ServicePage
      content={{
        path: "/attic-conversions/modern",
        title: "Modern attic conversion",
        eyebrow: "Finished rooms",
        h1: (
          <>
            Full modern <span className="display-serif text-gold-bright">attic conversion</span>
          </>
        ),
        lede: "Not a painted box under the rafters. A layout, a stair, light, insulation and a finish you can live with.",
        hero: { src: "/images/attic-conversions/finished-conversion.jpg", alt: "Full modern attic conversion interior" },
        enquiryType: "full-attic",
        projectSlugs: ["clonsilla", "hollywoodrath"],
        showPlanning: true,
        related: [
          { label: "Attic conversions", href: "/attic-conversions" },
          { label: "Dormer", href: "/attic-conversions/dormer" },
          { label: "Living space", href: "/attic-conversions/living-space" },
        ],
        faqs: homeFaqs.slice(0, 6),
        sections: [
          {
            title: "What “modern” means here",
            body: (
              <p>
                On the existing GM site, a full modern conversion is the complete job: consultation and planning, design, build, installation and project management. That includes creating a new room — playroom, office or extra bathroom — not leaving the attic as storage with a ladder.
              </p>
            ),
          },
          {
            title: "What typically goes into the room",
            body: (
              <p>
                Insulation, doors, windows, a finished floor and a stair that joins the landing. Dormers can be added where more headroom is needed. Electrical, plumbing and plastering are listed on the current modern-conversion page as work the team is qualified to coordinate — the exact mix is confirmed after the survey, not assumed from a brochure.
              </p>
            ),
          },
          {
            title: "From first visit",
            body: (
              <p>
                GM offers a free consultation to talk about what you want the attic to become and how that sits with the roof you have. Work starts when a plan is agreed. There is no published starting price and no invented “20 years” headline on this page.
              </p>
            ),
          },
        ],
      }}
    />
  );
}
