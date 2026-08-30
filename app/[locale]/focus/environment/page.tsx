import React from "react";
import { useTranslations } from "next-intl";
import { Sprout } from "lucide-react";
import { FocusDetailLayout } from "@/components/focus/FocusDetailLayout";
import { createSiteMetadata } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "metadata.environment",
  });

  return createSiteMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/focus/environment",
  });
}

export default function EnvironmentFocusPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations("focusDetail.environment");

  return (
    <FocusDetailLayout
      badgeText={t("badge")}
      title={t("title")}
      subtitle={t("subtitle")}
      icon={Sprout}
      challengeText={t("challenge")}
      approachText={t("approach")}
      bilateralDesc={t("bilateralDesc")}
      actions={[t("action1"), t("action2"), t("action3")]}
    />
  );
}
