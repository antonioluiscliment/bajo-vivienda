import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";

export const metadata: Metadata = {
  title: "Proyecto de reparcelación",
  description:
    "Documentación del Proyecto de Reparcelación del sector ZP-Pn5, suelo urbanizable: plano parcelario catastral de las parcelas incluidas en el Sector, con las parcelas 12 y 23, titularidad de la propiedad.",
  alternates: { canonical: "/proyecto-reparcelacion" },
};

export default function ProyectoReparcelacionPage() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <PageHeader
          eyebrow="Sector ZP-Pn5 · Proyecto de reparcelación"
          title="Documentación del Proyecto de Reparcelación del Sector"
          intro="A esta sección iremos incorporando los documentos del Proyecto de Reparcelación a medida que estén disponibles. De momento, el plano parcelario catastral de las parcelas incluidas en el Sector."
        />

        <section className="section">
          <p className="section-kicker mono">01 — Plano parcelario catastral</p>
          <h2>Parcelario catastral del Sector, con las parcelas 12 y 23</h2>
          <p>
            El plano recoge el parcelario catastral de las fincas incluidas en
            el Sector ZP-Pn5. La propiedad es titular de las parcelas{" "}
            <strong>12</strong> y <strong>23</strong>, señaladas en el plano
            con fondo amarillo.
          </p>
          <p className="section-source">
            Por protección de datos, el plano no incluye los titulares
            catastrales del resto de fincas.
          </p>
          <div className="content-figure">
            <Image
              src="/assets/parcelario-catastral.jpg"
              alt="Plano parcelario catastral del Sector ZP-Pn5, con las parcelas 12 y 23 —titularidad de la propiedad— señaladas en amarillo"
              width={280}
              height={263}
            />
            <figcaption>
              Plano parcelario catastral del Sector. Las parcelas 12 y 23,
              titularidad de la propiedad, aparecen marcadas en amarillo.
            </figcaption>
          </div>
          <div className="content-figure">
            <Image
              src="/assets/parcelario-catastral-detalle.jpg"
              alt="Detalle del plano parcelario con las parcelas 12 y 23 en amarillo"
              width={271}
              height={233}
            />
            <figcaption>
              Detalle de las parcelas 12 y 23, titularidad de la propiedad.
            </figcaption>
          </div>
        </section>

        <section className="section">
          <p className="section-kicker mono">02 — Próximos documentos</p>
          <h2>Más documentación, próximamente</h2>
          <p>
            A medida que avance el Proyecto de Reparcelación del Sector se
            irán incorporando a esta sección nuevos documentos.
          </p>
        </section>

        <SectionNav current="/proyecto-reparcelacion" />
      </main>
      <Footer />
    </>
  );
}
