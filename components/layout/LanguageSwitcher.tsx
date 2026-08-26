"use client";

import React, { useTransition } from "react";
import { useLocale } from "next-intl";
import { locales, usePathname, useRouter } from "../../i18n/routing";
import { Locale } from "../../types/site";
import { cn } from "../../lib/utils";

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = "light",
  className,
}) => {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (nextLocale: Locale) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "inline-flex items-center text-xs font-semibold tracking-wider uppercase select-none",
        className
      )}
      aria-label="Language Selector"
    >
      {locales.map((locale, index) => {
        const isActive = currentLocale === locale;

        return (
          <React.Fragment key={locale}>
            <button
              onClick={() => handleLanguageChange(locale)}
              disabled={isPending || isActive}
              className={cn(
                "px-1.5 py-0.5 rounded transition-colors duration-150",
                isActive
                  ? isDark
                    ? "text-gold-primary font-bold"
                    : "text-gold-bright font-bold"
                  : isDark
                  ? "text-charcoal-500 hover:text-brand-dark"
                  : "text-white/60 hover:text-white",
                isPending && "opacity-60 cursor-wait"
              )}
              aria-current={isActive ? "true" : undefined}
            >
              {locale}
            </button>
            {index < locales.length - 1 && (
              <span
                className={cn(
                  "text-[10px]",
                  isDark ? "text-charcoal-400" : "text-white/30"
                )}
              >
                |
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
