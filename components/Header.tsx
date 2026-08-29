"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";
import LanguageSwitch from "./LanguageSwitch";

type NavItem = { num: string; label: string; href: string; soon: boolean };

const NAV_ITEMS: Record<Locale, NavItem[]> = {
  es: [
    { num: "L.00", label: "Inicio", href: "/", soon: false },
    { num: "L.01", label: "El sector ZP-Pn5", href: "#", soon: true },
    { num: "L.02", label: "Usos e inversión", href: "/inversion", soon: false },
    { num: "L.03", label: "Entorno comercial", href: "/entorno", soon: false },
    { num: "L.04", label: "Conectividad y accesos", href: "/conectividad", soon: false },
    { num: "L.05", label: "Documentación del Plan Parcial", href: "/documentacion", soon: false },
    { num: "L.06", label: "Propiedad y planos de urbanización", href: "/propiedad-urbanizacion", soon: false },
    { num: "L.07", label: "Proyecto de reparcelación", href: "/proyecto-reparcelacion", soon: false },
    { num: "L.08", label: "Oferta de terreno", href: "/oferta-terreno", soon: false },
    { num: "L.09", label: "Contacto", href: "#", soon: true },
  ],
  en: [
    { num: "L.00", label: "Home", href: "/", soon: false },
    { num: "L.01", label: "The ZP-Pn5 Sector", href: "#", soon: true },
    { num: "L.02", label: "Uses & investment", href: "/inversion", soon: false },
    { num: "L.03", label: "Retail surroundings", href: "/entorno", soon: false },
    { num: "L.04", label: "Connectivity & access", href: "/conectividad", soon: false },
    { num: "L.05", label: "Plan Parcial documentation", href: "/documentacion", soon: false },
    { num: "L.06", label: "Ownership & development plans", href: "/propiedad-urbanizacion", soon: false },
    { num: "L.07", label: "Reparcelling project (reparcelación)", href: "/proyecto-reparcelacion", soon: false },
    { num: "L.08", label: "Land for sale", href: "/oferta-terreno", soon: false },
    { num: "L.09", label: "Contact", href: "#", soon: true },
  ],
};

const T = {
  es: {
    tag: "Parque Actividad Norte · Fase II",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mainMenu: "Menú principal",
    eyebrow: "Índice del proyecto",
    soon: "próx.",
    footLine1: "Sector ZP-Pn5 · Ficha PGOU núm. 44",
    footLine2: "El Puntal, Murcia. Suelo Servicios junto a la A-7.",
  },
  en: {
    tag: "Parque Actividad Norte · Phase II",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainMenu: "Main menu",
    eyebrow: "Project index",
    soon: "soon",
    footLine1: "Sector ZP-Pn5 · PGOU record no. 44",
    footLine2: "El Puntal, Murcia. Suelo Servicios (services-use land) next to the A-7.",
  },
};

export default function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const t = T[locale];
  const items = NAV_ITEMS[locale];

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
          aria-label={open ? t.closeMenu : t.openMenu}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="topbar-right">
          <span className="topbar-tag mono">{t.tag}</span>
          <LanguageSwitch locale={locale} />
        </div>
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
        aria-label={t.mainMenu}
      >
        <div className="nav-eyebrow">{t.eyebrow}</div>
        <ul className="nav-list">
          {items.map((item, i) => (
            <li key={item.num}>
              <a
                href={item.href === "#" ? "#" : localeHref(locale, item.href)}
                ref={i === 0 ? firstLinkRef : undefined}
                onClick={closeMenu}
              >
                <span className="num">{item.num}</span>
                {item.label}
                {item.soon && <span className="soon">{t.soon}</span>}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-foot">
          {t.footLine1}
          <br />
          {t.footLine2}
        </div>
      </nav>
    </>
  );
}
