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
  const t = await getTranslations({ locale, namespace: "metadata.impressum" });

  return createSiteMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/legal/impressum",
  });
}

export default function ImpressumPage() {
  const t = useTranslations("legal");
  const c = useTranslations("legalContent.impressum");

  return (
    <LegalLayout title={t("impressumTitle")} subtitle={t("impressumSubtitle")}>
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          {c("sec1Title")}
        </h2>
        <p className="font-bold text-charcoal-900">{c("sec1Org")}</p>
        <p className="whitespace-pre-line">{c("sec1Status")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          {c("sec2Title")}
        </h2>
        <p>
          E-Mail:{" "}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-brand-primary font-bold hover:underline"
          >
            {CONTACT_INFO.email}
          </a>
          <br />
          Internet:{" "}
          <a
            href="https://impakt-gateway.org"
            className="text-brand-primary font-bold hover:underline"
          >
            https://impaktgateway.de
          </a>
        </p>
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
        <p className="whitespace-pre-line">{c("sec4Desc")}</p>
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
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          {c("sec7Title")}
        </h2>
        <p>{c("sec7Desc")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          {c("sec8Title")}
        </h2>
        <p>{c("sec8Desc")}</p>
      </section>
    </LegalLayout>
  );
}
