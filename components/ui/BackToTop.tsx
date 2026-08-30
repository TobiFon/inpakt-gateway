"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisible, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={cn(
        "fixed bottom-6 right-6 z-40 p-3 rounded-full bg-brand-darkest text-white border border-gold-primary/40 shadow-xl",
        "hover:bg-gold-primary hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
      )}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
