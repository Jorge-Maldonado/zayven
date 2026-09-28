const STATUS = {
  red: ["st-red", "No iniciado"],
  yellow: ["st-yellow", "En progreso"],
  green: ["st-green", "Completado"],
  block: ["st-block", "Bloqueado"],
};

const steps = [
  ["Diagnóstico de mercado", "Matriz de 5+ competidores bolivianos con fuente y fecha", "yellow"],
  ["Validar catálogo (top 20)", "20 SKUs con costo real cotizado y margen ≥ objetivo", "red"],
  ["Validar proveedores nacionales", "2+ proveedores cotizados por categoría", "red"],
  ["Definir marca Zayven", "Manual de marca mínimo + cuentas en redes", "red"],
  ["Formalización (SEPREC, NIT, facturación)", "Empresa unipersonal inscrita + NIT activo", "red"],
  ["Primer inventario en lotes pequeños", "Inventario ≤ Bs 7.000 en top 20", "red"],
  ["E-commerce MVP (catálogo + WhatsApp + QR)", "Tienda publicada con pago QR y pedidos", "red"],
  ["Lanzamiento", "Primera campaña publicada", "red"],
  ["Primeras ventas", "30 ventas acumuladas", "red"],
  ["Medir qué funciona", "Top 20 por rotación y margen identificado", "red"],
  ["Reposición basada en datos", "Reorden para productos clase A", "red"],
  ["Kits propios", "4 kits publicados con guía", "red"],
  ["B2B", "3 clientes B2B con cotización", "red"],
  ["IA (asistente de ventas y reposición)", "Asistente que recomienda y arma carrito", "red"],
  ["Importación directa selectiva", "Costo puesto en Bolivia calculado por SKU", "red"],
  ["Expansión nacional", "Ventas en Cochabamba y Santa Cruz", "red"],
];

const trends = [
  ["🤖 Agentes IA", "Muy alta", "Bajo/Medio", 5],
  ["🧠 IA vertical", "Muy alta", "Bajo/Medio", 5],
  ["🛡 Ciberseguridad + IA", "Muy alta", "Medio", 5],
  ["☁ Cloud / infraestructura IA", "Muy alta", "Alto", 5],
  ["🛒 E-commerce + IA", "Alta", "Bajo/Medio", 4],
  ["💳 Fintech", "Alta", "Medio/Alto", 5],
  ["📊 SaaS empresarial + IA", "Muy alta", "Medio", 5],
  ["🤖 Robótica / Physical AI", "Alta", "Alto", 5],
  ["📱 Apps tradicionales", "Media", "Bajo", 3],
  ["🌐 Desarrollo web tradicional", "Media/Baja", "Bajo", 2],
];

const TOP = new Set([1, 18, 20, 25, 28, 39, 50, 51, 52, 55, 56, 60, 61, 62, 64, 65, 78, 79, 82, 99]);

