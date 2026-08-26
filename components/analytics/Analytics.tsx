"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export const Analytics: React.FC = () => {
  const domain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
  const scriptSrc =
    process.env.NEXT_PUBLIC_ANALYTICS_SRC ||
    "https://plausible.io/js/script.js";

  // Respect user privacy and Do-Not-Track headers
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dnt = navigator.doNotTrack === "1" || window.doNotTrack === "1";
      if (dnt) {
        console.debug("[Analytics] Do Not Track active. Skipping telemetry.");
      }
    }
  }, []);

  if (!domain) {
    // Zero analytics loaded when environment variable is not configured
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
