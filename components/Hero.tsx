import HeroMotion, { type MotionSlide } from "./HeroMotion";
import { localeHref, type Locale } from "@/lib/i18n";

const T = {
  es: {
    eyebrow: "Sector ZP-Pn5 · Ficha PGOU núm. 44",
    titleMain: "Parque de Actividad Norte de Murcia",
    titleEm: "Segunda etapa",
    sub: "585.301 m² de suelo urbanizable de uso Servicios en El Puntal (Murcia), junto a la Autovía de Alicante (A-7). 234.120 m² edificables para centro comercial, hoteles, estaciones de servicio y logística.",
    ctaDossier: "Solicitar dossier de inversión →",
    ctaPlano: "Ampliar plano de situación",
    stat1n: "585.301 m²",
    stat1l: "Superficie del sector",
    stat2n: "234.120 m²",
    stat2l: "Edificabilidad (uso Servicios)",
    stat3l: "Autovía de Alicante",
    priceTag: "Desde 400 €/m²",
  },
  en: {
    eyebrow: "Sector ZP-Pn5 · PGOU record no. 44",
    titleMain: "Parque de Actividad Norte de Murcia",
    titleEm: "Phase II",
    sub: "585,301 m² of developable land (suelo urbanizable) for Services use in El Puntal (Murcia), next to the A-7 motorway (Autovía de Alicante). 234,120 m² of buildable floor area for a shopping centre, hotels, service stations and logistics.",
    ctaDossier: "Request investment dossier →",
    ctaPlano: "View site plan",
    stat1n: "585,301 m²",
    stat1l: "Sector surface area",
    stat2n: "234,120 m²",
    stat2l: "Buildable floor area (Services use)",
    stat3l: "A-7 motorway (Autovía de Alicante)",
    priceTag: "From €400/m²",
  },
};

const HERO_SLIDES: Record<Locale, MotionSlide[]> = {
  es: [
    {
      src: "/assets/hero-mapa-murcia.jpg",
      alt: "Mapa de Murcia con la referencia del Sector ZP-Pn5, junto al enlace de la Autovía de Alicante (A-7)",
      durationMs: 7000,
    },
    {
      src: "/assets/hero-mapa-sector.jpg",
      alt: "Entorno cercano de El Puntal, junto al Sector ZP-Pn5",
      durationMs: 7000,
    },
    {
      src: "/assets/parcelario-catastral-afines.jpg",
      alt: "Parcelario catastral de las fincas afines al Sector ZP-Pn5",
      durationMs: 6000,
    },
    {
      src: "/assets/parcelario-catastral-afines-detalle.jpg",
      alt: "Detalle del parcelario catastral de las fincas afines al Sector ZP-Pn5",
      durationMs: 9000,
    },
  ],
  en: [
    {
      src: "/assets/hero-mapa-murcia.jpg",
      alt: "Map of Murcia showing the reference point for Sector ZP-Pn5, next to the A-7 motorway junction",
      durationMs: 7000,
    },
    {
      src: "/assets/hero-mapa-sector.jpg",
      alt: "Immediate surroundings of El Puntal, next to Sector ZP-Pn5",
      durationMs: 7000,
    },
    {
      src: "/assets/parcelario-catastral-afines.jpg",
      alt: "Cadastral parcel plan of the plots related to Sector ZP-Pn5",
      durationMs: 6000,
    },
    {
      src: "/assets/parcelario-catastral-afines-detalle.jpg",
      alt: "Detail of the cadastral parcel plan of the plots related to Sector ZP-Pn5",
      durationMs: 9000,
    },
  ],
};

export default function Hero({ locale }: { locale: Locale }) {
  const t = T[locale];

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="hero-eyebrow mono">{t.eyebrow}</p>
        <h1 className="hero-title">
          {t.titleMain}
          <em>{t.titleEm}</em>
        </h1>
        <p className="hero-sub">{t.sub}</p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href={localeHref(locale, "/solicitar-dossier")}>
            {t.ctaDossier}
          </a>
          <a
            className="btn btn-ghost"
            href="/assets/sector-plano-anotado.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.ctaPlano}
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="n">{t.stat1n}</div>
            <div className="l">{t.stat1l}</div>
          </div>
          <div className="stat">
            <div className="n">{t.stat2n}</div>
            <div className="l">{t.stat2l}</div>
          </div>
          <div className="stat">
            <div className="n">A-7</div>
            <div className="l">{t.stat3l}</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-visual-frame">
          <div className="hero-visual-corner" />
          <div className="hero-visual-image">
            <HeroMotion slides={HERO_SLIDES[locale]} priority />
          </div>
          <a
            className="hero-visual-tag mono"
            href={localeHref(locale, "/oferta-terreno")}
          >
            {t.priceTag}
          </a>
        </div>
      </div>
    </section>
  );
}
