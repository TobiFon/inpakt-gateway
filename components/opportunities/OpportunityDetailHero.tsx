import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";
import { Opportunity } from "@/types/opportunity";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

interface OpportunityDetailHeroProps {
  opportunity: Opportunity;
}

export const OpportunityDetailHero: React.FC<OpportunityDetailHeroProps> = ({
  opportunity,
}) => {
  const t = useTranslations("opportunityDetail");

  return (
    <section className="relative bg-brand-darkest text-white pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden border-b border-white/10">
      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-primary/25 rounded-full blur-[100px] pointer-events-none" />

      <Container size="content">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-gold-light transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t("backToOpportunities")}</span>
          </Link>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="gold" dot>
              {opportunity.category.toUpperCase()}
            </Badge>
            <span className="inline-flex items-center gap-1 text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-gold-light" />
              {opportunity.locationDetails}
            </span>
            {opportunity.deadline && (
              <span className="inline-flex items-center gap-1 text-xs text-white/80 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-brand-medium" />
                Deadline: {opportunity.deadline}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {opportunity.title}
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
            {opportunity.summary}
          </p>
        </div>
      </Container>
    </section>
  );
};
