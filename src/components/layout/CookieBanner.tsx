"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(localStorage.getItem("gm-cookie") !== "1");
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-[calc(var(--mobile-cta-h)+0.75rem)] left-3 right-3 z-40 max-w-md overflow-hidden rounded-2xl border border-border bg-white text-sm shadow-[0_18px_40px_rgba(8,20,16,0.12)] md:bottom-4 md:left-4">
      <div className="h-1 bg-gradient-to-r from-purple to-gold" />
      <div className="p-4">
        <p className="text-muted">
          We use essential cookies to run the site. See the{" "}
          <Link href="/cookie-policy" className="font-semibold text-purple underline-offset-2 hover:underline">
            cookie policy
          </Link>
          .
        </p>
        <button
          type="button"
          className="mt-3 rounded-xl bg-gold px-4 py-2 text-xs font-bold uppercase tracking-wide text-purple-deep"
          onClick={() => {
            localStorage.setItem("gm-cookie", "1");
            setShow(false);
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
