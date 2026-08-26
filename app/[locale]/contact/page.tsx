import React from "react";
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
  return createSiteMetadata({
    title: "Contact Us",
    description:
      "Get in touch with Impakt Gateway e.V. for partnerships, donation inquiries, and bilateral development questions.",
    locale,
    pathname: "/contact",
  });
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Contact Hero */}
      <ContactHero />

      {/* 2. Contact Grid: Channels & Form */}
      <section className="py-14 sm:py-20 bg-cream-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Direct Methods & Socials */}
            <div className="lg:col-span-5">
              <ContactMethods />
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Global Conversion Banner */}
      <CTASection />
    </div>
  );
}
