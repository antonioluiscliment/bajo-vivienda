import type { Metadata } from "next";
import { Archivo_Expanded, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

// Self-hosted via next/font: downloaded and served from our own domain at
// build time (no request to fonts.googleapis.com/fonts.gstatic.com at
// runtime), with `display: swap` to avoid blocking first render. Same
// families and weights as before, just faster and one less third party.
const archivoExpanded = Archivo_Expanded({
  subsets: ["latin"],
  weight: ["700", "900"],
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s — Parque de Actividad Norte de Murcia",
  },
  description: SITE_DESCRIPTION,
  keywords: [
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
  authors: [{ name: "Parque de Actividad Norte de Murcia" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/assets/zppn5-plano-situacion.jpg",
        width: 1200,
        height: 630,
        alt: "Plano de situación del sector ZP-Pn5, Parque de Actividad Norte de Murcia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/assets/zppn5-plano-situacion.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Parque de Actividad Norte de Murcia — Sector ZP-Pn5",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "es-ES",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Place",
      name: "Sector ZP-Pn5 — El Puntal, Murcia",
      description:
        "Suelo urbanizable de uso terciario y logístico, Ficha PGOU núm. 44, junto a la Autovía de Alicante (A-7).",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Murcia",
        addressRegion: "Región de Murcia",
        addressCountry: "ES",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
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
