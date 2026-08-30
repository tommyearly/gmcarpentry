"use client";

import { useId, useState } from "react";
import type { FAQ } from "@/data/faqs";
import { StructuredData } from "@/components/seo/StructuredData";
import { cn } from "@/lib/utils";

export function FAQAccordion({
  items,
  heading,
}: {
  items: FAQ[];
  heading?: string;
}) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div>
      <StructuredData data={schema} />
      {heading ? <h2 className="section-title mb-8 text-text">{heading}</h2> : null}
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.q} className="surface overflow-hidden">
              <h3>
                <button
                  type="button"
                  className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`${baseId}-${index}`}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span className="text-lg font-semibold tracking-tight">{item.q}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "inline-flex size-5 shrink-0 items-center justify-center text-purple transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
                      isOpen && "rotate-180",
                    )}
                  >
                    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id={`${baseId}-${index}`}
                className={cn("faq-panel", isOpen && "is-open")}
                aria-hidden={!isOpen}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 text-text-muted">{item.a}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
