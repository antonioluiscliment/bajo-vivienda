"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

// Quita el prefijo de idioma actual del pathname para reconstruir el
// mismo destino en el otro idioma, p. ej. "/es/inversion" -> "/inversion".
function pathWithoutLocale(pathname: string): string {
  const rest = pathname.replace(/^\/(es|en)(?=\/|$)/, "");
  return rest === "" ? "/" : rest;
}

export default function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathWithoutLocale(pathname);
  const suffix = rest === "/" ? "" : rest;

  return (
    <div className="lang-switch" aria-label="Selector de idioma / Language selector">
      {locale === "es" ? (
        <span className="current">ES</span>
      ) : (
        <a href={`/es${suffix}`} hrefLang="es">
          ES
        </a>
      )}
      <span className="sep">/</span>
      {locale === "en" ? (
        <span className="current">EN</span>
      ) : (
        <a href={`/en${suffix}`} hrefLang="en">
          EN
        </a>
      )}
    </div>
  );
}
