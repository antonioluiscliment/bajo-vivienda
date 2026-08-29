import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CotaDivider from "@/components/CotaDivider";
import Footer from "@/components/Footer";
import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const SKIP: Record<Locale, string> = {
  es: "Saltar al contenido",
  en: "Skip to content",
};

const COTA: Record<Locale, { label: string; value: string; strong?: boolean }[]> = {
  es: [
    { label: "ZP-Pn5", value: "El Puntal, Murcia", strong: true },
    { label: "", value: "585.301 m² sector" },
    { label: "", value: "234.120 m² edificables" },
    { label: "", value: "Aprov. 0,40 m²/m²" },
  ],
  en: [
    { label: "ZP-Pn5", value: "El Puntal, Murcia", strong: true },
    { label: "", value: "585,301 m² sector" },
    { label: "", value: "234,120 m² buildable" },
    { label: "", value: "Aprovechamiento (build ratio) 0.40 m²/m²" },
  ],
};

export default function Home({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  return (
    <>
      <a href="#contenido" className="skip-link">
        {SKIP[locale]}
      </a>

      <div className="page-shell">
        <Header locale={locale} />

        <main id="contenido">
          <Hero locale={locale} />

          <CotaDivider items={COTA[locale]} />
        </main>

        <Footer locale={locale} />
      </div>
    </>
  );
}
