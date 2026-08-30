import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPage } from "@/components/templates/ProjectPage";
import { getProject, projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.name} | ${project.location}`,
    description: project.summary,
    path: project.href,
    ogImage: project.hero.src,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();
  return <ProjectPage slug={slug} />;
}
