"use client";

import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/components/motion/useInViewOnce";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol" | "section";
};

export function Stagger({ children, className, as: Tag = "div" }: Props) {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("motion-stagger", inView && "is-inview", className)}
    >
      {children}
    </Tag>
  );
}
