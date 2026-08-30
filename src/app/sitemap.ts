import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "/",
    "/attic-conversions",
    "/attic-conversions/modern",
    "/attic-conversions/dormer",
    "/attic-conversions/en-suite",
    "/attic-conversions/stairs",
    "/attic-conversions/flooring",
    "/attic-conversions/living-space",
    "/loft-conversion",
    "/extensions",
    "/renovations",
    "/carpentry",
    "/projects",
    "/gallery",
    "/videos",
    "/about",
    "/advice",
    "/contact",
    "/privacy-policy",
    "/cookie-policy",
    "/terms",
  ];

  return [
    ...routes.map((path) => ({ url: absoluteUrl(path), lastModified: now })),
    ...projects.map((project) => ({
      url: absoluteUrl(project.href),
      lastModified: now,
    })),
  ];
}
