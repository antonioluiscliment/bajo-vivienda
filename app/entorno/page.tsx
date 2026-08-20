import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";

export const metadata: Metadata = {
  title: "Entorno comercial — Parque de Actividad Norte de Murcia",
  description:
    "El sector ZP-Pn5 se integra en el principal eje comercial del norte de Murcia, junto a los centros comerciales La Noria, El Tiro, Tader y Nueva Condomina, y a sus dos universidades.",
};

const CENTROS = [
  { name: "Centro Comercial La Noria", place: "Guadalupe" },
  { name: "Centro Comercial El Tiro", place: "Espinardo" },
  { name: "Sector ZP-Pn5", place: "El Puntal — este sector" },
  { name: "Centro Comercial Tader", place: "El Puntal / Churra" },
  { name: "Centro Comercial Nueva Condomina", place: "Churra" },
];

const OTROS = [
  { name: "Universidad Católica de Murcia (UCAM)", place: "Guadalupe" },
  { name: "Universidad de Murcia", place: "Espinardo" },
  { name: "Estadio de fútbol de La Condomina", place: "Murcia" },
];

export default function EntornoPage() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <PageHeader
          eyebrow="Sector ZP-Pn5 · Entorno comercial"
          title="En el corazón del principal eje comercial del norte de Murcia"
          intro="El sector no es un enclave aislado: se suma a una concentración ya consolidada de grandes superficies comerciales, universidades y equipamientos que atraen tráfico y demanda al norte de la ciudad."
        />

        <section className="section">
          <p className="section-kicker mono">01 — Centros comerciales del eje norte</p>
          <h2>Cinco centros comerciales en un mismo corredor</h2>
          <p>
            Desde Guadalupe hasta Churra, el norte de Murcia concentra varios
            de los principales centros comerciales de la Región, con el
            sector ZP-Pn5 situado entre ellos, en El Puntal.
          </p>
          <ul className="anchor-list">
            {CENTROS.map((c, i) => (
              <li key={c.name}>
                <span className="mk mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="name">{c.name}</span>
                  <span className="place">{c.place}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <p className="section-kicker mono">02 — Universidades y equipamientos</p>
          <h2>Población flotante y demanda estable todo el año</h2>
          <p>
            La zona norte concentra además las dos universidades de la
            Región y uno de sus grandes equipamientos deportivos, generando
            un flujo constante de población que refuerza la demanda para uso
            comercial, hotelero y de restauración.
          </p>
          <ul className="anchor-list">
            {OTROS.map((c, i) => (
              <li key={c.name}>
                <span className="mk mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="name">{c.name}</span>
                  <span className="place">{c.place}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="figure-row">
            <figure className="content-figure">
              <Image
                src="/assets/murcia-ciudad-contexto.jpg"
                alt="Centros comerciales y distritos del norte de Murcia: Nueva Condomina, Thader, IKEA, Guadalupe, Espinardo"
                width={800}
                height={1280}
              />
              <figcaption>
                El eje comercial del norte de Murcia, con el sector ZP-Pn5
                (El Puntal) entre Nueva Condomina y Guadalupe.
              </figcaption>
            </figure>
          </div>
          <p className="section-source">
            Ubicaciones señaladas por el promotor sobre cartografía de Google
            Maps.
          </p>
        </section>

        <SectionNav current="/entorno" />
      </main>
      <Footer />
    </>
  );
}
