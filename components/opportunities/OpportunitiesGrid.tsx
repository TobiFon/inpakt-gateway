"use client";

import React, { useState } from "react";
import { Opportunity } from "@/types/opportunity";
import { Container } from "@/components/ui/Container";
import {
  OpportunityFilters,
  FilterOpportunityCategory,
} from "./OpportunityFilters";
import { OpportunityCard } from "./OpportunityCard";
import { OpportunitiesEmptyState } from "./OpportunitiesEmptyState";

interface OpportunitiesGridProps {
  initialOpportunities: Opportunity[];
}

export const OpportunitiesGrid: React.FC<OpportunitiesGridProps> = ({
  initialOpportunities,
}) => {
  const [activeCategory, setActiveCategory] =
    useState<FilterOpportunityCategory>("all");

  const filteredOpportunities = initialOpportunities.filter((opp) => {
    if (!opp.verified) return false;
    if (activeCategory === "all") return true;
    return opp.category === activeCategory;
  });

  return (
    <section className="py-12 sm:py-16 bg-cream-50">
      <Container>
        {/* Category Filters Bar */}
        <OpportunityFilters
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Opportunity List or Transparent Launch Pipeline */}
        <div className="mt-8">
          {filteredOpportunities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredOpportunities.map((opportunity) => (
                <OpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                />
              ))}
            </div>
          ) : (
            <OpportunitiesEmptyState />
          )}
        </div>
      </Container>
    </section>
  );
};
