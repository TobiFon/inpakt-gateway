"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { FocusAreaId } from "@/types/site";
import { cn } from "@/lib/utils";

export type FilterCategory = "all" | FocusAreaId;

interface ProjectFiltersProps {
  activeCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const t = useTranslations("workPage");

  const filterOptions: { id: FilterCategory; labelKey: string }[] = [
    { id: "all", labelKey: "filterAll" },
    { id: "education", labelKey: "filterEducation" },
    { id: "youth", labelKey: "filterYouth" },
    { id: "health", labelKey: "filterHealth" },
    { id: "environment", labelKey: "filterEnvironment" },
    { id: "humanitarian", labelKey: "filterHumanitarian" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-6">
      {filterOptions.map((opt) => {
        const isActive = activeCategory === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onSelectCategory(opt.id)}
            className={cn(
              "px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer select-none",
              isActive
                ? "bg-brand-primary text-white shadow-sm border border-brand-primary"
                : "bg-white text-charcoal-700 border border-cream-border hover:bg-cream-100 hover:text-brand-primary hover:border-brand-primary/40 shadow-xs"
            )}
          >
            {t(opt.labelKey)}
          </button>
        );
      })}
    </div>
  );
};
