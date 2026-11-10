# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y las versiones siguen [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

## [1.1.0] — 2026-11-09

Actualización a Node.js 26 (LTS), Astro 7 y dependencias exactas. El portafolio mantiene su contenido y diseño.

### Changed

- **Node.js 26.13.0** (LTS) en `engines`, `.nvmrc` y CI; **pnpm 12.18.0** como `packageManager`.
- **Astro 7.4.7** y **@astrojs/react 7.1.4** (antes Astro 5.16.6).
- **Dependencias** a su versión exacta más reciente: React 19.3.1, React Hook Form 7.91.0, React Toastify 11.2.0, TypeScript 6.0.3 y demás.
- **Calidad**: ESLint 10.14.0 con `eslint-plugin-astro` y `typescript-eslint`. Scripts `check`, `sync`, `eslint`, `eslint:fix`, `prettier` y `prettier:check`. CI con `check`, `eslint`, `prettier:check` y `build`.
- Formato aplicado a todo el proyecto con `.prettierrc` del proyecto.

### Fixed

- `client:only` en `Header.astro` ahora indica el framework (`client:only="react"`); la regla `astro/missing-client-only-directive-value` de ESLint lo exige.
- `@emnapi/core` y `@emnapi/runtime` fijados a `1.11.3` mediante `overrides` en `pnpm-workspace.yaml`.
- `package.json`: la versión pasa de `1.0` a semver (`1.1.0`).
