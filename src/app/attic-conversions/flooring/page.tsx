import { ServicePage } from "@/components/templates/ServicePage";
import { homeFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Attic Flooring Dublin",
  description:
    "Attic flooring in Dublin — from storage boards to a finished conversion floor. Free estimate from GM Carpentry.",
  path: "/attic-conversions/flooring",
});

export default function FlooringPage() {
  return (
    <ServicePage
      content={{
        path: "/attic-conversions/flooring",
        title: "Attic flooring",
        eyebrow: "A floor you can use",
        h1: (
          <>
            Turn unused roof space into space <span className="display-serif text-gold-bright">you can actually use.</span>
          </>
        ),
        lede: "There is a difference between boards over insulation for boxes, and a finished floor that is part of a conversion. GM offers both conversations — the right one depends on the roof.",
        hero: { src: "/images/carpentry/floor.png", alt: "Flooring installed by GM Carpentry" },
        enquiryType: "flooring",
        related: [
          { label: "Attic conversions", href: "/attic-conversions" },
          { label: "Living space", href: "/attic-conversions/living-space" },
          { label: "Carpentry", href: "/carpentry" },
        ],
        faqs: [
          {
            q: "Is attic flooring the same as a conversion?",
            a: "No. Flooring for storage is about a safe, walkable deck over the joists. A conversion floor is part of a finished room with insulation, access and a surface you can furnish. The current site talks about both extra storage and conversion work — say which you want when you call.",
          },
          {
            q: "Will it add a fixed percentage of floor space?",
            a: "Older copy mentioned “up to 50%.” We will not treat that as a fact for your house. The usable area depends on the roof and the structure.",
          },
          ...homeFaqs.filter((item) => item.q.includes("free")),
        ],
        sections: [
          {
            title: "Storage-oriented flooring",
            body: (
              <p>
                The existing flooring page is aimed at homeowners who need organised storage rather than a bedroom: a stronger, walkable deck than loose boards over insulation, installed to suit the layout. That can be a sensible first step. It is not automatically a habitable room.
              </p>
            ),
          },
          {
            title: "Finished conversion flooring",
            body: (
              <p>
                When the attic is becoming a room, the floor is part of the conversion — structure, insulation and a finish that matches the stair and the rest of the house. Project photographs on this site show light timber floors in completed rooms.
              </p>
            ),
          },
        ],
      }}
    />
  );
}
