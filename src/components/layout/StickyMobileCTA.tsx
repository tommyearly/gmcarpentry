import { Phone } from "lucide-react";
import { displayPhone, telHref } from "@/config/business";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 backdrop-blur-xl md:hidden">
      <div className="brand-stripe" />
      <div
        className="grid grid-cols-2 gap-2 px-3 py-2"
        style={{ height: "calc(var(--mobile-cta-h) - 3px)" }}
      >
        <a
          href={telHref()}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white text-sm font-bold text-purple"
        >
          <Phone className="size-4 text-gold" aria-hidden="true" />
          Call
        </a>
        <a
          href="/contact"
          className="focus-ring inline-flex items-center justify-center rounded-xl bg-gold text-sm font-bold text-purple-deep"
          aria-label="Get a free consultation"
        >
          Get a quote
        </a>
      </div>
      <span className="sr-only">Call {displayPhone()}</span>
    </div>
  );
}
