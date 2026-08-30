export type ServiceCard = {
  id: string;
  number: string;
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  summary: string;
};

export const atticOptions: ServiceCard[] = [
  {
    id: "modern",
    number: "01",
    title: "Full modern conversion",
    href: "/attic-conversions/modern",
    image: "/images/home/hero-attic-bedroom.jpg",
    imageAlt: "Finished modern attic bedroom with a roof window",
    summary: "Insulation, stairs, light and finishes — a room you can actually live in.",
  },
  {
    id: "dormer",
    number: "02",
    title: "Dormer conversion",
    href: "/attic-conversions/dormer",
    image: "/images/dormer/dormer-window.jpg",
    imageAlt: "Dormer window on a Dublin attic conversion",
    summary: "Extra headroom, light and floor that a simple roof window cannot always give.",
  },
  {
    id: "ensuite",
    number: "03",
    title: "Attic with en-suite",
    href: "/attic-conversions/en-suite",
    image: "/images/en-suite/en-suite.jpg",
    imageAlt: "En-suite in a converted Dublin attic",
    summary: "A bedroom above, with a bathroom if the space, height and water supply allow.",
  },
  {
    id: "stairs",
    number: "04",
    title: "Attic stairs",
    href: "/attic-conversions/stairs",
    image: "/images/stairs/attic-stairs.jpg",
    imageAlt: "Permanent staircase to a converted attic",
    summary: "Not a hatch. A stair that belongs with the rest of the house.",
  },
  {
    id: "flooring",
    number: "05",
    title: "Attic flooring",
    href: "/attic-conversions/flooring",
    image: "/images/carpentry/floor.png",
    imageAlt: "Flooring installed as part of usable attic space",
    summary: "From storage-grade boards to a finished floor you can furnish.",
  },
  {
    id: "living",
    number: "06",
    title: "Attic living space",
    href: "/attic-conversions/living-space",
    image: "/images/attic-conversions/finished-conversion.jpg",
    imageAlt: "Converted attic used as living space",
    summary: "Office, playroom, sitting room — space for how you actually live.",
  },
];

export const secondaryServices: ServiceCard[] = [
  {
    id: "extensions",
    number: "01",
    title: "Home extensions",
    href: "/extensions",
    image: "/images/extensions/front-porch.png",
    imageAlt: "Dublin home external building work by GM Carpentry",
    summary: "When up isn’t the answer — rear and side extensions, extra rooms, kitchens, downstairs bathrooms.",
  },
  {
    id: "renovations",
    number: "02",
    title: "Home renovations",
    href: "/renovations",
    image: "/images/carpentry/kitchen.png",
    imageAlt: "Kitchen renovation carpentry",
    summary: "One project, one point of contact, one invoice — floors, walls, windows, bathrooms and more.",
  },
  {
    id: "carpentry",
    number: "03",
    title: "General carpentry",
    href: "/carpentry",
    image: "/images/carpentry/wardrobe.png",
    imageAlt: "Custom built-in wardrobe by GM Carpentry",
    summary: "Doors, floors, wardrobes, stairs, decking and kitchens — the details that make the house.",
  },
];

export const outcomes = [
  {
    title: "Bedroom",
    href: "/attic-conversions",
    image: "/images/home/hero-attic-bedroom.jpg",
    alt: "Attic converted into a bedroom",
  },
  {
    title: "Home office",
    href: "/attic-conversions/living-space",
    image: "/images/attic-conversions/attic-room-1.jpg",
    alt: "Attic used as a home office",
  },
  {
    title: "En-suite suite",
    href: "/attic-conversions/en-suite",
    image: "/images/en-suite/bathroom-hero.jpg",
    alt: "Attic bedroom with an en-suite",
  },
  {
    title: "Children’s room",
    href: "/attic-conversions/living-space",
    image: "/images/attic-conversions/attic-room-2.jpg",
    alt: "Attic converted for family use",
  },
  {
    title: "Living space",
    href: "/attic-conversions/living-space",
    image: "/images/attic-conversions/finished-conversion.jpg",
    alt: "Finished attic living room",
  },
  {
    title: "Storage you can use",
    href: "/attic-conversions/flooring",
    image: "/images/carpentry/wardrobe.png",
    alt: "Built-in storage from carpentry work",
  },
];
