import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

/**
 * Todas las rutas de contenido viven bajo /es/... y /en/.... Las URLs
 * antiguas sin prefijo (p. ej. /inversion, que ya pudo quedar indexada
 * antes de la versión bilingüe) se redirigen de forma permanente a su
 * equivalente en español, para no perder esas URLs.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next|assets|api|.*\\..*).*)"],
};
