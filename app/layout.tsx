import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parque de Actividad Norte de Murcia — Fase II · Sector ZP-Pn5",
  description:
    "585.301 m² de suelo urbanizable de uso Servicios junto a la Autovía de Alicante (A-7), en el sector ZP-Pn5 (El Puntal, Murcia). Centro comercial, hoteles, estaciones de servicio y logística.",
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
      <body>{children}</body>
    </html>
  );
}
