import Image from "next/image";
import { Check } from "lucide-react";
import { displayPhone, telHref } from "@/config/business";
import { Button } from "@/components/ui/Button";
import { RoofGraphic } from "@/components/ui/RoofGraphic";
import { Logo } from "@/components/brand/Logo";

const trustPoints = [
  "Dublin based",
  "Attic conversion specialists",
  "Free consultation",
  "Free estimate",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-purple text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero-attic-bedroom.jpg"
          alt="Finished Dublin attic conversion used as a bedroom and workspace, with a roof window and timber floor"
          fill
          priority
          sizes="100vw"
          className="motion-kenburns object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple via-purple/88 to-purple/55" />
      </div>
      <div className="relative container-site grid items-center gap-10 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
        <div className="hero-copy">
          <p className="eyebrow text-white">Dublin’s attic conversion specialists</p>
          <h1 className="display mt-5 text-white">
            There’s another
            <br />
            room <span className="text-gold">above you.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
            GM Carpentry &amp; Construction turns unused roof space into bedrooms, offices, en-suites
            and living rooms — with a free consultation and estimate.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Get a free consultation
            </Button>
            <Button href="/contact" size="lg" variant="ghost">
              Get a free estimate
            </Button>
          </div>
          <a href={telHref()} className="focus-ring mt-5 inline-flex text-lg font-semibold text-gold">
            {displayPhone()}
          </a>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustPoints.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/85">
                <Check className="size-4 text-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute -left-6 -top-6 size-24 rounded-full bg-gold/20 blur-2xl" />
          <div className="overflow-hidden rounded-[var(--radius)] border border-white/15 bg-white/10 p-6 text-white backdrop-blur">
            <span className="inline-flex h-[7.25rem] w-[7.25rem] items-center justify-center rounded-2xl bg-white p-3.5">
              <span className="relative block h-full w-full">
                <Logo compact />
              </span>
            </span>
            <p className="mt-4 font-display text-3xl font-bold tracking-tight text-white">Dublin attics</p>
            <p className="mt-2 text-white/80">Unused roof space, finished as a real room.</p>
            <RoofGraphic className="mt-6 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
