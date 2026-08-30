import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PartnershipsHero } from "@/components/partnerships/PartnershipsHero";
import { PartnershipTypes } from "@/components/partnerships/PartnershipTypes";
import { PartnershipValueProp } from "@/components/partnerships/PartnershipValueProp";
import { PartnershipForm } from "@/components/partnerships/PartnershipForm";
import { CTASection } from "@/components/shared/CTASection";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "metadata.partnerships",
  });

  return createSiteMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/partnerships",
  });
}

export default function PartnershipsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero />
      <PartnershipTypes />
      <PartnershipValueProp />
      <PartnershipForm />
      <CTASection />
    </div>
  );
}
