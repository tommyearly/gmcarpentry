import Link from "next/link";
import { StructuredData } from "@/components/seo/StructuredData";
import { absoluteUrl } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, light }: { items: Crumb[]; light?: boolean }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? absoluteUrl(item.href) : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={light ? "mb-8 text-sm text-white/75" : "mb-8 text-sm text-text-muted"}>
      <StructuredData data={schema} />
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className={light ? "focus-ring hover:text-white" : "focus-ring hover:text-purple"}>
                {item.label}
              </Link>
            ) : (
              <span className={light ? "text-white" : "text-text"} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
