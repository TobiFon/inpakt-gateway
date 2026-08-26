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
    title: "Privacy Policy / Datenschutzerklärung",
    description:
      "Data protection and GDPR compliance policies for Impakt Gateway e.V.",
    locale,
    pathname: "/legal/privacy",
  });
}

export default function PrivacyPage() {
  const t = useTranslations("legal");

  return (
    <LegalLayout title={t("privacyTitle")} subtitle={t("privacySubtitle")}>
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          1. Datenschutz auf einen Blick
        </h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein zentrales Anliegen.
          Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften
          (EU-Datenschutz-Grundverordnung DSGVO) sowie dieser
          Datenschutzerklärung.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          2. Verantwortliche Stelle
        </h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne
          der DSGVO ist:
        </p>
        <p className="p-4 rounded-xl bg-cream-50 border border-cream-border font-medium">
          Impakt Gateway e.V.
          <br />
          E-Mail:{" "}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-brand-primary hover:underline"
          >
            {CONTACT_INFO.email}
          </a>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          3. Datenerfassung auf unserer Website
        </h2>
        <h3 className="text-base font-semibold text-charcoal-900">
          Server-Log-Dateien
        </h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen
          in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
          übermittelt. Dies sind:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse (in der Regel anonymisiert)</li>
        </ul>
        <p>
          Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der technisch fehlerfreien Bereitstellung
          und Sicherheit der Website).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          4. Kontaktaufnahme & Formulare
        </h2>
        <p>
          Wenn Sie uns per Kontaktformular, Partnerschaftsanfrage oder E-Mail
          Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
          inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
          Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
          gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
          weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen) bzw.
          Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung
          Ihres Anliegens).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          5. SSL- bzw. TLS-Verschlüsselung
        </h2>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen oder
          Spendeninformationen, die Sie an uns als Seitenbetreiber senden, eine
          SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
          Sie daran, dass die Adresszeile des Browsers von „http://“ auf
          „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-charcoal-900">
          6. Ihre Rechte als betroffene Person
        </h2>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Auskunft (Art. 15 DSGVO):</strong> Über Ihre bei uns
            gespeicherten personenbezogenen Daten.
          </li>
          <li>
            <strong>Berichtigung (Art. 16 DSGVO):</strong> Unrichtiger oder
            unvollständiger Daten.
          </li>
          <li>
            <strong>Löschung (Art. 17 DSGVO):</strong> Ihrer bei uns
            gespeicherten Daten, sofern keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </li>
          <li>
            <strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong>{" "}
            Soweit die Richtigkeit der Daten bestritten wird.
          </li>
          <li>
            <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong>{" "}
            Bereitstellung in einem gängigen Format.
          </li>
          <li>
            <strong>Widerspruch (Art. 21 DSGVO):</strong> Gegen die Verarbeitung
            bei berechtigtem Interesse.
          </li>
          <li>
            <strong>Beschwerderecht:</strong> Bei einer zuständigen
            Datenschutz-Aufsichtsbehörde.
          </li>
        </ul>
        <p className="pt-2">
          Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
          können Sie sich jederzeit unter{" "}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-brand-primary font-medium hover:underline"
          >
            {CONTACT_INFO.email}
          </a>{" "}
          an uns wenden.
        </p>
      </section>
    </LegalLayout>
  );
}
