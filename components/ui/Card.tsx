import React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "cream" | "dark" | "outline";
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
    white:
      "bg-white border border-charcoal-900/5 text-charcoal-900 shadow-card",
    cream: "bg-cream-100 border border-cream-border text-charcoal-900",
    dark: "bg-brand-darker border border-white/10 text-white shadow-lg",
    outline: "bg-transparent border border-cream-border text-charcoal-900",
  };

  return (
    <div
      className={cn(
        "rounded-3xl transition-all duration-300 relative overflow-hidden",
        variantStyles[variant],
        hoverEffect && "hover:-translate-y-1 hover:shadow-card-hover",
        padded && "p-6 sm:p-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
