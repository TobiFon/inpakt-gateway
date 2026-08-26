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

  // Close drawer ONLY when user actually navigates to a new URL
  useEffect(() => {
    if (currentPath.current !== pathname) {
      currentPath.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Lock background body scroll when drawer is open
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
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Solid Slide-out Drawer Panel */}
      <div className="relative w-full max-w-[320px] sm:max-w-sm h-full min-h-[100dvh] bg-[#051811] text-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-white/10 z-10">
        <div>
          {/* Top Header: Logo & Close Button */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
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
              className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label={t("closeMenu")}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Language Switcher in Drawer */}
          <div className="py-3.5 border-b border-white/10 flex items-center justify-between">
            <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">
              Language
            </span>
            <LanguageSwitcher variant="light" />
          </div>

          {/* Full Navigation Links */}
          <nav className="mt-4 flex flex-col gap-1">
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
                    "px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between",
                    isActive
                      ? "bg-brand-primary text-gold-bright font-bold"
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

        {/* Bottom Drawer Call-to-Actions */}
        <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-3">
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
    </div>,
    document.body
  );
};
