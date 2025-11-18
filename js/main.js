// Envíos existentes de ejemplo
const envios = [
  "SGM10001",
  "SGM10002",
  "SGM10003"
];

// Envíos despachados (listos para retirar) de ejemplo
const despachados = [
  "SGM20001",
  "SGM20002"
];

// RASTREAR ENVÍO

function rastrearEnvio() {
  let id = document.getElementById("trackingId").value.trim();
  let res = document.getElementById("resultadoTracking");

  // Consulta si está despachado el envío
  if (despachados.includes(id)) {
    res.style.display = "block";
    res.innerText = "📦 El paquete está despachado ✔ Listo para retirar en el pick up.";
    return;
  }

  // Consulta si el ID existe
  if (envios.includes(id)) {
    res.style.display = "block";
    res.innerText = "🔍 Estado: En camino al destino.";
    return;
  }

  // Si no existe, alert
  alert("❌ Ese envío no existe en el sistema.");
  res.style.display = "none";
}

// CREAR UN ENVÍO

function enviarPaquete() {
  let dir = document.getElementById("direccion").value.trim();
  let nom = document.getElementById("nombre").value.trim();
  let peso = document.getElementById("peso").value;
  let res = document.getElementById("resultadoEnvio");

  if (dir === "" || nom === "" || peso <= 0) {
    res.style.display = "block";
    res.innerText = "⚠️ Completá todos los campos.";
    return;
  }

  // ID único
  let codigo = "SGM" + Math.floor(Math.random() * 90000 + 10000);

  // Se agrega al array de envíos
  envios.push(codigo);

  res.style.display = "block";
  res.innerText = "📦 Envío creado. Código: " + codigo +
                  "\n(Se agregó al sistema correctamente). Dirígete a tu pick up de preferencia con el paquete y presenta el ID otorgado";
}

// CALCULAR COSTO

function calcularCosto() {
  let peso = parseFloat(document.getElementById("pesoCosto").value);
  let destino = document.getElementById("destinoCosto").value;
  let res = document.getElementById("resultadoCosto");

  if (peso <= 0) {
    res.style.display = "block";
    res.innerText = "⚠️ Ingresá un peso válido.";
    return;
  }

  // Costo base Mdeo 150, Interior 250
  let costoBase = destino === "Montevideo" ? 150 : 250;
  let costoFinal = costoBase + (peso * 30);

  res.style.display = "block";
  res.innerText = "💰 Costo estimado: $" + costoFinal.toFixed(2);
}
