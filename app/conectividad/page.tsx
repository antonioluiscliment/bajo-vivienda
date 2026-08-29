import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";

export const metadata: Metadata = {
  title: "Conectividad y accesos",
  description:
    "Situación geográfica del sector ZP-Pn5, suelo urbanizable con excelente conectividad logística en el norte de Murcia, con enlace directo a las autovías A-7 y A-30, la red que vertebra el sureste de España.",
  alternates: { canonical: "/conectividad" },
};

const BOUNDS = [
  { dir: "Norte", text: "Autovía A-7 (Autovía del Mediterráneo)" },
  { dir: "Sur", text: "Trama urbana de la ciudad de Murcia" },
  { dir: "Este", text: "Avenida de Juan de Borbón" },
  { dir: "Oeste", text: "Avenida Juan Carlos I" },
];

export default function ConectividadPage() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <PageHeader
          eyebrow="Sector ZP-Pn5 · Conectividad y accesos"
          title="Una posición privilegiada en el norte de Murcia"
          intro="El sector se sitúa en el límite norte de la ciudad, con acceso directo a la autovía A-7 y enlace inmediato con la A-30: la red que conecta Murcia con el resto del sureste de España."
        />

        <section className="section">
          <p className="section-kicker mono">01 — Límites del sector</p>
          <h2>Un espacio delimitado por las grandes vías de la ciudad</h2>
          <p>
            El sector ZP-Pn5 (El Puntal) queda delimitado al sur por la propia
            trama urbana de Murcia, al norte por la autovía A-7, al este por
            la avenida de Juan de Borbón y al oeste por la avenida Juan
            Carlos I. La avenida de Juan de Borbón continúa hacia el norte
            enlazando con la autovía A-30 y, a través de ella, con la propia
            A-7 — una posición de charnela entre la ciudad y la red de
            autovías.
          </p>
          <div className="bounds-grid">
            {BOUNDS.map((b) => (
              <div className="bounds-card" key={b.dir}>
                <div className="dir mono">{b.dir}</div>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="section-kicker mono">02 — Enlace con la red de autovías del sureste</p>
          <h2>A un cruce de las principales autovías</h2>
          <p>
            La autovía A-7 (Autovía del Mediterráneo) une Murcia con Alicante,
            Valencia y Cataluña hacia el norte, y con Cartagena y Andalucía
            hacia el sur. La A-30 (Autovía de Murcia) conecta la ciudad con
            Albacete y la Meseta. El sector, apoyado directamente en este
            cruce, queda a un solo enlace de toda esa red — la posición que
            buscan las grandes superficies comerciales, hoteles, estaciones
            de servicio y operadores logísticos.
          </p>
          <div className="figure-row">
            <figure className="content-figure">
              <Image
                src="/assets/murcia-ciudad-contexto.jpg"
                alt="Vista de la ciudad de Murcia con la red de autovías (A-7, A-30/MU-30) y los distritos del norte"
                width={800}
                height={1280}
              />
              <figcaption>
                Murcia y su red de autovías — el sector ZP-Pn5 se sitúa en el
                límite norte de la ciudad, junto a la A-7.
              </figcaption>
            </figure>
            <figure className="content-figure content-figure-map">
              <iframe
                src="https://www.google.com/maps?q=38.024774,-1.147458&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación en Google Maps: entorno inmediato del sector, junto a IKEA Murcia y Centro Comercial Thader"
              />
              <figcaption>
                Entorno inmediato del sector: enlace de autovía junto a IKEA
                Murcia y Centro Comercial Thader, en El Puntal.{" "}
                <a
                  href="https://maps.app.goo.gl/9KxnTcGDAao3A7e19?g_st=am"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en Google Maps
                </a>
                .
              </figcaption>
            </figure>
          </div>
        </section>

        <SectionNav current="/conectividad" />
      </main>
      <Footer />
    </>
  );
}
