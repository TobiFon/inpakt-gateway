"use client";

import React, { useTransition } from "react";
import { useLocale } from "next-intl";
import { locales, usePathname, useRouter } from "@/i18n/routing";
import { Locale } from "@/types/site";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = "dark",
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
        "inline-flex items-center text-xs font-bold tracking-wider uppercase select-none bg-white border border-cream-border px-2 py-1 rounded-full shadow-xs",
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
                "px-2 py-0.5 rounded-full transition-all duration-150 cursor-pointer",
                isActive
                  ? "bg-gold-primary text-white font-extrabold shadow-xs"
                  : isDark
                  ? "text-charcoal-600 hover:text-brand-primary"
                  : "text-charcoal-500 hover:text-charcoal-900",
                isPending && "opacity-60 cursor-wait"
              )}
              aria-current={isActive ? "true" : undefined}
            >
              {locale}
            </button>
            {index < locales.length - 1 && (
              <span className="text-[10px] text-charcoal-300 mx-0.5">|</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
