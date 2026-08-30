"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { displayPhone, telHref } from "@/config/business";
import { mobileNavSections } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(72);

  useEffect(() => {
    const header = document.querySelector("header");
    const update = () => setTop(header?.getBoundingClientRect().bottom ?? 72);
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          "mobile-drawer fixed inset-x-0 bottom-[var(--mobile-cta-h)] z-40 overflow-y-auto overscroll-contain border-t border-border bg-white shadow-[0_18px_40px_rgba(8,20,16,0.12)] md:bottom-0 xl:hidden",
          open ? "is-open" : "is-closed",
        )}
        style={{ top }}
        aria-hidden={!open}
        inert={!open}
      >
        <nav className="container-site flex flex-col gap-1 py-4 pb-8" aria-label="Mobile">
          <p className="px-3 pb-3 text-xs text-text-muted">Scroll to see every page</p>
          {mobileNavSections.map((section) => (
            <div key={section.title}>
              <p className="mt-3 px-3 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-purple first:mt-0">
                {section.title}
              </p>
              {section.items.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="focus-ring block rounded-lg px-3 py-3 text-base font-semibold text-text-muted hover:bg-purple-soft hover:text-purple"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="mt-4 grid gap-2 px-1">
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
