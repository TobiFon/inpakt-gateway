import React from "react";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/routing";
import { projects, getLocalizedProject } from "@/content/project";
import { Container } from "@/components/ui/Container";
import { ProjectDetailHero } from "@/components/work/ProjectDetailHero";
import { ProjectDetailContent } from "@/components/work/ProjectDetailContent";
import { ProjectDetailSidebar } from "@/components/work/ProjectDetailSidebar";
import { CTASection } from "@/components/shared/CTASection";
import { createSiteMetadata } from "@/lib/seo";

export function generateStaticParams() {
  const verifiedProjects = projects.filter((p) => p.verified);
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const project of verifiedProjects) {
      params.push({ locale, slug: project.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const project = getLocalizedProject(slug, locale as Locale);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return createSiteMetadata({
    title: project.title,
    description: project.summary,
    locale,
    pathname: `/work/${project.slug}`,
  });
}

export default function ProjectDetailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const project = getLocalizedProject(slug, locale as Locale);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ProjectDetailHero project={project} />

      <section className="py-12 sm:py-16 bg-cream-50/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <ProjectDetailContent project={project} />
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <ProjectDetailSidebar project={project} />
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
