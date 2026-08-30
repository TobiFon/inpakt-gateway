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
  const t = await getTranslations({ locale, namespace: "metadata.cookies" });

  return createSiteMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/legal/cookies",
  });
}

export default function CookiesPage() {
  const t = useTranslations("legal");
  const c = useTranslations("legalContent.cookies");

  return (
    <LegalLayout title={t("cookiesTitle")} subtitle={t("cookiesSubtitle")}>
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
        <ul className="list-disc pl-5 space-y-1 text-sm text-charcoal-700">
          <li>{c("cookie1")}</li>
          <li>{c("cookie2")}</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          {c("sec3Title")}
        </h2>
        <p>{c("sec3Desc")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          {c("sec4Title")}
        </h2>
        <p>{c("sec4Desc")}</p>
      </section>

      <section className="space-y-3 pt-4 border-t border-cream-border">
        <h2 className="text-xl font-bold text-charcoal-900">Contact</h2>
        <p className="text-sm text-charcoal-700">
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
