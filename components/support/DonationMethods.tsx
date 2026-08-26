import React from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BankTransferCard } from "./BankTransferCard";
import { PayPalCard } from "./PayPalCard";

export const DonationMethods: React.FC = () => {
  const t = useTranslations("supportPage");

  return (
    <section className="py-16 sm:py-20 bg-cream-100 border-y border-cream-border">
      <Container>
        <SectionHeading
          eyebrow={t("methodsEyebrow")}
          title={t("methodsTitle")}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          <BankTransferCard />
          <PayPalCard />
        </div>
      </Container>
    </section>
  );
};
