import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="hero-eyebrow mono">Sector ZP-Pn5 · Ficha PGOU núm. 44</p>
        <h1 className="hero-title">
          Parque de Actividad Norte de Murcia<em>Segunda etapa</em>
        </h1>
        <p className="hero-sub">
          585.301 m² de suelo urbanizable de uso Servicios en El Puntal
          (Murcia), junto a la Autovía de Alicante (A-7). 234.120 m²
          edificables para centro comercial, hoteles, estaciones de
          servicio y logística.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="mailto:info@parquenortemurcia.es">
            Solicitar dossier de inversión →
          </a>
          <a
            className="btn btn-ghost"
            href="/assets/zppn5-plano-situacion.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ampliar plano de situación
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="n">585.301 m²</div>
            <div className="l">Superficie del sector</div>
          </div>
          <div className="stat">
            <div className="n">234.120 m²</div>
            <div className="l">Edificabilidad (uso Servicios)</div>
          </div>
          <div className="stat">
            <div className="n">A-7</div>
            <div className="l">Autovía de Alicante</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-visual-frame">
          <div className="hero-visual-corner" />
          <div className="hero-visual-image">
            <Image
              src="/assets/zppn5-plano-situacion.jpg"
              alt="Plano de situación del sector Pn-5 (El Puntal, Murcia) junto al enlace de la Autovía de Alicante"
              fill
              sizes="(max-width: 880px) 90vw, 560px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <span className="hero-visual-tag mono">Plano de situación · Pn-5</span>
        </div>
      </div>
    </section>
  );
}
