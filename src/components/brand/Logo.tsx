import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className, compact = false }: Props) {
  const src = compact
    ? "/images/logo/logo-mark.png?v=gm3"
    : "/images/logo/logo.png?v=gm3";

  return (
    // Optimizer was dropping these large PNGs in the header/footer.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="GM Carpentry & Construction"
      className={cn("h-full w-full object-contain object-center", className)}
    />
  );
}
