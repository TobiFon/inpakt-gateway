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

  return (
    <footer className="bg-brand-darkest text-white/80 pt-14 sm:pt-16 pb-12 border-t border-white/10 mt-auto overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block group mb-4">
                <Image
                  src="/logo.png"
                  alt="Impakt Gateway e.V."
                  width={220}
                  height={56}
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-opacity group-hover:opacity-90"
                />
              </Link>

              <p className="mt-2 text-sm text-white/70 leading-relaxed max-w-sm">
                {tFooter("aboutOrg")}
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-xs text-white/50">
                {tFooter("registeredInfo")}
              </span>
            </div>
          </div>

          {/* Quick Navigation Column (All Items) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase font-bold tracking-widest text-gold-light mb-4">
              {tFooter("navigationTitle")}
            </h3>
            <ul className="space-y-2 text-sm">
              {allNavItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors block py-0.5"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase font-bold tracking-widest text-gold-light mb-4">
              {tFooter("focusTitle")}
            </h3>
            <ul className="space-y-2 text-sm">
              {focusAreas.map((area) => (
                <li key={area.id}>
                  <Link
                    href={area.slug}
                    className="text-white/70 hover:text-white transition-colors block py-0.5"
                  >
                    {tFocus(area.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Geography Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase font-bold tracking-widest text-gold-light mb-4">
              {tFooter("contactTitle")}
            </h3>
            <div className="space-y-2.5 text-sm text-white/70">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-gold-primary shrink-0" />
                <span className="whitespace-nowrap">
                  {tFooter("locations")}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-primary shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="mt-5">
              <span className="text-xs text-white/50 block mb-2 font-medium">
                Follow Us
              </span>
              <SocialLinks variant="light" size="sm" />
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Impakt Gateway e.V.{" "}
            {tFooter("copyright")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link
              href="/legal/impressum"
              className="hover:text-white transition-colors"
            >
              {tFooter("impressum")}
            </Link>
            <Link
              href="/legal/privacy"
              className="hover:text-white transition-colors"
            >
              {tFooter("privacy")}
            </Link>
            <Link
              href="/legal/cookies"
              className="hover:text-white transition-colors"
            >
              {tFooter("cookies")}
            </Link>
            <div className="hidden sm:block border-l border-white/20 pl-3">
              <LanguageSwitcher variant="light" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
