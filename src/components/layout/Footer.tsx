import Link from "next/link";
import { business, displayEmail, displayPhone, mailtoHref, telHref } from "@/config/business";
import { footerAttic, footerCompany, footerHome, legalNav } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { TrackedTelLink } from "@/components/seo/TrackedTelLink";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  const year = 2026;

  return (
    <footer className="mt-16 overflow-hidden bg-purple text-white [&_a]:text-white/85 [&_p]:text-white/85">
      <div className="brand-stripe" />
      <div className="container-site border-b border-white/10 py-12 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-white">Need an attic conversion?</p>
            <h2 className="display-md mt-3 text-white">Tell GM what you’re thinking.</h2>
            <p className="mt-4 max-w-xl text-white/75">
              Free consultation and estimate. We’ll look at the roof space and talk through what’s possible.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={telHref()} size="lg">
              Call {displayPhone()}
            </Button>
            <Button href="/contact" size="lg" variant="ghost">
              Get a free estimate
            </Button>
          </div>
        </div>
      </div>
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="focus-ring mb-5 inline-flex rounded-2xl" aria-label="GM Carpentry & Construction home">
            <span className="block w-[22rem] rounded-2xl bg-white p-3 sm:w-[28rem]">
              <span className="relative block aspect-[16/9] w-full">
                <Logo />
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-white/75">
            Dublin attic conversion specialists. Priest Town, Kilbride, Dublin 15 — plus extensions, renovations and carpentry.
          </p>
          <p className="mt-4 text-sm">
            <TrackedTelLink source="footer" className="block hover:text-gold">
              {displayPhone()}
            </TrackedTelLink>
            <a href={mailtoHref()} className="mt-1 block hover:text-gold">
              {displayEmail()}
            </a>
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-gold">Attic conversions</h3>
          <ul className="space-y-2 text-white/80">
            {footerAttic.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring rounded hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-gold">Also</h3>
          <ul className="space-y-2 text-white/80">
            {footerHome.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring rounded hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-gold">Company</h3>
          <ul className="space-y-2 text-white/80">
            {footerCompany.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring rounded hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-site flex flex-col gap-4 py-6 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>© {year} {business.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-4">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring rounded hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
