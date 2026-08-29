import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "../globals.css";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";
import {
  locales,
  isLocale,
  alternateLanguages,
  OG_LOCALE,
  HTML_LANG,
  type Locale,
} from "@/lib/i18n";

// Self-hosted via next/font: downloaded and served from our own domain at
// build time (no request to fonts.googleapis.com/fonts.gstatic.com at
// runtime), with `display: swap` to avoid blocking first render. Same
// families and weights as before, just faster and one less third party.
//
// Google Fonts retired "Archivo Expanded" as a standalone family; it now
// lives inside the variable "Archivo" family's width (`wdth`) axis. We load
// Archivo as a variable font with that axis enabled and pair it in CSS with
// `font-stretch: expanded` (the ~125% end of that axis) to reproduce the
// original expanded look, keeping the same 700/900 weights via font-weight.
const archivoExpanded = Archivo({
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  variable: "--font-archivo-expanded",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const KEYWORDS: Record<Locale, string[]> = {
  es: [
    "suelo urbanizable Murcia",
    "suelo terciario Murcia",
    "suelo logístico Murcia",
    "inversión inmobiliaria Murcia",
    "sector ZP-Pn5",
    "suelo industrial Región de Murcia",
    "activos inmobiliarios Murcia",
    "operaciones de suelo España",
    "El Puntal Murcia",
    "Plan Parcial Actividad Económica",
  ],
  en: [
    "developable land Murcia Spain",
    "commercial land Murcia",
    "logistics land Murcia",
    "real estate investment Murcia",
    "sector ZP-Pn5",
    "industrial land Region of Murcia",
    "real estate assets Murcia",
    "land deals Spain",
    "El Puntal Murcia",
    "Plan Parcial local development plan",
  ],
};

const TITLE_TEMPLATE: Record<Locale, string> = {
  es: "%s — Parque de Actividad Norte de Murcia",
  en: "%s — Parque de Actividad Norte de Murcia",
};

const OG_IMAGE_ALT: Record<Locale, string> = {
  es: "Plano de situación del sector ZP-Pn5, Parque de Actividad Norte de Murcia",
  en: "Site plan of Sector ZP-Pn5, Parque de Actividad Norte de Murcia",
};

const ADDRESS_REGION: Record<Locale, string> = {
  es: "Región de Murcia",
  en: "Region of Murcia",
};

const PLACE_DESCRIPTION: Record<Locale, string> = {
  es: "Suelo urbanizable de uso terciario y logístico, Ficha PGOU núm. 44, junto a la Autovía de Alicante (A-7).",
  en: "Developable land (suelo urbanizable) for commercial and logistics use, PGOU record no. 44, next to the A-7 motorway (Autovía de Alicante).",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "es";
  const name = SITE_NAME[locale];
  const description = SITE_DESCRIPTION[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: name,
      template: TITLE_TEMPLATE[locale],
    },
    description,
    keywords: KEYWORDS[locale],
    authors: [{ name: "Parque de Actividad Norte de Murcia" }],
    alternates: {
      canonical: `/${locale}`,
      languages: alternateLanguages("/"),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale],
      url: `/${locale}`,
      siteName: name,
      title: name,
      description,
      images: [
        {
          url: "/assets/og-norte-murcia.jpg",
          width: 1200,
          height: 630,
          alt: OG_IMAGE_ALT[locale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description,
      images: ["/assets/og-norte-murcia.jpg"],
    },
  };
}

function buildJsonLd(locale: Locale) {
  const name = SITE_NAME[locale];
  const description = SITE_DESCRIPTION[locale];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Parque de Actividad Norte de Murcia — Sector ZP-Pn5",
        url: SITE_URL,
        description,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/${locale}`,
        name,
        description,
        inLanguage: HTML_LANG[locale],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Place",
        name: "Sector ZP-Pn5 — El Puntal, Murcia",
        description: PLACE_DESCRIPTION[locale],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Murcia",
          addressRegion: ADDRESS_REGION[locale],
          addressCountry: "ES",
        },
      },
    ],
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }
  const locale = params.locale as Locale;
  const jsonLd = buildJsonLd(locale);

  return (
    <html
      lang={HTML_LANG[locale]}
      className={`${archivoExpanded.variable} ${plexMono.variable} ${plexSans.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
