import React from "react";
import { useTranslations } from "next-intl";
import { HeartHandshake } from "lucide-react";
import { FocusDetailLayout } from "@/components/focus/FocusDetailLayout";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return createSiteMetadata({
    title: "Health Focus Area",
    description:
      "Improving access to essential healthcare and fostering professional medical knowledge exchange.",
    locale,
    pathname: "/focus/health",
  });
}

export default function HealthFocusPage() {
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
