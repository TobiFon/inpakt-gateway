import React from "react";
import { useTranslations } from "next-intl";
import { Users } from "lucide-react";
import { FocusDetailLayout } from "@/components/focus/FocusDetailLayout";
import { createSiteMetadata } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "metadata.youth" });

  return createSiteMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/focus/youth",
  });
}

export default function YouthFocusPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations("focusDetail.youth");

  return (
    <FocusDetailLayout
      badgeText={t("badge")}
      title={t("title")}
      subtitle={t("subtitle")}
      icon={Users}
      challengeText={t("challenge")}
      approachText={t("approach")}
      bilateralDesc={t("bilateralDesc")}
      actions={[t("action1"), t("action2"), t("action3")]}
    />
  );
}
