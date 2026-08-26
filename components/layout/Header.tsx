"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, Heart } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";
import { Link, usePathname } from "../../i18n/routing";
import { Container } from "../ui/Container";
import { mainNavItems } from "../../content/navigation";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-brand-darkest/95 backdrop-blur-md border-b border-white/10 transition-colors duration-200">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-primary to-gold-primary flex items-center justify-center text-white font-bold text-lg shadow-glow">
              <span className="leading-none">∩</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-base tracking-wider">
                  IMPAKT
                </span>
                <span className="text-[10px] text-gold-light uppercase tracking-widest font-semibold">
                  GATEWAY e.V.
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {mainNavItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-150",
                    isActive
                      ? "text-white bg-white/10 font-semibold"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Elements */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <LanguageSwitcher variant="light" />
            </div>

            <Button
              href="/support"
              variant="gold"
              size="sm"
              className="hidden md:inline-flex"
              icon={
                <Heart className="w-3.5 h-3.5 fill-current text-brand-darkest" />
              }
            >
              {t("supportButton")}
            </Button>

            {/* Mobile Burger Toggle */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="xl:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={t("openMenu")}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>

      {/* Slide-out Mobile Nav */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </header>
  );
};
