import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

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
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Expanded:wght@700;900&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
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
