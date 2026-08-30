"use client";

import { useEffect, useRef, useState } from "react";

const stages = ["Unused.", "Planned.", "Built.", "Lived in."] as const;

export function RooflineGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduce) {
      setStage(3);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        const ratio = Math.min(1, Math.max(0, (entry.intersectionRatio - 0.15) / 0.7));
        setStage(Math.min(3, Math.floor(ratio * 4)));
      },
      { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduce]);

  return (
    <div ref={ref} className="mx-auto max-w-xl">
      <svg viewBox="0 0 360 220" className="w-full text-charcoal" role="img" aria-label="Roofline transforming from empty attic to a finished room">
        <path d="M28 168 L180 42 L332 168" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M28 168 H332" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M52 168 H308"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className={stage >= 1 ? "opacity-100" : "opacity-20"}
        />
        <path
          d="M118 168 V96 L154 96"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className={stage >= 2 ? "opacity-100" : "opacity-15"}
        />
        <rect
          x="214"
          y="78"
          width="46"
          height="38"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          transform="rotate(-38 237 97)"
          className={stage >= 3 ? "opacity-100" : "opacity-15"}
        />
        <path
          d="M160 118 H250 V168"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className={stage >= 3 ? "opacity-80" : "opacity-0"}
        />
      </svg>
      <p className="mt-4 text-center font-serif text-3xl italic text-charcoal">{stages[stage]}</p>
    </div>
  );
}
