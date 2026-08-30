import { ServicePage } from "@/components/templates/ServicePage";
import { homeFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Home Extensions Dublin",
  description:
    "Rear and side home extensions in Dublin. When going up isn't the answer, GM Carpentry builds out. Free quote — 087 615 9429.",
  path: "/extensions",
});

export default function ExtensionsPage() {
  return (
    <ServicePage
      content={{
        path: "/extensions",
        title: "Home extensions Dublin",
        eyebrow: "Build out",
        h1: (
          <>
            When up isn’t the answer, <span className="display-serif text-gold-bright">build out.</span>
          </>
        ),
        lede: "Some houses need the garden more than the roof. GM offer rear and side extensions — extra rooms, kitchens, dining space, a downstairs bathroom — with a free quote after a conversation.",
        hero: { src: "/images/extensions/front-porch.png", alt: "External building work on a Dublin home" },
        enquiryType: "extension",
        related: [
          { label: "Renovations", href: "/renovations" },
          { label: "Attic conversions", href: "/attic-conversions" },
          { label: "Carpentry", href: "/carpentry" },
        ],
        faqs: [
          {
            q: "What kind of extensions?",
            a: "The current site lists small to large jobs, with a record of rear and side extensions. Reasons they name: extra room or bedroom, home office, kitchen, dining area, downstairs bathroom.",
          },
          {
            q: "Do you only work in Dublin?",
            a: "Attic work is presented as Dublin and surrounding areas. The extensions page states that for extensions and renovations they cover all counties in Ireland. Ask when you enquire.",
          },
          ...homeFaqs.filter((item) => item.q.includes("free")),
        ],
        showPlanning: true,
        sections: [
          {
            title: "Why extend instead of convert?",
            body: (
              <p>
                An attic is the first move when the roof can take a room. When it cannot — or when the extra space needs to sit on the ground floor — an extension is the honest answer. GM describe themselves as carpenters and builders with domestic and commercial experience. We will not invent planning outcomes or a catalogue of standard designs.
              </p>
            ),
          },
          {
            title: "How they describe the job",
            body: (
              <ul className="list-disc space-y-2 pl-5">
                <li>Disruption kept to a minimum</li>
                <li>Work carried out to a high standard</li>
                <li>Completed on time — as stated on the current extensions page</li>
              </ul>
            ),
          },
        ],
      }}
    />
  );
}
