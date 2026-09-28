# 06 — Roadmap ejecutable (Fase 0 a Fase 12)

Cada fase: objetivo, tareas en orden, dependencias, costo, tiempo, entregable, KPI y criterio de finalización. **No avanzar sin cumplir el criterio de finalización.** Costos y tiempos: SUPUESTOS.

| Fase | Nombre | Estado | Depende de |
|------|--------|--------|-----------|
| 0 | Validación | 🟡 | — |
| 1 | Formalización | 🔴 | 0 |
| 2 | Proveedores | 🔴 | 0 |
| 3 | Compra inicial | 🔴 | 2 |
| 4 | Branding | 🔴 | 0 |
| 5 | E-commerce MVP | 🔴 | 4 |
| 6 | Inventario | 🔴 | 3, 5 |
| 7 | Marketing | 🔴 | 4 |
| 8 | Lanzamiento | 🔴 | 1, 5, 6, 7 |
| 9 | Optimización | 🔴 | 8 |
| 10 | B2B | 🔴 | 9 |
| 11 | IA | 🔴 | 9 |
| 12 | Escalamiento | 🔴 | 10, 11 |

---

## FASE 0 — Validación 🟡
- **Objetivo:** reducir incertidumbre antes de gastar: demanda, precio, margen, competencia.
- **Tareas:** 1) Matriz de competencia (EPY, JKR, Casatrónica, informales). 2) Relevar precios de los top 20. 3) Encuesta/entrevistas a 20 estudiantes de ingeniería y técnicos. 4) Publicar catálogo de prueba en WhatsApp/Instagram (preventa). 5) Cotizar top 20 con 2 proveedores nacionales.
- **Costo:** Bs 0–500 · **Tiempo:** 2–4 semanas
- **Entregable:** informe de validación con precios verificados (fuente + fecha).
- **KPI:** consultas recibidas, pedidos de preventa, margen calculado.
- **Criterio de finalización:** 10+ pedidos/consultas reales y 15 de 20 SKUs con margen ≥ objetivo.

## FASE 1 — Formalización 🔴
- **Objetivo:** operar legalmente y poder facturar.
- **Tareas:** inscripción empresa unipersonal en SEPREC (Bs 130 según PDF — verificar), NIT, actividad económica, facturación en línea (SIN), cuenta bancaria, QR de cobro.
- **Costo:** ~Bs 500 · **Tiempo:** 2–4 semanas
- **Entregable:** matrícula SEPREC + NIT + facturación activa.
- **Criterio:** primera factura emitida de prueba.

## FASE 2 — Proveedores 🔴
- **Objetivo:** proveedores confiables con costo real.
- **Tareas:** crear lista → solicitar cotizaciones → comparar MOQ → comparar calidad → calcular costo puesto → pedir muestras → validar producto → seleccionar.
- **Entregable:** proveedor seleccionado + cotización + costo real por SKU.
- **Criterio:** producto validado y margen mínimo definido.

## FASE 3 — Compra inicial 🔴
- **Objetivo:** primer inventario en lotes pequeños (top 20 → 30–50 SKUs).
- **Costo:** Bs 7.000 (primer lote) · **Criterio:** stock recibido, revisado y cargado en sistema.

## FASE 4 — Branding 🔴
- **Objetivo:** identidad Zayven.
- **Tareas:** logo, paleta, tono, plantillas de contenido, cuentas en Instagram/TikTok/Facebook/WhatsApp Business, dominio.
- **Criterio:** manual de marca mínimo + perfiles publicados.

## FASE 5 — E-commerce MVP 🔴
- **Cliente:** home, categorías, búsqueda, filtros, producto, variantes, stock, carrito, checkout (QR, tarjeta, efectivo), delivery, estado del pedido, cuenta, historial.
- **Admin:** productos, categorías, inventario, compras, ventas, pedidos, clientes, promociones, reportes, usuarios, roles, proveedores.
- **Stack a evaluar (BUILD vs BUY):** Flutter · Spring Boot/Java · PostgreSQL · Cloud. Para cada componente: construir / comprar / integrar / posponer.
- **Criterio:** tienda publicada que recibe pedidos y cobra por QR.

## FASE 6 — Inventario 🔴
- **Objetivo:** control de stock en tiempo real con clasificación A/B/C y reorden.
- **Criterio:** stock del sistema = stock físico en conteo semanal.

## FASE 7 — Marketing 🔴
- **Canales:** Instagram, TikTok, Facebook, Google, WhatsApp, SEO, contenido educativo.
- **Criterio:** calendario de 4 semanas de contenido y 12 piezas publicadas.

## FASE 8 — Lanzamiento 🔴
- **Criterio:** campaña de lanzamiento activa y primeras 30 ventas.

## FASE 9 — Optimización 🔴
- **Objetivo:** decidir con datos: visitas → carritos → ventas → margen → rotación → recompra.
- **KPIs:** visitas, conversión, ticket promedio, CAC, margen, ROAS, recompra, abandono de carrito, rotación, utilidad.
- **Criterio:** top 20 por rotación y margen; productos sin movimiento liquidados.

## FASE 10 — B2B 🔴
- **Clientes:** colegios, universidades, institutos, empresas, técnicos, instaladores, integradores, constructoras.
- **Oferta:** cotizaciones, facturación, precios por volumen, kits, proyectos, soporte, crédito si es viable.
- **Criterio:** 3 clientes B2B activos.

## FASE 11 — IA 🔴
- **Asistente de ventas:** identifica necesidad, recomienda, consulta stock, sugiere kit, agrega al carrito.
- **IA administrativa:** predicción de demanda, reposición, productos lentos/rentables, anomalías.
- **IA marketing:** descripciones, contenido, campañas, segmentación.
- **WhatsApp:** consultas, cotizaciones, pedidos, pago, delivery, recuperación de carrito, postventa (evaluar API oficial).
- **Criterio:** asistente en producción con tasa de conversión medida.

## FASE 12 — Escalamiento 🔴
- Importación directa selectiva, nuevas categorías, marketplace, soluciones IoT, expansión El Alto → Cochabamba → Santa Cruz → Bolivia → Perú/Chile/Paraguay.
