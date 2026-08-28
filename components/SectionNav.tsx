const ALL_SECTIONS = [
  { num: "L.02", label: "Usos e inversión", href: "/inversion" },
  { num: "L.03", label: "Entorno comercial", href: "/entorno" },
  { num: "L.04", label: "Conectividad y accesos", href: "/conectividad" },
  { num: "L.05", label: "Documentación del Plan Parcial", href: "/documentacion" },
  { num: "L.06", label: "Propiedad y planos de urbanización", href: "/propiedad-urbanizacion" },
  { num: "L.07", label: "Proyecto de reparcelación", href: "/proyecto-reparcelacion" },
  { num: "L.08", label: "Oferta de terreno", href: "/oferta-terreno" },
];

export default function SectionNav({ current }: { current: string }) {
  const items = ALL_SECTIONS.filter((s) => s.href !== current);
  return (
    <div className="section-nav-wrap">
      <nav className="next-grid" aria-label="Otras secciones">
        {items.map((item) => (
          <a key={item.href} href={item.href}>
            <div className="num mono">{item.num}</div>
            <div className="label">{item.label}</div>
          </a>
        ))}
      </nav>
    </div>
  );
}
