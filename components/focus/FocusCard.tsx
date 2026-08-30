import React from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Card } from "@/components/ui/Card";

interface FocusCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  index: string;
}

export const FocusCard: React.FC<FocusCardProps> = ({
  title,
  description,
  href,
  icon: Icon,
  index,
}) => {
  const t = useTranslations("actions");

  return (
    <Link href={href} className="group block h-full">
      <Card
        variant="white"
        className="h-full flex flex-col justify-between p-6 sm:p-7 border border-cream-border hover:border-brand-primary/50 transition-all duration-300 group-hover:shadow-card-hover"
      >
        <div>
          {/* Header with Icon & Dynamic Pillar Label */}
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand-primary border border-brand-border flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-200 shadow-xs">
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-extrabold text-gold-deep bg-gold-warm px-2.5 py-1 rounded-full border border-gold-border">
              {t("pillarPrefix")} {index}
            </span>
          </div>

          <h3 className="font-bold text-lg text-charcoal-900 group-hover:text-brand-primary transition-colors leading-snug">
            {title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-cream-border flex items-center justify-between text-xs font-bold text-brand-primary group-hover:text-gold-deep transition-colors">
          <span>{t("learnMore")}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
};
