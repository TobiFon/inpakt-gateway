import React from "react";
import { setRequestLocale } from "next-intl/server";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMissionVision } from "@/components/about/AboutMissionVision";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutConnection } from "@/components/about/AboutConnection";
import { AboutTeamReserved } from "@/components/about/AboutTeamReserved";
import { CTASection } from "@/components/shared/CTASection";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return createSiteMetadata({
    title: "About Us",
    description:
      "Impakt Gateway e.V. is a Germany-registered non-profit connecting institutions, resources and people between Cameroon and Germany.",
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
      <AboutTeamReserved />
      <CTASection />
    </div>
  );
}
