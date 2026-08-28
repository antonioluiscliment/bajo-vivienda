import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";

export const metadata: Metadata = {
  title: "Oferta de terreno — Parque de Actividad Norte de Murcia",
  description:
    "Conjunto de parcelas afines del Sector ZP-Pn5, señaladas en el plano parcelario catastral, con posibilidades de acuerdo de venta ante una buena oferta.",
};

export default function OfertaTerrenoPage() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <PageHeader
          eyebrow="Sector ZP-Pn5 · Oferta de terreno"
          title="Conjunto de parcelas afines con posibilidad de acuerdo de venta"
          intro="Un grupo de parcelas colindantes del Sector, situado al Sureste del polígono, señalado en el plano parcelario catastral con un color único que lo distingue del resto de fincas."
        />

        <section className="section">
          <p className="section-kicker mono">01 — Plano de parcelas afines</p>
          <h2>Parcelas afines, señaladas en azul</h2>
          <p>
            El plano recoge, sobre el parcelario catastral del Sector, el
            conjunto de parcelas afines —12, 18, 19, 20, 21, 22, 23, 25 y
            26— marcadas con un único color azul que las distingue como un
            solo conjunto frente al resto de fincas.
          </p>
          <p className="section-source">
            Por protección de datos, el plano no incluye los titulares
            catastrales de las fincas.
          </p>
          <div className="content-figure">
            <Image
              src="/assets/parcelario-catastral-afines.jpg"
              alt="Plano parcelario catastral del Sector ZP-Pn5 con el conjunto de parcelas afines señalado en azul"
              width={280}
              height={263}
            />
            <figcaption>
              Plano parcelario catastral del Sector. El conjunto de parcelas
              afines aparece marcado en azul.
            </figcaption>
          </div>
          <div className="content-figure">
            <Image
              src="/assets/parcelario-catastral-afines-detalle.jpg"
              alt="Detalle del conjunto de parcelas afines señalado en azul, al Sureste del Sector"
              width={300}
              height={201}
            />
            <figcaption>
              Detalle del conjunto de parcelas afines, al Sureste del Sector.
            </figcaption>
          </div>
        </section>

        <section className="section">
          <p className="section-kicker mono">02 — Oportunidad ante una buena oferta</p>
          <h2>Un conjunto con grandes posibilidades de aprovechamiento</h2>
          <p>
            Este conjunto de parcelas afines puede llegar a un acuerdo de
            venta frente a una buena oferta. Que el Proyecto de
            Reparcelación del Sector no esté aún aprobado no supone una
            desventaja: la proximidad de las parcelas entre sí y su
            situación al Sureste del polígono la convierten en una
            superficie con grandes posibilidades de aprovechamiento.
          </p>
          <p>
            La zona Norte de Murcia está viviendo una gran expansión
            residencial, y los espacios vacantes hacia la ciudad están
            ultimando su desarrollo. Sirva como ejemplo la ciudad deportiva
            que se está construyendo al Norte (Noreste) de la plaza de los
            Cubos, en la avenida Juan de Borbón.
          </p>
        </section>

        <section className="section">
          <p className="section-kicker mono">03 — El retraso no perjudica la inversión</p>
          <h2>La revalorización de un núcleo central</h2>
          <p>
            El posible retraso en la ejecución del desarrollo, por el tiempo
            que tarde en concluirse la reparcelación, no perjudica a la
            inversión realizada. Al contrario: el desarrollo acelerado de
            toda la zona Norte contribuye a la revalorización de este
            núcleo central, que ha quedado como una almendra entre los
            desarrollos urbanísticos colindantes y las principales vías de
            comunicación.
          </p>
        </section>

        <SectionNav current="/oferta-terreno" />
      </main>
      <Footer />
    </>
  );
}
