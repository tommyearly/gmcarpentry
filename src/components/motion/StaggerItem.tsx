import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  index: number;
  className?: string;
  as?: "div" | "li";
};

export function StaggerItem({ children, index, className, as: Tag = "div" }: Props) {
  return (
    <Tag
      className={cn("motion-stagger-item", className)}
      style={{ ["--stagger-index" as string]: index }}
    >
      {children}
    </Tag>
  );
}
