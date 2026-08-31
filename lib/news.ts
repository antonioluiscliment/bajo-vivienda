import type { Locale } from "./i18n";

export type NewsLocaleContent = {
  title: string;
  excerpt: string;
  body: string[];
  relationTitle: string;
  relationBody: string;
  mapCaption: string;
  relatedLinks: { label: string; href: string }[];
};

export type NewsItem = {
  slug: string;
  /** ISO date (yyyy-mm-dd) of original publication. */
  date: string;
  /** Set when the exact publication date could not be confirmed against the source. */
  approxDate?: boolean;
  sourceName: string;
  sourceUrl?: string;
  /** "lat,lon" for the Google Maps embed. */
  mapQuery: string;
  mapZoom: number;
  content: Record<Locale, NewsLocaleContent>;
};

export const NEWS: NewsItem[] = [
  {
    slug: "ciudad-deportiva-evaluacion-ambiental-favorable",
    date: "2026-07-08",
    sourceName: "Ayuntamiento de Murcia",
    sourceUrl:
      "https://web.murcia.es/noticia/el-ayuntamiento-da-un-paso-decisivo-para-hacer-realidad-la-ciudad-deportiva-con-una",
    mapQuery: "38.0112,-1.1304",
    mapZoom: 14,
    content: {
      es: {
        title:
          "Evaluación ambiental favorable para la futura Ciudad Deportiva, junto a la avenida Juan de Borbón",
        excerpt:
          "El Ayuntamiento de Murcia obtiene la evaluación ambiental favorable del Plan Especial de la futura Ciudad Deportiva, entre Churra y Cabezo de Torres.",
        body: [
          "El Ayuntamiento de Murcia ha obtenido la evaluación ambiental favorable del Plan Especial que regulará la futura Ciudad Deportiva municipal, un paso administrativo decisivo que acredita la viabilidad ambiental del proyecto y permite continuar su tramitación hacia la aprobación definitiva.",
          "El ámbito, de 227.326 m², se sitúa entre los barrios de Churra y Cabezo de Torres, delimitado por las avenidas Juan de Borbón y Reino de Murcia, con conexión directa a la Línea 1 del tranvía (parada Los Cubos). De esa superficie, unos 180.000 m² se destinarán a instalaciones deportivas, y el resto a zonas verdes, un parque inundable, itinerarios peatonales y ciclistas y nuevos viales. El proyecto —vinculado, según distintos medios locales, a la nueva ciudad deportiva del Real Murcia— incorpora criterios de sostenibilidad: sistemas urbanos de drenaje sostenible, cubiertas vegetadas, reutilización de aguas pluviales, energía fotovoltaica y pavimentos permeables.",
          "El concejal de Urbanismo, Vivienda, Medio Ambiente y Huerta, Antonio Navarro, ha señalado que la evaluación ambiental favorable «supone un paso decisivo en la tramitación de la futura Ciudad Deportiva, ya que acredita la viabilidad ambiental del Plan Especial», y ha definido el proyecto como «estratégico para Murcia, concebido desde el equilibrio entre el desarrollo de nuevas infraestructuras deportivas, la sostenibilidad y la integración con el entorno».",
        ],
        relationTitle: "¿Qué relación tiene con el Sector ZP-Pn5?",
        relationBody:
          "La Ciudad Deportiva se sitúa justo al otro lado de la avenida Juan de Borbón, nada más pasar la plaza de los Cubos en sentido saliente de la ciudad: al Norte de la avenida Reino de Murcia y al Sur de Churra. El Sector ZP-Pn5 — Parque de Actividad Norte de Murcia queda al lado opuesto de esa misma avenida, justo al Norte de El Puntal. La proximidad entre ambos ámbitos no es indiferente para el Sector: por un lado contribuye al agotamiento del suelo urbano disponible cerca del centro de la ciudad, reforzando el carácter de «almendra» del Sector —esa condición de pieza central rodeada de desarrollos consolidados y vías principales— y favoreciendo su revalorización a medio plazo; por otro, en lo estrictamente deportivo, actúa también como competidora del suelo terciario del Sector en esa faceta concreta.",
        mapCaption:
          "Ubicación aproximada de la futura Ciudad Deportiva, en el cruce de las avenidas Juan de Borbón y Reino de Murcia (Plaza de los Cubos). El Sector ZP-Pn5 queda al Sur, junto a El Puntal.",
        relatedLinks: [
          { label: "Oferta de terreno", href: "/oferta-terreno" },
          { label: "Usos e inversión", href: "/inversion" },
        ],
      },
      en: {
        title:
          "Favorable environmental assessment for the future Ciudad Deportiva, next to Avenida Juan de Borbón",
        excerpt:
          "Murcia City Council obtains a favorable environmental assessment for the Plan Especial of the future Ciudad Deportiva, between Churra and Cabezo de Torres.",
        body: [
          "Murcia City Council has obtained a favorable environmental assessment of the Plan Especial that will govern the future municipal Ciudad Deportiva (sports city), a decisive administrative step that certifies the project's environmental viability and allows its processing to continue towards final approval.",
          "The site, covering 227,326 m², lies between the Churra and Cabezo de Torres districts, bounded by Avenida Juan de Borbón and Avenida Reino de Murcia, with a direct connection to Tram Line 1 (Los Cubos stop). Of that area, around 180,000 m² will be used for sports facilities, with the rest given over to green space, a flood-retention park, pedestrian and cycle routes, and new roads. The project — linked, according to several local media outlets, to Real Murcia football club's new sports city — incorporates sustainability criteria: sustainable urban drainage systems, green roofs, rainwater reuse, photovoltaic energy and permeable paving.",
          "The Councilor for Urban Planning, Housing, Environment and Huerta, Antonio Navarro, said the favorable environmental assessment \"is a decisive step in processing the future Ciudad Deportiva, as it certifies the environmental viability of the Plan Especial\", describing the project as \"strategic for Murcia, conceived from a balance between developing new sports infrastructure, sustainability and integration with its surroundings\".",
        ],
        relationTitle: "How does this relate to Sector ZP-Pn5?",
        relationBody:
          "The Ciudad Deportiva sits just across Avenida Juan de Borbón, right after Plaza de los Cubos on the way out of the city: north of Avenida Reino de Murcia and south of Churra. Sector ZP-Pn5 — Parque de Actividad Norte de Murcia lies on the opposite side of that same avenue, just north of El Puntal. The proximity between the two areas is not neutral for the Sector: on one hand it contributes to the depletion of available urban land near the city centre, reinforcing the Sector's \"kernel\" character — that of a central piece surrounded by consolidated developments and main roads — and favouring its medium-term appreciation; on the other, strictly in sporting terms, it also acts as a competitor to the Sector's tertiary-use land in that specific respect.",
        mapCaption:
          "Approximate location of the future Ciudad Deportiva, at the junction of Avenida Juan de Borbón and Avenida Reino de Murcia (Plaza de los Cubos). Sector ZP-Pn5 lies to the south, next to El Puntal.",
        relatedLinks: [
          { label: "Land for sale", href: "/oferta-terreno" },
          { label: "Uses & investment", href: "/inversion" },
        ],
      },
    },
  },
  {
    slug: "recuperacion-casa-torre-alcayna",
    date: "2024-05-30",
    approxDate: true,
    sourceName: "La Verdad",
    mapQuery: "38.0112,-1.1304",
    mapZoom: 14,
    content: {
      es: {
        title: "Recuperarán la casa Torre Alcayna, en El Puntal, como salón de celebraciones",
        excerpt:
          "El Ayuntamiento aprueba una bonificación del 35% en el ICIO para posibilitar la recuperación de este histórico inmueble de la huerta murciana.",
        body: [
          "El Ayuntamiento de Murcia ha aprobado una bonificación del 35% en el ICIO (Impuesto sobre Construcciones, Instalaciones y Obras) para posibilitar la recuperación de la casa Torre Alcayna, un histórico inmueble de la huerta murciana situado en el linde entre El Puntal y Churra, gravemente afectado por desperfectos y derrumbes.",
          "La asociación Hispania Nostra incluyó el edificio en su Lista Roja del Patrimonio de España hace ya varios años, describiendo entonces «un estado de conservación muy preocupante, con su fachada apuntalada y una cantidad innumerable de desperfectos, grietas, hundimientos y derrumbes». Antes de esa inclusión, la Asociación para la Conservación del Patrimonio de la Huerta de Murcia (Huermur) llevaba tiempo denunciando su degradación. Se trata de un inmueble catalogado y protegido por el Plan General de Ordenación Urbana (PGOU), y constituye un testimonio de las construcciones típicas de la huerta murciana del siglo XVIII, vinculadas a las explotaciones agrícolas y ganaderas de la zona.",
          "Según recogía también Murcia Plaza, la casa contaba ya con licencia de rehabilitación, a la espera de resolver esta bonificación fiscal para poder iniciar las obras, que llevará a cabo la constructora URBITEC-ANDRYNSA.",
        ],
        relationTitle: "¿Qué relación tiene con el Sector ZP-Pn5?",
        relationBody:
          "La casa Torre Alcayna da nombre a la urbanización del mismo nombre, situada frente a Churra, al otro lado de la avenida Juan de Borbón. Este ámbito residencial linda con el Plan Parcial ZM-Pn01, sector de suelo urbanizable residencial y terciario situado en la pedanía de El Puntal, que se extiende justo al Sur de las dos etapas del Parque de Actividad Económica —del que el Sector ZP-Pn5 constituye la segunda etapa—. La consolidación urbana de este entorno inmediato, con actuaciones como la recuperación de la casa Torre Alcayna, refuerza la centralidad del Sector dentro del tejido urbano que se está configurando al Norte de Murcia.",
        mapCaption:
          "Entorno de la urbanización Torre Alcayna, frente a Churra, junto a la avenida Juan de Borbón.",
        relatedLinks: [
          { label: "Oferta de terreno", href: "/oferta-terreno" },
          { label: "Entorno comercial", href: "/entorno" },
        ],
      },
      en: {
        title: "The Torre Alcayna farmhouse, in El Puntal, to be restored as an event venue",
        excerpt:
          "The City Council approves a 35% ICIO tax rebate to make possible the restoration of this historic building of the Murcian huerta.",
        body: [
          "Murcia City Council has approved a 35% rebate on ICIO (the tax on construction, installations and works) to make possible the restoration of the Torre Alcayna farmhouse, a historic building of the Murcian huerta located on the boundary between El Puntal and Churra, severely affected by damage and partial collapses.",
          "The Hispania Nostra association added the building to its Red List of Spain's Heritage (Lista Roja del Patrimonio) several years ago, then describing \"a very worrying state of conservation, with its facade shored up and countless instances of damage, cracks, subsidence and collapses\". Before that listing, the Association for the Conservation of the Heritage of the Huerta de Murcia (Huermur) had for some time been denouncing its deterioration. The building is listed and protected under the Plan General de Ordenación Urbana (PGOU), and stands as a record of the typical 18th-century constructions of the Murcian huerta, tied to the area's farming and livestock activity.",
          "According to Murcia Plaza's coverage, the building already held a rehabilitation licence, pending resolution of this tax rebate before works could begin, to be carried out by the construction firm URBITEC-ANDRYNSA.",
        ],
        relationTitle: "How does this relate to Sector ZP-Pn5?",
        relationBody:
          "The Torre Alcayna farmhouse gives its name to the housing development of the same name, located opposite Churra, on the other side of Avenida Juan de Borbón. This residential area borders Plan Parcial ZM-Pn01, a sector of developable residential and tertiary-use land in the El Puntal district, which extends just south of the two stages of the Parque de Actividad Económica — of which Sector ZP-Pn5 is the second stage. The urban consolidation of this immediate surrounding area, through initiatives such as the restoration of the Torre Alcayna farmhouse, reinforces the Sector's central position within the urban fabric taking shape north of Murcia.",
        mapCaption:
          "Surroundings of the Torre Alcayna housing development, opposite Churra, next to Avenida Juan de Borbón.",
        relatedLinks: [
          { label: "Land for sale", href: "/oferta-terreno" },
          { label: "Retail surroundings", href: "/entorno" },
        ],
      },
    },
  },
  {
    slug: "plan-parcial-canada-ancha-zona-norte",
    date: "2026-08-23",
    sourceName: "La Verdad",
    mapQuery: "38.031,-1.148",
    mapZoom: 14,
    content: {
      es: {
        title: "Otro plan urbanístico reactiva el interés por la zona norte de Murcia",
        excerpt:
          "Arranca la tramitación de un nuevo plan parcial junto a Coto Cuadros, en un contexto de recuperación de los antiguos convenios urbanísticos de la zona norte.",
        body: [
          "El urbanismo del norte de Murcia vuelve a moverse. La Junta de Gobierno municipal ha aprobado la salida a información pública del Avance del plan parcial ZU-SD-CT12, conocido como «Cañada Ancha», situado al norte de Cabezo de Torres — el primer paso formal de su tramitación. El proyecto reduce la edificabilidad a un tercio de lo previsto originalmente (de más de 245.000 m² a casi 90.000 m²) para preservar los espacios naturales colindantes con Coto Cuadros y rebajar la densidad por razones paisajísticas, lo que permitirá levantar cerca de un millar de viviendas: bloques de media altura en la zona más al sur, y vivienda unifamiliar adosada y aislada en la parte más alta, con la obligación de ceder una instalación deportiva al Ayuntamiento.",
          "Junto a este plan, el sector ZB-SD-Ch7 de Churra —donde ya se ubican el estadio, el parque y el centro comercial Nueva Condomina— podría acoger hasta 4.000 viviendas más, con Iberdrola anunciando ya sus primeras promociones; y avanza también, según había adelantado el propio diario, la tramitación de otro plan parcial (ZU-SD-CT15) colindante con la zona del estadio, que permitirá más de medio millar de viviendas tras rebajar sustancialmente su edificabilidad.",
          "Todo ello se enmarca en el intento del Ayuntamiento de dar salida a los llamados «convenios frustrados» de la zona norte, que en su día llegaron a generar una condena de más de 20 millones de euros contra el Consistorio a favor de la promotora Mamusa, tras la anulación del Plan Especial de Infraestructuras (PEI) que debía haber permitido desarrollar la zona. El concejal de Planificación Urbanística, Vivienda, Medio Ambiente y Huerta, Antonio Navarro Corchón, señala que donde los promotores veían hace una década una ruina heredada de la crisis del ladrillo, ahora vuelven a percibir una oportunidad gracias al alza del sector de la vivienda, y apunta al desarrollo completo del Arco Norte como palanca para descongestionar la circunvalación de Murcia y mejorar la accesibilidad de toda la zona — aunque reconoce que aún faltan por resolver las conexiones viarias desde el Sur y nuevas infraestructuras de saneamiento.",
        ],
        relationTitle: "¿Qué relación tiene con el Sector ZP-Pn5?",
        relationBody:
          "La zona afectada por estos planes se sitúa junto al estadio y al centro comercial de Nueva Condomina, al Noreste del Sector ZP-Pn5. Tomando como referencia el cruce entre la avenida Juan de Borbón —en su prolongación como A-30— y la autovía A-7, el Sector ZP-Pn5 queda en el cuadrante inferior izquierdo de ese cruce, completamente al Sur, hacia el centro de la ciudad, mientras que estos nuevos desarrollos se sitúan en el cuadrante superior derecho. Aun sin ser colindantes, ambos ámbitos forman parte del mismo eje de expansión que se está reactivando al Norte de Murcia, y la consolidación de esta zona —con miles de viviendas nuevas y la mejora de conectividad que traerá el Arco Norte— refuerza el atractivo general del entorno en el que se sitúa el Sector.",
        mapCaption:
          "Entorno de Nueva Condomina y el enlace de la A-7 con la prolongación de la avenida Juan de Borbón (A-30). El Sector ZP-Pn5 queda al Suroeste de este cruce, hacia el centro de la ciudad.",
        relatedLinks: [
          { label: "Usos e inversión", href: "/inversion" },
          { label: "Conectividad y accesos", href: "/conectividad" },
        ],
      },
      en: {
        title: "Another urban plan revives interest in Murcia's northern area",
        excerpt:
          "Processing begins on a new plan parcial next to Coto Cuadros, amid a broader revival of the northern area's long-stalled planning agreements.",
        body: [
          "Urban planning in northern Murcia is moving again. The municipal Junta de Gobierno has approved putting the Avance (early draft) of plan parcial ZU-SD-CT12, known as \"Cañada Ancha\", out for public information — the first formal step of its processing. Located north of Cabezo de Torres, the project cuts its buildable floor area to a third of what was originally planned (from over 245,000 m² to almost 90,000 m²) to preserve the natural areas bordering Coto Cuadros and reduce density for landscape reasons, allowing for close to a thousand homes: mid-rise blocks in the southern part, and semi-detached and detached housing higher up, with an obligation to hand over a sports facility to the City Council.",
          "Alongside this plan, the nearby ZB-SD-Ch7 sector in Churra — where the stadium, park and Nueva Condomina shopping centre already sit — could see up to 4,000 further homes, with Iberdrola having already announced its first developments there; and, as the newspaper itself had previously reported, another plan parcial (ZU-SD-CT15) adjoining the stadium area is also progressing, allowing for more than 500 homes after substantially cutting its buildable area.",
          "All of this forms part of the City Council's effort to resolve the long-running \"frustrated agreements\" (convenios frustrados) of the northern area, which years ago led to a court ruling of over €20 million against the Council in favour of developer Mamusa, after the Plan Especial de Infraestructuras (PEI) needed to unlock the area was annulled. The Councilor for Urban Planning, Housing, Environment and Huerta, Antonio Navarro Corchón, notes that where developers saw ruin a decade ago after the construction-sector crisis, they now see opportunity again thanks to the housing market upswing, and points to the full build-out of the Arco Norte ring road as key to relieving pressure on Murcia's beltway and improving accessibility across the area — while acknowledging that road connections from the south, and new sanitation infrastructure, still need to be resolved.",
        ],
        relationTitle: "How does this relate to Sector ZP-Pn5?",
        relationBody:
          "The area affected by these plans sits next to the Nueva Condomina stadium and shopping centre, northeast of Sector ZP-Pn5. Taking as a reference point the junction between Avenida Juan de Borbón — in its extension as the A-30 — and the A-7 motorway, Sector ZP-Pn5 lies in the lower-left quadrant of that junction, entirely to the south, towards the city centre, while these new developments sit in the upper-right quadrant. Even without being adjoining, both areas form part of the same expansion axis now being revived north of Murcia, and the consolidation of this zone — with thousands of new homes and the improved connectivity the Arco Norte will bring — reinforces the overall appeal of the wider area the Sector sits within.",
        mapCaption:
          "The Nueva Condomina area and the A-7 junction with the Avenida Juan de Borbón extension (A-30). Sector ZP-Pn5 lies to the southwest of this junction, towards the city centre.",
        relatedLinks: [
          { label: "Uses & investment", href: "/inversion" },
          { label: "Connectivity & access", href: "/conectividad" },
        ],
      },
    },
  },
];

export function getNewsSorted(): NewsItem[] {
  return [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return NEWS.find((n) => n.slug === slug);
}
