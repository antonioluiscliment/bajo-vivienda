import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="hero-eyebrow mono">Proyecto de cambio de uso</p>
        <h1 className="hero-title">
          Realización de una vivienda<em>sobre bajo comercial</em>
        </h1>
        <p className="hero-sub">
          Transformación de un local en planta baja en una vivienda tipo
          loft, con aparcamiento cubierto retranqueado y solución técnica de
          aislamiento, ventilación y accesibilidad.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#detalle">
            Ver detalles constructivos →
          </a>
          <a className="btn btn-ghost" href="#memoria">
            Memoria técnica
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="n">101 m²</div>
            <div className="l">Superficie construida</div>
          </div>
          <div className="stat">
            <div className="n">89,75 m²</div>
            <div className="l">Suelo Caviti útil</div>
          </div>
          <div className="stat">
            <div className="n">5,40 m</div>
            <div className="l">Frente entre paredes</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-visual-frame">
          <div className="hero-visual-corner" />
          <div className="hero-visual-image">
            <Image
              src="/assets/apartamento-3d.jpg"
              alt="Distribución 3D de la vivienda: estar, comedor, dos dormitorios y aparcamiento cubierto"
              fill
              sizes="(max-width: 880px) 90vw, 560px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <span className="hero-visual-tag mono">Distribución propuesta</span>
        </div>
      </div>
    </section>
  );
}
