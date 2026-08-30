"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { allNavItems, focusAreas } from "@/content/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CONTACT_INFO } from "@/lib/constants";

export const Footer: React.FC = () => {
  const tNav = useTranslations("nav");
  const tFocus = useTranslations();
  const tFooter = useTranslations("footer");

  const openCookieSettings = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-cookie-settings"));
    }
  };

  return (
    <footer className="bg-white text-charcoal-700 pt-16 pb-12 border-t border-cream-border mt-auto overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-cream-border">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block group mb-4">
                <Image
                  src="/logo.png"
                  alt="Impakt Gateway e.V."
                  width={220}
                  height={56}
                  className="h-9 sm:h-10 w-auto object-contain transition-opacity group-hover:opacity-90"
                />
              </Link>

              <p className="mt-2 text-sm text-charcoal-600 leading-relaxed max-w-sm">
                {tFooter("aboutOrg")}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream-50 border border-cream-border w-fit">
              <span className="w-2 h-2 rounded-full bg-gold-primary shrink-0" />
              <span className="text-xs text-charcoal-600 font-semibold">
                {tFooter("registeredInfo")}
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-brand-primary mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
              {tFooter("navigationTitle")}
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {allNavItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-charcoal-600 hover:text-brand-primary transition-colors block py-0.5"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-brand-primary mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
              {tFooter("focusTitle")}
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {focusAreas.map((area) => (
                <li key={area.id}>
                  <Link
                    href={area.slug}
                    className="text-charcoal-600 hover:text-brand-primary transition-colors block py-0.5"
                  >
                    {tFocus(area.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Presence */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-brand-primary mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
              {tFooter("contactTitle")}
            </h3>
            <div className="space-y-3 text-sm text-charcoal-600 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                <span>{tFooter("locations")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-brand-primary font-semibold text-charcoal-800 transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-xs text-charcoal-500 block mb-2 font-bold uppercase tracking-wider">
                {tFooter("followNetwork")}
              </span>
              <SocialLinks variant="brand" size="sm" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-charcoal-500 text-center md:text-left font-medium">
          <p>
            &copy; {new Date().getFullYear()} Impakt Gateway e.V.{" "}
            {tFooter("copyright")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link
              href="/legal/impressum"
              className="hover:text-brand-primary transition-colors"
            >
              {tFooter("impressum")}
            </Link>
            <Link
              href="/legal/privacy"
              className="hover:text-brand-primary transition-colors"
            >
              {tFooter("privacy")}
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="hover:text-brand-primary transition-colors cursor-pointer"
            >
              {tFooter("cookies")}
            </button>
            <div className="hidden sm:block border-l border-cream-border pl-4">
              <LanguageSwitcher variant="dark" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
