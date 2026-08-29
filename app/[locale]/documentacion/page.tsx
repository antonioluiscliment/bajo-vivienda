import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import DocIndex from "@/components/DocIndex";
import { isLocale, alternateLanguages, localeHref, type Locale } from "@/lib/i18n";

const PATH = "/documentacion";

const META: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Documentación del Plan Parcial",
    description:
      "Índice completo, clasificado y buscable, del Plan Parcial de Actividad Económica del sector ZP-Pn5 (suelo urbanizable terciario y logístico), aprobado definitivamente el 22 de julio de 2011.",
  },
  en: {
    title: "Plan Parcial Documentation",
    description:
      "Full, classified and searchable index of the Plan Parcial de Actividad Económica (Local Area Development Plan) for Sector ZP-Pn5 (developable commercial and logistics land), which received final approval on 22 July 2011.",
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
  };
}

const SKIP: Record<Locale, string> = { es: "Saltar al contenido", en: "Skip to content" };

const T = {
  es: {
    eyebrow: "Sector ZP-Pn5 · Documentación",
    title: "El expediente completo del Plan Parcial, ya aprobado",
    intro:
      "Más de 55 documentos y planos, clasificados por materia y con acceso directo a cada uno. Un sector con planeamiento definitivamente aprobado reduce el riesgo urbanístico de la inversión.",
    source:
      "Los documentos se abren desde la carpeta de Drive del expediente, clasificada y renombrada por materias. Para descargas recurrentes o acceso restringido a un inversor concreto, podemos habilitar un espacio de descarga propio del sitio.",
  },
  en: {
    eyebrow: "Sector ZP-Pn5 · Documentation",
    title: "The complete Plan Parcial case file, already approved",
    intro:
      "Over 55 documents and plans, classified by subject with direct access to each one. A Sector with definitively approved planning reduces the planning risk of the investment.",
    source:
      "Documents open from the case file's Drive folder, classified and renamed by subject. For recurring downloads or restricted access for a specific investor, we can enable a dedicated download area on the site.",
  },
};

export default function DocumentacionPage({ params }: { params: { locale: string } }) {
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
        <DocIndex locale={locale} />
        <section className="section">
          <p className="section-source">{t.source}</p>
        </section>
        <SectionNav locale={locale} current={PATH} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
