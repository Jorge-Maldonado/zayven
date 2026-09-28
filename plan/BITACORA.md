# Bitácora del proyecto Zayven

Registro cronológico de decisiones y avances. Entrada más reciente arriba.

---

## 2026-09-27 — Actualización de codegraph a v1.6.0
- **Qué se hizo:** `codegraph upgrade` (1.5.0 → 1.6.0) y reindexado completo (`codegraph index -f`: 18 nodos, 58 relaciones).
- **Nota:** el upgrade reescribe `.cursor/mcp.json` con una ruta absoluta; se revirtió para mantener `${workspaceFolder}` y que el repo funcione en cualquier equipo.
- **Pendiente:** reactivar los MCPs del proyecto en Cursor (fallaron por timeout interno al arrancar) y verificarlos en un chat nuevo.

## 2026-09-27 — Índice de codegraph
- **Qué se hizo:** `codegraph init` en el repo (18 nodos, 58 relaciones sobre `docs/app.js`). Consulta de prueba con `codegraph_explore` correcta. Tarea `ZV-028` completada.
- **Pendiente:** abrir `C:\zayven\zayven` como carpeta de trabajo para que Cursor use el `.cursor/mcp.json` del repo (memoria en `.ai/memory.jsonl`).

## 2026-09-27 — Inicio del repositorio del plan
- **Qué se hizo:** análisis completo del PDF `Plan de negocios tecnológico.pdf` (98 páginas) y creación de la carpeta `plan/` con índice, diagnóstico, plan de negocio, catálogo de 100 SKUs, kits, finanzas, roadmap por fases, plan de 90 días, backlog, reglas, prompt maestro y guía de MCPs.
- **Web:** página del plan en `docs/` (lista para GitHub Pages).
- **MCPs:** `memory` (persistente en `.ai/memory.jsonl`) y `codegraph` configurados en `.cursor/mcp.json`.
- **Decisiones registradas:**
  - Arrancar con **tienda de productos electrónicos** evolucionando a marca tecnológica (no SaaS para PYMES todavía).
  - Escenario base de capital: **Bs 30.000** (decisión final pendiente: `ZV-010`).
  - Mercado inicial: **La Paz y El Alto**.
  - No desarrollar la app completa antes de validar ventas.
- **Fase actual:** Fase 0 — Validación.
- **Siguiente paso:** `ZV-001` matriz de competencia y `ZV-002` precios de los top 20.
