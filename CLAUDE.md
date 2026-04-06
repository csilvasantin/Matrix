# Proyecto 26 — Matrix

> Template React + TypeScript + Vite con configuración ESLint profesional.

## Contexto
Matrix es un template de desarrollo moderno para aplicaciones React. Proporciona configuración lista para producción con TypeScript, Vite (para HMR rápido), y ESLint. El proyecto es una base para expandir con aplicaciones React complejas.

## Arquitectura
- **Vite**: build tool y dev server
- **React**: framework UI
- **TypeScript**: tipos estáticos
- **ESLint**: linting con plugins para React (react-x, react-dom)
- Dos opciones de compilador: Oxc (default) o SWC (alternativa)

## Notas para IAs
- React Compiler está deshabilitado por defecto (impacto en performance de dev/build)
- Para producción, considerar activar ESLint strict: reemplazar `tseslint.configs.recommended` con `tseslint.configs.recommendedTypeChecked` o `strictTypeChecked`
- El proyecto requiere Node.js y npm/yarn
- Para expandir: instalar librerías adicionales, configurar variables de entorno, ajustar ESLint según necesidad
- Vite proporciona HMR (Hot Module Reload) — cambios en archivos React se reflejan instantáneamente
