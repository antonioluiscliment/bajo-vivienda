import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import { PLANOS_URBANIZACION, driveViewUrl } from "@/lib/urbanizacion";
import { isLocale, alternateLanguages, localeHref, type Locale } from "@/lib/i18n";

const PATH = "/propiedad-urbanizacion";

const META: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Propiedad y planos de urbanización",
    description:
      "Propiedad de casi 7.000 m² junto a la rambla, en el límite sur del sector ZP-Pn5 (suelo urbanizable), con proyecto de urbanización redactado (Urbamusa, 2017) y planos disponibles para consulta.",
  },
  en: {
    title: "Ownership & Development Plans",
    description:
      "A property of nearly 7,000 m² next to the rambla, on the southern edge of Sector ZP-Pn5 (developable land), with a development project already drafted (Urbamusa, 2017) and plans available for review.",
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
    eyebrow: "Sector ZP-Pn5 · Propiedad y planos de urbanización",
    title: "Una propiedad junto a la rambla, con proyecto de urbanización ya redactado",
    intro:
      "Casi 7.000 m² de suelo, con proyecto de urbanización de la U.A. 1ª del Plan Parcial redactado en 2017 y planos técnicos disponibles para consulta.",
    s1kicker: "01 — La propiedad",
    s1h2: "Casi 7.000 m² de suelo, con cerca de 2.500 m² de edificabilidad",
    s1p1:
      "La propiedad cuenta con casi 7.000 m² de suelo, que permiten una edificabilidad aproximada de 2.500 m². Su situación aproximada es la marcada en el plano: junto a la rambla, en el límite sur del sector.",
    s1p2:
      "De acuerdo con la legislación urbanística vigente, la parcela que se asigne a esta propiedad en el proyecto de reparcelación que se apruebe deberá situarse en la zona señalada.",
    imgAlt: "Ubicación aproximada de la propiedad, junto a la rambla, en el límite Sur del sector ZP-Pn5",
    figcaption: "Ubicación aproximada de la propiedad, junto a la rambla, en el límite Sur del sector.",
    s2kicker: "02 — Propiedades colindantes",
    s2h2: "Hasta 40.000 m² y más de 10.000 m² edificables sumando el entorno",
    s2p: "Otras propiedades de familiares y allegados, situadas en torno a la señalada, permitirían sumar en conjunto en torno a 40.000 m² de suelo y una superficie edificable superior a 10.000 m² — ampliando la escala disponible para un inversor interesado en una operación conjunta.",
    s3kicker: "03 — Proyecto de Urbanización de la U.A. 1ª",
    s3h2: "Planos técnicos de la urbanización, redactados en 2017",
    s3p: "El Proyecto de Urbanización de la U.A. 1ª del Plan Parcial del sector ZP-Pn5, promovido por la Junta de Compensación El Puntal 5 U.A. 1ª y redactado por Urbamusa en noviembre de 2017, incluye los siguientes planos:",
    source: "Los planos se abren desde la carpeta de Drive del proyecto, clasificada y renombrada por contenido.",
  },
  en: {
    eyebrow: "Sector ZP-Pn5 · Ownership & Development Plans",
    title: "A property next to the rambla, with a development project already drafted",
    intro:
      "Nearly 7,000 m² of land, with a development project (proyecto de urbanización) for U.A. 1ª (Development Unit 1) of the Plan Parcial drafted in 2017, and technical plans available for review.",
    s1kicker: "01 — The property",
    s1h2: "Nearly 7,000 m² of land, with around 2,500 m² of buildable floor area",
    s1p1:
      "The property comprises nearly 7,000 m² of land, allowing for approximately 2,500 m² of buildable floor area. Its approximate location is marked on the plan: next to the rambla (seasonal watercourse), on the southern edge of the Sector.",
    s1p2:
      "Under current planning law, the plot allocated to this property in the reparcelling project (proyecto de reparcelación) — once approved — must be located within the marked area.",
    imgAlt: "Approximate location of the property, next to the rambla, on the southern edge of Sector ZP-Pn5",
    figcaption: "Approximate location of the property, next to the rambla, on the southern edge of the Sector.",
    s2kicker: "02 — Adjoining properties",
    s2h2: "Up to 40,000 m² and over 10,000 m² buildable when combined with the surrounding area",
    s2p: "Other properties belonging to family members and close associates, located around the one marked, would together add up to around 40,000 m² of land and a buildable floor area of over 10,000 m² — expanding the scale available to an investor interested in a combined transaction.",
    s3kicker: "03 — Proyecto de Urbanización (Development Project) for U.A. 1ª",
    s3h2: "Technical development plans, drafted in 2017",
    s3p: "The Proyecto de Urbanización (Development Project) for U.A. 1ª of the Plan Parcial for Sector ZP-Pn5, promoted by the Junta de Compensación (Compensation Board) El Puntal 5 U.A. 1ª and drafted by Urbamusa in November 2017, includes the following plans:",
    source: "Plans open from the project's Drive folder, classified and renamed by content.",
  },
};

export default function PropiedadUrbanizacionPage({ params }: { params: { locale: string } }) {
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
          <p>{t.s1p1}</p>
          <p>{t.s1p2}</p>
          <div className="content-figure">
            <Image
              src="/assets/propiedad-urbanizacion.jpg"
              alt={t.imgAlt}
              width={200}
              height={320}
            />
            <figcaption>{t.figcaption}</figcaption>
          </div>
        </section>

        <section className="section">
          <p className="section-kicker mono">{t.s2kicker}</p>
          <h2>{t.s2h2}</h2>
          <p>{t.s2p}</p>
        </section>

        <section className="section">
          <p className="section-kicker mono">{t.s3kicker}</p>
          <h2>{t.s3h2}</h2>
          <p>{t.s3p}</p>
          <ul className="doc-list">
            {PLANOS_URBANIZACION.map((p) => (
              <li key={p.driveId}>
                <a href={driveViewUrl(p.driveId)} target="_blank" rel="noopener noreferrer">
                  <span className={`ext mono ${p.ext}`}>{p.ext}</span>
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
          <p className="section-source">{t.source}</p>
        </section>

        <SectionNav locale={locale} current={PATH} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
