import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightedWord,
  description,
  align = "center",
  theme = "light",
  className,
}) => {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn("max-w-2xl", isCenter && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs uppercase font-extrabold tracking-widest mb-3",
            isDark ? "text-gold-light" : "text-gold-deep"
          )}
        >
          {eyebrow}
        </p>
      )}

      {/* Editorial Serif Section Title */}
      <h2
        className={cn(
          "font-serif text-2xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight leading-[1.18]",
          isDark ? "text-white" : "text-charcoal-900"
        )}
      >
        {title}{" "}
        {highlightedWord && (
          <span
            className={cn(
              isDark
                ? "text-gold-primary italic font-normal"
                : "text-brand-primary italic font-normal"
            )}
          >
            {highlightedWord}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-3.5 text-base sm:text-lg leading-relaxed font-sans",
            isDark ? "text-white/70" : "text-charcoal-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
