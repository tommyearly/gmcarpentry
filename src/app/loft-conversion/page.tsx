import { ServicePage } from "@/components/templates/ServicePage";
import { homeFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Loft Conversion Dublin",
  description:
    "Loft conversion specialists in Dublin. Same craft as an attic conversion — unused roof space finished as a room. GM Carpentry & Construction.",
  path: "/loft-conversion",
});

export default function LoftPage() {
  return (
    <ServicePage
      content={{
        path: "/loft-conversion",
        title: "Loft conversion Dublin",
        eyebrow: "Loft / attic",
        h1: (
          <>
            Loft conversion <span className="display-serif text-gold-bright">specialists in Dublin</span>
          </>
        ),
        lede: "In Ireland, loft and attic usually mean the same unused roof. This page keeps the loft search — the work is still a finished room with a stair, light and a floor.",
        hero: { src: "/images/attic-conversions/attic-room-2.jpg", alt: "Loft conversion finished as a room" },
        enquiryType: "full-attic",
        projectSlugs: ["clonsilla", "swords"],
        showPlanning: true,
        related: [
          { label: "Attic conversions", href: "/attic-conversions" },
          { label: "Living space", href: "/attic-conversions/living-space" },
        ],
        faqs: homeFaqs,
        sections: [
          {
            title: "Why people search “loft”",
            body: (
              <p>
                The existing loft page explains the practical idea: converting unused roof space can cost less than extending the house, and in a two-storey building it can add a meaningful amount of usable floor. We will not repeat a fixed “30%” as a promise. What you gain is the volume your roof actually has.
              </p>
            ),
          },
          {
            title: "What GM actually builds",
            body: (
              <p>
                Extra bedroom, playroom, movie room, bathroom, study or office — the same list as the attic pages, because it is the same trade. Bespoke layout, start-to-finish coordination, and a conversation about budget sit on the current loft page. Windows, colour and furniture are your choices; structure and access are the contractor’s.
              </p>
            ),
          },
        ],
      }}
    />
  );
}
