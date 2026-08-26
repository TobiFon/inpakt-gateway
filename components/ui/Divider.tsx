import React from "react";
import { cn } from "../../lib/utils";

interface DividerProps {
  className?: string;
  variant?: "subtle" | "gold" | "dark";
}

export const Divider: React.FC<DividerProps> = ({
  className,
  variant = "subtle",
}) => {
  const variantStyles = {
    subtle: "border-cream-border",
    gold: "border-gold-primary/30",
    dark: "border-white/10",
  };

  return (
    <hr
      className={cn("w-full border-t my-8", variantStyles[variant], className)}
    />
  );
};
