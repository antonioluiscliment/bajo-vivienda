export type DocItem = {
  title: string;
  ext: "pdf" | "jpg";
  driveId: string;
};

export type DocCategory = {
  key: string;
  title: string;
  items: DocItem[];
};

// Índice del Plan Parcial de Actividad Económica del sector ZP-Pn5,
// aprobado definitivamente por el Pleno del Excmo. Ayuntamiento de
// Murcia el 22 de julio de 2011. Los documentos están clasificados en
// la carpeta de Drive "PLAN PARCIAL ZP-Pn-05" y enlazan a esa carpeta
// mientras no se publiquen directamente en el sitio.
export const DOC_CATEGORIES: DocCategory[] = [
  {
    key: "planos-plan-parcial",
    title: "01 · Planos del Plan Parcial (P.01–P.20)",
    items: [
      { title: "P.01 — Zonificación y usos pormenorizados", ext: "jpg", driveId: "1tJ8oLZhu4dkX6Y-p6WPwRwJYD_Bh2ow1" },
      { title: "P.03 — Alineaciones y rasantes", ext: "jpg", driveId: "1idn9OxFWVotyMV8rO4X6oraZ9-1Fimx8" },
      { title: "P.04 — Dotaciones y red viaria", ext: "jpg", driveId: "1TDpixA3VAGiJ-jZB09qgINCsgc9P1Ctp" },
      { title: "P.04 — Aparcamientos para discapacitados", ext: "jpg", driveId: "1T6kbLmPBeT4u_CWraaNLmpr7CR1Ank9l" },
      { title: "P.05 — Red viaria, perfiles longitudinales", ext: "jpg", driveId: "1YZn__GQu8Bbpj5QBfcPtBqmdMHTYVM01" },
      { title: "P.06 — Secciones transversales (1 de 4)", ext: "jpg", driveId: "1gj15neCGHGW9ADRCzAgC_gINqbe_BpAn" },
      { title: "P.06 — Secciones transversales (2 de 4)", ext: "jpg", driveId: "19AIDCNn2VS1M5MQqX_Z3Hnn0SN4m7hvZ" },
      { title: "P.06 — Secciones transversales (3 de 4)", ext: "jpg", driveId: "1eyrp7Cf7lH6Zr5jQegXzWpXBRn2y582I" },
      { title: "P.06 — Secciones transversales (4 de 4)", ext: "jpg", driveId: "11iptrsXmml98rJJpE-WPPVGzfoHu1D5S" },
      { title: "P.07 — Plano de conjunto", ext: "jpg", driveId: "1e8BWoSiEqht4pjM1QJ5ROzksMqcZ2512" },
      { title: "P.08 — Red de abastecimiento de agua potable", ext: "jpg", driveId: "1h8d3aAQ193rnjyRxjXPEoPdicVO8DeLD" },
      { title: "P.09 — Esquema red de saneamiento", ext: "jpg", driveId: "1Ekczp5mIx2UIlXfbwmBcITu7gzjV0OMx" },
      { title: "P.10 — Esquema red de energía eléctrica", ext: "jpg", driveId: "1vQKgoO3PK-MSz3H9didhCv8Okb8TK0Ga" },
      { title: "P.11 — Esquema red de alumbrado público", ext: "jpg", driveId: "1HvUB0_EWIeuFaJltsz8jCaZDefBA5Tg8" },
      { title: "P.12 — Esquema de telecomunicaciones", ext: "jpg", driveId: "1U2SUyursGoFC_iz5cMs4D9hzdQ8KpE-g" },
      { title: "P.13 — Esquema red de gas natural", ext: "jpg", driveId: "16_65s08ZZkUD8nMlzqvMptQeXSGhP4k5" },
      { title: "P.14 — Delimitación de unidades y plan de etapas (Plan Parcial)", ext: "jpg", driveId: "11HUsmJyQeCZS3x8YIZKWWca5io_bzgOk" },
      { title: "P.14 — Delimitación de unidades y plan de etapas (Programa de Actuación)", ext: "jpg", driveId: "1mMgSxSRmejNx446GHx8jnhb-vuf_ZZaG" },
      { title: "P.15 — Ordenación sobre cartografía", ext: "jpg", driveId: "1lxztAn4Mdnhokfx3uOd0e7tlAnrNatXo" },
      { title: "P.16 — Cesiones al municipio", ext: "jpg", driveId: "1kU0LtMJ5VkCH9My9HgFyleWkqy3vXWrd" },
      { title: "P.17 — Ordenación sobre parcelario", ext: "jpg", driveId: "1_7T-N9e2vyZauxoRgvu2IR0hy9Dvfoo5" },
      { title: "P.18 — Planta general de replanteo (coordenadas UTM)", ext: "jpg", driveId: "1CvR4bBU3Q6HydQ5-U9uuNg5H4E8cJ5to" },
      { title: "P.19 — Líneas isófonas y retranqueos a fachada", ext: "jpg", driveId: "1bYhtP_5BbqQUVoYKsFr84f8YgnYuW6Oq" },
      { title: "P.20 — Línea de inundación, rambla de Barnuevo (retorno 100 años)", ext: "jpg", driveId: "1tRfc7jBNld90mAPPBcPyb3CVnIdhJ-js" },
      { title: "Parcelario sobre topográfico", ext: "jpg", driveId: "1-GjbT2Hczlpp-pTxdfHjRAvryuXwY2ao" },
    ],
  },
  {
    key: "planos-informacion-previa",
    title: "02 · Planos de información previa",
    items: [
      { title: "I.04 — Estado actual y edificaciones existentes", ext: "jpg", driveId: "19l8v3Ah_wVz-M-NDn8DVEzRxYDwG33cH" },
      { title: "I.05 — Usos del suelo", ext: "jpg", driveId: "1Q3NcZDiH_Cf4uYAr1AVFJgHDAGqyF_cb" },
      { title: "I.07 — Infraestructuras existentes", ext: "jpg", driveId: "1ogVhZefmTyJB2LiPBHzDin91vyghCQ4d" },
      { title: "I.08 — Catastro", ext: "jpg", driveId: "119FywM6NbzkIH0_WGywGwANK6F2OFNLZ" },
      { title: "I.09 — Parcelario", ext: "jpg", driveId: "1mnIBqesrDoEJkfiUpYKaZ1UFxZHUIgoA" },
    ],
  },
  {
    key: "documentacion-ambiental",
    title: "03 · Documentación ambiental",
    items: [
      { title: "Memoria — Documentación ambiental anexa", ext: "pdf", driveId: "1pXDmOYHznZjN-MTATPfOmdEEuW3IsuCq" },
      { title: "Anejo I — Índice de planos temáticos", ext: "pdf", driveId: "1iN8EXHZYzw3SL47yZTjSJotkWd3F6LDV" },
      { title: "Anejo II — Reportaje fotográfico, zona norte", ext: "pdf", driveId: "17y7wh8VfOjrQgzfgiAOXNttoim0lfstM" },
      { title: "Anejo II — Reportaje fotográfico, zona sur", ext: "pdf", driveId: "1CLdxpMUe7JdwtRWDVwtdeUyv9pOnt917" },
      { title: "Plano 0 — Localización y límites", ext: "jpg", driveId: "1Jjl7xJjfOLDFgL7-6FtZ5EYSXGh1v8JZ" },
      { title: "Plano 1.1 — Red Natura 2000 (LIC y zonas de influencia)", ext: "jpg", driveId: "14NE6itxU-E96OmzXoZdWi9mV4QWUVa88" },
      { title: "Plano 2 — Hábitats de interés comunitario", ext: "jpg", driveId: "1mQ2wKaEqy7_2Uls7h7YhnxUv1WL6i2UN" },
      { title: "Plano 4 — Edafología", ext: "jpg", driveId: "1M1NOrsHo0RqMD_BDfAoOz1hb0pz_w41s" },
      { title: "Plano 6 — Monte público y bandas de amortiguación", ext: "jpg", driveId: "1SemfSWUJz5JB5d3HEMaZHe7KCzrixcPE" },
      { title: "Plano 7 — Áreas de nidificación de especies protegidas", ext: "jpg", driveId: "1PrBBSyx7Te-y_moAj_9TuhdkC_e1FYmF" },
      { title: "Plano 8 — Espacios naturales protegidos", ext: "jpg", driveId: "1BEQ0UxMTWQHmKQqdK7JeDlRj1GBFg8DT" },
      { title: "Plano 9.1 — Unidades ambientales y paisajísticas", ext: "jpg", driveId: "1c6eGtDvKyx9tzxgUrNPaEyU2MHIk4ZW1" },
      { title: "Plano 9.2 — Especies catalogadas y ejemplares arbóreos", ext: "jpg", driveId: "1EjF1_rcyWL97KJb6yXKesF8uJqac_Spj" },
    ],
  },
  {
    key: "estudio-hidrologico",
    title: "04 · Estudio hidrológico",
    items: [
      { title: "Informe — Estudio hidrológico del sector Pn-5", ext: "pdf", driveId: "18jG-2lt9Cx0G1zlzN2S0fSqQ1N5jCCYS" },
      { title: "Anejo 1 — Cálculos hidrológicos", ext: "pdf", driveId: "1pkf9Q_70QdziD6LUp1zUjKWgr9nwE33u" },
      { title: "Anejo 2 — Resultados del programa Hec-Ras", ext: "pdf", driveId: "1gTSV0zjUkq3h9YHyYHxhKxqDBUmCU-dB" },
      { title: "Anejo 3 — Anejo topográfico", ext: "pdf", driveId: "1vE9-EMrSkW9rc0lNllGEvAdy3i9ZSTKw" },
      { title: "Anejo 3 — Planta de perfiles transversales", ext: "jpg", driveId: "1HMMqNkLJ0A0UrV4s_4wCszcgAeH6YEUB" },
      { title: "Anejo 3 — Perfiles transversales", ext: "jpg", driveId: "1C89oeZAl6F7d_SCxhMg33Eqwkte-MTLU" },
      { title: "Índice de planos del estudio", ext: "pdf", driveId: "1YMtpAcdI8fZh00Lwj54A98cuiIX24Mw8" },
      { title: "Plano 1 — Situación", ext: "jpg", driveId: "1ZqRCJcDUQTlELpMc5rEjjfeSM2AzMe6Q" },
      { title: "Plano 2 — Cuenca hidrográfica", ext: "jpg", driveId: "1Aq8f4njOsH2X-rGWMmmjDURsVI1VopiD" },
      { title: "Plano 3 — Periodo de retorno 10 años", ext: "jpg", driveId: "1hQnaZvgeOrr0BJrXrROTXojOKLxTE6Yy" },
    ],
  },
  {
    key: "estudio-acustico",
    title: "05 · Estudio acústico",
    items: [
      { title: "Informe — Estudio predictivo de impacto acústico ambiental", ext: "pdf", driveId: "1ysJDe-JwHxrsSbbCeiQtXUxwJC_WAJ11" },
      { title: "Anexo IV y V — Gráficas y planos de resultados", ext: "pdf", driveId: "1tOvmjLE57B_5P2JtbVYEJzyDWbpxOlCz" },
    ],
  },
  {
    key: "texto-refundido",
    title: "06 · Texto Refundido y Programa de Actuación",
    items: [
      { title: "Memoria y Normas Urbanísticas — Índice", ext: "pdf", driveId: "1ZjfLo6cbTf55zjS8yiZLjUWuWoJhYOk8" },
      { title: "Normas Urbanísticas", ext: "pdf", driveId: "1Et8YYatAehKck2fOjsU9DyHBC9szt1q6" },
      { title: "Preámbulo y acuerdo de aprobación definitiva", ext: "pdf", driveId: "1ayFxuSrXNeC_sKI1s2V2WhrzEpqpuQay" },
      { title: "Programa de Actuación (texto completo)", ext: "pdf", driveId: "1x2-Fe2aVVfwp0PYmqpa1wQOWSFR61Hn2" },
      { title: "Plano 1.01 — Situación respecto al PGOUM (Texto Refundido)", ext: "jpg", driveId: "156fNSBIbeQf5_SkBX5Ge9j7rTwFQI3hN" },
      { title: "Plano 1.01 — Situación respecto al PGOUM (Programa de Actuación)", ext: "jpg", driveId: "1oLm4tcgVWA-g_iJELSoVo7wZgadV7WLI" },
    ],
  },
];

export function driveViewUrl(driveId: string) {
  return `https://drive.google.com/file/d/${driveId}/view`;
}
