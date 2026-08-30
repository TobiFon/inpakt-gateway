import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "green" | "gold" | "neutral" | "dark";
  size?: "sm" | "md";
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "green",
  size = "sm",
  children,
  className,
  dot = false,
}) => {
  const variantStyles = {
    green:
      "bg-brand-subtle text-brand-dark border border-brand-border/80 shadow-xs",
    gold: "bg-gold-warm text-gold-deep border border-gold-border/80 shadow-xs",
    neutral:
      "bg-cream-100 text-charcoal-700 border border-cream-border/80 shadow-xs",
    dark: "bg-brand-darkest text-white border border-white/15 shadow-sm",
  };

  const sizeStyles = {
    sm: "text-[11px] px-3 py-1 font-bold tracking-wider uppercase",
    md: "text-xs px-3.5 py-1.5 font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-sans transition-all duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "w-2 h-2 rounded-full shrink-0 animate-pulse",
            variant === "green" && "bg-brand-primary",
            variant === "gold" && "bg-gold-primary",
            variant === "neutral" && "bg-charcoal-500",
            variant === "dark" && "bg-gold-bright"
          )}
        />
      )}
      {children}
    </span>
  );
};
