"use client";

import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/components/motion/useInViewOnce";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "aside" | "header";
};

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("motion-reveal", inView && "is-inview", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
