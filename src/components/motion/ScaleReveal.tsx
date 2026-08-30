"use client";

import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/components/motion/useInViewOnce";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function ScaleReveal({ children, className }: Props) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className={cn("motion-scale", inView && "is-inview", className)}>
      {children}
    </div>
  );
}
