"use client";

import React, { ButtonHTMLAttributes, ComponentPropsWithoutRef } from "react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "gold"
  | "outline-light"
  | "outline-dark"
  | "ghost";

type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<ComponentPropsWithoutRef<"a">, "href"> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition = "left",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full cursor-pointer tracking-normal select-none whitespace-nowrap shrink-0";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5 font-bold",
    md: "text-sm px-5 py-2.5 gap-2 font-bold",
    lg: "text-base px-7 py-3.5 gap-2.5 font-extrabold",
  };

  const variantStyles = {
    // Rich Hero Green
    primary:
      "bg-brand-primary text-white hover:bg-brand-dark active:bg-brand-darkest shadow-sm hover:shadow-md hover:-translate-y-0.5",

    // Light Neutral Card Secondary
    secondary:
      "bg-white text-charcoal-900 hover:bg-cream-100 border border-cream-border active:bg-cream-200 shadow-xs",

    // Brand Signature Warm Gold / Orange
    gold: "bg-gold-primary text-white hover:bg-gold-deep active:bg-gold-rich shadow-sm hover:shadow-md hover:-translate-y-0.5",

    // Translucent on Dark Banners
    "outline-light":
      "bg-white/10 text-white border border-white/30 hover:border-white hover:bg-white/20 active:bg-white/25 backdrop-blur-xs",

    // Outline for Clean Light Surfaces
    "outline-dark":
      "bg-white text-charcoal-900 border border-cream-border hover:border-brand-primary hover:text-brand-primary hover:bg-brand-subtle/50 active:bg-brand-subtle shadow-xs",

    // Ghost
    ghost:
      "bg-transparent text-charcoal-700 hover:text-brand-primary hover:bg-black/5 active:bg-black/10",
  };

  const classes = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}
      <span className="whitespace-nowrap">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, ...linkProps } = props as ButtonAsLink;

    if (external || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          {...linkProps}
        >
          {content}
        </a>
      );
    }

    const { popover, ...safeLinkProps } = linkProps;

    return (
      <Link href={href} className={classes} {...safeLinkProps}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};
