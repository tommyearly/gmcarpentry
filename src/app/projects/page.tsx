import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ProjectCard } from "@/components/home/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { Stagger } from "@/components/motion/Stagger";
import { StaggerItem } from "@/components/motion/StaggerItem";

export const metadata = buildMetadata({
  title: "Recent Attic Conversion Projects Dublin",
  description:
    "Real GM Carpentry attic conversions in Clonsilla, Hansfield, Hollywoodrath and Swords. See the work, then request a free consultation.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="container-site py-16 md:py-24">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />
      <SectionHeading
        eyebrow="Recent transformations"
        title="They’ve done this before."
        lede="Four Dublin projects with photographs from the live site. Features listed are only those the original pages stated."
      />
      <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <StaggerItem key={project.slug} index={index}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
