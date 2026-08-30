import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/hero/Hero";
import { FocusGrid } from "@/components/focus/FocusGrid";
import { CTASection } from "@/components/shared/CTASection";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return createSiteMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "",
  });
}

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FocusGrid />
      <CTASection />
    </div>
  );
}
