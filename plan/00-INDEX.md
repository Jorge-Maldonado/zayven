# ZAYVEN — Índice maestro del plan (paso a paso)

> Marca tecnológica boliviana: **Productos + Kits + Servicios + E-commerce + IA**.
> Fuente: `Plan de negocios tecnológico.pdf` (98 páginas). Este índice es el punto de entrada: se sigue en orden y cada paso tiene un criterio de finalización.

Leyenda de estado: 🔴 No iniciado · 🟡 En progreso · 🟢 Completado · ⚠ Bloqueado

Etiquetas de datos (regla anti-alucinación): **VERIFICADO** (con fuente y fecha) · **SUPUESTO** (estimación propia) · **ESCENARIO** (proyección) · **NO VERIFICADO** (falta dato)

---

## Documentos

| # | Documento | Para qué sirve |
|---|-----------|----------------|
| 00 | [Índice](00-INDEX.md) | Mapa y orden de ejecución |
| 01 | [Diagnóstico y oportunidad](01-diagnostico-oportunidad.md) | Tendencias tech 2026, contexto Bolivia, por qué electrónica |
| 02 | [Plan de negocio](02-plan-de-negocio.md) | Los 12 capítulos aplicados a la tienda Zayven |
| 03 | [Catálogo 100 SKUs](03-catalogo-100-skus.md) | Productos, stock inicial, precio objetivo, clasificación A/B/C |
| 04 | [Kits](04-kits.md) | Producto estrella: BOM, cliente, dificultad |
| 05 | [Finanzas](05-finanzas.md) | Inversión Bs 10k/30k/50k, márgenes, punto de equilibrio |
| 06 | [Roadmap por fases](06-roadmap-fases.md) | Fase 0 a Fase 12 con objetivo, tareas, entregable y KPI |
| 07 | [Plan de 90 días](07-plan-90-dias.md) | Semana 1 a semana 13 |
| 08 | [Backlog](08-backlog.md) | Tareas con ID, prioridad P0–P3, dependencia y estado |
| 09 | [Reglas y fuentes](09-reglas-y-fuentes.md) | Reglas de capital, inventario, validación y fuentes oficiales |
| 10 | [Prompt maestro](10-prompt-maestro.md) | Prompt para trabajar el proyecto con IA fase por fase |
| 11 | [MCPs y memoria](11-mcps-y-memoria.md) | Cómo alimentar la memoria del proyecto y usar codegraph |
| — | [Bitácora](BITACORA.md) | Registro cronológico de decisiones y avances |

---

## Paso a paso (orden de ejecución)

La regla central del PDF: **no desarrollar primero la app completa**. Primero demostrar que productos, precios, proveedores y clientes funcionan; después automatizar lo que ya vende.

| Paso | Qué hacer | Documento | Criterio de finalización | Estado |
|------|-----------|-----------|--------------------------|--------|
| 1 | Diagnóstico de mercado (competencia, precios, demanda) | 01, 09 | Matriz de 5+ competidores bolivianos con fuente y fecha | 🟡 |
| 2 | Validar catálogo (top 20 productos de prueba) | 03 | 20 SKUs con costo real cotizado y margen ≥ objetivo | 🔴 |
| 3 | Validar proveedores nacionales | 06 (Fase 2) | 2+ proveedores cotizados por categoría | 🔴 |
| 4 | Definir marca (Zayven: nombre, logo, tono) | 06 (Fase 4) | Manual de marca mínimo + cuentas en redes | 🔴 |
| 5 | Formalización (SEPREC, NIT, facturación) | 06 (Fase 1) | Empresa unipersonal inscrita + NIT activo | 🔴 |
| 6 | Comprar primer inventario (lotes pequeños) | 03, 05 | Inventario ≤ Bs 7.000 en top 20 | 🔴 |
| 7 | E-commerce MVP (catálogo + WhatsApp + QR) | 06 (Fase 5) | Tienda publicada con pago QR y pedidos | 🔴 |
| 8 | Lanzamiento | 06 (Fase 8) | Primera campaña publicada | 🔴 |
| 9 | Primeras ventas | 07 | 30 ventas acumuladas | 🔴 |
| 10 | Medir qué funciona | 05, 06 (Fase 9) | Top 20 por rotación y margen identificado | 🔴 |
| 11 | Reposición basada en datos | 03 | Reorden para productos clase A | 🔴 |
| 12 | Kits propios | 04 | 4 kits publicados con guía | 🔴 |
| 13 | B2B (colegios, universidades, técnicos) | 06 (Fase 10) | 3 clientes B2B con cotización | 🔴 |
| 14 | IA (asistente de ventas y reposición) | 06 (Fase 11) | Asistente que recomienda y arma carrito | 🔴 |
| 15 | Importación directa selectiva | 05, 09 | Costo puesto en Bolivia calculado por SKU | 🔴 |
| 16 | Expansión nacional | 06 (Fase 12) | Ventas en Cochabamba y Santa Cruz | 🔴 |

```
PLAN → EJECUCIÓN → VALIDACIÓN → LANZAMIENTO → VENTAS → OPTIMIZACIÓN → ESCALAMIENTO
```

---

## Fase actual

**FASE 0 — Validación** (ver [Roadmap](06-roadmap-fases.md) y [Backlog](08-backlog.md), tareas `ZV-001` a `ZV-010`).

## Cómo mantener vivo este plan

1. Cada avance o decisión se registra en [BITACORA.md](BITACORA.md).
2. Se actualiza el estado en este índice y en el [Backlog](08-backlog.md).
3. Se alimenta la memoria del proyecto (MCP `memory`) siguiendo [11-mcps-y-memoria.md](11-mcps-y-memoria.md).
4. Se actualiza la web (`docs/`) si cambia el estado de fases o del backlog.
