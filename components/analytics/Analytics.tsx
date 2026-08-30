"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

const COOKIE_STORAGE_KEY = "impakt_cookie_consent_v1";

export const Analytics: React.FC = () => {
  const domain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
  const scriptSrc =
    process.env.NEXT_PUBLIC_ANALYTICS_SRC ||
    "https://plausible.io/js/script.js";

  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Respect Do Not Track header
    if (navigator.doNotTrack === "1") return;

    const checkConsent = () => {
      try {
        const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.analytics === true) {
            setHasConsent(true);
            return;
          }
        }
      } catch {
        // Ignore
      }
      setHasConsent(false);
    };

    checkConsent();

    const handleConsentUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ analytics?: boolean }>;
      if (customEvent.detail?.analytics) {
        setHasConsent(true);
      } else {
        setHasConsent(false);
      }
    };

    window.addEventListener("cookie-consent-updated", handleConsentUpdate);
    return () => {
      window.removeEventListener("cookie-consent-updated", handleConsentUpdate);
    };
  }, []);

  if (!domain || !hasConsent) {
    return null;
  }

  return (
    <Script
      defer
      data-domain={domain}
      src={scriptSrc}
      strategy="afterInteractive"
    />
  );
};
