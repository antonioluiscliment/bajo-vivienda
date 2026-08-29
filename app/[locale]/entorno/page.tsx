import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import { isLocale, alternateLanguages, localeHref, type Locale } from "@/lib/i18n";

const PATH = "/entorno";

const META: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Entorno comercial",
    description:
      "El sector ZP-Pn5, suelo urbanizable en el norte de Murcia, se integra en el principal eje comercial de la ciudad, junto a los centros comerciales La Noria, El Tiro, Tader y Nueva Condomina, y a sus dos universidades.",
  },
  en: {
    title: "Retail Surroundings",
    description:
      "Sector ZP-Pn5, developable land in northern Murcia, sits within the city's main retail corridor, alongside the La Noria, El Tiro, Tader and Nueva Condomina shopping centres and its two universities.",
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

const CENTROS = {
  es: [
    { name: "Centro Comercial La Noria", place: "Guadalupe" },
    { name: "Centro Comercial El Tiro", place: "Espinardo" },
    { name: "Sector ZP-Pn5", place: "El Puntal — este sector" },
    { name: "Centro Comercial Tader", place: "El Puntal / Churra" },
    { name: "Centro Comercial Nueva Condomina", place: "Churra" },
  ],
  en: [
    { name: "Centro Comercial La Noria", place: "Guadalupe" },
    { name: "Centro Comercial El Tiro", place: "Espinardo" },
    { name: "Sector ZP-Pn5", place: "El Puntal — this Sector" },
    { name: "Centro Comercial Tader", place: "El Puntal / Churra" },
    { name: "Centro Comercial Nueva Condomina", place: "Churra" },
  ],
};

const OTROS = {
  es: [
    { name: "Universidad Católica de Murcia (UCAM)", place: "Guadalupe" },
    { name: "Universidad de Murcia", place: "Espinardo" },
    { name: "Estadio de fútbol de La Condomina", place: "Murcia" },
  ],
  en: [
    { name: "Universidad Católica de Murcia (UCAM)", place: "Guadalupe" },
    { name: "University of Murcia", place: "Espinardo" },
    { name: "La Condomina Football Stadium", place: "Murcia" },
  ],
};

const T = {
  es: {
    eyebrow: "Sector ZP-Pn5 · Entorno comercial",
    title: "En el corazón del principal eje comercial del norte de Murcia",
    intro:
      "El sector no es un enclave aislado: se suma a una concentración ya consolidada de grandes superficies comerciales, universidades y equipamientos que atraen tráfico y demanda al norte de la ciudad.",
    s1kicker: "01 — Centros comerciales del eje norte",
    s1h2: "Cinco centros comerciales en un mismo corredor",
    s1p: "Desde Guadalupe hasta Churra, el norte de Murcia concentra varios de los principales centros comerciales de la Región, con el sector ZP-Pn5 situado entre ellos, en El Puntal.",
    s2kicker: "02 — Universidades y equipamientos",
    s2h2: "Población flotante y demanda estable todo el año",
    s2p: "La zona norte concentra además las dos universidades de la Región y uno de sus grandes equipamientos deportivos, generando un flujo constante de población que refuerza la demanda para uso comercial, hotelero y de restauración.",
    imgAlt: "Centros comerciales y distritos del norte de Murcia: Nueva Condomina, Thader, IKEA, Guadalupe, Espinardo",
    figcaption: "El eje comercial del norte de Murcia, con el sector ZP-Pn5 (El Puntal) entre Nueva Condomina y Guadalupe.",
    source: "Ubicaciones señaladas por el promotor sobre cartografía de Google Maps.",
  },
  en: {
    eyebrow: "Sector ZP-Pn5 · Retail Surroundings",
    title: "At the heart of northern Murcia's main retail corridor",
    intro:
      "The Sector is not an isolated enclave: it joins an already well-established concentration of large retail outlets, universities and amenities that draw traffic and demand to the north of the city.",
    s1kicker: "01 — Shopping centres of the northern corridor",
    s1h2: "Five shopping centres along one corridor",
    s1p: "From Guadalupe to Churra, northern Murcia is home to several of the Region's main shopping centres, with Sector ZP-Pn5 sitting among them, in El Puntal.",
    s2kicker: "02 — Universities & amenities",
    s2h2: "Year-round footfall and steady demand",
    s2p: "The northern area is also home to the Region's two universities and one of its major sports venues, generating a steady flow of people that reinforces demand for retail, hospitality and dining uses.",
    imgAlt: "Shopping centres and districts of northern Murcia: Nueva Condomina, Thader, IKEA, Guadalupe, Espinardo",
    figcaption: "The retail corridor of northern Murcia, with Sector ZP-Pn5 (El Puntal) between Nueva Condomina and Guadalupe.",
    source: "Locations marked by the developer on Google Maps cartography.",
  },
};

export default function EntornoPage({ params }: { params: { locale: string } }) {
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
          <ul className="anchor-list">
            {CENTROS[locale].map((c, i) => (
              <li key={c.name + i}>
                <span className="mk mono">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="name">{c.name}</span>
                  <span className="place">{c.place}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <p className="section-kicker mono">{t.s2kicker}</p>
          <h2>{t.s2h2}</h2>
          <p>{t.s2p}</p>
          <ul className="anchor-list">
            {OTROS[locale].map((c, i) => (
              <li key={c.name + i}>
                <span className="mk mono">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="name">{c.name}</span>
                  <span className="place">{c.place}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="figure-row">
            <figure className="content-figure">
              <Image
                src="/assets/murcia-ciudad-contexto.jpg"
                alt={t.imgAlt}
                width={800}
                height={1280}
              />
              <figcaption>{t.figcaption}</figcaption>
            </figure>
          </div>
          <p className="section-source">{t.source}</p>
        </section>

        <SectionNav locale={locale} current={PATH} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
