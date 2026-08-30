"use client";

import { useMemo, useState } from "react";
import { galleryFilters, type GalleryItem } from "@/data/gallery";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { cn } from "@/lib/utils";

export function GalleryFiltered({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]["id"]>("all");
  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((item) => item.category === filter)),
    [filter, items],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery filters">
        {galleryFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            className={cn(
              "rounded-xl px-4 py-2 text-sm font-semibold",
              filter === item.id ? "bg-purple text-white" : "border border-border bg-white hover:bg-purple-soft",
            )}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-8">
        <GalleryLightbox items={visible} />
      </div>
    </div>
  );
}
