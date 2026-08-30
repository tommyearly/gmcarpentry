"use client";

import { useEffect, useState } from "react";
import { useInViewOnce } from "@/components/motion/useInViewOnce";

type Props = {
  value: number;
  decimals?: number;
  duration?: number;
  className?: string;
};

export function CountUp({ value, decimals = 0, duration = 1100, className }: Props) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>();
  const [display, setDisplay] = useState(decimals > 0 ? (0).toFixed(decimals) : "0");

  useEffect(() => {
    if (!inView) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value.toFixed(decimals));
      return;
    }

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((value * eased).toFixed(decimals));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [decimals, duration, inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
