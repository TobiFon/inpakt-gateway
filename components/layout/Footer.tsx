import React from "react";
import { useTranslations } from "next-intl";
import { Container } from "../ui/Container";
import { Link } from "../../i18n/routing";
import { focusAreas, mainNavItems } from "../../content/navigation";
import { Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "../../lib/constants";
import { SocialLinks } from "../shared/SocialLinks";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Footer: React.FC = () => {
  const tNav = useTranslations("nav");
  const tFocus = useTranslations();
  const tFooter = useTranslations("footer");

  return (
    <footer className="bg-brand-darkest text-white/80 pt-16 pb-12 border-t border-white/10 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-primary to-gold-primary flex items-center justify-center text-white font-bold text-sm">
                  <span>∩</span>
                </div>
                <span className="font-bold text-white text-base tracking-wider">
                  IMPAKT GATEWAY e.V.
                </span>
              </Link>

              <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
                {tFooter("aboutOrg")}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs text-white/50">
                {tFooter("registeredInfo")}
              </span>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase font-bold tracking-widest text-gold-light mb-4">
              {tFooter("navigationTitle")}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {mainNavItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas Col */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase font-bold tracking-widest text-gold-light mb-4">
              {tFooter("focusTitle")}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {focusAreas.map((area) => (
                <li key={area.id}>
                  <Link
                    href={area.slug}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {tFocus(area.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Geography Col */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase font-bold tracking-widest text-gold-light mb-4">
              {tFooter("contactTitle")}
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-gold-primary shrink-0" />
                <span>{tFooter("locations")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-primary shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-xs text-white/50 block mb-2">
                Follow Us
              </span>
              <SocialLinks variant="light" size="sm" />
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-4">
            <span>
              &copy; {new Date().getFullYear()} Impakt Gateway e.V.{" "}
              {tFooter("copyright")}
            </span>
          </div>

          <div className="flex items-center gap-6">
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
            <div className="border-l border-white/20 pl-4">
              <LanguageSwitcher variant="light" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
