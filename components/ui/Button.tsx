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
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full cursor-pointer tracking-normal select-none whitespace-nowrap shrink-0";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5 font-semibold",
    md: "text-sm px-5 py-2.5 gap-2 font-semibold",
    lg: "text-base px-7 py-3.5 gap-2.5 font-bold",
  };

  const variantStyles = {
    primary:
      "bg-brand-primary text-white hover:bg-brand-dark active:bg-brand-darkest shadow-sm hover:shadow-md",

    secondary:
      "bg-cream-100 text-brand-darkest hover:bg-cream-200 border border-cream-border active:bg-cream-300",

    gold: "bg-gold-primary text-brand-darkest font-bold hover:bg-gold-bright active:bg-gold-rich shadow-sm hover:shadow-glow",

    "outline-light":
      "bg-transparent text-white border border-white/30 hover:border-white/80 hover:bg-white/10 active:bg-white/15",

    "outline-dark":
      "bg-transparent text-brand-darkest border border-brand-dark/25 hover:border-brand-dark hover:bg-brand-subtle",

    ghost:
      "bg-transparent text-charcoal-700 hover:text-brand-darkest hover:bg-black/5 active:bg-black/10",
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

    // `Link` may use an older anchor type definition than React's
    // current DOM types. Prevent incompatible native props from
    // being passed through.
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
