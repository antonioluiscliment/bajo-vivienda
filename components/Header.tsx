"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { num: "L.00", label: "Inicio", href: "#contenido", soon: false },
  { num: "L.01", label: "El sector ZP-Pn5", href: "#", soon: true },
  { num: "L.02", label: "Usos e inversión", href: "#", soon: true },
  { num: "L.03", label: "Planos y superficies", href: "#", soon: true },
  { num: "L.04", label: "Conectividad y accesos", href: "#", soon: true },
  { num: "L.05", label: "Trámites y sistema de actuación", href: "#", soon: true },
  { num: "L.06", label: "Contacto", href: "#", soon: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKeydown);
      firstLinkRef.current?.focus();
    }
    return () => document.removeEventListener("keydown", onKeydown);
  }, [open]);

  function closeMenu() {
    setOpen(false);
    btnRef.current?.focus();
  }

  return (
    <>
      <div className="topbar">
        <button
          ref={btnRef}
          className="hamburger"
          aria-expanded={open}
          aria-controls="navPanel"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <span className="topbar-tag mono">Parque Actividad Norte · Fase II</span>
      </div>

      <div
        className={`nav-overlay${open ? " open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav
        id="navPanel"
        className={`nav-panel${open ? " open" : ""}`}
        aria-hidden={!open}
        aria-label="Menú principal"
      >
        <div className="nav-eyebrow">Índice del proyecto</div>
        <ul className="nav-list">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.num}>
              <a
                href={item.href}
                ref={i === 0 ? firstLinkRef : undefined}
                onClick={closeMenu}
              >
                <span className="num">{item.num}</span>
                {item.label}
                {item.soon && <span className="soon">próx.</span>}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-foot">
          Sector ZP-Pn5 · Ficha PGOU núm. 44
          <br />
          El Puntal, Murcia. Suelo Servicios junto a la A-7.
        </div>
      </nav>
    </>
  );
}
