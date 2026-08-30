"use client";

import { useEffect, useState } from "react";

const KEY = "gm-design-tokens-v2";

const defaults: Record<string, string> = {
  "--purple": "#0c1f18",
  "--gold": "#ffb800",
  "--bg-base": "#ffffff",
  "--radius": "1.15rem",
};

function apply(tokens: Record<string, string>) {
  const root = document.documentElement;
  Object.entries(tokens).forEach(([key, value]) => root.style.setProperty(key, value));
}

export function DesignPanel() {
  const enabled = process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_DESIGN_PANEL === "true";
  const [open, setOpen] = useState(false);
  const [tokens, setTokens] = useState(defaults);

  useEffect(() => {
    if (!enabled) return;
    const stored = localStorage.getItem(KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Record<string, string>;
        setTokens({ ...defaults, ...parsed });
        apply({ ...defaults, ...parsed });
      } catch {
        apply(defaults);
      }
    }
  }, [enabled]);

  if (!enabled) return null;

  function update(key: string, value: string) {
    const next = { ...tokens, [key]: value };
    setTokens(next);
    apply(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  }

  return (
    <div className="fixed bottom-24 right-3 z-[60] md:bottom-6">
      <button type="button" className="rounded-xl bg-purple px-3 py-2 text-xs font-bold uppercase tracking-wide text-gold" onClick={() => setOpen((v) => !v)}>
        Design
      </button>
      {open ? (
        <div className="mt-2 w-72 rounded-2xl border border-border bg-white p-4 text-sm shadow-xl">
          <p className="font-semibold text-charcoal">Design control</p>
          {(["--gm-charcoal", "--gm-gold", "--gm-cream", "--gm-timber"] as const).map((key) => (
            <label key={key} className="mt-3 block text-xs">
              {key}
              <input type="color" className="ml-2 align-middle" value={tokens[key]} onChange={(e) => update(key, e.target.value)} />
            </label>
          ))}
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="border border-limestone px-2 py-1 text-xs"
              onClick={() => {
                const random = {
                  ...tokens,
                  "--gm-gold": `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`,
                };
                setTokens(random);
                apply(random);
                localStorage.setItem(KEY, JSON.stringify(random));
              }}
            >
              Randomize
            </button>
            <button
              type="button"
              className="border border-limestone px-2 py-1 text-xs"
              onClick={() => {
                setTokens(defaults);
                apply(defaults);
                localStorage.removeItem(KEY);
              }}
            >
              Reset
            </button>
            <button
              type="button"
              className="border border-limestone px-2 py-1 text-xs"
              onClick={() => {
                const blob = new Blob([JSON.stringify(tokens, null, 2)], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "gm-design.json";
                a.click();
              }}
            >
              Export
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
