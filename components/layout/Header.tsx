"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, Link } from "@/i18n/routing";
import { Menu, Heart } from "lucide-react";
import { headerNavItems } from "@/content/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleOpenNav = useCallback(() => setMobileNavOpen(true), []);
  const handleCloseNav = useCallback(() => setMobileNavOpen(false), []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-cream-border shadow-xs transition-colors duration-200">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group py-1">
            <Image
              src="/logo.png"
              alt="Impakt Gateway e.V."
              width={220}
              height={56}
              priority
              className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain transition-opacity group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-2">
            {headerNavItems.map((item) => {
              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150 whitespace-nowrap relative",
                    isActive
                      ? "text-brand-darkest bg-brand-subtle border border-brand-border shadow-xs font-bold"
                      : "text-charcoal-700 hover:text-brand-primary hover:bg-cream-100"
                  )}
                >
                  {t(item.key)}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions: Button is Green */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <div className="hidden sm:block">
              <LanguageSwitcher variant="dark" />
            </div>

            <Button
              href="/support"
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex shadow-sm hover:shadow-md"
              icon={
                <Heart className="w-3.5 h-3.5 fill-current text-white shrink-0" />
              }
            >
              {t("supportButton")}
            </Button>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={handleOpenNav}
              className="xl:hidden p-2 rounded-xl text-charcoal-700 hover:text-brand-primary hover:bg-cream-100 active:bg-cream-200 transition-colors cursor-pointer border border-cream-border"
              aria-label={t("openMenu")}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>

      <MobileNav isOpen={mobileNavOpen} onClose={handleCloseNav} />
    </header>
  );
};
