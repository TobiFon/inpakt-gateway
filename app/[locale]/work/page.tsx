import React from "react";
import { WorkHero } from "@/components/work/WorkHero";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { CTASection } from "@/components/shared/CTASection";
import { projects } from "@/content/project";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return createSiteMetadata({
    title: "Our Work & Initiatives",
    description:
      "Discover Impakt Gateway e.V.’s collaborative bilateral projects and initiatives between Cameroon and Germany.",
    locale,
    pathname: "/work",
  });
}

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Page Hero */}
      <WorkHero />

      {/* 2. Interactive Filters & Verified Project Grid / Empty State */}
      <ProjectGrid initialProjects={projects} />

      {/* 3. Global Conversion Banner */}
      <CTASection />
    </div>
  );
}
