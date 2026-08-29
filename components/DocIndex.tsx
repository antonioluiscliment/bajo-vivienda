"use client";

import { useMemo, useState } from "react";
import { DOC_CATEGORIES, driveViewUrl } from "@/lib/documentos";
import type { Locale } from "@/lib/i18n";

const T = {
  es: {
    kicker: "Índice documental",
    h2: "Busca por asunto: red viaria, ruido, inundabilidad, normativa…",
    placeholder: "Buscar en el expediente (p. ej. 'ruido', 'red viaria', 'normas')…",
    ariaSearch: "Buscar documento del Plan Parcial",
    noResults: (q: string) => `Sin resultados para “${q}”. Prueba con otro término.`,
    note: null as string | null,
  },
  en: {
    kicker: "Document index",
    h2: "Search by subject: road network, noise, flood risk, bylaws…",
    placeholder: "Search the case file (e.g. 'noise', 'road network', 'bylaws')…",
    ariaSearch: "Search Plan Parcial documents",
    noResults: (q: string) => `No results for “${q}”. Try another term.`,
    note: "Documents are the official case file as filed with Murcia City Council, and remain in Spanish. Titles below are given in Spanish for that reason.",
  },
};

export default function DocIndex({ locale }: { locale: Locale }) {
  const [query, setQuery] = useState("");
  const t = T[locale];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DOC_CATEGORIES;
    return DOC_CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (it) =>
          it.title.toLowerCase().includes(q) ||
          cat.title.toLowerCase().includes(q)
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [query]);

  const totalShown = filtered.reduce((n, c) => n + c.items.length, 0);

  return (
    <section className="section">
      <p className="section-kicker mono">{t.kicker}</p>
      <h2>{t.h2}</h2>
      {t.note && <p className="section-source">{t.note}</p>}
      <input
        type="search"
        className="doc-search mono"
        placeholder={t.placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label={t.ariaSearch}
      />

      {totalShown === 0 && <p className="doc-empty">{t.noResults(query)}</p>}

      {filtered.map((cat) => (
        <div className="doc-category" key={cat.key}>
          <div className="doc-category-title">
            <span>{cat.title}</span>
            <span className="count mono">{cat.items.length}</span>
          </div>
          <ul className="doc-list">
            {cat.items.map((it) => (
              <li key={it.driveId}>
                <a
                  href={driveViewUrl(it.driveId)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={`ext mono ${it.ext}`}>{it.ext}</span>
                  {it.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
