import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMethods } from "@/components/contact/ContactMethods";
import { ContactForm } from "@/components/contact/ContactForm";
import { CTASection } from "@/components/shared/CTASection";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "metadata.contact" });

  return createSiteMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/contact",
  });
}

export default function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <ContactHero />

      <section className="py-14 sm:py-20 bg-cream-50/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <ContactMethods />
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
