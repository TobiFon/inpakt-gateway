import React from "react";
import { useTranslations } from "next-intl";
import { Sprout } from "lucide-react";
import { FocusDetailLayout } from "@/components/focus/FocusDetailLayout";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return createSiteMetadata({
    title: "Environment Focus Area",
    description:
      "Promoting conservation, climate resilience, and sustainable resource management.",
    locale,
    pathname: "/focus/environment",
  });
}

export default function EnvironmentFocusPage() {
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
