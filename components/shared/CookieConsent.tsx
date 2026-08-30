"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ShieldCheck, Cookie, Settings, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const COOKIE_STORAGE_KEY = "impakt_cookie_consent_v1";

interface ConsentState {
  necessary: boolean;
  analytics: boolean;
}

export const CookieConsent: React.FC = () => {
  const t = useTranslations("cookieConsent");

  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!stored) {
        setShowBanner(true);
      } else {
        const parsed: ConsentState = JSON.parse(stored);
        setAnalyticsConsent(Boolean(parsed.analytics));
      }
    } catch {
      setShowBanner(true);
    }

    const handleOpenSettings = () => {
      setShowModal(true);
      setShowBanner(false);
    };

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => {
      window.removeEventListener("open-cookie-settings", handleOpenSettings);
    };
  }, []);

  const saveConsent = (analytics: boolean) => {
    const consent: ConsentState = {
      necessary: true,
      analytics,
    };
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(consent));
      window.dispatchEvent(
        new CustomEvent("cookie-consent-updated", { detail: consent })
      );
    } catch {
      // Ignore storage errors
    }
    setAnalyticsConsent(analytics);
    setShowBanner(false);
    setShowModal(false);
  };

  if (!mounted) return null;

  return (
    <>
      {/* 1. First Visit Bottom Bar */}
      {showBanner && !showModal && (
        <div className="fixed bottom-4 inset-x-4 sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-cream-border shadow-2xl text-charcoal-900 gold-border-top">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gold-warm text-gold-deep border border-gold-border flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-charcoal-900 font-serif">
                {t("bannerTitle")}
              </h3>
            </div>

            <p className="text-xs text-charcoal-600 leading-relaxed mb-5 font-normal">
              {t("bannerDesc")}
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => saveConsent(true)}
                  className="flex-1 shadow-xs font-bold text-xs"
                >
                  {t("acceptAll")}
                </Button>
                <Button
                  variant="outline-dark"
                  size="sm"
                  onClick={() => saveConsent(false)}
                  className="flex-1 text-xs"
                >
                  {t("rejectOptional")}
                </Button>
              </div>

              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-[11px] font-bold text-charcoal-500 hover:text-brand-primary text-center py-1 transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <Settings className="w-3 h-3" />
                <span>{t("customize")}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Granular Preference Customization Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-brand-darkest/75 backdrop-blur-xs transition-opacity"
            onClick={() => setShowModal(false)}
          />

          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 border border-cream-border shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand-primary border border-brand-border flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal-900">
                  {t("modalTitle")}
                </h3>
                <p className="text-xs text-charcoal-500">
                  {t("modalSubtitle")}
                </p>
              </div>
            </div>

            <div className="space-y-4 my-6">
              {/* Essential Cookies (Locked ON) */}
              <div className="p-4 rounded-2xl bg-cream-50 border border-cream-border flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-charcoal-900 block mb-1">
                    {t("necessaryTitle")}
                  </span>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {t("necessaryDesc")}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-brand-subtle text-brand-primary border border-brand-border text-[10px] font-extrabold uppercase shrink-0">
                  Active
                </span>
              </div>

              {/* Privacy Analytics Switch */}
              <div className="p-4 rounded-2xl bg-cream-50 border border-cream-border flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-charcoal-900 block mb-1">
                    {t("analyticsTitle")}
                  </span>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {t("analyticsDesc")}
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={analyticsConsent}
                    onChange={(e) => setAnalyticsConsent(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-cream-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-charcoal-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-primary" />
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-cream-border">
              <Button
                variant="outline-dark"
                size="sm"
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
              <Button
                variant="gold"
                size="sm"
                onClick={() => saveConsent(analyticsConsent)}
                icon={<Check className="w-4 h-4" />}
              >
                {t("savePreferences")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
