import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import { PLANOS_URBANIZACION, driveViewUrl } from "@/lib/urbanizacion";

export const metadata: Metadata = {
  title: "Propiedad y planos de urbanización — Parque de Actividad Norte de Murcia",
  description:
    "Propiedad de casi 7.000 m² junto a la rambla, en el límite sur del sector ZP-Pn5, con proyecto de urbanización redactado (Urbamusa, 2017) y planos disponibles para consulta.",
};

export default function PropiedadUrbanizacionPage() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <PageHeader
          eyebrow="Sector ZP-Pn5 · Propiedad y planos de urbanización"
          title="Una propiedad junto a la rambla, con proyecto de urbanización ya redactado"
          intro="Casi 7.000 m² de suelo, con proyecto de urbanización de la U.A. 1ª del Plan Parcial redactado en 2017 y planos técnicos disponibles para consulta."
        />

        <section className="section">
          <p className="section-kicker mono">01 — La propiedad</p>
          <h2>Casi 7.000 m² de suelo, con cerca de 2.500 m² de edificabilidad</h2>
          <p>
            La propiedad cuenta con casi 7.000 m² de suelo, que permiten una
            edificabilidad aproximada de 2.500 m². Su situación aproximada es
            la marcada en el plano: junto a la rambla, en el límite sur del
            sector.
          </p>
          <p>
            De acuerdo con la legislación urbanística vigente, la parcela que
            se asigne a esta propiedad en el proyecto de reparcelación que se
            apruebe deberá situarse en la zona señalada.
          </p>
          <div className="content-figure">
            <Image
              src="/assets/propiedad-urbanizacion.jpg"
              alt="Ubicación aproximada de la propiedad, junto a la rambla, en el límite Sur del sector ZP-Pn5"
              width={200}
              height={320}
            />
            <figcaption>
              Ubicación aproximada de la propiedad, junto a la rambla, en el
              límite Sur del sector.
            </figcaption>
          </div>
        </section>

        <section className="section">
          <p className="section-kicker mono">02 — Propiedades colindantes</p>
          <h2>
            Hasta 40.000 m² y más de 10.000 m² edificables sumando el
            entorno
          </h2>
          <p>
            Otras propiedades de familiares y allegados, situadas en torno a
            la señalada, permitirían sumar en conjunto en torno a 40.000 m²
            de suelo y una superficie edificable superior a 10.000 m² —
            ampliando la escala disponible para un inversor interesado en una
            operación conjunta.
          </p>
        </section>

        <section className="section">
          <p className="section-kicker mono">
            03 — Proyecto de Urbanización de la U.A. 1ª
          </p>
          <h2>Planos técnicos de la urbanización, redactados en 2017</h2>
          <p>
            El Proyecto de Urbanización de la U.A. 1ª del Plan Parcial del
            sector ZP-Pn5, promovido por la Junta de Compensación El Puntal 5
            U.A. 1ª y redactado por Urbamusa en noviembre de 2017, incluye los
            siguientes planos:
          </p>
          <ul className="doc-list">
            {PLANOS_URBANIZACION.map((p) => (
              <li key={p.driveId}>
                <a href={driveViewUrl(p.driveId)} target="_blank" rel="noopener noreferrer">
                  <span className={`ext mono ${p.ext}`}>{p.ext}</span>
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
          <p className="section-source">
            Los planos se abren desde la carpeta de Drive del proyecto,
            clasificada y renombrada por contenido.
          </p>
        </section>

        <SectionNav current="/propiedad-urbanizacion" />
      </main>
      <Footer />
    </>
  );
}
