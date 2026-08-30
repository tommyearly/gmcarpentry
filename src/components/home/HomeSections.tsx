import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { atticOptions, outcomes, secondaryServices } from "@/data/services";
import { projects } from "@/data/projects";
import { videos } from "@/data/videos";
import { homeFaqs, planningNote } from "@/data/faqs";
import { displayPhone, telHref } from "@/config/business";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ProjectCard } from "@/components/home/ProjectCard";
import { VideoCard } from "@/components/home/VideoCard";
import { CTASection } from "@/components/home/CTASection";
import { GoogleReviews } from "@/components/reviews/GoogleReviews";
import { getGoogleBusinessReviews } from "@/lib/google-reviews";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";

const startHere = [
  { title: "Attic conversions", href: "/attic-conversions", summary: "Turn unused roof space into a real room." },
  { title: "Modern conversion", href: "/attic-conversions/modern", summary: "Insulation, stairs, light and a finished floor." },
  { title: "Dormer conversion", href: "/attic-conversions/dormer", summary: "Extra headroom and light when a roof window is not enough." },
  { title: "Attic with en-suite", href: "/attic-conversions/en-suite", summary: "A bedroom above, with a bathroom if the roof allows." },
  { title: "Attic stairs", href: "/attic-conversions/stairs", summary: "A permanent stair that belongs with the house." },
  { title: "Home extensions", href: "/extensions", summary: "When up isn’t the answer — extra rooms downstairs." },
  { title: "Home renovations", href: "/renovations", summary: "One project, one point of contact, one invoice." },
  { title: "General carpentry", href: "/carpentry", summary: "Doors, floors, wardrobes, stairs and kitchens." },
];

