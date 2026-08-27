export type PlanoUrbanizacion = {
  title: string;
  ext: "pdf" | "jpg";
  driveId: string;
};

// Planos del Proyecto de Urbanización de la U.A. 1ª del Plan Parcial del
// sector ZP-Pn5 (redactado por Urbamusa, noviembre 2017), clasificados y
// renombrados conforme a su contenido. Enlazan a la carpeta de Drive
// "URBANIZACIÓN / SELECCIÓN PLANOS", con acceso público de lectura.
export const PLANOS_URBANIZACION: PlanoUrbanizacion[] = [
  { title: "Plano 1 — Situación", ext: "pdf", driveId: "1K0oSRUbVLOLw9XcaxstUHLhBcnFhXOIh" },
  { title: "Plano 2 — Zonificación según Plan Parcial", ext: "pdf", driveId: "1mZDKJaDoUkwkGtewLuMNhb0LhMRHg_TL" },
  { title: "Plano 3 — Levantamiento topográfico, estado actual", ext: "pdf", driveId: "1UK6pqGa_EjMvdPj71-KP33v-JkYGrEQa" },
  { title: "Plano 4 — Superposición ordenación sobre estado actual, bases de replanteo", ext: "pdf", driveId: "1MIvaYpivI_0-PzVICNF457P5XR_vNWsB" },
  { title: "Plano 5.3 — Planta general de servicios afectados (red de gas)", ext: "pdf", driveId: "12gWrwAhHdzlXKFa596Y2qQ6rmgHEeMZV" },
  { title: "Plano 6.3 — Amojonamiento de manzanas edificables y altimetría", ext: "pdf", driveId: "1IHHTnJkMw4pvolGEZ4ooX5lQU11kvo89" },
  { title: "Plano 9.1 — Plantas y perfiles de las obras de paso", ext: "pdf", driveId: "1l4phi38YNvrdmwRaFiE0k3e_WFtcP8TH" },
  { title: "Planos 11 y 12 — Abastecimiento y riego de calles", ext: "pdf", driveId: "1jieis38puk5xxb06dQAQBtJNB6Q4-zV9" },
];

export function driveViewUrl(driveId: string) {
  return `https://drive.google.com/file/d/${driveId}/view`;
}
