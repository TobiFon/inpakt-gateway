import React from "react";
import { useTranslations } from "next-intl";
import {
  Heart,
  Building2,
  GraduationCap,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const HomeEngagementMatrix: React.FC = () => {
  const t = useTranslations("engagementSection");

  const pathways = [
    {
      icon: Heart,
      title: t("card1Title"),
      desc: t("card1Desc"),
      actionText: t("card1Action"),
      href: "/support",
      badgeColor: "bg-gold-warm text-gold-deep",
    },
    {
      icon: Building2,
      title: t("card2Title"),
      desc: t("card2Desc"),
      actionText: t("card2Action"),
      href: "/partnerships",
      badgeColor: "bg-brand-subtle text-brand-dark",
    },
    {
      icon: GraduationCap,
      title: t("card3Title"),
      desc: t("card3Desc"),
      actionText: t("card3Action"),
      href: "/opportunities",
      badgeColor: "bg-cream-200 text-charcoal-800",
    },
    {
      icon: Users,
      title: t("card4Title"),
      desc: t("card4Desc"),
      actionText: t("card4Action"),
      href: "/contact",
      badgeColor: "bg-brand-subtle text-brand-dark",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-cream-50">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          highlightedWord={t("titleHighlight")}
          description={t("description")}
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((path, idx) => {
            const Icon = path.icon;
            return (
              <Link key={idx} href={path.href} className="group block h-full">
                <Card
                  variant="white"
                  className="h-full flex flex-col justify-between p-7 border border-charcoal-900/5 shadow-card hover:border-brand-primary/30 group-hover:shadow-card-hover transition-all duration-300"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${path.badgeColor}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-charcoal-900 group-hover:text-brand-primary transition-colors mb-2.5">
                      {path.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                      {path.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-charcoal-900/5 flex items-center gap-2 text-xs font-bold text-brand-dark group-hover:text-gold-deep transition-colors">
                    <span>{path.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
