"use client";

import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/components/motion/useInViewOnce";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function ImageReveal({ children, className }: Props) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className={cn("motion-image", inView && "is-inview", className)}>
      {children}
    </div>
  );
}
