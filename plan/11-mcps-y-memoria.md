# 11 — MCPs y memoria del proyecto

El proyecto usa los mismos dos servidores MCP que ABIMAR, configurados en [`.cursor/mcp.json`](../.cursor/mcp.json):

| MCP | Paquete / comando | Para qué lo usamos en Zayven |
|-----|-------------------|------------------------------|
| **memory** | `npx -y @modelcontextprotocol/server-memory` | Grafo de conocimiento persistente: decisiones, proveedores, competidores, productos, precios verificados, KPIs |
| **codegraph** | `codegraph serve --mcp --path <repo>` | Índice del código (web, e-commerce, scripts) para explorar símbolos y dependencias en una sola consulta |

## memory — dónde se guarda
La memoria del proyecto se escribe en **`.ai/memory.jsonl`** (variable `MEMORY_FILE_PATH`), dentro del repo, así queda versionada en GitHub junto con el plan.

## memory — modelo de entidades
| entityType | Ejemplos | Observaciones típicas |
|------------|----------|-----------------------|
| `proyecto` | Zayven, ABIMAR | Visión, fase actual, capital decidido |
| `fase` | Fase 0 - Validación | Estado, criterio de finalización, fecha |
| `decision` | Arrancar con tienda electrónica | Fecha, motivo, alternativas descartadas |
| `competidor` | EPY Electrónica, JKR, Casatrónica | Ciudad, precios con fecha y fuente |
| `proveedor` | (por definir) | MOQ, precio, calidad, tiempo, contacto |
| `producto` | ESP32 30 pines USB-C | Costo real, precio, margen, rotación, clase A/B/C |
| `kit` | Kit IoT ESP32 | BOM, costo, precio, ventas |
| `fuente` | DS 5518 | Qué dice, fecha de consulta, confianza |
| `kpi` | Ventas mes 1 | Valor, fecha |
| `persona` | Jorge Maldonado | Rol, perfil técnico |

Relaciones (voz activa): `Zayven tiene_fase_actual Fase 0`, `Zayven compite_con EPY`, `Kit IoT ESP32 incluye ESP32 30 pines`, `ESP32 30 pines se_compra_a <proveedor>`, `Decision X basada_en Fuente Y`.

## Rutina para alimentar la memoria (cada sesión)
1. **Al empezar:** leer `plan/00-INDEX.md`, `plan/BITACORA.md` y consultar `memory` (`search_nodes "Zayven"`).
2. **Durante:** cada dato verificado (precio, proveedor, norma) → entidad/observación con fuente y fecha.
3. **Al terminar:**
   - Añadir entrada en `plan/BITACORA.md`.
   - Actualizar estado en `plan/08-backlog.md` y `plan/00-INDEX.md`.
   - `add_observations` en `memory` con lo decidido.
   - Commit + push.

## codegraph — activación
El índice de código ya está creado (tarea `ZV-028`, 2026-09-27). Si hiciera falta recrearlo, desde la raíz del repo:

```powershell
cd C:\zayven\zayven
codegraph init
```

Después, `codegraph_explore` con `projectPath: C:\zayven\zayven` devuelve símbolos, llamadas y radio de impacto. Se vuelve realmente útil cuando empiece el desarrollo del e-commerce (Fase 5).

## Conexiones futuras (siguientes pasos)
- Relacionar productos ↔ proveedores ↔ kits en `memory` a medida que se coticen.
- Conectar el e-commerce (Fase 5) con codegraph para navegar el código.
- Evaluar MCPs adicionales cuando aplique: GitHub (issues como backlog), hojas de cálculo (lista de compras), WhatsApp Business API (Fase 11).
