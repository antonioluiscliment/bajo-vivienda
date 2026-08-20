# Parque de Actividad Norte de Murcia — Segunda etapa

Web de presentación e inversión de la segunda etapa del Parque de Actividad
Económica del Norte de Murcia: sector ZP-Pn5 (585.301 m², ficha PGOU
núm. 44), en El Puntal, junto a la Autovía de Alicante (A-7). Suelo de
uso Servicios dirigido a inversores (centro comercial, hoteles,
estaciones de servicio, logística y otros usos terciarios).

Construida con **Next.js 14** (App Router) + TypeScript.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/
  layout.tsx          Metadatos, fuentes (Archivo Expanded, IBM Plex)
  page.tsx             Portada de una sola pantalla (sin scroll en tablet/escritorio)
  globals.css           Estilos globales y sistema de diseño (portada + páginas de contenido)
  inversion/page.tsx    Economía de la Región + usos del suelo terciario (Norma N.5)
  entorno/page.tsx      Entorno comercial: centros comerciales, universidades, estadio
  conectividad/page.tsx Límites del sector y enlace con las autovías A-7 / A-30
  documentacion/page.tsx Índice buscable del expediente del Plan Parcial
components/
  Header.tsx            Menú hamburguesa + panel de navegación (índice del sitio)
  Hero.tsx               Portada: mensaje comercial, cifras clave y plano de situación
  CotaDivider.tsx         Divisor tipo "cota acotada" (elemento de firma), reutilizable
  PageHeader.tsx          Cabecera reutilizable de las páginas de contenido (título + volver)
  SectionNav.tsx           Navegación inferior entre las páginas de contenido
  DocIndex.tsx              Buscador e índice por categorías del Plan Parcial (usa lib/documentos.ts)
  Footer.tsx
lib/
  documentos.ts           Índice de documentos del Plan Parcial (título, tipo y enlace a Drive), por categorías
public/assets/            Imágenes del proyecto (plano de situación, capturas de entorno y ciudad)
```

La portada (`page.tsx`) está pensada para caber en una sola pantalla en
tablet y escritorio, sin necesidad de hacer scroll (ver reglas
`@media (min-width: 881px)` y `@media (min-width: 601px) and
(max-width: 880px)` en `globals.css`, clase `.page-shell`). En móvil
(<600px) el contenido pasa a flujo normal con scroll, por legibilidad.
Las páginas de contenido (`inversion`, `entorno`, `conectividad`,
`documentacion`) usan scroll normal en todos los tamaños; comparten los
estilos de la sección "Secondary pages" de `globals.css` (clases
`.page-header`, `.section`, `.stat-grid`, `.use-grid`, `.bounds-grid`,
`.anchor-list`, `.content-figure`, `.doc-search` / `.doc-category` /
`.doc-list`, `.next-grid`).

Las cifras de superficie y edificabilidad (585.301 m² / 234.120 m²,
aprovechamiento 0,40 m²/m²) están tomadas de la ficha del PGOU de
Murcia para el sector ZP-Pn5 (ficha núm. 44). Cualquier actualización
de estos datos debe reflejarse en `components/Hero.tsx` y en el
`CotaDivider` de `app/page.tsx`.

Las cifras económicas de la Región (PIB, PIB per cápita, población,
personas ocupadas) en `app/inversion/page.tsx` proceden del CREM
(Contabilidad Regional), INE y UGT Región de Murcia; los enlaces de
fuente están en el propio texto de la página.

El índice documental de `app/documentacion/page.tsx` enlaza a los
ficheros ya clasificados y renombrados en la carpeta de Drive
"PLAN PARCIAL ZP-Pn-05". Añadir o quitar documentos del expediente
significa actualizar el array `DOC_CATEGORIES` de `lib/documentos.ts`
(título, extensión y `driveId` de cada fichero).

Las siguientes secciones del índice de navegación (`Header.tsx`,
`NAV_ITEMS`) están marcadas como "próx." (próximamente) y se irán
desarrollando como páginas o secciones adicionales: el sector ZP-Pn5
(planos y superficies) y contacto.

## Desplegar en Vercel

1. Sube esta carpeta a un repositorio de GitHub:
   ```bash
   git init
   git add .
   git commit -m "Portada del Parque de Actividad Norte de Murcia — Segunda etapa"
   git branch -M main
   git remote add origin <URL-de-tu-repo>
   git push -u origin main
   ```
2. Entra en [vercel.com](https://vercel.com) → **Add New… → Project**.
3. Importa el repositorio. Vercel detecta Next.js automáticamente
   (build command `next build`, no requiere configuración adicional).
4. Pulsa **Deploy**.

Cada `git push` a `main` genera un nuevo despliegue automático.
