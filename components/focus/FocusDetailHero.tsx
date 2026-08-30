import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowLeft, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

interface FocusDetailHeroProps {
  badgeText: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export const FocusDetailHero: React.FC<FocusDetailHeroProps> = ({
  badgeText,
  title,
  subtitle,
  icon: Icon,
}) => {
  const t = useTranslations("focusDetail");

  return (
    <section className="relative bg-gradient-to-b from-brand-subtle/60 via-white to-cream-50 text-charcoal-900 pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden border-b border-cream-border">
      {/* Ambient Lighting */}
      <div className="absolute -top-20 left-[20%] w-[500px] h-[350px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-20 right-[20%] w-[450px] h-[350px] bg-gold-primary/15 rounded-full blur-[120px] pointer-events-none" />

      <Container size="content">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/focus"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-darkest hover:text-brand-primary transition-colors bg-white px-3.5 py-1.5 rounded-full border border-cream-border shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t("backLink")}</span>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-subtle text-brand-primary flex items-center justify-center shrink-0 shadow-sm border border-brand-border">
            <Icon className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <Badge variant="gold" dot>
              {badgeText}
            </Badge>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl font-medium">
              {subtitle}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
