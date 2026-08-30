import React from "react";
import { useTranslations } from "next-intl";
import { HeartHandshake } from "lucide-react";
import { FocusDetailLayout } from "@/components/focus/FocusDetailLayout";
import { createSiteMetadata } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "metadata.health" });

  return createSiteMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/focus/health",
  });
}

export default function HealthFocusPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations("focusDetail.health");

  return (
    <FocusDetailLayout
      badgeText={t("badge")}
      title={t("title")}
      subtitle={t("subtitle")}
      icon={HeartHandshake}
      challengeText={t("challenge")}
      approachText={t("approach")}
      bilateralDesc={t("bilateralDesc")}
      actions={[t("action1"), t("action2"), t("action3")]}
    />
  );
}
