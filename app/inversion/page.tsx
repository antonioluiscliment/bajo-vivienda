import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";

export const metadata: Metadata = {
  title: "Usos e inversión",
  description:
    "Suelo urbanizable de uso terciario y logístico en el sector ZP-Pn5: economía de la Región de Murcia y usos autorizados por la Norma Urbanística N.5 del Plan Parcial. Oportunidad de inversión inmobiliaria.",
  alternates: { canonical: "/inversion" },
};

const USOS = [
  {
    tag: "Comercial",
    title: "Comercio y grandes superficies",
    text: "Incluye Centros Terciarios Integrados (>30.000 m², oferta comercial, ocio y restauración), grandes establecimientos (>2.500 m² de venta) y comercio local.",
  },
  {
    tag: "Hospedaje",
    title: "Hoteles",
    text: "Uso de hospedaje destinado a proporcionar alojamiento temporal a las personas, expresamente recogido como uso terciario permitido.",
  },
  {
    tag: "Automoción",
    title: "Gasolineras y áreas de servicio",
    text: "Establecimientos de despacho de carburantes y afines, con posibilidad de tienda de conveniencia, taller y restauración anexos.",
  },
  {
    tag: "Ocio",
    title: "Restauración, espectáculos y ocio",
    text: "Servicios de restauración y actividades de ocio y espectáculos (discotecas, salas de fiesta, salas de juego y similares).",
  },
  {
    tag: "Oficinas",
    title: "Oficinas y servicios profesionales",
    text: "Actividades terciarias de carácter administrativo, técnico, financiero o de información, para empresas o particulares.",
  },
  {
    tag: "Logística",
    title: "Almacenes",
    text: "El uso global del sector incluye expresamente almacenes, junto con los usos de servicios, equipamientos colectivos y terciarios en general.",
  },
];

export default function InversionPage() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <PageHeader
          eyebrow="Sector ZP-Pn5 · Usos e inversión"
          title="Por qué invertir en la segunda etapa del Parque de Actividad Norte"
          intro="Una economía regional en crecimiento y un marco urbanístico ya aprobado que autoriza expresamente los usos terciarios que interesan a un inversor: comercial, hotelero, estaciones de servicio y logística."
        />

        <section className="section">
          <p className="section-kicker mono">01 — Economía de la Región de Murcia</p>
          <h2>Un mercado regional en expansión</h2>
          <p>
            La Región de Murcia encadena varios años de crecimiento económico
            por encima de la media nacional, con un mercado laboral que bate
            récords de empleo. Son las condiciones de demanda en las que se
            inserta el sector ZP-Pn5.
          </p>
          <div className="stat-grid">
            <div className="stat-card">
              <div className="n">42.488 M€</div>
              <div className="l">PIB regional 2024 (+6,7% interanual)</div>
            </div>
            <div className="stat-card">
              <div className="n">26.944 €</div>
              <div className="l">PIB per cápita 2024 (+5,5% interanual)</div>
            </div>
            <div className="stat-card">
              <div className="n">1.589.138</div>
              <div className="l">Habitantes en la Región de Murcia (INE, 2025)</div>
            </div>
            <div className="stat-card">
              <div className="n">742.100</div>
              <div className="l">Personas ocupadas — récord histórico (EPA, 2º trim. 2026)</div>
            </div>
          </div>
          <p className="section-source">
            Fuentes:{" "}
            <a
              href="https://econet.carm.es/inicio/-/crem/sicrem/PU_datosBasicos/sec42.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CREM — Contabilidad Regional
            </a>
            ,{" "}
            <a
              href="https://www.idealista.com/news/vacacional/destinos-turisticos/2026/06/16/902051-cual-es-la-poblacion-de-la-region-de-murcia-la-cifra-de-habitantes-en-2026"
              target="_blank"
              rel="noopener noreferrer"
            >
              INE (población)
            </a>{" "}
            y UGT Región de Murcia (EPA).
          </p>
        </section>

        <section className="section">
          <p className="section-kicker mono">02 — Norma Urbanística N.5 del Plan Parcial</p>
          <h2>Usos del suelo terciario ya autorizados</h2>
          <p>
            El sector cuenta con Plan Parcial aprobado definitivamente por el
            Pleno del Excmo. Ayuntamiento de Murcia el 22 de julio de 2011. Su
            Norma Urbanística N.5 (Régimen urbanístico del suelo) califica el
            uso global como &ldquo;Servicios, equipamientos colectivos y usos
            terciarios en general. Almacenes e industrias&rdquo;, y detalla los
            usos pormenorizados admitidos:
          </p>
          <div className="use-grid">
            {USOS.map((u) => (
              <div className="use-card" key={u.title}>
                <span className="tag mono">{u.tag}</span>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </div>
            ))}
          </div>
          <p className="section-source">
            Fuente: Texto Refundido del Plan Parcial de Actividad Económica
            del sector ZP-Pn5, Normas Urbanísticas N.5 y N.6.3 (Norma
            Urbanística 1ª — Usos terciarios). Consulta el documento completo
            en la{" "}
            <a href="/documentacion">Documentación del Plan Parcial</a>.
          </p>
        </section>

        <SectionNav current="/inversion" />
      </main>
      <Footer />
    </>
  );
}
