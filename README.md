# Realización de una vivienda sobre bajo comercial

Página de acceso al proyecto de transformación de un local comercial en
planta baja en una vivienda tipo loft, con aparcamiento cubierto
retranqueado (Región de Murcia, zona climática B3).

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
  page.tsx           Página de acceso
  globals.css         Estilos globales
components/
  Header.tsx         Menú hamburguesa + panel de navegación
  Hero.tsx            Portada con título, cifras clave e imagen 3D
  CotaDivider.tsx     Divisor tipo "cota acotada" (elemento de firma)
  DetailSection.tsx   Detalle constructivo + memoria técnica
  Footer.tsx
public/assets/        Imágenes del proyecto (renders 3D, plano, alzado)
```

## Desplegar en Vercel

1. Sube esta carpeta a un repositorio de GitHub:
   ```bash
   git init
   git add .
   git commit -m "Página de acceso del proyecto"
   git branch -M main
   git remote add origin <URL-de-tu-repo>
   git push -u origin main
   ```
2. Entra en [vercel.com](https://vercel.com) → **Add New… → Project**.
3. Importa el repositorio. Vercel detecta Next.js automáticamente
   (build command `next build`, no requiere configuración adicional).
4. Pulsa **Deploy**.

Cada `git push` a `main` genera un nuevo despliegue automático.
