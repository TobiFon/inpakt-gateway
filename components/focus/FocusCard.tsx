import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Card } from "@/components/ui/Card";

interface FocusCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export const FocusCard: React.FC<FocusCardProps> = ({
  title,
  description,
  href,
  icon: Icon,
}) => {
  return (
    <Link href={href} className="group block h-full">
      <Card
        variant="white"
        className="h-full flex flex-col justify-between p-6 sm:p-7 border border-charcoal-900/5 hover:border-brand-primary/30 transition-all duration-300 group-hover:shadow-card-hover"
      >
        <div>
          {/* Icon Badge */}
          <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand-dark flex items-center justify-center mb-5 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-200 shadow-sm">
            <Icon className="w-6 h-6" />
          </div>

          {/* Title */}
          <h3 className="font-bold text-lg text-charcoal-900 group-hover:text-brand-primary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Interactive forward arrow */}
        <div className="mt-6 pt-4 border-t border-charcoal-900/5 flex items-center text-xs font-semibold text-brand-dark group-hover:text-gold-deep transition-colors">
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
};
