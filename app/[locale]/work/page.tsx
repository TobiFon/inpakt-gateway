import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { WorkHero } from "@/components/work/WorkHero";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { CTASection } from "@/components/shared/CTASection";
import { getLocalizedProjects } from "@/content/project";
import { createSiteMetadata } from "@/lib/seo";
import { Locale } from "@/types/site";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "metadata.work" });

  return createSiteMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/work",
  });
}

export default function WorkPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const localizedProjects = getLocalizedProjects(locale as Locale);

  return (
    <div className="flex flex-col min-h-screen">
      <WorkHero />
      <ProjectGrid initialProjects={localizedProjects} />
      <CTASection />
    </div>
  );
}
