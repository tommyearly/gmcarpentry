import { ServicePage } from "@/components/templates/ServicePage";
import { homeFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Attic Conversions Dublin",
  description:
    "Attic conversions in Dublin by GM Carpentry & Construction. Turn unused roof space into a bedroom, office, en-suite or living room. Free consultation — 087 615 9429.",
  path: "/attic-conversions",
});

export default function AtticConversionsPage() {
  return (
    <ServicePage
      content={{
        path: "/attic-conversions",
        title: "Attic conversions Dublin",
        eyebrow: "Primary service",
        h1: (
          <>
            Attic conversions <span className="display-serif text-gold-bright">Dublin</span>
          </>
        ),
        lede: "The room is already above you. GM Carpentry specialises in turning unused Dublin roof space into a finished part of the house — stairs, light, floor and all.",
        hero: { src: "/images/home/hero-attic-bedroom.jpg", alt: "Finished Dublin attic conversion bedroom with a roof window" },
        enquiryType: "full-attic",
        projectSlugs: ["clonsilla", "hansfield", "hollywoodrath", "swords"],
        showPlanning: true,
        related: [
          { label: "Modern conversion", href: "/attic-conversions/modern" },
          { label: "Dormer", href: "/attic-conversions/dormer" },
          { label: "En-suite", href: "/attic-conversions/en-suite" },
          { label: "Stairs", href: "/attic-conversions/stairs" },
          { label: "Loft conversion", href: "/loft-conversion" },
        ],
        faqs: homeFaqs,
        sections: [
          {
            title: "Why convert?",
            body: (
              <>
                <p>
                  Most Irish houses already have a volume above the first-floor ceiling that is used for boxes. A conversion is the work of making that volume a room: a floor you can walk on, a stair you can use every day, light, insulation and a finish that matches how you live.
                </p>
                <p>
                  People come to GM for another bedroom, a desk with a door, a playroom, or a sitting room that does not eat the garden. The company is Dublin-based, in Priest Town, Kilbride, Dublin 15, and the live site states they serve Dublin and other counties.
                </p>
              </>
            ),
          },
          {
            title: "What could it become?",
            body: (
              <p>
                Bedroom, home office, playroom, gym, movie room, study, or a quieter living space. An en-suite is possible only when space, height and water supply allow — that is a site conversation, not a promise on a webpage. Not every converted attic can be treated as a legal bedroom; that depends on the finished room and the relevant rules.
              </p>
            ),
          },
          {
            title: "Conversion options",
            body: (
              <p>
                A modern conversion stays largely inside the existing roof and relies on roof windows, a proper stair and a finished floor. A dormer adds headroom and light by changing the roof. Stairs, flooring and an en-suite are pieces of the same story, not separate hobbies. GM describes handling the project from the first conversation through the build.
              </p>
            ),
          },
          {
            title: "How it works",
            body: (
              <p>
                The current site offers a free visit, measurements, a conversation about options, and a free quotation. Reviews mention daily clean-downs and one named owner — Gareth — as the person customers deal with. We do not publish a fixed programme or a starting price.
              </p>
            ),
          },
          {
            title: "Cost",
            body: (
              <p>
                Cost follows the size of the roof, the stair, windows or dormers, an en-suite if there is one, finishes, and any structural work. Call 087 615 9429 or use the form for an estimate after a visit — not a number invented for search engines.
              </p>
            ),
          },
        ],
      }}
    />
  );
}
