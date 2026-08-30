import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMissionVision } from "@/components/about/AboutMissionVision";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutConnection } from "@/components/about/AboutConnection";
import { AboutDocuments } from "@/components/about/AboutDocuments";
import { CTASection } from "@/components/shared/CTASection";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "metadata.about" });

  return createSiteMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/about",
  });
}

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <AboutMissionVision />
      <AboutPrinciples />
      <AboutConnection />
      <AboutDocuments />
      <CTASection />
    </div>
  );
}
