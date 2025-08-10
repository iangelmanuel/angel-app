# Angel De La Torre - Portfolio & Blog (Astro + React)

Proyecto del portafolio personal de **Angel De La Torre** que evolucionará a un pequeño blog técnico y personal. Construido con **Astro**, **React**, **TypeScript** y **Tailwind CSS**.

## Características

- Astro 5 + Islands Architecture
- Componentes híbridos Astro/React
- Tailwind CSS para estilos utilitarios
- Formularios con `react-hook-form`
- Validaciones simples en TypeScript
- Datos tipados (`projects.ts` + interfaces)

## Estructura del Proyecto

```
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.cjs     # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
├── public/                 # Imágenes y assets estáticos
├── src/
│   ├── components/         # Componentes Astro y React
│   ├── data/               # Datos estáticos (ej: proyectos)
│   ├── layouts/            # Layouts base
│   ├── pages/              # Rutas (Astro Pages)
│   ├── types/              # Definiciones de tipos
│   └── validate/           # Reglas de validación formulario
└── package.json
```

## Requisitos

- Node.js >= 18.17
- pnpm (recomendado) o npm

## Instalación y uso

```bash
pnpm install
pnpm dev       # entorno desarrollo
pnpm build     # build producción en /dist
pnpm preview   # vista previa del build
pnpm format    # formatear con Prettier
```

## Scripts

- `dev`: Inicia el servidor de desarrollo.
- `build`: Genera la versión optimizada.
- `preview`: Sirve el build generado.
- `format`: Aplica Prettier a todo el proyecto.

## Estilo de Código

Prettier + plugins (`prettier-plugin-astro`, `prettier-plugin-tailwindcss`). Ejecuta `pnpm format` antes de abrir PR.

## Roadmap (Evolución a Blog)

1. Sistema de posts en Markdown (`/src/content/posts`).
2. RSS feed.
3. Paginación y etiquetas (tags).
4. Soporte multilenguaje (ES/EN).
5. Deploy automatizado (GitHub Actions + Pages / Vercel).
6. Modo oscuro persistente.

## Contribuciones

Actualmente el proyecto es de uso personal. Pull Requests pueden ser discutidos primero abriendo un Issue.

## Licencia

Este proyecto usa una **Licencia de Uso Limitado Personal** (archivo `LICENSE`). No se permite:

- Uso comercial sin permiso expreso.
- Redistribución del código fuente modificada o no modificada.
- Reventa como plantilla o producto.

Se permite:

- Fork para revisión personal / aprendizaje.
- Inspiración para proyectos propios (sin copiar literal).

Si deseas usar parte del código de forma pública o comercial, solicita autorización vía email: `iangelmanuel02@gmail.com`.

## Autor

**Angel DM (Angel De La Torre)**  
Email: `iangelmanuel02@gmail.com`

## Contacto y Redes (Agregar en futuro)

- Blog: https://angel-delatorre.dev
- GitHub: https://github.com/iAngelManuel

---

Hecho con pasión por el desarrollo web moderno 🚀
