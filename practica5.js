// =======================
// GESTOR DE TRANSACCIONES
// =======================

// Datos iniciales
let transacciones = [ 
  { id: 1, tipo: "deposito", monto: 1000, fecha: "2024-01-15", categoria: "salario" }, 
  { id: 2, tipo: "retiro", monto: 200, fecha: "2024-01-16", categoria: "compras" }, 
  { id: 3, tipo: "deposito", monto: 500, fecha: "2024-01-17", categoria: "freelance" } 
];

function procesarTransacciones(...nuevasTransacciones) {
  nuevasTransacciones.forEach(tx => {
    // Validación de datos
    if (!tx.id || !tx.tipo || !tx.monto || !tx.fecha || !tx.categoria) {
      console.warn("Transacción inválida:", tx);
      return;
    }

    if (tx.tipo !== "deposito" && tx.tipo !== "retiro") {
      console.warn("Tipo no válido:", tx.tipo);
      return;
    }

    transacciones.push(tx);
  });
}

function calcularBalance() {
  return transacciones.reduce((balance, tx) => {
    return tx.tipo === "deposito" 
      ? balance + tx.monto 
      : balance - tx.monto;
  }, 0);
}

function analizarGastos(periodo = "mes") {
  const gastos = transacciones.filter(tx => tx.tipo === "retiro");
  const agrupados = {};

  gastos.forEach(tx => {
    let clave;

    if (periodo === "mes") {
      clave = tx.fecha.slice(0, 7); 
    } else if (periodo === "dia") {
      clave = tx.fecha; 
    } else {
      console.warn("Periodo no válido. Usa 'mes' o 'dia'.");
      return;
    }

    if (!agrupados[clave]) {
      agrupados[clave] = 0;
    }

    agrupados[clave] += tx.monto;
  });

  return agrupados;
}

function buscarTransacciones(criterios = {}) {
  const {
    tipo,
    categoria,
    fecha,
    montoMin,
    montoMax
  } = criterios;

  return transacciones.filter(tx => {
    return (!tipo || tx.tipo === tipo) &&
           (!categoria || tx.categoria === categoria) &&
           (!fecha || tx.fecha === fecha) &&
           (!montoMin || tx.monto >= montoMin) &&
           (!montoMax || tx.monto <= montoMax);
  });
}

procesarTransacciones(
  { id: 4, tipo: "retiro", monto: 300, fecha: "2024-01-20", categoria: "restaurante" },
  { id: 5, tipo: "deposito", monto: 800, fecha: "2024-02-01", categoria: "salario" }
);

// Calcular balance
console.log("📌 Balance actual:", calcularBalance()); // 1800

// Analizar gastos por mes
console.log("📌 Gastos por mes:", analizarGastos("mes"));

// Buscar por categoría
console.log("📌 Buscar por categoría 'compras':", buscarTransacciones({ categoria: "compras" }));

// Buscar depósitos mayores a 600
console.log("📌 Buscar depósitos > 600:", buscarTransacciones({ tipo: "deposito", montoMin: 600 }));

