import React from "react";
import { LucideIcon } from "lucide-react";

interface ImpactStepProps {
  stepNumber: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ImpactStep: React.FC<ImpactStepProps> = ({
  stepNumber,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="flex items-start gap-4">
      {/* Step Number Circle */}
      <div className="shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white text-xs font-bold flex items-center justify-center shadow-sm">
        {stepNumber}
      </div>

      {/* Step Content */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-brand-medium" />
          <h4 className="font-bold text-sm sm:text-base text-charcoal-900">
            {title}
          </h4>
        </div>
        <p className="mt-1 text-xs text-charcoal-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
