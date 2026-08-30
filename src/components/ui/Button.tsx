import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "md" | "lg" | "sm";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-purple-deep hover:bg-gold-bright shadow-[0_12px_28px_rgba(255,184,0,0.32)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  secondary:
    "bg-purple text-white hover:bg-purple-bright hover:!text-white shadow-[0_12px_28px_rgba(8,20,16,0.28)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  ghost:
    "bg-white/10 !text-white border border-white/30 hover:bg-white/20 hover:!text-white backdrop-blur-sm hover:-translate-y-0.5",
  outline:
    "bg-transparent text-purple border border-purple/35 hover:bg-purple-soft hover:border-purple hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2.5 text-sm min-h-11",
  md: "px-5 py-3 text-base min-h-12",
  lg: "px-6 py-3.5 text-lg min-h-14",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 focus-ring disabled:pointer-events-none disabled:opacity-60 [&_svg]:transition [&_svg]:duration-200",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const external = /^(https?:|tel:|mailto:)/.test(props.href);
    if (external) {
      return (
        <a href={props.href} className={classes} target={props.target} rel={props.rel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} target={props.target} rel={props.rel}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type || "button"}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
    >
      {children}
    </button>
  );
}
