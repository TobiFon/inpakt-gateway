import React from "react";
import { cn } from "../../lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
}) => {
  return (
    <main className={cn("flex-1 w-full relative", className)}>{children}</main>
  );
};
