import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import { isLocale, alternateLanguages, localeHref, type Locale } from "@/lib/i18n";
import { getNewsSorted } from "@/lib/news";

const PATH = "/noticias";

const META: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Noticias del entorno",
    description:
      "Actualidad urbanística del norte de Murcia relacionada con el sector ZP-Pn5: Ciudad Deportiva, Torre Alcayna, Cañada Ancha y otros desarrollos de la zona.",
  },
  en: {
    title: "Area news",
    description:
      "Urban-development news from northern Murcia related to Sector ZP-Pn5: Ciudad Deportiva, Torre Alcayna, Cañada Ancha and other developments in the area.",
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
    eyebrow: "Sector ZP-Pn5 · Noticias",
    title: "Noticias del entorno",
    intro:
      "Selección de noticias sobre desarrollos urbanísticos del norte de Murcia, con su relación directa con el sector ZP-Pn5 — Parque de Actividad Norte de Murcia.",
    readMore: "Leer noticia →",
  },
  en: {
    eyebrow: "Sector ZP-Pn5 · News",
    title: "Area news",
    intro:
      "A selection of news about urban developments in northern Murcia, with their direct relationship to Sector ZP-Pn5 — Parque de Actividad Norte de Murcia.",
    readMore: "Read article →",
  },
};

function formatDate(locale: Locale, iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(d);
}

export default function NoticiasPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = T[locale];
  const items = getNewsSorted();

  return (
    <>
      <a href="#contenido" className="skip-link">
        {SKIP[locale]}
      </a>
      <Header locale={locale} />
      <main id="contenido">
        <PageHeader locale={locale} eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

        <section className="section">
          <div className="news-list">
            {items.map((item) => {
              const c = item.content[locale];
              return (
                <article className="news-card" key={item.slug}>
                  <p className="news-date mono">
                    {formatDate(locale, item.date)} · {item.sourceName}
                  </p>
                  <h2>
                    <a href={localeHref(locale, `${PATH}/${item.slug}`)}>{c.title}</a>
                  </h2>
                  <p>{c.excerpt}</p>
                  <a className="news-readmore mono" href={localeHref(locale, `${PATH}/${item.slug}`)}>
                    {t.readMore}
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <SectionNav locale={locale} current={PATH} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
