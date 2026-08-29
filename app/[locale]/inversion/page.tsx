import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import { isLocale, alternateLanguages, localeHref, type Locale } from "@/lib/i18n";

const PATH = "/inversion";

const META: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Usos e inversión",
    description:
      "Suelo urbanizable de uso terciario y logístico en el sector ZP-Pn5: economía de la Región de Murcia y usos autorizados por la Norma Urbanística N.5 del Plan Parcial. Oportunidad de inversión inmobiliaria.",
  },
  en: {
    title: "Uses & Investment",
    description:
      "Developable land for commercial and logistics use in Sector ZP-Pn5: the Region of Murcia's economy and the land uses authorised under Norma Urbanística N.5 of the Plan Parcial. Real-estate investment opportunity.",
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

const USOS = {
  es: [
    {
      tag: "Comercial",
      title: "Comercio y grandes superficies",
      text: "Incluye Centros Terciarios Integrados (>30.000 m², oferta comercial, ocio y restauración), grandes establecimientos (>2.500 m² de venta) y comercio local.",
    },
    {
      tag: "Hospedaje",
      title: "Hoteles",
      text: "Uso de hospedaje destinado a proporcionar alojamiento temporal a las personas, expresamente recogido como uso terciario permitido.",
    },
    {
      tag: "Automoción",
      title: "Gasolineras y áreas de servicio",
      text: "Establecimientos de despacho de carburantes y afines, con posibilidad de tienda de conveniencia, taller y restauración anexos.",
    },
    {
      tag: "Ocio",
      title: "Restauración, espectáculos y ocio",
      text: "Servicios de restauración y actividades de ocio y espectáculos (discotecas, salas de fiesta, salas de juego y similares).",
    },
    {
      tag: "Oficinas",
      title: "Oficinas y servicios profesionales",
      text: "Actividades terciarias de carácter administrativo, técnico, financiero o de información, para empresas o particulares.",
    },
    {
      tag: "Logística",
      title: "Almacenes",
      text: "El uso global del sector incluye expresamente almacenes, junto con los usos de servicios, equipamientos colectivos y terciarios en general.",
    },
  ],
  en: [
    {
      tag: "Retail",
      title: "Retail & large stores",
      text: "Includes Centros Terciarios Integrados / integrated retail centres (over 30,000 m², combining retail, leisure and dining), large stores (over 2,500 m² of sales floor) and local shops.",
    },
    {
      tag: "Lodging",
      title: "Hotels",
      text: "Lodging use for providing temporary accommodation, expressly listed as a permitted tertiary (commercial) use.",
    },
    {
      tag: "Automotive",
      title: "Petrol stations & service areas",
      text: "Fuel-dispensing outlets and related facilities, with the possibility of an attached convenience store, workshop and dining area.",
    },
    {
      tag: "Leisure",
      title: "Dining, entertainment & leisure",
      text: "Dining services and leisure/entertainment activities (nightclubs, function halls, gaming venues and similar).",
    },
    {
      tag: "Offices",
      title: "Offices & professional services",
      text: "Administrative, technical, financial or information-based tertiary activities, for businesses or individuals.",
    },
    {
      tag: "Logistics",
      title: "Warehouses",
      text: "The Sector's overall permitted use expressly includes warehouses, alongside services, collective facilities and tertiary uses in general.",
    },
  ],
};

const T = {
  es: {
    eyebrow: "Sector ZP-Pn5 · Usos e inversión",
    title: "Por qué invertir en la segunda etapa del Parque de Actividad Norte",
    intro:
      "Una economía regional en crecimiento y un marco urbanístico ya aprobado que autoriza expresamente los usos terciarios que interesan a un inversor: comercial, hotelero, estaciones de servicio y logística.",
    s1kicker: "01 — Economía de la Región de Murcia",
    s1h2: "Un mercado regional en expansión",
    s1p: "La Región de Murcia encadena varios años de crecimiento económico por encima de la media nacional, con un mercado laboral que bate récords de empleo. Son las condiciones de demanda en las que se inserta el sector ZP-Pn5.",
    stats: [
      { n: "42.488 M€", l: "PIB regional 2024 (+6,7% interanual)" },
      { n: "26.944 €", l: "PIB per cápita 2024 (+5,5% interanual)" },
      { n: "1.589.138", l: "Habitantes en la Región de Murcia (INE, 2025)" },
      { n: "742.100", l: "Personas ocupadas — récord histórico (EPA, 2º trim. 2026)" },
    ],
    sourcesLabel: "Fuentes:",
    src1: "CREM — Contabilidad Regional",
    src2: "INE (población)",
    src3: " y UGT Región de Murcia (EPA).",
    s2kicker: "02 — Norma Urbanística N.5 del Plan Parcial",
    s2h2: "Usos del suelo terciario ya autorizados",
    s2p: "El sector cuenta con Plan Parcial aprobado definitivamente por el Pleno del Excmo. Ayuntamiento de Murcia el 22 de julio de 2011. Su Norma Urbanística N.5 (Régimen urbanístico del suelo) califica el uso global como “Servicios, equipamientos colectivos y usos terciarios en general. Almacenes e industrias”, y detalla los usos pormenorizados admitidos:",
    s2source1: "Fuente: Texto Refundido del Plan Parcial de Actividad Económica del sector ZP-Pn5, Normas Urbanísticas N.5 y N.6.3 (Norma Urbanística 1ª — Usos terciarios). Consulta el documento completo en la ",
    s2sourceLink: "Documentación del Plan Parcial",
    s2source2: ".",
  },
  en: {
    eyebrow: "Sector ZP-Pn5 · Uses & Investment",
    title: "Why invest in Phase II of the Parque de Actividad Norte",
    intro:
      "A growing regional economy and an already-approved planning framework that expressly authorises the tertiary uses that matter to an investor: retail, hospitality, service stations and logistics.",
    s1kicker: "01 — Economy of the Region of Murcia",
    s1h2: "An expanding regional market",
    s1p: "The Region of Murcia has posted several consecutive years of economic growth above the national average, with a labour market setting employment records. These are the demand conditions that Sector ZP-Pn5 sits within.",
    stats: [
      { n: "€42,488 M", l: "Regional GDP 2024 (+6.7% year-on-year)" },
      { n: "€26,944", l: "GDP per capita 2024 (+5.5% year-on-year)" },
      { n: "1,589,138", l: "Population of the Region of Murcia (INE, 2025)" },
      { n: "742,100", l: "People employed — historic record (EPA, Q2 2026)" },
    ],
    sourcesLabel: "Sources:",
    src1: "CREM — Regional Accounts (Contabilidad Regional)",
    src2: "INE (population)",
    src3: " and UGT Región de Murcia (EPA — Labour Force Survey).",
    s2kicker: "02 — Norma Urbanística N.5 of the Plan Parcial",
    s2h2: "Tertiary land uses already authorised",
    s2p: "The Sector has a Plan Parcial (Local Area Development Plan) that received final approval from the Plenary of Murcia City Council on 22 July 2011. Its Norma Urbanística N.5 (Planning Bylaw No. 5 — land use regime) designates the overall permitted use as “Services, collective facilities and tertiary uses in general. Warehouses and industry”, and sets out the detailed uses allowed:",
    s2source1: "Source: Texto Refundido (Consolidated Text) of the Plan Parcial de Actividad Económica for Sector ZP-Pn5, Normas Urbanísticas N.5 and N.6.3 (Norma Urbanística 1ª — tertiary uses). See the full document under ",
    s2sourceLink: "Plan Parcial Documentation",
    s2source2: ".",
  },
};

export default function InversionPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = T[locale];
  const usos = USOS[locale];

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
          <p>{t.s1p}</p>
          <div className="stat-grid">
            {t.stats.map((s) => (
              <div className="stat-card" key={s.l}>
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
          <p className="section-source">
            {t.sourcesLabel}{" "}
            <a
              href="https://econet.carm.es/inicio/-/crem/sicrem/PU_datosBasicos/sec42.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.src1}
            </a>
            ,{" "}
            <a
              href="https://www.idealista.com/news/vacacional/destinos-turisticos/2026/06/16/902051-cual-es-la-poblacion-de-la-region-de-murcia-la-cifra-de-habitantes-en-2026"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.src2}
            </a>
            {t.src3}
          </p>
        </section>

        <section className="section">
          <p className="section-kicker mono">{t.s2kicker}</p>
          <h2>{t.s2h2}</h2>
          <p>{t.s2p}</p>
          <div className="use-grid">
            {usos.map((u) => (
              <div className="use-card" key={u.title}>
                <span className="tag mono">{u.tag}</span>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </div>
            ))}
          </div>
          <p className="section-source">
            {t.s2source1}
            <a href={localeHref(locale, "/documentacion")}>{t.s2sourceLink}</a>
            {t.s2source2}
          </p>
        </section>

        <SectionNav locale={locale} current={PATH} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
