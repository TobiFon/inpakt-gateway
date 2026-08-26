import React from "react";
import { useTranslations } from "next-intl";
import { Users } from "lucide-react";
import { FocusDetailLayout } from "@/components/focus/FocusDetailLayout";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return createSiteMetadata({
    title: "Youth Focus Area",
    description:
      "Empowering young talent with practical skills, entrepreneurship mentorship and cross-border opportunities.",
    locale,
    pathname: "/focus/youth",
  });
}

export default function YouthFocusPage() {
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
