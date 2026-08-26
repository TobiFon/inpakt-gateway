import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface FocusDetailedCardProps {
  id: string;
  title: string;
  description: string;
  thematicText: string;
  href: string;
  icon: LucideIcon;
  badgeIndex: string;
}

export const FocusDetailedCard: React.FC<FocusDetailedCardProps> = ({
  title,
  description,
  thematicText,
  href,
  icon: Icon,
  badgeIndex,
}) => {
  const t = useTranslations("focusPage");

  return (
    <Card
      variant="white"
      className="p-8 sm:p-10 border border-charcoal-900/5 shadow-card hover:border-brand-primary/30 flex flex-col justify-between group transition-all duration-300"
    >
      <div>
        {/* Card Header Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-brand-subtle text-brand-dark flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-200 shadow-sm">
            <Icon className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-gold-deep bg-gold-warm px-3 py-1 rounded-full">
            {badgeIndex}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-extrabold text-charcoal-900 group-hover:text-brand-primary transition-colors mb-3">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Thematic Bullet Pill */}
        <div className="p-4 rounded-xl bg-cream-50 border border-cream-border text-xs text-charcoal-700 leading-relaxed font-medium">
          {thematicText}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-8 pt-6 border-t border-charcoal-900/5 flex items-center justify-between">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-gold-deep transition-colors"
        >
          <span>{t("ctaDetail")}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
};
