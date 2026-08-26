import React from "react";
import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Button } from "../../components/ui/Button";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="py-24 sm:py-32 flex items-center justify-center">
      <Container size="narrow">
        <div className="text-center">
          <p className="text-sm font-bold tracking-widest text-gold-deep uppercase">
            404 Error
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900">
            {t("title")}
          </h1>
          <p className="mt-4 text-base text-charcoal-600 leading-relaxed">
            {t("description")}
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href="/"
              variant="primary"
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              {t("button")}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
