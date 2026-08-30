import { ServicePage } from "@/components/templates/ServicePage";
import { homeFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Home Renovations Dublin",
  description:
    "Home renovations in Dublin with one point of contact and one invoice. Floors, walls, windows, bathrooms — GM Carpentry & Construction.",
  path: "/renovations",
});

export default function RenovationsPage() {
  return (
    <ServicePage
      content={{
        path: "/renovations",
        title: "Home renovations",
        eyebrow: "One project",
        h1: (
          <>
            One project. <span className="display-serif text-gold-bright">One point of contact.</span>
          </>
        ),
        lede: "The current renovations page is clear: one quote, one price, one invoice, and one person to talk to from start to finish.",
        hero: { src: "/images/carpentry/kitchen.png", alt: "Kitchen renovation carpentry" },
        enquiryType: "renovation",
        related: [
          { label: "Extensions", href: "/extensions" },
          { label: "Carpentry", href: "/carpentry" },
          { label: "Attic conversions", href: "/attic-conversions" },
        ],
        faqs: homeFaqs.filter((item) => item.q.includes("beyond") || item.q.includes("free") || item.q.includes("services")),
        sections: [
          {
            title: "What they list",
            body: (
              <p>
                Plumbing, heating, plastering, opening up walls, wood and laminate flooring, new windows and doors. Ania Kumar’s published review describes a 2015 gut of a ground floor — open-plan kitchen, wooden floors from the front door — and later custom presses, a stair cubby and window seats. That is renovation and carpentry, not an attic-only company pretending.
              </p>
            ),
          },
          {
            title: "How they run it",
            body: (
              <p>
                Hand-picked trades, one contact. They state renovations are completed on time, within the agreed price, with as little interruption as possible. We do not turn that into a legal guarantee on this page.
              </p>
            ),
          },
        ],
      }}
    />
  );
}
