const ALL_SECTIONS = [
  { num: "L.02", label: "Usos e inversión", href: "/inversion" },
  { num: "L.03", label: "Entorno comercial", href: "/entorno" },
  { num: "L.04", label: "Conectividad y accesos", href: "/conectividad" },
  { num: "L.05", label: "Documentación del Plan Parcial", href: "/documentacion" },
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
