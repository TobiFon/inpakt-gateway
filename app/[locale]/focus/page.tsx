import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SustainableDevelopmentFocus } from "@/components/focus/SustainableDevelopmentFocus";
import { CTASection } from "@/components/shared/CTASection";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "metadata.focus" });

  return createSiteMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/focus",
  });
}

export default function FocusLandingPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <SustainableDevelopmentFocus />
      <CTASection />
    </div>
  );
}
