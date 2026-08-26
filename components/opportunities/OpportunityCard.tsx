import React from "react";
import { Link } from "@/i18n/routing";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { Opportunity } from "@/types/opportunity";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opportunity,
}) => {
  return (
    <Link
      href={`/opportunities/${opportunity.slug}`}
      className="group block h-full"
    >
      <Card
        variant="white"
        className="h-full flex flex-col justify-between p-6 sm:p-8 border border-charcoal-900/5 shadow-card hover:border-brand-primary/30 transition-all duration-300"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="gold" size="sm">
              {opportunity.category}
            </Badge>
            <span className="flex items-center gap-1 text-xs text-charcoal-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-brand-medium" />
              {opportunity.locationDetails}
            </span>
          </div>

          <h3 className="text-xl font-bold text-charcoal-900 group-hover:text-brand-primary transition-colors mb-3">
            {opportunity.title}
          </h3>

          <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
            {opportunity.summary}
          </p>
        </div>

        <div className="pt-4 border-t border-charcoal-900/5 flex items-center justify-between text-xs font-semibold">
          {opportunity.deadline && (
            <span className="text-charcoal-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Deadline: {opportunity.deadline}
            </span>
          )}
          <span className="text-brand-primary group-hover:text-gold-deep ml-auto flex items-center gap-1">
            Apply / Learn More{" "}
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Card>
    </Link>
  );
};
