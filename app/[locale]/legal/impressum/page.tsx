import React from "react";
import { useTranslations } from "next-intl";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { CONTACT_INFO } from "@/lib/constants";
import { createSiteMetadata } from "@/lib/seo";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return createSiteMetadata({
    title: "Impressum / Legal Disclosure",
    description:
      "Statutory legal disclosure for Impakt Gateway e.V. according to § 5 DDG.",
    locale,
    pathname: "/legal/impressum",
  });
}

export default function ImpressumPage() {
  const t = useTranslations("legal");

  return (
    <LegalLayout title={t("impressumTitle")} subtitle={t("impressumSubtitle")}>
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
        </h2>
        <p className="font-semibold text-charcoal-900">Impakt Gateway e.V.</p>
        <p>
          Gemeinnütziger Verein (eingetragener Verein) in Gründung /
          Registrierung
          <br />
          Deutschland & Kamerun
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-brand-primary hover:underline"
          >
            {CONTACT_INFO.email}
          </a>
          <br />
          Internet:{" "}
          <a
            href="https://impakt-gateway.org"
            className="text-brand-primary hover:underline"
          >
            https://impakt-gateway.org
          </a>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          Vertretungsberechtigter Vorstand
        </h2>
        <p>
          Impakt Gateway e.V. wird gesetzlich vertreten durch den Vorstand gemäß
          Vereinssatzung.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          Registereintragung
        </h2>
        <p>
          Eintragung im Vereinsregister.
          <br />
          Registergericht: Amtsgericht (wird nach formeller Eintragung ergänzt)
          <br />
          Registernummer: VR (in Zuteilung)
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          Gemeinnützigkeit & Steuerliche Zuordnung
        </h2>
        <p>
          Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige
          Zwecke im Sinne des Abschnitts „Steuerbegünstigte Zwecke“ der
          Abgabenordnung (AO), insbesondere die Förderung der internationalen
          Gesinnung, der Toleranz auf allen Gebieten der Kultur und des
          Völkerverständigungsgedankens, der Bildung sowie der
          Entwicklungszusammenarbeit.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          Haftung für Inhalte
        </h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          Haftung für Links
        </h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </section>
    </LegalLayout>
  );
}
