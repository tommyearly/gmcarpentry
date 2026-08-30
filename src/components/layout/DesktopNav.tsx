"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function DesktopNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
      {items.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        const isOpen = open === item.label;

        if (!hasChildren) {
          return (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="focus-ring whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-text-muted transition hover:bg-purple-soft hover:text-purple"
            >
              {item.label}
            </Link>
          );
        }

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setOpen(item.label)}
            onMouseLeave={() => setOpen(null)}
          >
            <Link
              href={item.href}
              className={cn(
                "focus-ring inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-text-muted transition hover:bg-purple-soft hover:text-purple",
                isOpen && "bg-purple-soft text-purple",
              )}
              aria-expanded={isOpen}
              aria-haspopup="true"
              onFocus={() => setOpen(item.label)}
            >
              {item.label}
              <ChevronDown className={cn("size-3.5 transition", isOpen && "rotate-180")} />
            </Link>
            <div
              className={cn(
                "nav-dropdown absolute left-0 top-full z-50 min-w-[18rem] rounded-2xl border border-border bg-white p-2 shadow-[0_18px_40px_rgba(18,36,29,0.12)]",
                isOpen ? "is-open" : "is-closed",
              )}
            >
              <ul className="grid gap-0.5">
                {item.children!.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="focus-ring block rounded-xl px-3 py-2.5 hover:bg-bg-soft"
                      onClick={() => setOpen(null)}
                    >
                      <span className="block text-sm font-semibold text-purple-deep">{child.label}</span>
                      {child.hint ? (
                        <span className="block text-xs text-text-muted">{child.hint}</span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
