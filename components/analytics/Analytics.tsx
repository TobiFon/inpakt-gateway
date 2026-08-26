"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

export const Analytics: React.FC = () => {
  const domain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;

  const scriptSrc =
    process.env.NEXT_PUBLIC_ANALYTICS_SRC ||
    "https://plausible.io/js/script.js";

  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Respect Do Not Track
    const dnt = navigator.doNotTrack === "1";

    if (dnt) {
      console.debug("[Analytics] Do Not Track active. Skipping telemetry.");
      return;
    }

    setShouldLoad(true);
  }, []);

  // Don't load analytics if no domain is configured
  if (!domain || !shouldLoad) {
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
