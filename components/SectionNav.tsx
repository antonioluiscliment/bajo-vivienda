import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";

type Section = { num: string; label: string; href: string };

const ALL_SECTIONS: Record<Locale, Section[]> = {
  es: [
    { num: "L.02", label: "Usos e inversión", href: "/inversion" },
    { num: "L.03", label: "Entorno comercial", href: "/entorno" },
    { num: "L.04", label: "Conectividad y accesos", href: "/conectividad" },
    { num: "L.05", label: "Documentación del Plan Parcial", href: "/documentacion" },
    { num: "L.06", label: "Propiedad y planos de urbanización", href: "/propiedad-urbanizacion" },
    { num: "L.07", label: "Proyecto de reparcelación", href: "/proyecto-reparcelacion" },
    { num: "L.08", label: "Oferta de terreno", href: "/oferta-terreno" },
  ],
  en: [
    { num: "L.02", label: "Uses & investment", href: "/inversion" },
    { num: "L.03", label: "Retail surroundings", href: "/entorno" },
    { num: "L.04", label: "Connectivity & access", href: "/conectividad" },
    { num: "L.05", label: "Plan Parcial documentation", href: "/documentacion" },
    { num: "L.06", label: "Ownership & development plans", href: "/propiedad-urbanizacion" },
    { num: "L.07", label: "Reparcelling project", href: "/proyecto-reparcelacion" },
    { num: "L.08", label: "Land for sale", href: "/oferta-terreno" },
  ],
};

const ARIA_LABEL: Record<Locale, string> = {
  es: "Otras secciones",
  en: "Other sections",
};

/** `current` es la ruta sin prefijo de idioma, p. ej. "/inversion". */
export default function SectionNav({ locale, current }: { locale: Locale; current: string }) {
  const items = ALL_SECTIONS[locale].filter((s) => s.href !== current);
  return (
    <div className="section-nav-wrap">
      <nav className="next-grid" aria-label={ARIA_LABEL[locale]}>
        {items.map((item) => (
          <a key={item.href} href={localeHref(locale, item.href)}>
            <div className="num mono">{item.num}</div>
            <div className="label">{item.label}</div>
          </a>
        ))}
      </nav>
    </div>
  );
}
