import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const T = {
  es: {
    eyebrow: "Sector ZP-Pn5 · Ficha PGOU núm. 44",
    titleMain: "Parque de Actividad Norte de Murcia",
    titleEm: "Segunda etapa",
    sub: "585.301 m² de suelo urbanizable de uso Servicios en El Puntal (Murcia), junto a la Autovía de Alicante (A-7). 234.120 m² edificables para centro comercial, hoteles, estaciones de servicio y logística.",
    ctaDossier: "Solicitar dossier de inversión →",
    ctaPlano: "Ampliar plano de situación",
    mailSubject: "Solicitud de dossier de inversión — Sector ZP-Pn5",
    mailBody: "SERVICIO NO DISPONIBLE TODAVÍA, PERDONE LAS MOLESTIAS.",
    stat1n: "585.301 m²",
    stat1l: "Superficie del sector",
    stat2n: "234.120 m²",
    stat2l: "Edificabilidad (uso Servicios)",
    stat3l: "Autovía de Alicante",
    imgAlt: "Plano de situación del sector Pn-5 (El Puntal, Murcia) junto al enlace de la Autovía de Alicante",
    imgTag: "Plano de situación · Pn-5",
  },
  en: {
    eyebrow: "Sector ZP-Pn5 · PGOU record no. 44",
    titleMain: "Parque de Actividad Norte de Murcia",
    titleEm: "Phase II",
    sub: "585,301 m² of developable land (suelo urbanizable) for Services use in El Puntal (Murcia), next to the A-7 motorway (Autovía de Alicante). 234,120 m² of buildable floor area for a shopping centre, hotels, service stations and logistics.",
    ctaDossier: "Request investment dossier →",
    ctaPlano: "View site plan",
    mailSubject: "Investment dossier request — Sector ZP-Pn5",
    mailBody: "SERVICE NOT YET AVAILABLE, SORRY FOR THE INCONVENIENCE.",
    stat1n: "585,301 m²",
    stat1l: "Sector surface area",
    stat2n: "234,120 m²",
    stat2l: "Buildable floor area (Services use)",
    stat3l: "A-7 motorway (Autovía de Alicante)",
    imgAlt: "Site plan of Sector Pn-5 (El Puntal, Murcia) next to the A-7 motorway junction",
    imgTag: "Site plan · Pn-5",
  },
};

export default function Hero({ locale }: { locale: Locale }) {
  const t = T[locale];
  const mailto = `mailto:info@parquenortemurcia.es?subject=${encodeURIComponent(
    t.mailSubject
  )}&body=${encodeURIComponent(t.mailBody)}`;

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
          <a className="btn btn-primary" href={mailto}>
            {t.ctaDossier}
          </a>
          <a
            className="btn btn-ghost"
            href="/assets/zppn5-plano-situacion.jpg"
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
            <Image
              src="/assets/zppn5-plano-situacion.jpg"
              alt={t.imgAlt}
              fill
              sizes="(max-width: 880px) 90vw, 560px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <span className="hero-visual-tag mono">{t.imgTag}</span>
        </div>
      </div>
    </section>
  );
}
