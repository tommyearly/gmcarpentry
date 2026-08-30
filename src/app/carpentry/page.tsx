import { ServicePage } from "@/components/templates/ServicePage";
import { homeFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "General Carpentry Dublin",
  description:
    "Carpentry in Dublin — doors, flooring, built-in wardrobes, decking, stairs and kitchens. GM Carpentry & Construction.",
  path: "/carpentry",
});

export default function CarpentryPage() {
  return (
    <ServicePage
      content={{
        path: "/carpentry",
        title: "General carpentry",
        eyebrow: "The details",
        h1: (
          <>
            The details <span className="display-serif text-gold-bright">make the house.</span>
          </>
        ),
        lede: "Doors, floors, wardrobes, decking, stairs and kitchens — the carpentry list on the live GM site, not an SEO wall of every trade in Ireland.",
        hero: { src: "/images/carpentry/wardrobe.png", alt: "Custom built-in wardrobe by GM Carpentry" },
        enquiryType: "carpentry",
        related: [
          { label: "Attic stairs", href: "/attic-conversions/stairs" },
          { label: "Renovations", href: "/renovations" },
          { label: "Extensions", href: "/extensions" },
        ],
        faqs: homeFaqs.filter((item) => item.q.includes("services") || item.q.includes("free")),
        sections: [
          {
            title: "What they actually list",
            body: (
              <p>
                A range of doors and flooring, custom built-in wardrobes, decking, stairs and kitchens. The about page also mentions banisters, roofs, kitchen refacing and complete bathrooms as part of a wider construction offer. If you need a single wardrobe or a full kitchen, say so on the form — this is not a separate company.
              </p>
            ),
          },
          {
            title: "Reviews beyond attics",
            body: (
              <p>
                Emma Marshall wrote about curtain poles and a Roman blind with Gareth and Ken. More Living Burger wrote about laminate flooring, a worktop and hall panelling. Those sit on the videos page as published customer words. They show the carpentry side of the business without inventing a shopfront we have not seen.
              </p>
            ),
          },
        ],
      }}
    />
  );
}
