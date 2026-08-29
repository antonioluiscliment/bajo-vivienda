import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import { isLocale, alternateLanguages, localeHref, type Locale } from "@/lib/i18n";

const PATH = "/conectividad";

const META: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Conectividad y accesos",
    description:
      "Situación geográfica del sector ZP-Pn5, suelo urbanizable con excelente conectividad logística en el norte de Murcia, con enlace directo a las autovías A-7 y A-30, la red que vertebra el sureste de España.",
  },
  en: {
    title: "Connectivity & Access",
    description:
      "Geographic location of Sector ZP-Pn5, developable land with excellent logistics connectivity in northern Murcia, with direct access to the A-7 and A-30 motorways, the network that underpins south-east Spain.",
  },
};

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "es";
  return {
    title: META[locale].title,
    description: META[locale].description,
    alternates: {
      canonical: localeHref(locale, PATH),
      languages: alternateLanguages(PATH),
    },
  };
}

const SKIP: Record<Locale, string> = { es: "Saltar al contenido", en: "Skip to content" };

const BOUNDS = {
  es: [
    { dir: "Norte", text: "Autovía A-7 (Autovía del Mediterráneo)" },
    { dir: "Sur", text: "Trama urbana de la ciudad de Murcia" },
    { dir: "Este", text: "Avenida de Juan de Borbón" },
    { dir: "Oeste", text: "Avenida Juan Carlos I" },
  ],
  en: [
    { dir: "North", text: "A-7 motorway (Autovía del Mediterráneo)" },
    { dir: "South", text: "Murcia's urban fabric" },
    { dir: "East", text: "Avenida de Juan de Borbón" },
    { dir: "West", text: "Avenida Juan Carlos I" },
  ],
};

const T = {
  es: {
    eyebrow: "Sector ZP-Pn5 · Conectividad y accesos",
    title: "Una posición privilegiada en el norte de Murcia",
    intro:
      "El sector se sitúa en el límite norte de la ciudad, con acceso directo a la autovía A-7 y enlace inmediato con la A-30: la red que conecta Murcia con el resto del sureste de España.",
    s1kicker: "01 — Límites del sector",
    s1h2: "Un espacio delimitado por las grandes vías de la ciudad",
    s1p: "El sector ZP-Pn5 (El Puntal) queda delimitado al sur por la propia trama urbana de Murcia, al norte por la autovía A-7, al este por la avenida de Juan de Borbón y al oeste por la avenida Juan Carlos I. La avenida de Juan de Borbón continúa hacia el norte enlazando con la autovía A-30 y, a través de ella, con la propia A-7 — una posición de charnela entre la ciudad y la red de autovías.",
    s2kicker: "02 — Enlace con la red de autovías del sureste",
    s2h2: "A un cruce de las principales autovías",
    s2p: "La autovía A-7 (Autovía del Mediterráneo) une Murcia con Alicante, Valencia y Cataluña hacia el norte, y con Cartagena y Andalucía hacia el sur. La A-30 (Autovía de Murcia) conecta la ciudad con Albacete y la Meseta. El sector, apoyado directamente en este cruce, queda a un solo enlace de toda esa red — la posición que buscan las grandes superficies comerciales, hoteles, estaciones de servicio y operadores logísticos.",
    imgAlt: "Vista de la ciudad de Murcia con la red de autovías (A-7, A-30/MU-30) y los distritos del norte",
    figcaption: "Murcia y su red de autovías — el sector ZP-Pn5 se sitúa en el límite norte de la ciudad, junto a la A-7.",
    mapTitle: "Ubicación en Google Maps: entorno inmediato del sector, junto a IKEA Murcia y Centro Comercial Thader",
    mapCaption: "Entorno inmediato del sector: enlace de autovía junto a IKEA Murcia y Centro Comercial Thader, en El Puntal.",
    mapLink: "Ver en Google Maps",
  },
  en: {
    eyebrow: "Sector ZP-Pn5 · Connectivity & Access",
    title: "A privileged position in northern Murcia",
    intro:
      "The Sector sits on the city's northern edge, with direct access to the A-7 motorway and an immediate link to the A-30: the network connecting Murcia with the rest of south-east Spain.",
    s1kicker: "01 — Sector boundaries",
    s1h2: "An area bounded by the city's major roads",
    s1p: "Sector ZP-Pn5 (El Puntal) is bounded to the south by Murcia's own urban fabric, to the north by the A-7 motorway, to the east by Avenida de Juan de Borbón and to the west by Avenida Juan Carlos I. Avenida de Juan de Borbón continues north to link with the A-30 motorway and, through it, with the A-7 itself — a hinge position between the city and the motorway network.",
    s2kicker: "02 — Link to the south-east motorway network",
    s2h2: "One junction from the main motorways",
    s2p: "The A-7 motorway (Autovía del Mediterráneo) links Murcia with Alicante, Valencia and Catalonia to the north, and with Cartagena and Andalusia to the south. The A-30 (Autovía de Murcia) connects the city with Albacete and Spain's central plateau. The Sector, sitting directly on this junction, is just one link away from that entire network — the position sought by large retail outlets, hotels, service stations and logistics operators.",
    imgAlt: "View of the city of Murcia with the motorway network (A-7, A-30/MU-30) and the northern districts",
    figcaption: "Murcia and its motorway network — Sector ZP-Pn5 sits on the city's northern edge, next to the A-7.",
    mapTitle: "Google Maps location: the Sector's immediate surroundings, next to IKEA Murcia and Centro Comercial Thader",
    mapCaption: "The Sector's immediate surroundings: motorway junction next to IKEA Murcia and Centro Comercial Thader, in El Puntal.",
    mapLink: "View on Google Maps",
  },
};

export default function ConectividadPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = T[locale];

  return (
    <>
      <a href="#contenido" className="skip-link">
        {SKIP[locale]}
      </a>
      <Header locale={locale} />
      <main id="contenido">
        <PageHeader locale={locale} eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

        <section className="section">
          <p className="section-kicker mono">{t.s1kicker}</p>
          <h2>{t.s1h2}</h2>
          <p>{t.s1p}</p>
          <div className="bounds-grid">
            {BOUNDS[locale].map((b) => (
              <div className="bounds-card" key={b.dir}>
                <div className="dir mono">{b.dir}</div>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="section-kicker mono">{t.s2kicker}</p>
          <h2>{t.s2h2}</h2>
          <p>{t.s2p}</p>
          <div className="figure-row">
            <figure className="content-figure">
              <Image
                src="/assets/murcia-ciudad-contexto.jpg"
                alt={t.imgAlt}
                width={800}
                height={1280}
              />
              <figcaption>{t.figcaption}</figcaption>
            </figure>
            <figure className="content-figure content-figure-map">
              <iframe
                src="https://www.google.com/maps?q=38.024774,-1.147458&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.mapTitle}
              />
              <figcaption>
                {t.mapCaption}{" "}
                <a
                  href="https://maps.app.goo.gl/9KxnTcGDAao3A7e19?g_st=am"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.mapLink}
                </a>
                .
              </figcaption>
            </figure>
          </div>
        </section>

        <SectionNav locale={locale} current={PATH} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
