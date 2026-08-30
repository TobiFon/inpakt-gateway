import React from "react";
import { LucideIcon } from "lucide-react";
import { FocusDetailHero } from "./FocusDetailHero";
import { FocusChallengeApproach } from "./FocusChallengeApproach";
import { FocusBilateralDimension } from "./FocusBilateralDimension";
import { CTASection } from "@/components/shared/CTASection";

interface FocusDetailLayoutProps {
  badgeText: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  challengeText: string;
  approachText: string;
  bilateralDesc: string;
  actions: string[];
}

export const FocusDetailLayout: React.FC<FocusDetailLayoutProps> = ({
  badgeText,
  title,
  subtitle,
  icon,
  challengeText,
  approachText,
  bilateralDesc,
  actions,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Focus Detail Hero */}
      <FocusDetailHero
        badgeText={badgeText}
        title={title}
        subtitle={subtitle}
        icon={icon}
      />

      {/* 2. Challenge & Strategic Approach Matrices */}
      <FocusChallengeApproach
        challengeText={challengeText}
        approachText={approachText}
      />

      {/* 3. Africa ↔ Germany Bilateral Dimension & Actions */}
      <FocusBilateralDimension
        bilateralDesc={bilateralDesc}
        actions={actions}
      />

      {/* 4. Support & Partnership CTA */}
      <CTASection />
    </div>
  );
};
