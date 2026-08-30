export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  area: string;
  type: string;
  href: string;
  summary: string;
  brief: string;
  transformation: string;
  features: string[];
  hero: ProjectImage;
  gallery: ProjectImage[];
  relatedService: { label: string; href: string };
  review?: { quote: string; name: string; sourceLabel: string; sourceHref?: string };
};

export const projects: Project[] = [
  {
    slug: "clonsilla",
    name: "Clonsilla attic conversion",
    location: "Clonsilla",
    area: "Dublin 15",
    type: "Attic conversion",
    href: "/projects/clonsilla",
    summary: "A finished attic with a new staircase and roof windows — and a review Lisa left on Google.",
    brief:
      "The homeowners in Clonsilla wanted their unused attic turned into a proper part of the house, with a staircase that felt like it belonged and daylight in the new room.",
    transformation:
      "GM Carpentry built a permanent stair, installed windows, and finished the space as living room. Lisa’s Google review names Gareth, Ken and Pat, and describes daily clean-downs and clear communication.",
    features: ["New staircase", "Roof windows", "Finished living space"],
    hero: {
      src: "/images/projects/clonsilla/01.png",
      alt: "Staircase and roof window in the Clonsilla attic conversion by GM Carpentry",
      width: 1000,
      height: 750,
    },
    gallery: [
      { src: "/images/projects/clonsilla/01.png", alt: "Looking up the new attic stairs towards a roof window, Clonsilla", width: 1000, height: 750 },
      { src: "/images/projects/clonsilla/02.png", alt: "Finished attic conversion interior, Clonsilla", width: 1000, height: 750 },
      { src: "/images/projects/clonsilla/03.png", alt: "Clonsilla attic conversion living space", width: 1000, height: 670 },
      { src: "/images/projects/clonsilla/04.png", alt: "Attic conversion detail, Clonsilla", width: 1000, height: 750 },
      { src: "/images/projects/clonsilla/05.png", alt: "Finished room in the Clonsilla attic", width: 1000, height: 750 },
      { src: "/images/projects/clonsilla/06.png", alt: "Clonsilla attic conversion, GM Carpentry", width: 1000, height: 750 },
    ],
    relatedService: { label: "Attic conversions", href: "/attic-conversions" },
    review: {
      name: "Lisa",
      sourceLabel: "Google review",
      sourceHref: "https://www.google.com/search?q=gm+carpentry#lrd=0x48676d5471505f81:0x123fb7c357b91b95,1",
      quote:
        "We recently had our attic converted by GM Carpentry and we couldn't be happier with the results. From the initial meetings with Gareth to the amazing work done by the team in particular Ken and Pat. They listened to everything we wanted enhancing our ideas and kept us informed throughout the process. They cleaned up every evening before they finished and you barely knew they had been there. Would highly recommend going to GM Carpentry for your attic conversion if you want a professional and efficient job done!",
    },
  },
  {
    slug: "hansfield",
    name: "Hansfield attic conversion",
    location: "Hansfield",
    area: "Dublin 15",
    type: "Attic conversion with en-suite",
    href: "/projects/hansfield",
    summary: "A new stair and an en-suite bathroom in a Hansfield attic.",
    brief:
      "This Hansfield home needed the attic to work as real living space — not storage — with a proper stair and a bathroom in the roof.",
    transformation:
      "GM Carpentry completed an attic conversion that included a new staircase and an en-suite bathroom.",
    features: ["New stair", "En-suite bathroom", "Finished attic"],
    hero: {
      src: "/images/projects/hansfield/ensuite.png",
      alt: "Finished Hansfield attic conversion with new stair, roof windows and en-suite",
      width: 1600,
      height: 1200,
    },
    gallery: [
      { src: "/images/projects/hansfield/01.jpg", alt: "Hansfield attic conversion", width: 800, height: 600 },
      { src: "/images/projects/hansfield/ensuite.png", alt: "Finished attic bedroom with en-suite and new stair, Hansfield", width: 1600, height: 1200 },
      { src: "/images/projects/hansfield/03.jpg", alt: "Hansfield attic project photograph", width: 800, height: 600 },
      { src: "/images/projects/hansfield/04.jpg", alt: "Hansfield conversion interior", width: 800, height: 600 },
      { src: "/images/projects/hansfield/05.jpg", alt: "Hansfield attic conversion detail", width: 800, height: 600 },
    ],
    relatedService: { label: "Attic with en-suite", href: "/attic-conversions/en-suite" },
  },
  {
    slug: "hollywoodrath",
    name: "Hollywoodrath attic conversion",
    location: "Hollywoodrath",
    area: "Co. Dublin",
    type: "Attic conversion",
    href: "/projects/hollywoodrath",
    summary: "Extra living space in a Hollywoodrath roof, with a stair designed to sit quietly in the house.",
    brief:
      "The Hollywoodrath homeowners wanted the unused attic to become extra living space without the new work shouting against the rest of the house.",
    transformation:
      "GM Carpentry completed the conversion so the family gained usable room in the roof. On the project page the company notes that new attic stairs work best when they are designed to match the existing main stairs.",
    features: ["Extra living space", "Stair designed to match the house"],
    hero: {
      src: "/images/projects/hollywoodrath/hero.jpg",
      alt: "Hollywoodrath attic conversion by GM Carpentry",
      width: 1000,
      height: 750,
    },
    gallery: [
      { src: "/images/projects/hollywoodrath/hero.jpg", alt: "Finished attic conversion, Hollywoodrath", width: 1000, height: 750 },
      { src: "/images/projects/hollywoodrath/01.jpeg", alt: "Hollywoodrath attic interior", width: 1000, height: 750 },
      { src: "/images/projects/hollywoodrath/02.jpeg", alt: "Hollywoodrath conversion living space", width: 1000, height: 750 },
      { src: "/images/projects/hollywoodrath/03.jpeg", alt: "Hollywoodrath attic project", width: 1000, height: 750 },
      { src: "/images/projects/hollywoodrath/04.jpeg", alt: "Hollywoodrath attic conversion detail", width: 1000, height: 750 },
      { src: "/images/projects/hollywoodrath/05.jpeg", alt: "Hollywoodrath finished room", width: 1000, height: 750 },
      { src: "/images/projects/hollywoodrath/06.jpeg", alt: "Hollywoodrath attic, GM Carpentry", width: 1000, height: 750 },
    ],
    relatedService: { label: "Attic stairs", href: "/attic-conversions/stairs" },
  },
  {
    slug: "swords",
    name: "Swords attic conversion",
    location: "Swords",
    area: "Co. Dublin",
    type: "Attic conversion with stair",
    href: "/projects/swords",
    summary: "A Swords attic conversion whose new stair was designed to match the existing main stairs.",
    brief:
      "The brief in Swords was a conversion that included a permanent stair — one that would read as part of the original house rather than a hatch replacement.",
    transformation:
      "GM Carpentry completed the attic conversion with a new stair. Their stated aim on this project: make the new attic stair indistinguishable from the original stair in the home.",
    features: ["New attic stair", "Designed to match the existing stairs", "Finished conversion"],
    hero: {
      src: "/images/projects/swords/01.jpeg",
      alt: "Swords attic conversion staircase by GM Carpentry",
      width: 1000,
      height: 750,
    },
    gallery: [
      { src: "/images/projects/swords/01.jpeg", alt: "Attic stair, Swords conversion", width: 1000, height: 750 },
      { src: "/images/projects/swords/02.jpeg", alt: "Swords attic conversion", width: 1000, height: 750 },
      { src: "/images/projects/swords/03.jpeg", alt: "Finished attic space, Swords", width: 1000, height: 750 },
      { src: "/images/projects/swords/04.jpeg", alt: "Swords conversion interior", width: 1000, height: 750 },
      { src: "/images/projects/swords/05.jpeg", alt: "Swords attic project", width: 1000, height: 750 },
      { src: "/images/projects/swords/06.jpeg", alt: "Swords attic conversion detail", width: 1000, height: 750 },
    ],
    relatedService: { label: "Attic stairs", href: "/attic-conversions/stairs" },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
