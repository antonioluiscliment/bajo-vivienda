import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import { isLocale, alternateLanguages, localeHref, type Locale } from "@/lib/i18n";

const PATH = "/proyecto-reparcelacion";

const META: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Proyecto de reparcelación",
    description:
      "Documentación del Proyecto de Reparcelación del sector ZP-Pn5, suelo urbanizable: plano parcelario catastral de las parcelas incluidas en el Sector, con las parcelas 12 y 23, titularidad de la propiedad.",
  },
  en: {
    title: "Reparcelling Project (Proyecto de Reparcelación)",
    description:
      "Documentation of the Proyecto de Reparcelación (land reparcelling project) for Sector ZP-Pn5, developable land: cadastral parcel map of the plots included in the Sector, including plots 12 and 23, owned by the property.",
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
    eyebrow: "Sector ZP-Pn5 · Proyecto de reparcelación",
    title: "Documentación del Proyecto de Reparcelación del Sector",
    intro:
      "A esta sección iremos incorporando los documentos del Proyecto de Reparcelación a medida que estén disponibles. De momento, el plano parcelario catastral de las parcelas incluidas en el Sector.",
    s1kicker: "01 — Plano parcelario catastral",
    s1h2: "Parcelario catastral del Sector, con las parcelas 12 y 23",
    s1pBefore: "El plano recoge el parcelario catastral de las fincas incluidas en el Sector ZP-Pn5. La propiedad es titular de las parcelas ",
    s1pAnd: " y ",
    s1pAfter: ", señaladas en el plano con fondo amarillo.",
    source: "Por protección de datos, el plano no incluye los titulares catastrales del resto de fincas.",
    img1Alt: "Plano parcelario catastral del Sector ZP-Pn5, con las parcelas 12 y 23 —titularidad de la propiedad— señaladas en amarillo",
    fig1: "Plano parcelario catastral del Sector. Las parcelas 12 y 23, titularidad de la propiedad, aparecen marcadas en amarillo.",
    img2Alt: "Detalle del plano parcelario con las parcelas 12 y 23 en amarillo",
    fig2: "Detalle de las parcelas 12 y 23, titularidad de la propiedad.",
    s2kicker: "02 — Próximos documentos",
    s2h2: "Más documentación, próximamente",
    s2p: "A medida que avance el Proyecto de Reparcelación del Sector se irán incorporando a esta sección nuevos documentos.",
  },
  en: {
    eyebrow: "Sector ZP-Pn5 · Reparcelling Project",
    title: "Documentation of the Sector's Reparcelling Project",
    intro:
      "Documents from the Proyecto de Reparcelación (reparcelling project) will be added to this section as they become available. For now, the cadastral parcel map of the plots included in the Sector.",
    s1kicker: "01 — Cadastral parcel map",
    s1h2: "Cadastral parcels of the Sector, including plots 12 and 23",
    s1pBefore: "The plan shows the cadastral parcels (parcelario catastral) of the plots included in Sector ZP-Pn5. The property owns plots ",
    s1pAnd: " and ",
    s1pAfter: ", marked on the plan with a yellow background.",
    source: "For data protection reasons, the plan does not include the cadastral titleholders of the other plots.",
    img1Alt: "Cadastral parcel map of Sector ZP-Pn5, with plots 12 and 23 —owned by the property— marked in yellow",
    fig1: "Cadastral parcel map of the Sector. Plots 12 and 23, owned by the property, are marked in yellow.",
    img2Alt: "Detail of the cadastral parcel map with plots 12 and 23 in yellow",
    fig2: "Detail of plots 12 and 23, owned by the property.",
    s2kicker: "02 — Upcoming documents",
    s2h2: "More documentation, coming soon",
    s2p: "As the Sector's Proyecto de Reparcelación (reparcelling project) progresses, new documents will be added to this section.",
  },
};

export default function ProyectoReparcelacionPage({ params }: { params: { locale: string } }) {
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
          <p className="section-kicker mono">{t.s1kicker}</p>
          <h2>{t.s1h2}</h2>
          <p>
            {t.s1pBefore}
            <strong>12</strong>
            {t.s1pAnd}
            <strong>23</strong>
            {t.s1pAfter}
          </p>
          <p className="section-source">{t.source}</p>
          <div className="content-figure">
            <Image
              src="/assets/parcelario-catastral.jpg"
              alt={t.img1Alt}
              width={280}
              height={263}
            />
            <figcaption>{t.fig1}</figcaption>
          </div>
          <div className="content-figure">
            <Image
              src="/assets/parcelario-catastral-detalle.jpg"
              alt={t.img2Alt}
              width={271}
              height={233}
            />
            <figcaption>{t.fig2}</figcaption>
          </div>
        </section>

        <section className="section">
          <p className="section-kicker mono">{t.s2kicker}</p>
          <h2>{t.s2h2}</h2>
          <p>{t.s2p}</p>
        </section>

        <SectionNav locale={locale} current={PATH} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