const catalog = [
  ["🔌 Cables y conectividad", [
    ["Cable USB-C 1m", 10, "20–30", "A"], ["Cable USB-C 2m", 6, "30–40", "A"], ["Cable Lightning 1m", 6, "25–40", "B"],
    ["Cable Micro USB 1m", 5, "15–25", "B"], ["Cable USB-A a USB-C", 8, "20–30", "A"], ["Cable USB-C a USB-C", 8, "25–40", "A"],
    ["Adaptador USB-A → USB-C", 8, "10–20", "A"], ["Adaptador USB-C → USB-A", 8, "15–25", "A"], ["Adaptador USB-C → HDMI", 3, "70–110", "B"],
    ["Hub USB 4 puertos", 5, "50–80", "B"], ["Hub USB-C multipuerto", 3, "100–160", "C"], ["Cable HDMI 1.5m", 6, "30–45", "B"],
    ["Cable HDMI 3m", 3, "50–70", "B"], ["Cable AUX 3.5mm", 5, "15–25", "B"], ["Lector USB/SD/microSD", 5, "20–35", "B"],
  ]],
  ["⚡ Cargadores y energía", [
    ["Cargador USB 10W", 5, "30–40", "B"], ["Cargador USB 18W", 6, "40–55", "A"], ["Cargador USB-C PD 20W", 8, "45–65", "A"],
    ["Cargador USB-C PD 25W", 5, "55–75", "A"], ["Cargador USB-C PD 33W", 5, "65–90", "A"], ["Cargador USB-C PD 45W", 3, "90–130", "B"],
    ["Cargador doble USB", 5, "35–50", "B"], ["Cargador automóvil USB-C", 5, "35–55", "B"], ["Cargador automóvil doble", 4, "45–65", "B"],
    ["Power bank 10.000 mAh", 5, "100–140", "A"], ["Power bank 20.000 mAh", 3, "150–210", "B"], ["Power bank compacto", 3, "70–100", "B"],
  ]],
  ["🎧 Audio", [
    ["TWS económico", 6, "70–110", "A"], ["TWS gama media", 4, "120–180", "B"], ["Audífonos Bluetooth deportivos", 4, "80–120", "B"],
    ["Audífonos cableados 3.5mm", 5, "25–40", "B"], ["Parlante Bluetooth mini", 5, "70–100", "B"], ["Parlante Bluetooth mediano", 4, "130–200", "B"],
    ["Parlante portátil potente", 2, "250–400", "C"], ["Micrófono USB", 3, "100–180", "C"], ["Adaptador Bluetooth USB", 5, "25–40", "B"],
    ["Receptor Bluetooth AUX", 5, "30–50", "B"],
  ]],
  ["🖱 PC / oficina / gaming", [
    ["Mouse USB", 6, "35–55", "A"], ["Mouse inalámbrico", 6, "50–80", "A"], ["Mouse gaming básico", 4, "70–110", "B"],
    ["Teclado USB", 5, "60–90", "B"], ["Teclado inalámbrico", 3, "100–150", "B"], ["Combo teclado + mouse", 4, "100–160", "B"],
    ["Pad mouse XL", 5, "40–70", "B"], ["Webcam 1080p", 4, "100–160", "B"], ["Soporte celular escritorio", 5, "25–45", "B"],
    ["Soporte laptop", 4, "70–120", "B"], ["Hub USB para PC", 5, "50–80", "B"], ["Adaptador Wi-Fi USB", 4, "50–80", "B"],
  ]],
  ["🤖 Arduino / ESP32", [
    ["ESP32 30 pines USB-C", 8, "70–90", "A"], ["ESP32 38 pines USB-C", 8, "70–95", "A"], ["ESP32-C3 Super Mini", 6, "55–75", "A"],
    ["ESP32-CAM", 4, "130–180", "C"], ["ESP8266 NodeMCU", 5, "45–65", "B"], ["Arduino Uno R3 compatible", 6, "60–80", "A"],
    ["Arduino Nano", 6, "35–50", "A"], ["Arduino Mega 2560", 3, "180–250", "C"], ["Raspberry Pi Pico", 3, "60–90", "C"],
    ["Shield expansión ESP32", 5, "25–40", "B"], ["Protoboard 830 puntos", 10, "12–20", "A"], ["Kit Arduino básico", 4, "120–180", "A"],
  ]],
  ["🌡 Sensores y módulos", [
    ["DHT11", 10, "10–15", "A"], ["DHT22", 6, "25–40", "B"], ["Sensor HC-SR04", 10, "12–20", "A"],
    ["Sensor PIR HC-SR501", 8, "12–20", "A"], ["Sensor IR obstáculo", 8, "8–15", "B"], ["Sensor TCRT5000", 8, "8–15", "B"],
    ["Sensor lluvia", 5, "15–25", "B"], ["Sensor humedad suelo", 6, "15–25", "B"], ["Sensor luz LDR", 6, "8–15", "B"],
    ["Sensor sonido KY-038", 6, "10–18", "B"], ["Sensor presión BMP280", 5, "25–40", "B"], ["DS18B20", 5, "20–35", "B"],
    ["RTC DS3231", 5, "20–35", "B"], ["Encoder rotativo", 5, "10–20", "B"], ["Sensor touch TTP223", 5, "6–12", "B"],
  ]],
  ["⚙ Robótica y actuadores", [
    ["Motor DC 3–6V", 10, "5–8", "B"], ["Motorreductor TT", 10, "8–15", "A"], ["Servomotor SG90", 8, "15–25", "A"],
    ["Servo MG996R", 4, "45–65", "B"], ["Motor paso a paso 28BYJ-48", 5, "20–30", "B"], ["Driver L298N", 6, "18–30", "A"],
    ["Driver TB6612FNG", 3, "35–50", "C"], ["Mini bomba de agua", 5, "35–50", "B"], ["Kit chasis robot 2WD", 4, "60–90", "B"],
    ["Kit chasis robot 4WD", 3, "100–140", "C"],
  ]],
  ["🔧 Herramientas", [
    ["Multímetro DT830D", 5, "40–55", "B"], ["Multímetro básico mejorado", 3, "80–120", "B"], ["Multímetro ANENG", 2, "180–250", "C"],
    ["Cautín 60W", 4, "60–90", "B"], ["Estación soldadura básica", 2, "180–280", "C"], ["Juego destornilladores precisión", 4, "50–80", "B"],
    ["Pinza electrónica", 4, "25–40", "B"], ["Pelacables", 3, "40–70", "B"],
  ]],
  ["🧰 Componentes", [
    ["Kit resistencias surtidas", 5, "30–50", "B"], ["Kit capacitores surtidos", 5, "30–50", "B"], ["Kit LEDs surtidos", 5, "25–40", "B"],
    ["Kit cables Dupont", 8, "20–35", "A"], ["Kit jumpers M-M/M-F/F-F", 8, "20–35", "A"], ["Kit protoboard + componentes", 5, "70–110", "B"],
  ]],
];

