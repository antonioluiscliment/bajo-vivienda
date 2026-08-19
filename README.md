# Parque de Actividad Norte de Murcia — Segunda etapa

Página de presentación de la segunda etapa del Parque de Actividad
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
  layout.tsx        Metadatos, fuentes (Archivo Expanded, IBM Plex)
  page.tsx           Portada de una sola pantalla (sin scroll en tablet/escritorio)
  globals.css         Estilos globales y sistema de diseño
components/
  Header.tsx         Menú hamburguesa + panel de navegación (índice del sitio)
  Hero.tsx            Portada: mensaje comercial, cifras clave y plano de situación
  CotaDivider.tsx     Divisor tipo "cota acotada" (elemento de firma), reutilizable
  Footer.tsx
public/assets/        Imágenes del proyecto (plano de situación del sector Pn-5)
```

La portada (`page.tsx`) está pensada para caber en una sola pantalla en
tablet y escritorio, sin necesidad de hacer scroll (ver reglas
`@media (min-width: 881px)` y `@media (min-width: 601px) and
(max-width: 880px)` en `globals.css`, clase `.page-shell`). En móvil
(<600px) el contenido pasa a flujo normal con scroll, por legibilidad.

Las cifras de superficie y edificabilidad (585.301 m² / 234.120 m²,
aprovechamiento 0,40 m²/m²) están tomadas de la ficha del PGOU de
Murcia para el sector ZP-Pn5 (ficha núm. 44). Cualquier actualización
de estos datos debe reflejarse en `components/Hero.tsx` y en el
`CotaDivider` de `app/page.tsx`.

Las siguientes secciones del índice de navegación (`Header.tsx`,
`NAV_ITEMS`) están marcadas como "próx." (próximamente) y se irán
desarrollando como páginas o secciones adicionales: el sector ZP-Pn5,
usos e inversión, planos y superficies, conectividad y accesos, trámites
y sistema de actuación, y contacto.

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
