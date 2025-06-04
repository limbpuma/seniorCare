# Propuesta de Mejora: Accesibilidad Legal

Este documento recopila recomendaciones para garantizar el cumplimiento de los principales marcos legales de accesibilidad web, en especial WCAG 2.1/2.2 nivel AA y la norma europea EN 301 549.

## 1. Estado Actual
- El proyecto incluye mejoras descritas en `docs/PHASE_2_ACCESSIBILITY_COMPLETION_SUMMARY.md` con **0 violaciones** al evaluar con axe-core bajo WCAG 2.1 AA.
- No hay evidencia de una evaluación formal de WCAG 2.2 ni de la norma EN 301 549.

## 2. Requisitos Legales Clave
- **WCAG 2.1 AA**: Nivel mínimo de accesibilidad para la mayoría de legislaciones europeas.
- **WCAG 2.2 AA**: Introduce nuevos criterios como `2.5.7 Arranging the Screen` y `2.5.8 Target Size`.
- **EN 301 549**: Norma europea que referencia WCAG 2.1 y requisitos adicionales para software, documentos y multimedia.

## 3. Áreas de Mejora Identificadas
1. **Objetivos táctiles pequeños**
   - Los iconos de redes sociales tienen un área clicable inferior a 24 px. Se recomienda aumentar el espacio o agregar relleno para cumplir `2.5.8 Target Size`.
2. **Enlaces con iconos**
   - Verificar que todos los enlaces que utilizan solo un icono incluyan `aria-label` descriptivo. Revisar enlaces telefónicos y de redes sociales.
3. **Pruebas de accesibilidad**
   - Realizar auditorías con herramientas actualizadas (axe-core, Lighthouse, Pa11y) e incluir WCAG 2.2 en la configuración.
   - Documentar los resultados para demostrar conformidad con EN 301 549.
4. **Gestión del foco y navegación por teclado**
   - Asegurar indicadores de foco visibles en todo momento y revisar el orden de tabulación.
5. **Documentación y política de accesibilidad**
   - Mantener un apartado en la página de “Declaración de accesibilidad” que explique el nivel de conformidad y el método de evaluación.

## 4. Próximos Pasos
1. **Ajustar estilos de iconos** en `Header.astro` y `Footer.astro` para ampliar su área interactiva.
2. **Ejecutar auditorías completas** de WCAG 2.1 y 2.2 AA, documentando los resultados en `docs/`.
3. **Actualizar la declaración de accesibilidad** para incluir referencias a EN 301 549 y las fechas de las pruebas realizadas.

## 5. Recursos Útiles
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [EN 301 549](https://www.etsi.org/standards)
- [Guía de Accesibilidad del Gobierno Alemán (BITV 2.0)](https://www.gesetze-im-internet.de/bitv_2_0/)

Con estas acciones, el proyecto reforzará su cumplimiento legal y mejorará la experiencia de todos los usuarios.
