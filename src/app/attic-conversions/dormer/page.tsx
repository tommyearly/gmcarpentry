import { ServicePage } from "@/components/templates/ServicePage";
import { homeFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dormer Attic Conversion Dublin",
  description:
    "Dormer attic conversions in Dublin for extra headroom, light and usable floor. Planning depends on the roof — GM Carpentry discusses this on site.",
  path: "/attic-conversions/dormer",
});

export default function DormerPage() {
  return (
    <ServicePage
      content={{
        path: "/attic-conversions/dormer",
        title: "Dormer attic conversion",
        eyebrow: "Headroom and light",
        h1: (
          <>
            Dormer attic <span className="display-serif text-gold-bright">conversion</span>
          </>
        ),
        lede: "A dormer is built into the roof to increase the usable volume. It can improve light, height and ventilation — when the house and the rules allow it.",
        hero: { src: "/images/dormer/dormer-window.jpg", alt: "Dormer window on a Dublin attic conversion" },
        enquiryType: "dormer",
        projectSlugs: ["hollywoodrath"],
        showPlanning: true,
        related: [
          { label: "Attic conversions", href: "/attic-conversions" },
          { label: "Modern conversion", href: "/attic-conversions/modern" },
          { label: "Stairs", href: "/attic-conversions/stairs" },
        ],
        faqs: [
          {
            q: "What is a dormer attic conversion?",
            a: "A dormer extends the roof so the room inside gains height and, usually, a taller window. It is one way to make more of a shallow or tight roof than roof windows alone.",
          },
          {
            q: "Does a dormer need planning permission?",
            a: "It depends. Changing the outside of the roof is not the same as working entirely inside it. Do not assume a dormer is automatically exempt. GM can discuss your house during a free visit. Check official guidance and your local planning authority.",
          },
          ...homeFaqs.filter((item) => item.q.includes("cost") || item.q.includes("free")),
        ],
        sections: [
          {
            title: "Why people ask for a dormer",
            body: (
              <p>
                The live GM copy is straightforward: a dormer attic is built into the roof to increase space, and a dormer window is one of the better ways to light a room, raise useful height and help ventilation. That is the customer reason. The construction reason is that some roofs simply do not give standing height without changing the plane of the roof.
              </p>
            ),
          },
          {
            title: "Planning — read this carefully",
            body: (
              <p>
                Older GM pages said dormers “don’t require planning permission” because they were “internal alterations.” That is not a statement we will repeat. A dormer changes the outside of the roof. Requirements depend on the design, the house and the planning authority. Building Regulations can apply in any case. Use the consultation to talk about your roof — not a webpage as legal advice.
              </p>
            ),
          },
          {
            title: "Free site visit",
            body: (
              <p>
                The current dormer page offers free site visits and quotes. That stays. We do not repeat unverified claims about hundreds of customers, bonding, or a 100% satisfaction guarantee.
              </p>
            ),
          },
        ],
      }}
    />
  );
}
