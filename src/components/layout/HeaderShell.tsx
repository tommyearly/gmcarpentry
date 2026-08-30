"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "header-shell sticky top-0 z-50 overflow-visible border-b",
        scrolled ? "is-scrolled border-border bg-white" : "border-border/80 bg-white/90 backdrop-blur-xl",
      )}
    >
      {children}
    </header>
  );
}
