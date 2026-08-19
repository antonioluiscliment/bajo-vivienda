import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CotaDivider from "@/components/CotaDivider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <div className="page-shell">
        <Header />

        <main id="contenido">
          <Hero />

          <CotaDivider
            items={[
              { label: "ZP-Pn5", value: "El Puntal, Murcia", strong: true },
              { label: "", value: "585.301 m² sector" },
              { label: "", value: "234.120 m² edificables" },
              { label: "", value: "Aprov. 0,40 m²/m²" },
            ]}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}
