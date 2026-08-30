import Image from "next/image";
import { cn } from "@/lib/utils";

export type OverlayDirection = "ltr" | "rtl" | "btt" | "center";
export type OverlayStrength = "soft" | "medium" | "strong";

type Props = {
  src: string;
  alt: string;
  overlayDirection?: OverlayDirection;
  overlayStrength?: OverlayStrength;
  brandTint?: boolean;
  vignette?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  minHeightClass?: string;
  contentClassName?: string;
  children?: React.ReactNode;
};

const directionClass: Record<OverlayDirection, string> = {
  ltr: "overlay-ltr",
  rtl: "overlay-rtl",
  btt: "overlay-btt",
  center: "overlay-center",
};

const strengthClass: Record<OverlayStrength, string> = {
  soft: "overlay-soft",
  medium: "overlay-medium",
  strong: "overlay-strong",
};

export function ImageOverlay({
  src,
  alt,
  overlayDirection = "ltr",
  overlayStrength = "medium",
  brandTint = true,
  vignette = true,
  priority = false,
  sizes = "100vw",
  className,
  minHeightClass = "min-h-[22rem]",
  contentClassName,
  children,
}: Props) {
  return (
    <div className={cn("relative overflow-hidden", minHeightClass, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn("object-cover", priority && "hero-image-motion")}
        sizes={sizes}
      />
      <div
        className={cn("absolute inset-0", directionClass[overlayDirection], strengthClass[overlayStrength])}
        aria-hidden
      />
      {brandTint ? <div className="overlay-tint absolute inset-0" aria-hidden /> : null}
      {vignette ? <div className="overlay-vignette absolute inset-0" aria-hidden /> : null}
      {children ? (
        <div className={cn("relative z-10 h-full", contentClassName)}>{children}</div>
      ) : null}
    </div>
  );
}
