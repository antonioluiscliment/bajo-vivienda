import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import DossierForm from "@/components/DossierForm";
import { isLocale, alternateLanguages, localeHref, type Locale } from "@/lib/i18n";

const PATH = "/solicitar-dossier";

const META: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Solicitar dossier de inversión",
    description:
      "Cumplimenta tus datos de contacto para recibir el dossier de inversión del sector ZP-Pn5, Parque de Actividad Norte de Murcia.",
  },
  en: {
    title: "Request the investment dossier",
    description:
      "Fill in your contact details to receive the investment dossier for Sector ZP-Pn5, Parque de Actividad Norte de Murcia.",
  },
};

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "es";
  return {
    title: META[locale].title,
    description: META[locale].description,
    alternates: {
      canonical: localeHref(locale, PATH),
      languages: alternateLanguages(PATH),
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

const SKIP: Record<Locale, string> = { es: "Saltar al contenido", en: "Skip to content" };

const T = {
  es: {
    eyebrow: "Sector ZP-Pn5 · Dossier de inversión",
    title: "Solicita el dossier de inversión",
    intro:
      "Cumplimenta este breve formulario con tus datos de contacto. Al enviarlo se abrirá tu programa de correo con un mensaje ya redactado a info@nortemurcia.com — solo tienes que confirmar el envío y te haremos llegar el dossier completo del sector.",
  },
  en: {
    eyebrow: "Sector ZP-Pn5 · Investment dossier",
    title: "Request the investment dossier",
    intro:
      "Fill in this short form with your contact details. Submitting it opens your email application with a message already addressed to info@nortemurcia.com — just confirm and send it, and we'll get the full sector dossier to you.",
  },
};

export default function SolicitarDossierPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = T[locale];

  return (
    <>
      <a href="#contenido" className="skip-link">
        {SKIP[locale]}
      </a>
      <Header locale={locale} />
      <main id="contenido">
        <PageHeader locale={locale} eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

        <section className="section">
          <DossierForm locale={locale} />
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
