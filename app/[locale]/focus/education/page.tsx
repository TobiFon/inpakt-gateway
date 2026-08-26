import React from "react";
import { useTranslations } from "next-intl";
import { GraduationCap } from "lucide-react";
import { FocusDetailLayout } from "@/components/focus/FocusDetailLayout";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return createSiteMetadata({
    title: "Education Focus Area",
    description:
      "Connecting educational institutions and digital learning pathways between Cameroon and Germany.",
    locale,
    pathname: "/focus/education",
  });
}

export default function EducationFocusPage() {
  const t = useTranslations("focusDetail.education");

  return (
    <FocusDetailLayout
      badgeText={t("badge")}
      title={t("title")}
      subtitle={t("subtitle")}
      icon={GraduationCap}
      challengeText={t("challenge")}
      approachText={t("approach")}
      bilateralDesc={t("bilateralDesc")}
      actions={[t("action1"), t("action2"), t("action3")]}
    />
  );
}
