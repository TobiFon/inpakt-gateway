import React from "react";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "../../lib/constants";
import { cn } from "../../lib/utils";

interface SocialLinksProps {
  className?: string;
  variant?: "light" | "dark" | "brand";
  size?: "sm" | "md";
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className,
  variant = "dark",
  size = "md",
}) => {
  const linkItems = [
    { name: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: Linkedin },
    { name: "Facebook", href: SOCIAL_LINKS.facebook, icon: Facebook },
    { name: "Instagram", href: SOCIAL_LINKS.instagram, icon: Instagram },
  ];

  const sizeClasses = size === "sm" ? "w-8 h-8 p-1.5" : "w-9 h-9 p-2";
  const iconSize = size === "sm" ? "w-4 h-4" : "w-5 h-5";

  const variantClasses = {
    light:
      "bg-white/10 text-white hover:bg-gold-primary hover:text-brand-darkest",
    dark: "bg-charcoal-800 text-white hover:bg-brand-primary",
    brand:
      "bg-brand-subtle text-brand-dark hover:bg-brand-primary hover:text-white",
  };

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {linkItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className={cn(
              "rounded-full flex items-center justify-center transition-all duration-200 shadow-sm",
              sizeClasses,
              variantClasses[variant]
            )}
          >
            <Icon className={iconSize} />
          </a>
        );
      })}
    </div>
  );
};
