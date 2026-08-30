export type GalleryItem = {
  src: string;
  alt: string;
  category: "attic" | "stairs" | "ensuite" | "extensions" | "renovations" | "carpentry";
  width: number;
  height: number;
};

export const galleryItems: GalleryItem[] = [
  { src: "/images/home/hero-attic-bedroom.jpg", alt: "Finished attic bedroom with roof window", category: "attic", width: 1000, height: 750 },
  { src: "/images/attic-conversions/finished-conversion.jpg", alt: "Completed attic living space", category: "attic", width: 1600, height: 1200 },
  { src: "/images/attic-conversions/attic-room-1.jpg", alt: "Modern attic conversion interior", category: "attic", width: 1000, height: 750 },
  { src: "/images/attic-conversions/attic-room-2.jpg", alt: "Converted attic room", category: "attic", width: 1000, height: 750 },
  { src: "/images/dormer/dormer-window.jpg", alt: "Dormer attic window", category: "attic", width: 1000, height: 750 },
  { src: "/images/stairs/attic-stairs.jpg", alt: "Permanent attic staircase with charcoal banister", category: "stairs", width: 1200, height: 1600 },
  { src: "/images/stairs/attic-stairs-2.jpg", alt: "Attic stairs from the landing", category: "stairs", width: 1200, height: 1600 },
  { src: "/images/stairs/attic-stairs-4.jpg", alt: "Staircase to converted attic", category: "stairs", width: 1200, height: 1600 },
  { src: "/images/stairs/attic-stairs-5.jpg", alt: "Attic stair joinery", category: "stairs", width: 1200, height: 1600 },
  { src: "/images/stairs/attic-stairs-8.jpg", alt: "Finished attic stairs", category: "stairs", width: 1200, height: 1600 },
  { src: "/images/stairs/new-stairs.png", alt: "New staircase installation", category: "stairs", width: 800, height: 1200 },
  { src: "/images/en-suite/en-suite.jpg", alt: "Attic en-suite", category: "ensuite", width: 1000, height: 750 },
  { src: "/images/en-suite/bathroom-hero.jpg", alt: "Bathroom in a converted attic", category: "ensuite", width: 1000, height: 750 },
  { src: "/images/en-suite/bathroom.jpg", alt: "Finished bathroom", category: "ensuite", width: 1000, height: 750 },
  { src: "/images/en-suite/bathroom-2.jpg", alt: "Attic bathroom finishes", category: "ensuite", width: 1000, height: 750 },
  { src: "/images/en-suite/bathroom-3.jpg", alt: "Bathroom in a GM project", category: "ensuite", width: 1000, height: 750 },
  { src: "/images/projects/clonsilla/01.png", alt: "Clonsilla attic stair and roof window", category: "attic", width: 1000, height: 750 },
  { src: "/images/projects/hollywoodrath/hero.jpg", alt: "Hollywoodrath attic conversion", category: "attic", width: 1000, height: 750 },
  { src: "/images/projects/swords/01.jpeg", alt: "Swords attic conversion stair", category: "stairs", width: 1000, height: 750 },
  { src: "/images/extensions/front-porch.png", alt: "External work on a Dublin home", category: "extensions", width: 1000, height: 750 },
  { src: "/images/carpentry/kitchen.png", alt: "Kitchen carpentry", category: "renovations", width: 1000, height: 750 },
  { src: "/images/carpentry/kitchen-2.png", alt: "Fitted kitchen", category: "carpentry", width: 1000, height: 750 },
  { src: "/images/carpentry/wardrobe.png", alt: "Custom built-in wardrobe", category: "carpentry", width: 1000, height: 750 },
  { src: "/images/carpentry/interior-door.png", alt: "Interior door", category: "carpentry", width: 800, height: 1200 },
  { src: "/images/carpentry/new-door.jpg", alt: "New door installation", category: "carpentry", width: 800, height: 1000 },
  { src: "/images/carpentry/window-2.png", alt: "New window installation", category: "renovations", width: 1000, height: 750 },
  { src: "/images/carpentry/floor.png", alt: "Flooring", category: "carpentry", width: 800, height: 600 },
  { src: "/images/gallery/bathroom2.png", alt: "Bathroom finish", category: "ensuite", width: 800, height: 1000 },
];

export const galleryFilters = [
  { id: "all", label: "All work" },
  { id: "attic", label: "Attic conversions" },
  { id: "stairs", label: "Stairs" },
  { id: "ensuite", label: "En-suites" },
  { id: "extensions", label: "Extensions" },
  { id: "renovations", label: "Renovations" },
  { id: "carpentry", label: "Carpentry" },
] as const;
