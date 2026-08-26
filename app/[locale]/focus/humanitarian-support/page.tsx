import React from "react";
import { useTranslations } from "next-intl";
import { FocusDetailLayout } from "@/components/focus/FocusDetailLayout";
import { createSiteMetadata } from "@/lib/seo";
import { HandHeart } from "lucide-react";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return createSiteMetadata({
    title: "Humanitarian Support Focus Area",
    description:
      "Transparent emergency assistance and community resilience for vulnerable populations.",
    locale,
    pathname: "/focus/humanitarian-support",
  });
}

export default function HumanitarianFocusPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations("focusDetail.humanitarian");

  return (
    <FocusDetailLayout
      badgeText={t("badge")}
      title={t("title")}
      subtitle={t("subtitle")}
      icon={HandHeart}
      challengeText={t("challenge")}
      approachText={t("approach")}
      bilateralDesc={t("bilateralDesc")}
      actions={[t("action1"), t("action2"), t("action3")]}
    />
  );
}
