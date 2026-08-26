import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "site" | "content" | "narrow";
}

export const Container: React.FC<ContainerProps> = ({
  size = "site",
  className,
  children,
  ...props
}) => {
  const sizeStyles = {
    site: "max-w-site",
    content: "max-w-content",
    narrow: "max-w-narrow",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-10",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
