import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { isLocale, alternateLanguages, localeHref, type Locale } from "@/lib/i18n";

const PATH = "/contacto";

const META: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Contacto",
    description:
      "Cumplimenta tus datos de contacto para cualquier consulta sobre el sector ZP-Pn5, Parque de Actividad Norte de Murcia.",
  },
  en: {
    title: "Contact",
    description:
      "Fill in your contact details for any enquiry about Sector ZP-Pn5, Parque de Actividad Norte de Murcia.",
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
    eyebrow: "Sector ZP-Pn5 · Contacto",
    title: "Contacta con nosotros",
    intro:
      "Cumplimenta este breve formulario con tus datos de contacto. Al enviarlo se abrirá tu programa de correo con un mensaje ya redactado a contacto@nortemurcia.com — solo tienes que confirmar el envío y te responderemos a la mayor brevedad.",
  },
  en: {
    eyebrow: "Sector ZP-Pn5 · Contact",
    title: "Get in touch",
    intro:
      "Fill in this short form with your contact details. Submitting it opens your email application with a message already addressed to contacto@nortemurcia.com — just confirm and send it, and we'll get back to you as soon as possible.",
  },
};

export default function ContactoPage({
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
          <ContactForm locale={locale} />
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
