import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CotaDivider from "@/components/CotaDivider";
import DetailSection from "@/components/DetailSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <Hero />

        <CotaDivider
          items={[
            { label: "ZONA B3", value: "Murcia", strong: true },
            { label: "", value: "16,00 m fondo" },
            { label: "", value: "4,00 m altura" },
            { label: "", value: "Caviti 5" },
          ]}
        />

        <DetailSection />

        <CotaDivider
          items={[
            { label: "PEM", value: "estimado", strong: true },
            { label: "", value: "37.588,00 €" },
            { label: "", value: "Sin IVA ni tasas" },
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
