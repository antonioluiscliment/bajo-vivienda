/**
 * URL base del sitio, resuelta sin depender de tener ya un dominio propio.
 *
 * Orden de resolución:
 * 1. NEXT_PUBLIC_SITE_URL — variable de entorno manual. En cuanto se
 *    compre el dominio (.com/.es), basta con definirla en Vercel
 *    (Project Settings → Environment Variables) con el valor
 *    "https://www.tudominio.com" y todo el sitio (metadatos, canonical,
 *    sitemap.xml, robots.txt) empieza a usarla en el siguiente despliegue,
 *    sin tocar código.
 * 2. VERCEL_PROJECT_PRODUCTION_URL — dominio de producción que Vercel
 *    asigna automáticamente (el .vercel.app, o el dominio propio si ya
 *    está configurado en el proyecto).
 * 3. VERCEL_URL — URL del despliegue actual (previews incluidos).
 * 4. http://localhost:3000 — desarrollo local.
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = "Parque de Actividad Norte de Murcia — Fase II · Sector ZP-Pn5";

export const SITE_DESCRIPTION =
  "585.301 m² de suelo urbanizable de uso terciario y logístico junto a la Autovía de Alicante (A-7), en el sector ZP-Pn5 (El Puntal, Murcia). Oportunidad de inversión inmobiliaria: centro comercial, hoteles, estaciones de servicio y logística.";
