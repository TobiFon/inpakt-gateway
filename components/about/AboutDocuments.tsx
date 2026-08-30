"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { FileText, Download, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const AboutDocuments: React.FC = () => {
  const t = useTranslations("documents");

  const docList = [
    {
      id: "doc1",
      title: t("doc1.title"),
      category: t("doc1.category"),
      fileSize: t("doc1.fileSize"),
      description: t("doc1.description"),
      badge: t("doc1.badge"),
      downloadUrl: "#",
    },
    {
      id: "doc2",
      title: t("doc2.title"),
      category: t("doc2.category"),
      fileSize: t("doc2.fileSize"),
      description: t("doc2.description"),
      badge: t("doc2.badge"),
      downloadUrl: "#",
    },
    {
      id: "doc3",
      title: t("doc3.title"),
      category: t("doc3.category"),
      fileSize: t("doc3.fileSize"),
      description: t("doc3.description"),
      badge: t("doc3.badge"),
      downloadUrl: "#",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-cream-border">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          highlightedWord={t("highlight")}
          description={t("description")}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {docList.map((doc) => (
            <Card
              key={doc.id}
              variant="white"
              className="p-6 sm:p-7 border border-cream-border shadow-card hover:border-brand-primary/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand-primary border border-brand-border flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold-warm text-gold-deep border border-gold-border">
                    {doc.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-charcoal-900 mb-2 leading-snug">
                  {doc.title}
                </h3>
                <p className="text-xs text-brand-primary font-bold mb-3">
                  {doc.category} • {doc.fileSize}
                </p>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                  {doc.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-cream-border flex items-center justify-between">
                <span className="text-[11px] font-bold text-charcoal-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-primary" />
                  {t("verifiedFile")}
                </span>

                <Button
                  href={doc.downloadUrl}
                  variant="gold"
                  size="sm"
                  className="gap-1.5 shadow-xs"
                  icon={<Download className="w-3.5 h-3.5" />}
                >
                  {t("download")}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
