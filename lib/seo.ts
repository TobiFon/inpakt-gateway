// lib/seo.ts
import { Metadata } from "next";
import { SITE_NAME, CONTACT_INFO, SOCIAL_LINKS } from "./constants";

interface GenerateMetadataProps {
  title: string;
  description: string;
  locale: string;
  pathname?: string;
  ogImage?: string;
  type?: "website" | "article";
}

export function createSiteMetadata({
  title,
  description,
  locale,
  pathname = "",
  ogImage = "/images/branding/og-default.jpg",
  type = "website",
}: GenerateMetadataProps): Metadata {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://impakt-gateway.org";
  const url = `${baseUrl}/${locale}${pathname}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    metadataBase: new URL(baseUrl),
    icons: {
      icon: [
        { url: "/icon.png", sizes: "32x32", type: "image/png" },
        { url: "/icon.png", sizes: "192x192", type: "image/png" },
        { url: "/icon.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [
        { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
        { url: "/icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/icon.png",
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en${pathname}`,
        de: `${baseUrl}/de${pathname}`,
        fr: `${baseUrl}/fr${pathname}`,
        "x-default": `${baseUrl}/en${pathname}`,
      },
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function getOrganizationSchema() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://impakt-gateway.org";

  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Impakt Gateway e.V.",
    alternateName: "Impakt Gateway",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    email: CONTACT_INFO.email,
    description:
      "Germany-registered non-profit organization connecting Cameroon and Germany through partnerships, opportunities, resources, and sustainable development initiatives.",
    areaServed: [
      {
        "@type": "Country",
        name: "Cameroon",
      },
      {
        "@type": "Country",
        name: "Germany",
      },
    ],
    sameAs: [
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
    ],
  };
}