const kits = [
  ["Kit IoT ESP32", ["ESP32", "DHT11/DHT22", "HC-SR04", "Protoboard", "Jumpers", "Cable USB-C", "Guía"], "Estudiante / maker", "Inicial–media", "Estación de temperatura y humedad Wi-Fi"],
  ["Kit Smart Home", ["ESP32", "PIR", "Relé 5V", "Sensor puerta", "Fuente 5V", "Protoboard", "Jumpers"], "Profesional / hogar", "Media", "Luz automática y alerta de puerta"],
  ["Kit Robótica", ["Arduino", "L298N", "2 motores TT", "2 ruedas", "Chasis 2WD", "Sensores", "Jumpers"], "Estudiante / colegio", "Media", "Carrito evasor de obstáculos"],
  ["Kit Estudiante", ["Arduino", "Protoboard", "LEDs", "Resistencias", "Jumpers", "Sensores"], "Principiante", "Inicial", "10 prácticas básicas"],
  ["Kit Riego", ["ESP32", "Relé", "Sensor humedad suelo", "Mini bomba", "Fuente"], "Hogar / agro", "Media", "Riego automático"],
  ["Kit Bomba Wi-Fi", ["ESP32", "Relé 5V", "Fuente 5V", "Sensor de nivel"], "Técnico", "Media", "Control de bomba de agua por Wi-Fi"],
];

const invest = [
  ["Inventario inicial", 18000], ["Capital operativo", 4000], ["Marketing", 2500], ["Equipamiento / estantería", 2000],
  ["Web / e-commerce", 1000], ["Empaque", 800], ["Fotografía / contenido", 700], ["Legal / administrativo", 500], ["Otros / imprevistos", 500],
];

