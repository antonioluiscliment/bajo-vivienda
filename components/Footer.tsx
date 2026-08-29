import type { Locale } from "@/lib/i18n";

const T = {
  es: {
    line1: "Parque de Actividad Norte de Murcia · Segunda etapa (Sector ZP-Pn5)",
    line2: "Información urbanística orientativa · Consultar Plan Parcial y PGOU vigente",
  },
  en: {
    line1: "Parque de Actividad Norte de Murcia · Phase II (Sector ZP-Pn5)",
    line2:
      "Planning information is indicative · Refer to the Plan Parcial (Local Area Development Plan) and the current PGOU (Murcia General Urban Development Plan)",
  },
};

export default function Footer({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <footer>
      <span>{t.line1}</span>
      <span>{t.line2}</span>
    </footer>
  );
}
