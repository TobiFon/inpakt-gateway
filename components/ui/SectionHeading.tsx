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
      className={cn("max-w-3xl", isCenter && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-2 mb-3.5",
            isCenter && "justify-center"
          )}
        >
          <span className="w-2 h-2 rounded-full bg-gold-primary shrink-0 shadow-xs" />
          <p
            className={cn(
              "text-xs uppercase font-extrabold tracking-widest",
              isDark ? "text-gold-bright" : "text-brand-primary"
            )}
          >
            {eyebrow}
          </p>
        </div>
      )}

      {/* Editorial Playfair Display Headline */}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.14]",
          isDark ? "text-white" : "text-charcoal-900"
        )}
      >
        {title}{" "}
        {highlightedWord && (
          <span
            className={cn(
              isDark
                ? "text-gold-bright italic font-extrabold"
                : "text-brand-primary italic font-extrabold"
            )}
          >
            {highlightedWord}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-sans max-w-2xl",
            isCenter && "mx-auto",
            isDark ? "text-white/80" : "text-charcoal-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
