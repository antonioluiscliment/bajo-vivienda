"use client";

import { useMemo, useState } from "react";
import { DOC_CATEGORIES, driveViewUrl } from "@/lib/documentos";

export default function DocIndex() {
  const [query, setQuery] = useState("");

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
      <p className="section-kicker mono">Índice documental</p>
      <h2>Busca por asunto: red viaria, ruido, inundabilidad, normativa…</h2>
      <input
        type="search"
        className="doc-search mono"
        placeholder="Buscar en el expediente (p. ej. 'ruido', 'red viaria', 'normas')…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Buscar documento del Plan Parcial"
      />

      {totalShown === 0 && (
        <p className="doc-empty">
          Sin resultados para &ldquo;{query}&rdquo;. Prueba con otro término.
        </p>
      )}

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
