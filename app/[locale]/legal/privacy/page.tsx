import React from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { CONTACT_INFO } from "@/lib/constants";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "metadata.privacy" });

  return createSiteMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/legal/privacy",
  });
}

export default function PrivacyPage() {
  const t = useTranslations("legal");
  const c = useTranslations("legalContent.privacy");

  return (
    <LegalLayout title={t("privacyTitle")} subtitle={t("privacySubtitle")}>
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          {c("sec1Title")}
        </h2>
        <p>{c("sec1Desc")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          {c("sec2Title")}
        </h2>
        <p>{c("sec2Desc")}</p>
        <div className="p-4 rounded-2xl bg-cream-50 border border-cream-border font-medium text-sm text-charcoal-800 space-y-1">
          <p className="font-bold text-charcoal-900">Impakt Gateway e.V.</p>
          <p>{CONTACT_INFO.legalAddress}</p>
          <p className="text-xs text-charcoal-600">
            {CONTACT_INFO.registrationCourt} • {CONTACT_INFO.registrationNumber}
          </p>
          <p className="pt-2">
            E-Mail:{" "}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-brand-primary hover:underline font-bold"
            >
              {CONTACT_INFO.email}
            </a>
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          {c("sec3Title")}
        </h2>
        <h3 className="text-base font-semibold text-charcoal-900">
          {c("sec3LogTitle")}
        </h3>
        <p>{c("sec3LogDesc")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          {c("sec4Title")}
        </h2>
        <p>{c("sec4Desc")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          {c("sec5Title")}
        </h2>
        <p>{c("sec5Desc")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          {c("sec6Title")}
        </h2>
        <p>{c("sec6Desc")}</p>
        <p className="pt-2">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-brand-primary font-bold hover:underline"
          >
            {CONTACT_INFO.email}
          </a>
        </p>
      </section>
    </LegalLayout>
  );
}
