import React from "react";
import { useTranslations } from "next-intl";
import { Flag, Rocket, Compass, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const HomeRoadmap: React.FC = () => {
  const t = useTranslations("roadmapSection");

  const phases = [
    {
      num: "01",
      title: t("phase1Title"),
      status: t("phase1Status"),
      statusActive: true,
      desc: t("phase1Desc"),
      points: [t("p1_1"), t("p1_2"), t("p1_3")],
    },
    {
      num: "02",
      title: t("phase2Title"),
      status: t("phase2Status"),
      statusActive: false,
      desc: t("phase2Desc"),
      points: [t("p2_1"), t("p2_2"), t("p2_3")],
    },
    {
      num: "03",
      title: t("phase3Title"),
      status: t("phase3Status"),
      statusActive: false,
      desc: t("phase3Desc"),
      points: [t("p3_1"), t("p3_2"), t("p3_3")],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-darkest text-white border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-primary/15 rounded-full blur-[130px] pointer-events-none" />

      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          highlightedWord={t("titleHighlight")}
          description={t("description")}
          theme="dark"
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <Card
              key={phase.num}
              variant="dark"
              className="p-8 border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-extrabold text-gold-primary">
                    {phase.num}
                  </span>
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                      phase.statusActive
                        ? "bg-brand-primary text-emerald-300 border border-emerald-400/30"
                        : "bg-white/10 text-white/70"
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed mb-6">
                  {phase.desc}
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
                  {phase.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
