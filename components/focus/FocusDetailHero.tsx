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
    <section className="relative bg-brand-darkest text-white pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden border-b border-white/10">
      {/* Glow Effect */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-primary/25 rounded-full blur-[100px] pointer-events-none" />

      <Container size="content">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/focus"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-gold-light transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t("backLink")}</span>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-primary text-gold-light flex items-center justify-center shrink-0 shadow-glow">
            <Icon className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <Badge variant="gold" dot>
              {badgeText}
            </Badge>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {" "}
              {title}
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
