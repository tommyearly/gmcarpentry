export type NavChild = {
  label: string;
  href: string;
  hint?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const atticMenu: NavChild[] = [
  { label: "Attic Conversions", href: "/attic-conversions", hint: "The full conversion" },
  { label: "Modern Attic Conversion", href: "/attic-conversions/modern", hint: "Finished rooms" },
  { label: "Dormer Conversion", href: "/attic-conversions/dormer", hint: "Headroom and light" },
  { label: "Attic with En-suite", href: "/attic-conversions/en-suite", hint: "Bedroom above" },
  { label: "Attic Stairs", href: "/attic-conversions/stairs", hint: "Part of the house" },
  { label: "Attic Flooring", href: "/attic-conversions/flooring", hint: "Usable floor" },
  { label: "Attic Living Space", href: "/attic-conversions/living-space", hint: "Space for life" },
  { label: "Loft Conversion", href: "/loft-conversion", hint: "Same craft, loft search" },
];

export const mainNav: NavItem[] = [
  { label: "Attic Conversions", href: "/attic-conversions", children: atticMenu },
  {
    label: "Conversion Options",
    href: "/attic-conversions",
    children: [
      { label: "Modern Conversion", href: "/attic-conversions/modern" },
      { label: "Dormer", href: "/attic-conversions/dormer" },
      { label: "En-suite", href: "/attic-conversions/en-suite" },
      { label: "Stairs", href: "/attic-conversions/stairs" },
      { label: "Flooring", href: "/attic-conversions/flooring" },
    ],
  },
  {
    label: "Extensions & Renovations",
    href: "/extensions",
    children: [
      { label: "Home Extensions", href: "/extensions" },
      { label: "Home Renovations", href: "/renovations" },
      { label: "General Carpentry", href: "/carpentry" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Advice", href: "/advice" },
  { label: "Contact", href: "/contact" },
];

export const headerNav: NavItem[] = [
  { label: "Attic Conversions", href: "/attic-conversions", children: atticMenu },
  {
    label: "Extensions",
    href: "/extensions",
    children: [
      { label: "Home Extensions", href: "/extensions" },
      { label: "Home Renovations", href: "/renovations" },
      { label: "General Carpentry", href: "/carpentry" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Advice", href: "/advice" },
];

export const footerAttic = atticMenu;

export const footerCompany = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
  { label: "Advice / FAQ", href: "/advice" },
  { label: "Free consultation", href: "/contact" },
];

export const footerHome = [
  { label: "Home Extensions", href: "/extensions" },
  { label: "Home Renovations", href: "/renovations" },
  { label: "General Carpentry", href: "/carpentry" },
];

export const mobileNavSections: { title: string; items: NavChild[] }[] = [
  { title: "Attic conversions", items: atticMenu },
  { title: "Other work", items: footerHome },
  {
    title: "Company",
    items: [
      { label: "Projects", href: "/projects" },
      { label: "Gallery", href: "/gallery" },
      { label: "Videos", href: "/videos" },
      { label: "About", href: "/about" },
      { label: "Advice / FAQ", href: "/advice" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms", href: "/terms" },
];
