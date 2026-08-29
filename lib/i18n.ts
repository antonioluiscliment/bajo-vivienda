/**
 * Configuración central de idiomas del sitio.
 *
 * Estructura de URLs: /es/... y /en/... (subcarpeta de idioma), la
 * recomendada para SEO multi-idioma porque permite indexar cada versión
 * por separado y enlazarlas entre sí con hreflang. El español (/es) es
 * el idioma por defecto; las rutas sin prefijo se redirigen a /es/ desde
 * middleware.ts para no perder las URLs ya indexadas.
 */
export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Mapea a los códigos que esperan openGraph.locale / hreflang.
export const OG_LOCALE: Record<Locale, string> = {
  es: "es_ES",
  en: "en_US",
};

export const HTML_LANG: Record<Locale, string> = {
  es: "es",
  en: "en",
};

/** Añade el prefijo de idioma a una ruta interna, p. ej. localeHref("en", "/inversion") -> "/en/inversion" */
export function localeHref(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return `/${locale}${clean}`;
}

/**
 * Bloque `alternates.languages` para metadata: enlaza cada página con su
 * equivalente en el otro idioma (hreflang) y marca el español como
 * versión por defecto (x-default) para buscadores y navegadores sin
 * idioma reconocido.
 */
export function alternateLanguages(path: string): Record<string, string> {
  return {
    es: localeHref("es", path),
    en: localeHref("en", path),
    "x-default": localeHref("es", path),
  };
}
