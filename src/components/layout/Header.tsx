import Link from "next/link";
import { Phone } from "lucide-react";
import { business, displayPhone } from "@/config/business";
import { headerNav } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { TrackedTelLink } from "@/components/seo/TrackedTelLink";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Logo } from "@/components/brand/Logo";
import { HeaderShell } from "@/components/layout/HeaderShell";

export function Header() {
  return (
    <HeaderShell>
      <div className="brand-stripe" />
      <div className="relative container-site flex min-h-[var(--header-h)] items-center justify-between gap-6 py-2">
        <Link href="/" className="focus-ring group shrink-0" aria-label="GM Carpentry & Construction home">
          <span className="relative block h-12 w-44 sm:h-14 sm:w-56 lg:h-16 lg:w-64">
            <Logo />
          </span>
        </Link>

        <DesktopNav items={headerNav} />

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <TrackedTelLink
            source="header"
            className="focus-ring inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-border bg-white px-3.5 py-2 text-sm font-bold text-purple hover:border-purple hover:text-purple-bright"
          >
            <Phone className="size-4 shrink-0 text-gold" />
            {displayPhone()}
          </TrackedTelLink>
          <Button href="/contact" size="sm">
            Free consultation
          </Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <TrackedTelLink
            source="header-mobile"
            className="focus-ring inline-flex size-11 items-center justify-center rounded-xl border border-border bg-white"
            aria-label={`Call ${business.phone}`}
          >
            <Phone className="size-5 text-purple" />
          </TrackedTelLink>
          <MobileMenu />
        </div>
      </div>
    </HeaderShell>
  );
}
