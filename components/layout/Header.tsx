// components/layout/Header.tsx
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
    <header className="sticky top-0 z-40 bg-[#051811]/95 backdrop-blur-md border-b border-white/10 transition-colors duration-200">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo (Clicks to Home) */}
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

          {/* Desktop Navigation (Sleek 6 items) */}
          <nav className="hidden xl:flex items-center gap-2">
            {headerNavItems.map((item) => {
              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 whitespace-nowrap",
                    isActive
                      ? "text-white bg-white/15 font-semibold shadow-sm"
                      : "text-white/75 hover:text-white hover:bg-white/5"
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <div className="hidden sm:block">
              <LanguageSwitcher variant="light" />
            </div>

            <Button
              href="/support"
              variant="gold"
              size="sm"
              className="hidden lg:inline-flex"
              icon={
                <Heart className="w-3.5 h-3.5 fill-current text-brand-darkest shrink-0" />
              }
            >
              {t("supportButton")}
            </Button>

            {/* Mobile / Tablet Menu Trigger */}
            <button
              type="button"
              onClick={handleOpenNav}
              className="xl:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors cursor-pointer"
              aria-label={t("openMenu")}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>

      {/* Slide-out Portal Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={handleCloseNav} />
    </header>
  );
};
