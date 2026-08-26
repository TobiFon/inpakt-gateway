"use client";

import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import { X, Heart, Users } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Link, usePathname } from "../../i18n/routing";
import { mainNavItems } from "../../content/navigation";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const t = useTranslations("nav");
  const pathname = usePathname();

  // Close mobile nav automatically on route navigation
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-brand-darkest text-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-white/10">
        <div>
          {/* Top Row in Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <LanguageSwitcher variant="light" />
            <button
              onClick={onClose}
              className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={t("closeMenu")}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-1">
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
                    "px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between",
                    isActive
                      ? "bg-brand-primary text-gold-bright font-semibold"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span>{t(item.key)}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
          <Button
            href="/support"
            variant="gold"
            size="md"
            className="w-full"
            icon={<Heart className="w-4 h-4 fill-current text-brand-darkest" />}
          >
            {t("supportButton")}
          </Button>
          <Button
            href="/partnerships"
            variant="outline-light"
            size="md"
            className="w-full"
            icon={<Users className="w-4 h-4" />}
          >
            {t("partnerButton")}
          </Button>
        </div>
      </div>
    </div>
  );
};
