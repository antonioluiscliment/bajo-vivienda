import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import DocIndex from "@/components/DocIndex";

export const metadata: Metadata = {
  title: "Documentación del Plan Parcial — Parque de Actividad Norte de Murcia",
  description:
    "Índice completo, clasificado y buscable, del Plan Parcial de Actividad Económica del sector ZP-Pn5, aprobado definitivamente el 22 de julio de 2011.",
};

export default function DocumentacionPage() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <PageHeader
          eyebrow="Sector ZP-Pn5 · Documentación"
          title="El expediente completo del Plan Parcial, ya aprobado"
          intro="Más de 55 documentos y planos, clasificados por materia y con acceso directo a cada uno. Un sector con planeamiento definitivamente aprobado reduce el riesgo urbanístico de la inversión."
        />
        <DocIndex />
        <section className="section">
          <p className="section-source">
            Los documentos se abren desde la carpeta de Drive del expediente,
            clasificada y renombrada por materias. Para descargas
            recurrentes o acceso restringido a un inversor concreto,
            podemos habilitar un espacio de descarga propio del sitio.
          </p>
        </section>
        <SectionNav current="/documentacion" />
      </main>
      <Footer />
    </>
  );
}
