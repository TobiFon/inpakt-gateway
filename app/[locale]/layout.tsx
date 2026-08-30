import React from "react";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { locales, type Locale } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageContainer } from "@/components/layout/PageContainer";
import { BackToTop } from "@/components/ui/BackToTop";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { Analytics } from "@/components/analytics/Analytics";
import { createSiteMetadata, getOrganizationSchema } from "@/lib/seo";
import "@/styles/globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return createSiteMetadata({
    title: t("title"),
    description: t("description"),
    locale,
  });
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const organizationJsonLd = getOrganizationSchema();

  return (
    <html
      lang={locale}
      className={`${sansFont.variable} ${serifFont.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="font-sans bg-cream-50 text-charcoal-900 flex flex-col min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <PageContainer>{children}</PageContainer>
          <Footer />
          <BackToTop />
          <CookieConsent />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
