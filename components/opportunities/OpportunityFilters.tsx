"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { OpportunityCategory } from "@/types/opportunity";
import { cn } from "@/lib/utils";

export type FilterOpportunityCategory = "all" | OpportunityCategory;

interface OpportunityFiltersProps {
  activeCategory: FilterOpportunityCategory;
  onSelectCategory: (category: FilterOpportunityCategory) => void;
}

export const OpportunityFilters: React.FC<OpportunityFiltersProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const t = useTranslations("opportunitiesPage");

  const filterOptions: { id: FilterOpportunityCategory; labelKey: string }[] = [
    { id: "all", labelKey: "filterAll" },
    { id: "scholarship", labelKey: "filterScholarships" },
    { id: "training", labelKey: "filterTraining" },
    { id: "internship", labelKey: "filterInternships" },
    { id: "volunteer", labelKey: "filterVolunteer" },
    { id: "youth", labelKey: "filterYouth" },
    { id: "fellowship", labelKey: "filterFellowships" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 py-6">
      {filterOptions.map((opt) => {
        const isActive = activeCategory === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => onSelectCategory(opt.id)}
            className={cn(
              "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
              isActive
                ? "bg-brand-primary text-white shadow-sm"
                : "bg-white text-charcoal-700 border border-charcoal-900/10 hover:bg-cream-100 hover:text-brand-dark"
            )}
          >
            {t(opt.labelKey)}
          </button>
        );
      })}
    </div>
  );
};
