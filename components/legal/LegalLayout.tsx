import React from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  subtitle,
  lastUpdated = "2026",
  children,
}) => {
  const t = useTranslations("legal");

  return (
    <div className="flex flex-col min-h-screen bg-cream-50/50">
      {/* Banner */}
      <section className="relative bg-gradient-to-b from-brand-darkest via-brand-dark to-brand-primary text-white pt-14 sm:pt-20 pb-16 sm:pb-20 overflow-hidden border-b border-brand-border/30">
        <div className="absolute -top-24 left-[20%] w-[550px] h-[380px] bg-gold-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <Container size="content">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="gold" dot>
              {t("badge")}
            </Badge>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-medium">
              {subtitle}
            </p>

            <p className="text-xs text-gold-bright font-semibold">
              Status: {lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16">
        <Container size="content">
          <Card
            variant="white"
            className="p-8 sm:p-14 border border-cream-border shadow-card"
          >
            <div className="prose prose-sm sm:prose-base max-w-none text-charcoal-700 leading-relaxed space-y-8">
              {children}
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
};
