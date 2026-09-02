import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import { isLocale, alternateLanguages, localeHref, OG_LOCALE, HTML_LANG, type Locale } from "@/lib/i18n";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { NEWS, getNewsBySlug } from "@/lib/news";

const BASE_PATH = "/noticias";

export function generateStaticParams() {
  return NEWS.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "es";
  const item = getNewsBySlug(params.slug);
  if (!item) return {};
  const c = item.content[locale];
  const path = `${BASE_PATH}/${item.slug}`;

  return {
    title: c.title,
    description: c.excerpt,
    alternates: {
      canonical: localeHref(locale, path),
      languages: alternateLanguages(path),
    },
    openGraph: {
      type: "article",
      locale: OG_LOCALE[locale],
      url: localeHref(locale, path),
      title: c.title,
      description: c.excerpt,
      publishedTime: item.date,
      images: [
        {
          url: "/assets/og-norte-murcia.jpg",
          width: 1200,
          height: 630,
          alt: c.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.excerpt,
      images: ["/assets/og-norte-murcia.jpg"],
    },
  };
}

const SKIP: Record<Locale, string> = { es: "Saltar al contenido", en: "Skip to content" };

const T = {
  es: {
    eyebrow: "Sector ZP-Pn5 · Noticias",
    approx: "(fecha aproximada)",
    source: "Fuente:",
    related: "Relacionado en esta web:",
    back: "← Volver a Noticias",
    enlarge: "Ampliar ↗",
    mapLocatorTitle: "Localización del Sector ZP-Pn5",
    mapLocatorCaption: "Mapa interactivo del entorno del Sector.",
  },
  en: {
    eyebrow: "Sector ZP-Pn5 · News",
    approx: "(approximate date)",
    source: "Source:",
    related: "Related on this site:",
    back: "← Back to News",
    enlarge: "Enlarge ↗",
    mapLocatorTitle: "Location of Sector ZP-Pn5",
    mapLocatorCaption: "Interactive map of the Sector's surroundings.",
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

function buildJsonLd(locale: Locale, item: NonNullable<ReturnType<typeof getNewsBySlug>>) {
  const c = item.content[locale];
  const url = `${SITE_URL}${localeHref(locale, `${BASE_PATH}/${item.slug}`)}`;
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: c.title,
    description: c.excerpt,
    datePublished: item.date,
    dateModified: item.date,
    inLanguage: HTML_LANG[locale],
    image: [`${SITE_URL}/assets/og-norte-murcia.jpg`],
    author: { "@type": "Organization", name: SITE_NAME[locale] },
    publisher: { "@type": "Organization", name: SITE_NAME[locale] },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export default function NewsDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const item = getNewsBySlug(params.slug);
  if (!item) notFound();

  const t = T[locale];
  const c = item.content[locale];
  const jsonLd = buildJsonLd(locale, item);

  return (
    <>
      <a href="#contenido" className="skip-link">
        {SKIP[locale]}
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale} />
      <main id="contenido">
        <PageHeader locale={locale} eyebrow={t.eyebrow} title={c.title} intro={c.excerpt} />

        <section className="section">
          <p className="news-date mono">
            {formatDate(locale, item.date)}
            {item.approxDate ? ` ${t.approx}` : ""}
          </p>

          {c.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <div className="news-relation">
            <p className="news-relation-title">{c.relationTitle}</p>
            <p>{c.relationBody}</p>
          </div>

          {item.mapImage ? (
            <div className="figure-row figure-row-compare">
              <figure className="content-figure content-figure-map content-figure-compare">
                <a href={item.mapImage} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={item.mapImage}
                    alt={c.mapImageAlt ?? c.mapCaption}
                    width={900}
                    height={501}
                  />
                </a>
                <figcaption>
                  {c.mapCaption}{" "}
                  <a href={item.mapImage} target="_blank" rel="noopener noreferrer">
                    {t.enlarge}
                  </a>
                </figcaption>
              </figure>
              <figure className="content-figure content-figure-map content-figure-compare">
                <iframe
                  src={`https://www.google.com/maps/@${item.mapQuery},${item.mapZoom}z?output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t.mapLocatorTitle}
                />
                <figcaption>
                  {t.mapLocatorCaption}{" "}
                  <a
                    href={`https://www.google.com/maps/@${item.mapQuery},${item.mapZoom}z`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.enlarge}
                  </a>
                </figcaption>
              </figure>
            </div>
          ) : (
            <figure className="content-figure content-figure-map">
              <iframe
                src={`https://www.google.com/maps?q=${item.mapQuery}&z=${item.mapZoom}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={c.mapCaption}
              />
              <figcaption>{c.mapCaption}</figcaption>
            </figure>
          )}

          <p className="section-source">
            {t.source}{" "}
            {item.sourceUrl ? (
              <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
                {item.sourceName}
              </a>
            ) : (
              item.sourceName
            )}
          </p>

          <p className="news-related mono">
            {t.related}{" "}
            {c.relatedLinks.map((link, i) => (
              <span key={link.href}>
                <a href={localeHref(locale, link.href)}>{link.label}</a>
                {i < c.relatedLinks.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>

          <p style={{ marginTop: "1.6rem" }}>
            <a className="back-link" href={localeHref(locale, BASE_PATH)}>
              {t.back}
            </a>
          </p>
        </section>

        <SectionNav locale={locale} current={BASE_PATH} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
