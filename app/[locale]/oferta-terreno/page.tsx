import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import { isLocale, alternateLanguages, localeHref, type Locale } from "@/lib/i18n";

const PATH = "/oferta-terreno";

const META: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Oferta de terreno",
    description:
      "Conjunto de parcelas afines del Sector ZP-Pn5 (suelo urbanizable, activo inmobiliario), señaladas en el plano parcelario catastral, con posibilidades de acuerdo de venta ante una buena oferta.",
  },
  en: {
    title: "Land for Sale",
    description:
      "A group of related plots in Sector ZP-Pn5 (developable land, a real-estate asset), marked on the cadastral parcel map, open to a sale agreement given a good offer.",
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
    eyebrow: "Sector ZP-Pn5 · Oferta de terreno",
    title: "Conjunto de parcelas afines con posibilidad de acuerdo de venta",
    intro:
      "Un grupo de parcelas colindantes del Sector, situado al Sureste del polígono, señalado en el plano parcelario catastral con un color único que lo distingue del resto de fincas.",
    s1kicker: "01 — Plano de parcelas afines",
    s1h2: "Parcelas afines, señaladas en azul",
    s1p: "El plano recoge, sobre el parcelario catastral del Sector, el conjunto de parcelas afines —12, 18, 19, 20, 21, 22, 23, 25 y 26— marcadas con un único color azul que las distingue como un solo conjunto frente al resto de fincas.",
    source: "Por protección de datos, el plano no incluye los titulares catastrales de las fincas.",
    img1Alt: "Plano parcelario catastral del Sector ZP-Pn5 con el conjunto de parcelas afines señalado en azul",
    fig1: "Plano parcelario catastral del Sector. El conjunto de parcelas afines aparece marcado en azul.",
    img2Alt: "Detalle del conjunto de parcelas afines señalado en azul, al Sureste del Sector",
    fig2: "Detalle del conjunto de parcelas afines, al Sureste del Sector.",
    s2kicker: "02 — Oportunidad ante una buena oferta",
    s2h2: "Un conjunto con grandes posibilidades de aprovechamiento",
    s2p1:
      "Este conjunto de parcelas afines puede llegar a un acuerdo de venta frente a una buena oferta. Que el Proyecto de Reparcelación del Sector no esté aún aprobado no supone una desventaja: la proximidad de las parcelas entre sí y su situación al Sureste del polígono la convierten en una superficie con grandes posibilidades de aprovechamiento.",
    s2p2:
      "La zona Norte de Murcia está viviendo una gran expansión residencial, y los espacios vacantes hacia la ciudad están ultimando su desarrollo. Sirva como ejemplo la ciudad deportiva que se está construyendo al Norte (Noreste) de la plaza de los Cubos, en la avenida Juan de Borbón.",
    s3kicker: "03 — El retraso no perjudica la inversión",
    s3h2: "La revalorización de un núcleo central",
    s3p: "El posible retraso en la ejecución del desarrollo, por el tiempo que tarde en concluirse la reparcelación, no perjudica a la inversión realizada. Al contrario: el desarrollo acelerado de toda la zona Norte contribuye a la revalorización de este núcleo central, que ha quedado como una almendra entre los desarrollos urbanísticos colindantes y las principales vías de comunicación.",
    s4kicker: "04 — Precios actuales",
    s4h2: "Precio actual de la oferta de terreno",
    s4p: "En el actual estado de desarrollo del Sector, la oferta de terreno tiene un precio por metro cuadrado bruto desde 400 €.",
    s4stat: "400 €/m²",
    s4statL: "Precio bruto de suelo, desde",
  },
  en: {
    eyebrow: "Sector ZP-Pn5 · Land for Sale",
    title: "A group of related plots open to a sale agreement",
    intro:
      "A group of adjoining plots within the Sector, located to the south-east of the estate, marked on the cadastral parcel map with a single colour that sets it apart from the other plots.",
    s1kicker: "01 — Map of related plots",
    s1h2: "Related plots, marked in blue",
    s1p: "The plan shows, over the Sector's cadastral parcels, the group of related plots —12, 18, 19, 20, 21, 22, 23, 25 and 26— marked with a single blue colour that sets them apart as one group from the rest of the plots.",
    source: "For data protection reasons, the plan does not include the cadastral titleholders of the plots.",
    img1Alt: "Cadastral parcel map of Sector ZP-Pn5 with the group of related plots marked in blue",
    fig1: "Cadastral parcel map of the Sector. The group of related plots is marked in blue.",
    img2Alt: "Detail of the group of related plots marked in blue, to the south-east of the Sector",
    fig2: "Detail of the group of related plots, to the south-east of the Sector.",
    s2kicker: "02 — Opportunity given a good offer",
    s2h2: "A group with strong development potential",
    s2p1:
      "This group of related plots can reach a sale agreement given a good offer. The fact that the Sector's Proyecto de Reparcelación has not yet been approved is not a disadvantage: the proximity of the plots to one another and their location to the south-east of the estate make it an area with strong development potential (aprovechamiento).",
    s2p2:
      "The northern area of Murcia is undergoing major residential expansion, and the vacant spaces towards the city are nearing the end of their development. A case in point is the sports complex under construction to the north (north-east) of Plaza de los Cubos, on Avenida de Juan de Borbón.",
    s3kicker: "03 — A delay does not harm the investment",
    s3h2: "The appreciation of a central hub",
    s3p: 'Any delay in carrying out the development, due to the time the reparcelling process takes to conclude, does not harm the investment already made. On the contrary: the accelerated development of the whole northern area contributes to the appreciation of this central hub, which has become a prime infill site, kernel, surrounded by the adjoining developments and main transport routes.',
    s4kicker: "04 — Current prices",
    s4h2: "Current price of the land on offer",
    s4p: "At the Sector's current stage of development, the land on offer is priced from €400 per gross square metre.",
    s4stat: "€400/m²",
    s4statL: "Gross land price, from",
  },
};

export default function OfertaTerrenoPage({ params }: { params: { locale: string } }) {
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
          <p>{t.s1p}</p>
          <p className="section-source">{t.source}</p>
          <div className="content-figure">
            <Image
              src="/assets/parcelario-catastral-afines.jpg"
              alt={t.img1Alt}
              width={280}
              height={263}
            />
            <figcaption>{t.fig1}</figcaption>
          </div>
          <div className="content-figure">
            <Image
              src="/assets/parcelario-catastral-afines-detalle.jpg"
              alt={t.img2Alt}
              width={340}
              height={191}
            />
            <figcaption>{t.fig2}</figcaption>
          </div>
        </section>

        <section className="section">
          <p className="section-kicker mono">{t.s2kicker}</p>
          <h2>{t.s2h2}</h2>
          <p>{t.s2p1}</p>
          <p>{t.s2p2}</p>
        </section>

        <section className="section">
          <p className="section-kicker mono">{t.s3kicker}</p>
          <h2>{t.s3h2}</h2>
          <p>{t.s3p}</p>
        </section>

        <section className="section">
          <p className="section-kicker mono">{t.s4kicker}</p>
          <h2>{t.s4h2}</h2>
          <p>{t.s4p}</p>
          <div className="stat-grid">
            <div className="stat-card">
              <div className="n">{t.s4stat}</div>
              <div className="l">{t.s4statL}</div>
            </div>
          </div>
        </section>

        <SectionNav locale={locale} current={PATH} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
