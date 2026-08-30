import { ServicePage } from "@/components/templates/ServicePage";
import { homeFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Attic Conversion with En-suite Dublin",
  description:
    "Attic conversions with an en-suite in Dublin. Feasibility depends on space, height and water supply. Free quotation — GM Carpentry.",
  path: "/attic-conversions/en-suite",
});

export default function EnsuitePage() {
  return (
    <ServicePage
      content={{
        path: "/attic-conversions/en-suite",
        title: "Attic with en-suite",
        eyebrow: "Bedroom above",
        h1: (
          <>
            Bedroom above. <span className="display-serif text-gold-bright">En-suite included — if it fits.</span>
          </>
        ),
        lede: "An attic bathroom is a high-value conversion when the roof, the floor and the water supply can take it. Hansfield is a completed GM example with a new stair and en-suite.",
        hero: { src: "/images/en-suite/en-suite.jpg", alt: "En-suite in an attic conversion" },
        enquiryType: "ensuite",
        projectSlugs: ["hansfield"],
        showPlanning: true,
        related: [
          { label: "Attic conversions", href: "/attic-conversions" },
          { label: "Hansfield project", href: "/projects/hansfield" },
          { label: "Stairs", href: "/attic-conversions/stairs" },
        ],
        faqs: homeFaqs.filter((item) => item.q.toLowerCase().includes("en-suite") || item.q.includes("free") || item.q.includes("planning")),
        sections: [
          {
            title: "Three things that decide it",
            body: (
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Space.</strong> The existing site says the corner beside the new stairs often takes less of the room. The other common place is the end wall.
                </li>
                <li>
                  <strong>Water.</strong> High-level fittings may need a new connection from the main rather than relying on an existing tank. Pressure matters for showers and taps.
                </li>
                <li>
                  <strong>Roof height.</strong> A shower needs enough height to stand without hitting the slope. A glass door needs a decent opening.
                </li>
              </ul>
            ),
          },
          {
            title: "What a small en-suite often includes",
            body: (
              <p>
                The current page describes an electric shower, glass door, toilet, basin, light and a Velux-style window in a compact room. That is a typical kit — not a specification for every house.
              </p>
            ),
          },
          {
            title: "Quotation",
            body: (
              <p>
                GM offers a free, no-obligation quotation. A visit is used to talk about the en-suite and the conversion together. Quotes on the live site are described as including the work required and a breakdown of cost — we will not invent a figure here.
              </p>
            ),
          },
        ],
      }}
    />
  );
}
