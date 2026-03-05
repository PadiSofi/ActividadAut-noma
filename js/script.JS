function calcularFactura() {
  const nombre = document.getElementById("nombreCliente").value.trim();
  console.log(nombre);

  const idCliente = document.getElementById("idCliente").value.trim();
  const telefono = document.getElementById("telefonoCliente").value.trim();
  const email = document.getElementById("emailCliente").value.trim();
  const equipos = parseInt(document.getElementById("equipos").value);
  const diasIniciales = parseInt(
    document.getElementById("diasIniciales").value,
  );
  const diasAdicionales = parseInt(
    document.getElementById("diasAdicionales").value,
  );
  const tipo = document.getElementById("tipo").value;

  if (
    !nombre ||
    !idCliente ||
    !telefono ||
    !email ||
    isNaN(equipos) ||
    isNaN(diasIniciales) ||
    isNaN(diasAdicionales)
  ) {
    alert("Por favor, complete todos los campos requeridos.");
    return;
  }

  if (equipos < 2) {
    document.getElementById("resultado").innerHTML =
      "Debe ingresar mínimo 2 equipos.";
    return;
  }

  if (diasIniciales < 1) {
    document.getElementById("resultado").innerHTML =
      "Debe ingresar al menos 1 día inicial.";
    return;
  }

  const valorDia = 35000;
  const diasTotales = diasIniciales + diasAdicionales;

  let subtotal = equipos * diasTotales * valorDia;

  let ajusteTexto = "Sin ajustes";

  if (tipo === "fuera") {
    subtotal *= 1.05;
    ajusteTexto = "Recargo del 5% por servicio fuera de la ciudad";
  } else if (tipo === "local") {
    subtotal *= 0.95;
    ajusteTexto = "Descuento del 5% por uso dentro del establecimiento";
  }

  const total = subtotal;

  const fecha = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Mostrar factura en el modal estilo ticket térmico
  const ticketHTML = `
<h3>═══════════════════════════</h3>
<h3>      ALQUIPC S.A.S      </h3>
<h3>═══════════════════════════</h3>
      FACTURA DE ALQUILER
═══════════════════════════
Fecha: ${fecha}
═══════════════════════════

<strong>DATOS DEL CLIENTE</strong>
---------------------------
Nombre : ${nombre}
ID     : ${idCliente}
Tel    : ${telefono}
Email  : ${email}

<strong>DETALLE DEL SERVICIO</strong>
---------------------------
Equipos         : ${equipos} und
Días iniciales  : ${diasIniciales}
Días adicionales: ${diasAdicionales}
Días totales    : ${diasTotales}
Valor x día     : $${valorDia.toLocaleString()}
Tipo alquiler   : ${tipo}

<strong>CÁLCULO</strong>
---------------------------
Subtotal        : $${(equipos * diasTotales * valorDia).toLocaleString()}
${ajusteTexto}

═══════════════════════════
<strong>TOTAL A PAGAR   : $${total.toLocaleString()}</strong>
═══════════════════════════

   ¡Gracias por su compra!
  www.alquipc.com - Tel: xxx
═══════════════════════════
`;

  document.getElementById("modal-body").innerHTML = ticketHTML;

  // Mostrar el modal
  document.getElementById("modalFactura").classList.add("mostrar");
}

document
  .getElementById("nombreCliente")
  .addEventListener("input", function (e) {
    this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
  });

// document.getElementById('idCliente').addEventListener('input', function (e) {
// this.value = this.value.replace(/[^0-9]/g, '');
// });

document
  .getElementById("telefonoCliente")
  .addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9]/g, "");
  });

console.log(document.getElementById("resultado"));

// Funciones para controlar el modal
function cerrarModal() {
  document.getElementById("modalFactura").classList.remove("mostrar");
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function (event) {
  const modal = document.getElementById("modalFactura");
  if (event.target === modal) {
    cerrarModal();
  }
};

// Cerrar modal con la tecla ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    cerrarModal();
  }
});
