"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type Item = { src: string; alt: string };

export function GalleryLightbox({ items }: { items: Item[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i === null ? i : (i + items.length - 1) % items.length)), [items.length]);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % items.length)), [items.length]);

  useEffect(() => {
    if (index === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  return (
    <>
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item, i) => (
          <li key={item.src}>
            <button type="button" className="focus-ring relative block aspect-[4/3] w-full overflow-hidden bg-limestone" onClick={() => setIndex(i)}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </button>
          </li>
        ))}
      </ul>
      {index !== null ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-charcoal/92 p-4" role="dialog" aria-modal="true" aria-label="Image viewer">
          <button type="button" className="absolute right-4 top-4 bg-white px-3 py-2 text-sm font-bold" onClick={close}>
            Close
          </button>
          <button type="button" className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-3 py-2" onClick={prev} aria-label="Previous image">
            ‹
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image src={items[index].src} alt={items[index].alt} fill className="object-contain" sizes="100vw" />
          </div>
          <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 bg-white px-3 py-2" onClick={next} aria-label="Next image">
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}
