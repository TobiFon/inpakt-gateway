import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "cream" | "dark" | "gold-accent";
  hoverEffect?: boolean;
  padded?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = "white",
  hoverEffect = true,
  padded = true,
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    white: "bg-white border border-cream-border text-charcoal-900 shadow-card",
    cream: "bg-cream-50 border border-cream-border text-charcoal-900",
    dark: "bg-brand-darkest border border-white/15 text-white shadow-lg",
    "gold-accent":
      "bg-white border border-gold-border/70 gold-border-top text-charcoal-900 shadow-card",
  };

  return (
    <div
      className={cn(
        "rounded-3xl transition-all duration-300 relative overflow-hidden",
        variantStyles[variant],
        hoverEffect &&
          "hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-primary/40",
        padded && "p-6 sm:p-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