const phases = [
  ["0", "Validación", "yellow", "Reducir incertidumbre: demanda, precio, margen, competencia.", "10+ pedidos reales y 15/20 SKUs con margen ≥ objetivo"],
  ["1", "Formalización", "red", "SEPREC, NIT, facturación en línea, cuenta bancaria, QR.", "Primera factura de prueba emitida"],
  ["2", "Proveedores", "red", "Cotizar, comparar MOQ y calidad, pedir muestras, calcular costo real.", "Producto validado y margen mínimo definido"],
  ["3", "Compra inicial", "red", "Primer inventario en lotes pequeños (top 20 → 30–50 SKUs).", "Stock recibido y cargado en sistema"],
  ["4", "Branding", "red", "Logo, paleta, tono, perfiles en redes, dominio.", "Manual de marca + perfiles publicados"],
  ["5", "E-commerce MVP", "red", "Catálogo, carrito, checkout QR/tarjeta/efectivo, admin. BUILD vs BUY.", "Tienda que recibe pedidos y cobra por QR"],
  ["6", "Inventario", "red", "Stock en tiempo real, clasificación A/B/C, reorden.", "Stock sistema = stock físico"],
  ["7", "Marketing", "red", "Contenido educativo en Instagram, TikTok, Facebook, Google, SEO.", "12 piezas publicadas"],
  ["8", "Lanzamiento", "red", "Campaña de lanzamiento y atención por WhatsApp.", "30 ventas acumuladas"],
  ["9", "Optimización", "red", "Decidir con datos: conversión, CAC, ticket, rotación, recompra.", "Top 20 por rotación y margen"],
  ["10", "B2B", "red", "Colegios, universidades, técnicos, integradores.", "3 clientes B2B activos"],
  ["11", "IA", "red", "Asistente de ventas, predicción de demanda, WhatsApp automatizado.", "Asistente en producción con conversión medida"],
  ["12", "Escalamiento", "red", "Importación directa, marketplace, IoT, nuevas ciudades.", "Ventas en Cochabamba y Santa Cruz"],
];

const backlog = [
  ["ZV-001", "Matriz de competencia bolivianos con fuente y fecha", "P0", "—", "red"],
  ["ZV-002", "Relevar precios actuales de los top 20 SKUs", "P0", "—", "red"],
  ["ZV-003", "Estimar TAM/SAM/SOM con fuentes", "P1", "—", "red"],
  ["ZV-004", "Entrevistar 20 estudiantes/técnicos", "P0", "—", "red"],
  ["ZV-005", "Lista de compras 100 SKUs con margen y capital", "P0", "ZV-002", "red"],
  ["ZV-006", "Cotizar top 20 con 2+ proveedores nacionales", "P0", "ZV-002", "red"],
  ["ZV-007", "Catálogo de prueba en WhatsApp/Instagram", "P0", "ZV-002", "red"],
  ["ZV-008", "Verificar requisitos y costo SEPREC", "P1", "—", "red"],
  ["ZV-009", "Verificar DS 5518 y subpartidas", "P1", "—", "red"],
  ["ZV-010", "Decidir capital inicial real", "P0", "ZV-005", "red"],
  ["ZV-011", "Branding Zayven", "P1", "ZV-001", "red"],
  ["ZV-012", "BOM, costo, precio y guía de 4 kits", "P1", "ZV-006", "red"],
  ["ZV-013", "Evaluar BUILD vs BUY del e-commerce", "P1", "—", "red"],
  ["ZV-018", "Formalización: SEPREC + NIT + facturación", "P1", "ZV-008", "red"],
  ["ZV-019", "Compra inicial de inventario (lote 1)", "P0", "ZV-006, ZV-010", "red"],
  ["ZV-020", "Modelo financiero 12 meses / 3 años", "P1", "ZV-005", "red"],
  ["ZV-024", "Asistente IA de ventas", "P3", "ZV-013", "red"],
  ["ZV-025", "Web del plan en GitHub Pages", "P2", "—", "green"],
  ["ZV-026", "MCPs memory + codegraph en el repo", "P2", "—", "green"],
  ["ZV-027", "Activar GitHub Pages (main, /docs)", "P2", "ZV-025", "red"],
  ["ZV-028", "Ejecutar codegraph init en el repo", "P3", "ZV-026", "red"],
];

