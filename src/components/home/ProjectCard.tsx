import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href} className="card-lift focus-ring group surface block overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.hero.src}
          alt={project.hero.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-purple">{project.location}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-purple-deep">{project.type}</h3>
        <ul className="mt-3 space-y-1 text-sm text-text-muted">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple">
          View project <ArrowRight className="icon-nudge size-4" />
        </p>
      </div>
    </Link>
  );
}
