import type { Locale } from "./i18n";

export type NewsLocaleContent = {
  title: string;
  excerpt: string;
  body: string[];
  relationTitle: string;
  relationBody: string;
  mapCaption: string;
  /** Alt text for `mapImage`, when set. Falls back to `mapCaption` if omitted. */
  mapImageAlt?: string;
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
  /** Optional local image path (e.g. an official map graphic) shown instead of the Google Maps embed. */
  mapImage?: string;
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
  {
    slug: "arco-norte-murcia-adjudicacion-tramo-b",
    date: "2026-06-25",
    sourceName: "Ministerio de Transportes y Movilidad Sostenible",
    sourceUrl:
      "https://www.transportes.gob.es/ministerio/comunicacion/sala-prensa/jue-25062026-1155",
    mapQuery: "38.065,-1.125",
    mapZoom: 10,
    mapImage: "/assets/arco-norte-tramo-b-mapa.jpg",
    content: {
      es: {
        title: "Adjudicadas por 84,2 millones las obras del primer tramo del Arco Norte de Murcia",
        excerpt:
          "El Ministerio adjudica por 84,2 millones de euros el primer tramo del Arco Norte de Murcia, el bypass que desviará el tráfico de paso entre Andalucía y el Levante lejos del entorno del Sector.",
        body: [
          "El Ministerio de Transportes y Movilidad Sostenible ha adjudicado por unos 84,19 millones de euros (IVA incluido) las obras del primer tramo del Arco Norte de Murcia: el tramo B, de 8,3 kilómetros, entre el kilómetro 652 de la autovía A-7 y el enlace del Cabezo de Torres. Según recogió La Opinión de Murcia, la ejecución correrá a cargo de FCC y Pavasal.",
          "El nuevo tramo arrancará en un enlace situado en el kilómetro 4 de la autovía MU-32 y desembocará mediante una confluencia en la A-7, a la altura del enlace de Cabezo de Torres. El proyecto contempla la construcción de 13 nuevas estructuras —tres viaductos, cuatro pasos superiores y seis pasos inferiores—, mientras el Ministerio trabaja todavía en la actualización técnica y económica del segundo tramo (tramo A).",
          "El objetivo declarado es separar el tráfico de largo recorrido entre Andalucía y el Levante (Alicante y Valencia) del tráfico de agitación urbana que satura hoy el entorno del Nudo de Espinardo —por el que circulan más de 125.000 vehículos al día— y la Ronda Oeste de Murcia. El Arco Norte completará así, junto al Arco Noroeste —operativo desde julio de 2025 y marzo de 2026, con una inversión de 264 millones de euros, y que según La Opinión de Murcia ya ha reducido más de la mitad de las retenciones en los puntos más conflictivos del área metropolitana—, la circunvalación de la ciudad por el Norte.",
        ],
        relationTitle: "¿Qué relación tiene con el Sector ZP-Pn5?",
        relationBody:
          "El trazado actual de la A-7 discurre justo junto al límite Norte del Sector ZP-Pn5, y es hoy la vía por la que circula indistintamente tanto el tráfico de paso entre Andalucía y el Levante como el que accede a Murcia y a su entorno más próximo, incluido El Puntal. Con la entrada en servicio del Arco Norte, ese tráfico de largo recorrido se desviará por el nuevo bypass, situado algo más al Norte, aliviando de presión el tramo de la A-7 junto al Sector. En la práctica, ese tramo pasará a funcionar principalmente como vía de acceso a Murcia a través del entorno del Sector, en lugar de como corredor de paso saturado —una transformación que refuerza tanto la accesibilidad como el atractivo del Sector para los usos terciarios, logísticos y comerciales previstos.",
        mapCaption:
          "Trazado del tramo B del Arco Norte de Murcia, entre el enlace de la MU-32 y la A-7 a la altura de Cabezo de Torres. El Sector ZP-Pn5 se sitúa junto al trazado actual de la A-7, algo más al Sur de este nuevo bypass. (Fuente: Ministerio de Transportes y Movilidad Sostenible)",
        mapImageAlt:
          "Mapa oficial del Ministerio de Transportes con el trazado del tramo B del Arco Norte de Murcia, entre Molina de Segura/Las Torres de Cotillas y el enlace de Cabezo de Torres con la A-7",
        relatedLinks: [
          { label: "Conectividad y accesos", href: "/conectividad" },
          { label: "Usos e inversión", href: "/inversion" },
        ],
      },
      en: {
        title: "First stretch of the Arco Norte de Murcia ring road awarded for €84.2 million",
        excerpt:
          "The Ministry awards the €84.2 million contract for the first stretch of the Arco Norte de Murcia bypass, which will divert Andalucía–Levante through-traffic away from the Sector's surroundings.",
        body: [
          "Spain's Ministry of Transport and Sustainable Mobility has awarded a contract worth around €84.19 million (VAT included) for the works on the first stretch of the Arco Norte de Murcia ring road: tramo B, 8.3 kilometres long, between kilometre 652 of the A-7 motorway and the Cabezo de Torres junction. According to La Opinión de Murcia, the works will be carried out by FCC and Pavasal.",
          "The new stretch will begin at a junction at kilometre 4 of the MU-32 motorway and end with a confluence onto the A-7 at the Cabezo de Torres junction. The project includes 13 new structures — three viaducts, four overpasses and six underpasses — while the Ministry is still working on the technical and financial update of the second stretch (tramo A).",
          "The stated aim is to separate long-distance through-traffic between Andalucía and the Levante (Alicante and Valencia provinces) from the urban congestion that today saturates the Nudo de Espinardo interchange — used by more than 125,000 vehicles a day — and Murcia's Ronda Oeste ring road. Together with the Arco Noroeste — operational since July 2025 and March 2026, built with a €264 million investment, and which according to La Opinión de Murcia has already cut tailbacks by more than half at the metropolitan area's most congested points — the Arco Norte will complete the city's northern bypass.",
        ],
        relationTitle: "How does this relate to Sector ZP-Pn5?",
        relationBody:
          "The current A-7 corridor runs right along the northern boundary of Sector ZP-Pn5, and today carries both long-distance through-traffic between Andalucía and the Levante and traffic accessing Murcia and its immediate surroundings, including El Puntal. Once the Arco Norte opens, that long-distance traffic will shift to the new bypass, a little further north, easing pressure on the stretch of the A-7 next to the Sector. In practice, that stretch will come to function mainly as the access route into Murcia through the Sector's surroundings, rather than as a congested through-corridor — a shift that reinforces both the accessibility and the appeal of the Sector for its planned tertiary, logistics and retail uses.",
        mapCaption:
          "Route of tramo B of the Arco Norte de Murcia ring road, between the MU-32 junction and the A-7 at Cabezo de Torres. Sector ZP-Pn5 sits along the current A-7 corridor, just south of this new bypass. (Source: Ministry of Transport and Sustainable Mobility)",
        mapImageAlt:
          "Official Ministry of Transport map showing the route of tramo B of the Arco Norte de Murcia, between Molina de Segura/Las Torres de Cotillas and the Cabezo de Torres junction with the A-7",
        relatedLinks: [
          { label: "Connectivity & access", href: "/conectividad" },
          { label: "Uses & investment", href: "/inversion" },
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
