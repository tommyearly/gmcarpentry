"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { displayPhone, telHref } from "@/config/business";
import { atticMenu, footerHome, mainNav } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="focus-ring inline-flex size-11 items-center justify-center rounded-xl bg-purple text-white"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <div
        id="mobile-nav"
        className={cn(
          "mobile-drawer absolute inset-x-0 top-full border-t border-border bg-white shadow-[0_18px_40px_rgba(8,20,16,0.12)] xl:hidden",
          open ? "is-open" : "is-closed",
        )}
        aria-hidden={!open}
        inert={!open}
      >
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
            <p className="px-3 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-purple">
              Attic conversions
            </p>
            {atticMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-lg px-3 py-3 text-base font-semibold text-text-muted hover:bg-purple-soft hover:text-purple",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="mt-3 px-3 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-purple">
              Also
            </p>
            {footerHome.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-lg px-3 py-3 text-base font-semibold text-text-muted hover:bg-purple-soft hover:text-purple"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {mainNav
              .filter((item) => !item.children)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-lg px-3 py-3 text-base font-semibold text-text-muted hover:bg-purple-soft hover:text-purple"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            <div className="mt-3 grid gap-2 px-1">
              <a
                href={telHref()}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-purple/35 px-5 py-3 text-base font-semibold text-purple hover:bg-purple-soft"
                onClick={() => {
                  track("phone_click", { source: "mobile-menu" });
                  setOpen(false);
                }}
              >
                <Phone className="size-4" />
                Call {displayPhone()}
              </a>
              <Button href="/contact">Get a Free Consultation</Button>
            </div>
          </nav>
      </div>
    </>
  );
}
