"use client";

import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";

const STORAGE_KEY = "gm-site-sale-dismissed";
const TOMMY_PHONE_DISPLAY = "089 278 1782";
const TOMMY_TEL = "tel:+353892781782";
const TOMMY_WHATSAPP = "https://wa.me/353892781782";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.07 21.15h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.82 9.82 0 0 1-1.5-5.24c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.8 9.8 0 0 1 2.89 6.96c0 5.44-4.43 9.86-9.84 9.86Zm5.4-7.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.64-2.04c-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function SiteSaleCard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;

    const onScroll = () => {
      if (window.scrollY < 420) return;
      setVisible(true);
      window.removeEventListener("scroll", onScroll);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <aside
      className="fixed bottom-[calc(var(--mobile-cta-h)+0.85rem)] right-3 z-40 w-[min(22rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_50px_rgba(8,20,16,0.18)] md:bottom-6 md:right-6"
      aria-label="Buy this website"
    >
      <div className="h-1 bg-gradient-to-r from-purple to-gold" />
      <div className="relative p-5">
        <button
          type="button"
          onClick={dismiss}
          className="focus-ring absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-lg text-text-muted hover:bg-purple-soft hover:text-purple"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>
        <p className="pr-8 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-gold-deep">For sale</p>
        <h2 className="mt-1 font-display text-xl font-extrabold tracking-tight text-purple">
          Buy this working website for your company
        </h2>
        <p className="mt-2 text-sm text-text-muted">
          Call or WhatsApp Tommy
          <span className="mt-0.5 block font-bold text-purple">{TOMMY_PHONE_DISPLAY}</span>
        </p>
        <p className="mt-3 text-base font-extrabold text-purple">
          Total cost €1,500 <span className="text-sm font-semibold text-text-muted">inc. VAT</span>
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <a
            href={TOMMY_TEL}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-purple/30 bg-white px-3 py-2.5 text-sm font-bold text-purple hover:bg-purple-soft"
          >
            <Phone className="size-4 text-gold" aria-hidden="true" />
            Call
          </a>
          <a
            href={TOMMY_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-3 py-2.5 text-sm font-bold text-purple-deep hover:bg-gold-bright"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </aside>
  );
}