const $ = (s) => document.querySelector(s);
const badge = (k) => `<span class="st ${STATUS[k][0]}">${STATUS[k][1]}</span>`;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

$("#steps").innerHTML = steps
  .map(([t, c, s]) => `<li><div><h4>${esc(t)}</h4><p>${esc(c)}</p></div>${badge(s)}</li>`)
  .join("");

$("#trends tbody").innerHTML = trends
  .map(([a, t, c, e]) => `<tr><td>${a}</td><td>${t}</td><td>${c}</td><td>${"⭐".repeat(e)}</td></tr>`)
  .join("");

const products = [];
catalog.forEach(([cat, items]) => items.forEach(([name, stock, price, cls]) => {
  const n = products.length + 1;
  products.push({ n, name, cat, stock, price, cls, top: TOP.has(n) });
}));

const catSel = $("#cat");
catalog.forEach(([cat]) => catSel.insertAdjacentHTML("beforeend", `<option>${cat}</option>`));

function renderCatalog() {
  const q = $("#q").value.trim().toLowerCase();
  const c = catSel.value;
  const k = $("#cls").value;
  const onlyTop = $("#top").checked;
  const rows = products.filter((p) =>
    (!q || p.name.toLowerCase().includes(q)) && (!c || p.cat === c) && (!k || p.cls === k) && (!onlyTop || p.top));
  $("#catalog tbody").innerHTML = rows
    .map((p) => `<tr><td>${p.n}</td><td>${esc(p.name)}${p.top ? " ⭐" : ""}</td><td>${p.cat}</td><td>${p.stock}</td><td>${p.price}</td><td><span class="cls cls-${p.cls}">${p.cls}</span></td></tr>`)
    .join("");
  $("#count").textContent = `${rows.length} de ${products.length} productos`;
}
["#q", "#cat", "#cls", "#top"].forEach((s) => $(s).addEventListener("input", renderCatalog));
renderCatalog();

$("#kitsGrid").innerHTML = kits
  .map(([name, bom, client, level, project]) => `
    <div class="card kit">
      <h4>${esc(name)}</h4>
      <p>${esc(project)}</p>
      <ul>${bom.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      <div class="meta"><span>👤 ${esc(client)}</span><span>📶 ${esc(level)}</span></div>
    </div>`)
  .join("");

const totalInvest = invest.reduce((a, [, v]) => a + v, 0);
$("#investBars").innerHTML = invest
  .map(([label, v]) => `
    <div class="bar">
      <div class="bar-label"><span>${label}</span><span>Bs ${v.toLocaleString("es-BO")}</span></div>
      <div class="bar-track"><div class="bar-fill" style="width:${(v / totalInvest) * 100}%"></div></div>
    </div>`)
  .join("");

function calc() {
  const fixed = +$("#fixed").value || 0;
  const margin = (+$("#margin").value || 0) / 100;
  const ticket = +$("#ticket").value || 0;
  if (!margin || !ticket) return;
  const sales = fixed / margin;
  const orders = Math.ceil(sales / ticket);
  $("#outSales").textContent = `Bs ${Math.round(sales).toLocaleString("es-BO")}`;
  $("#outOrders").textContent = orders.toLocaleString("es-BO");
  $("#outDaily").textContent = (orders / 30).toFixed(1);
}
["#fixed", "#margin", "#ticket"].forEach((s) => $(s).addEventListener("input", calc));
calc();

$("#timeline").innerHTML = phases
  .map(([n, name, s, desc, crit]) => `
    <div class="phase">
      <div class="num">FASE ${n}</div>
      <h4>${esc(name)}</h4>
      <p>${esc(desc)}</p>
      ${badge(s)}
      <div class="crit">✔ ${esc(crit)}</div>
    </div>`)
  .join("");

$("#backlogTable tbody").innerHTML = backlog
  .map(([id, t, p, d, s]) => `<tr><td><code>${id}</code></td><td>${esc(t)}</td><td class="prio-${p}">${p}</td><td>${d}</td><td>${badge(s)}</td></tr>`)
  .join("");
