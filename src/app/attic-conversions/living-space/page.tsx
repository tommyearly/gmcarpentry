import { ServicePage } from "@/components/templates/ServicePage";
import { homeFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Convert Attic to Living Space Dublin",
  description:
    "Convert an unused Dublin attic into living space — office, sitting room or playroom. GM Carpentry assesses the roof on site.",
  path: "/attic-conversions/living-space",
});

export default function LivingSpacePage() {
  return (
    <ServicePage
      content={{
        path: "/attic-conversions/living-space",
        title: "Attic living space",
        eyebrow: "Space for life",
        h1: (
          <>
            Space <span className="display-serif text-gold-bright">for life.</span>
          </>
        ),
        lede: "The attic is often the last unused volume in the house. Making it liveable is less about furniture and more about access, height, light and a floor that can take everyday use.",
        hero: { src: "/images/attic-conversions/attic-room-1.jpg", alt: "Converted attic used as living space" },
        enquiryType: "full-attic",
        projectSlugs: ["clonsilla", "hollywoodrath"],
        showPlanning: true,
        related: [
          { label: "Attic conversions", href: "/attic-conversions" },
          { label: "Loft conversion", href: "/loft-conversion" },
          { label: "Modern conversion", href: "/attic-conversions/modern" },
        ],
        faqs: homeFaqs,
        sections: [
          {
            title: "Is the roof suitable?",
            body: (
              <p>
                The current living-space page asks the right questions: enough roof volume, enough internal height, usable floor, and a way in that is more than a hatch. Roof pitch, weather-tightness and structure matter. GM determine this on inspection — not from a photograph you email in isolation.
              </p>
            ),
          },
          {
            title: "Bedroom versus living room",
            body: (
              <p>
                A sitting room, office or playroom is one thing. Calling a converted attic a bedroom can have planning and Building Regulation implications. We will not tell you every attic can legally become a bedroom. That distinction is why a visit exists.
              </p>
            ),
          },
        ],
      }}
    />
  );
}