export function HomeSections() {
  const googleReviews = getGoogleBusinessReviews();

  return (
    <>
      <section className="bg-surface py-16 md:py-20">
        <div className="container-site">
          <p className="eyebrow">Start here</p>
          <h2 className="display-md mt-3 text-purple">What do you need help with?</h2>
          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {startHere.map((item, index) => (
              <StaggerItem key={item.href + item.title} index={index}>
                <Link
                  href={item.href}
                  className="focus-ring group block rounded-2xl border border-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-purple hover:shadow-[0_12px_32px_rgba(8,20,16,0.08)]"
                >
                  <span className="block font-display text-xl font-bold text-purple">{item.title}</span>
                  <span className="mt-2 block text-sm text-muted">{item.summary}</span>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-purple-bright">
                    Continue <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-gold py-8">
        <div className="container-site flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-purple-deep md:text-4xl">
              Thinking about the attic?
            </h2>
            <p className="mt-2 max-w-2xl text-purple-deep/80">
              A free consultation is the first step — GM looks at the roof space and talks through what’s possible.
            </p>
          </div>
          <Button href={telHref()} variant="secondary" size="lg">
            Call {displayPhone()}
          </Button>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Primary service</p>
            <h2 className="display-md mt-3 text-purple">
              Attic conversions
              <br />
              across Dublin.
            </h2>
            <p className="lead mt-6 max-w-xl">
              This is our main work. We turn unused roof space into bedrooms, offices, en-suites and living rooms — with stairs, light and a floor you can furnish.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Full modern conversions",
                "Dormer conversions",
                "Permanent stairs",
                "En-suite options",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-purple">
                  <span className="mt-2 size-2 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/attic-conversions">Explore attic conversions</Button>
              <Button href="/contact" variant="outline">Get a free estimate</Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
            <Image
              src="/images/attic-conversions/attic-room.jpg"
              alt="Finished attic conversion interior by GM Carpentry"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-site">
          <p className="eyebrow">Outcomes</p>
          <h2 className="display-md mt-3 text-purple">What could your attic become?</h2>
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item, index) => (
              <StaggerItem key={item.title} index={index}>
                <Link href={item.href} className="focus-ring group relative block overflow-hidden rounded-[1.25rem]">
                  <div className="relative aspect-[4/5]">
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple/85 via-purple/10 to-transparent" />
                    <span className="absolute bottom-5 left-5 text-2xl font-bold text-white">{item.title}</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <p className="eyebrow">Conversion options</p>
          <h2 className="display-md mt-3 text-purple">Work that fits the roof.</h2>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {atticOptions.map((option, index) => (
              <StaggerItem key={option.id} index={index}>
                <Link href={option.href} className="focus-ring group overflow-hidden rounded-[1.4rem] bg-white shadow-card">
                  <div className="relative aspect-[16/10]">
                    <Image src={option.image} alt={option.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-bold tracking-[0.18em] text-subtle">{option.number}</p>
                    <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-purple">{option.title}</h3>
                    <p className="mt-3 text-muted">{option.summary}</p>
                    <p className="mt-4 font-semibold text-purple-bright">View service →</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-purple py-20 text-white md:py-28">
        <div className="container-site">
          <p className="eyebrow text-white">How it usually starts</p>
          <h2 className="display-md mt-3 text-white">Straightforward from the first visit.</h2>
          <Stagger as="ol" className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["01", "Visit", "GM looks at the attic and talks about what you want."],
              ["02", "Plan", "Layout, stairs, light and whether an en-suite is realistic."],
              ["03", "Build", "The work is coordinated and the house is cleaned down as they go."],
              ["04", "Finish", "The unused attic becomes part of the home."],
            ].map(([n, t, d], index) => (
              <StaggerItem as="li" key={n} index={index} className="rounded-2xl border border-white/15 bg-white/8 p-6">
                <p className="text-sm font-bold tracking-[0.18em] text-gold">{n}</p>
                <h3 className="mt-3 font-display text-2xl font-bold">{t}</h3>
                <p className="mt-3 text-white/75">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Recent transformations"
            title="They’ve done this before."
            description="Real Dublin projects — Clonsilla, Hansfield, Hollywoodrath and Swords — not a stock gallery."
          />
          <Stagger className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <StaggerItem key={project.slug} index={index}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-site grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">The staircase</p>
            <h2 className="display-md mt-3 text-purple">
              Not just access.
              <br />
              Part of the house.
            </h2>
            <p className="lead mt-6">
              A hatch keeps the attic separate. A permanent stair is how the new room joins the landing you already have. Placement and finish are decided on site.
            </p>
            <Button href="/attic-conversions/stairs" className="mt-8">Explore attic stairs</Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
            <Image src="/images/stairs/attic-stairs.jpg" alt="Permanent staircase to a converted attic" fill sizes="50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-purple py-20 text-white md:py-28">
        <div className="container-site grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow text-white">Attic + en-suite</p>
            <h2 className="display-md mt-3 text-white">
              Bedroom above.
              <br />
              En-suite if the roof allows.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Feasibility depends on available space, head height, layout and water supply. A shower needs enough height to stand. No sweeping promises.
            </p>
            <Button href="/attic-conversions/en-suite" className="mt-8">Explore en-suite conversions</Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
            <Image src="/images/en-suite/en-suite.jpg" alt="En-suite in a converted attic" fill sizes="50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <p className="eyebrow">Also</p>
          <h2 className="display-md mt-3 text-purple">More ways to transform your home.</h2>
          <Stagger className="mt-10 grid gap-5 lg:grid-cols-3">
            {secondaryServices.map((service, index) => (
              <StaggerItem key={service.id} index={index}>
                <Link href={service.href} className="focus-ring group overflow-hidden rounded-[1.4rem] bg-white shadow-card">
                  <div className="relative aspect-[16/11]">
                    <Image src={service.image} alt={service.imageAlt} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="33vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold text-purple">{service.title}</h3>
                    <p className="mt-3 text-muted">{service.summary}</p>
                    <p className="mt-4 font-semibold text-purple-bright">View service →</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-site">
          <SectionHeading eyebrow="See the transformation" title="Project videos." />
          <Stagger className="grid gap-6 md:grid-cols-2">
            {videos.map((video, index) => (
              <StaggerItem key={video.id} index={index}>
                <VideoCard video={video} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <GoogleReviews data={googleReviews} />

      <section className="py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Dublin"
            title="Attic conversions across Dublin."
            description="Based in Priest Town, Kilbride, Dublin 15. Project pages exist where there is real work to show."
          />
          <Stagger className="flex flex-wrap gap-3">
            {projects.map((project, index) => (
              <StaggerItem key={project.slug} index={index}>
                <Link
                  href={project.href}
                  className="inline-block rounded-xl border border-border bg-white px-4 py-2 text-sm font-semibold text-purple hover:border-purple"
                >
                  {project.location}
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-site">
          <p className="eyebrow">FAQs</p>
          <h2 className="display-md mt-3 text-purple">Questions people actually ask.</h2>
          <Reveal className="mt-10">
            <FAQAccordion items={homeFaqs} />
            <p className="mt-8 max-w-3xl text-sm text-muted">{planningNote}</p>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <CTASection />
      </Reveal>
    </>
  );
}
