import React from "react";
import { cn } from "../../lib/utils";

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
    green: "bg-brand-subtle text-brand-dark border border-brand-primary/20",
    gold: "bg-gold-warm text-gold-deep border border-gold-primary/30",
    neutral: "bg-cream-100 text-charcoal-700 border border-cream-border",
    dark: "bg-brand-dark/90 text-white/90 border border-white/10",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 font-semibold tracking-wide uppercase",
    md: "text-sm px-3.5 py-1 font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-sans transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0",
            variant === "green" && "bg-brand-primary",
            variant === "gold" && "bg-gold-primary",
            variant === "neutral" && "bg-charcoal-500",
            variant === "dark" && "bg-gold-light"
          )}
        />
      )}
      {children}
    </span>
  );
};
