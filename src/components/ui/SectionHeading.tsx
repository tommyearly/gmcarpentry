import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  lede,
  align = "left",
  light,
  className,
}: Props) {
  const copy = description ?? lede;

  return (
    <Reveal
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className={cn("eyebrow mb-3", light && "text-white")}>{eyebrow}</p> : null}
      <h2 className={cn("display-md", light ? "text-white" : "text-purple")}>{title}</h2>
      {copy ? <div className={cn("lead mt-4", light && "text-white/80")}>{copy}</div> : null}
    </Reveal>
  );
}
