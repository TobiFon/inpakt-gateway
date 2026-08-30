"use client";

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, Link } from "@/i18n/routing";
import { X, Heart, Users } from "lucide-react";
import { allNavItems } from "@/content/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const currentPath = useRef(pathname);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (currentPath.current !== pathname) {
      currentPath.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] xl:hidden flex justify-end">
      {/* Dark Backdrop */}
      <div
        className="fixed inset-0 bg-brand-darkest/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer Panel */}
      <div className="relative w-full max-w-[320px] sm:max-w-sm h-full min-h-[100dvh] bg-white text-charcoal-900 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-cream-border z-10">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-cream-border">
            <Image
              src="/logo.png"
              alt="Impakt Gateway e.V."
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
            />
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-charcoal-600 hover:text-charcoal-900 hover:bg-cream-100 transition-colors cursor-pointer border border-cream-border"
              aria-label={t("closeMenu")}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Language Selector */}
          <div className="py-4 border-b border-cream-border flex items-center justify-between">
            <span className="text-xs text-charcoal-500 uppercase tracking-wider font-bold">
              Language
            </span>
            <LanguageSwitcher variant="dark" />
          </div>

          {/* Navigation Links */}
          <nav className="mt-4 flex flex-col gap-1.5">
            {allNavItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "px-4 py-3 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between",
                    isActive
                      ? "bg-brand-subtle text-brand-darkest font-bold border border-brand-border shadow-xs"
                      : "text-charcoal-700 hover:bg-cream-100 hover:text-brand-primary"
                  )}
                >
                  <span>{t(item.key)}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-gold-primary" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer CTAs */}
        <div className="pt-6 mt-6 border-t border-cream-border flex flex-col gap-3">
          <Button
            href="/support"
            variant="gold"
            size="md"
            className="w-full shadow-md"
            icon={<Heart className="w-4 h-4 fill-current text-white" />}
          >
            {t("supportButton")}
          </Button>
          <Button
            href="/partnerships"
            variant="outline-dark"
            size="md"
            className="w-full"
            icon={<Users className="w-4 h-4 text-brand-primary" />}
          >
            {t("partnerButton")}
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};
