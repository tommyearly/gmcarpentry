import { ServicePage } from "@/components/templates/ServicePage";
import { homeFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Permanent Attic Stairs Dublin",
  description:
    "Permanent stairs for attic conversions in Dublin. Designed to sit with the existing landing — GM Carpentry & Construction.",
  path: "/attic-conversions/stairs",
});

export default function StairsPage() {
  return (
    <ServicePage
      content={{
        path: "/attic-conversions/stairs",
        title: "Attic stairs",
        eyebrow: "Part of the house",
        h1: (
          <>
            Not just access. <span className="display-serif text-gold-bright">Part of the house.</span>
          </>
        ),
        lede: "A hatch keeps the attic as storage. A permanent stair is how the new room joins the home you already walk through every day.",
        hero: { src: "/images/stairs/attic-stairs.jpg", alt: "Permanent attic staircase with charcoal banister" },
        enquiryType: "stairs",
        projectSlugs: ["swords", "clonsilla", "hollywoodrath"],
        related: [
          { label: "Attic conversions", href: "/attic-conversions" },
          { label: "Swords project", href: "/projects/swords" },
          { label: "Clonsilla project", href: "/projects/clonsilla" },
        ],
        faqs: [
          {
            q: "Why permanent stairs?",
            a: "They give safe, everyday access. A conversion used as a bedroom or living room needs more than a folding ladder.",
          },
          {
            q: "Will the stair match the existing house?",
            a: "On the Swords and Hollywoodrath project pages, GM say new attic stairs work best when they are designed to match the existing main stairs — the aim is that the new stair is hard to tell from the original.",
          },
          ...homeFaqs.filter((item) => item.q.includes("free")),
        ],
        sections: [
          {
            title: "Designed around the landing you have",
            body: (
              <p>
                Many Dublin houses only have a hatch. Once the attic is a room, the stair has to land somewhere useful without wrecking the floor below. GM describe taking measurements, presenting possible designs, and keeping the original floor plan intact where that is the brief. They also mention 3D imagery and CAD drawings on the current stairs page.
              </p>
            ),
          },
          {
            title: "Safety and regulations",
            body: (
              <p>
                The live site says designs are worked to the regulations. We will not publish universal going/rise rules here. Headroom, handrails and how the stair meets the existing landing are decided on site.
              </p>
            ),
          },
        ],
      }}
    />
  );
}
