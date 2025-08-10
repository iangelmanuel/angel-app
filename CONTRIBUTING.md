# Guía de Contribución

Actualmente este proyecto es principalmente personal y su evolución a blog está en progreso. Si deseas ayudar, lee primero.

## Flujo Básico

1. Abrir un Issue describiendo propuesta o bug.
2. Esperar confirmación / feedback.
3. Crear un fork y una rama descriptiva: `feat/nombre-feature` o `fix/bug-breve`.
4. Asegurar formato: `pnpm format`.
5. Crear Pull Request enlazando el Issue.

## Estándares de Código

- TypeScript estricto (ver `tsconfig.json`).
- Componentes: preferir Astro para layout y React para lógica interactiva.
- Estilos: utilidades Tailwind. Evitar CSS inline abusivo.
- Nombres en inglés para código; contenido visible al usuario puede estar en español.

## Commits

Usar convención simple (inspirado en Conventional Commits):

- `feat: nueva sección de blog`
- `fix: validación de email`
- `docs: actualizar README`
- `chore: configurar prettier`
- `refactor: simplificar componente Project`

## Tests

(No implementados aún). Futuro: pruebas de utilidades y validaciones.

## Seguridad

No incluir secretos, tokens ni datos personales en issues o commits.

## Accesibilidad (a11y)

- Usar etiquetas semánticas.
- Proveer texto alternativo en imágenes.
- Contraste adecuado.

## Rechazo de PR

Se puede cerrar un PR si: no sigue la guía, cambia el alcance del proyecto, agrega dependencias innecesarias o vulnera la licencia.

## Preguntas

Abrir un Issue con etiqueta `question`.

Gracias por tu interés.
