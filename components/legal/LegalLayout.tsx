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
    <div className="flex flex-col min-h-screen bg-cream-50">
      {/* Header Banner */}
      <section className="relative bg-brand-darkest text-white pt-14 sm:pt-20 pb-16 sm:pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-primary/25 rounded-full blur-[100px] pointer-events-none" />

        <Container size="content">
          <div className="text-center space-y-4">
            <Badge variant="gold" dot>
              {t("badge")}
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>

            <p className="text-xs text-white/50">Status: {lastUpdated}</p>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16">
        <Container size="content">
          <Card
            variant="white"
            className="p-8 sm:p-14 border border-charcoal-900/5 shadow-card"
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
