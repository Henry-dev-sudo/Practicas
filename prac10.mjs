// ============================================
// EJERCICIO 1: Arrow function filtrarPares
// ============================================

const filtrarPares = (numeros) => {
  let pares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    }
  }
  return pares;
};

// Pruebas
console.log("=== EJERCICIO 1 ===");
let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array original: " + numeros1);
console.log("Números pares: " + filtrarPares(numeros1));


// ============================================
// EJERCICIO 2: Convertir función tradicional a arrow
// ============================================

// Función tradicional (ejemplo)
function sumarTradicional(a, b) {
  return a + b;
}

// Convertida a arrow function
const sumarArrow = (a, b) => {
  return a + b;
};

// Versión más corta de arrow function
const sumarArrowCorta = (a, b) => a + b;

// Pruebas
console.log("\n=== EJERCICIO 2 ===");
console.log("Función tradicional: " + sumarTradicional(5, 3));
console.log("Arrow function: " + sumarArrow(5, 3));
console.log("Arrow corta: " + sumarArrowCorta(5, 3));


// ============================================
// EJERCICIO 3: Arrow function ordenarPorLongitud
// ============================================

const ordenarPorLongitud = (palabras) => {
  let ordenadas = [];
  
  for (let i = 0; i < palabras.length; i++) {
    ordenadas.push(palabras[i]);
  }
  
  // Ordenar por longitud (burbuja simple)
  for (let i = 0; i < ordenadas.length - 1; i++) {
    for (let j = 0; j < ordenadas.length - i - 1; j++) {
      if (ordenadas[j].length > ordenadas[j + 1].length) {
        let temp = ordenadas[j];
        ordenadas[j] = ordenadas[j + 1];
        ordenadas[j + 1] = temp;
      }
    }
  }
  
  return ordenadas;
};

// Pruebas
console.log("\n=== EJERCICIO 3 ===");
let palabras = ["JavaScript", "es", "genial", "y", "poderoso"];
console.log("Original: " + palabras);
console.log("Ordenado: " + ordenarPorLongitud(palabras));


// ============================================
// EJERCICIO 4: IIFE para calcular factorial
// ============================================

const factorial = (function(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado = resultado * i;
  }
  return resultado;
})(5); // Calculamos factorial de 5

// Pruebas
console.log("\n=== EJERCICIO 4 ===");
console.log("Factorial de 5: " + factorial);


// ============================================
// EJERCICIO 5: IIFE con contador privado
// ============================================

const contador = (function() {
  let valor = 0; // Variable privada
  
  return {
    incrementar: function() {
      valor = valor + 1;
      return valor;
    },
    obtenerValor: function() {
      return valor;
    }
  };
})();

// Pruebas
console.log("\n=== EJERCICIO 5 ===");
console.log("Incrementar: " + contador.incrementar());
console.log("Incrementar: " + contador.incrementar());
console.log("Incrementar: " + contador.incrementar());
console.log("Valor actual: " + contador.obtenerValor());


// ============================================
// EJERCICIO 6: IIFE para configuración de aplicación
// ============================================

const configuracion = (function() {
  let config = null;
  
  // Verificar si ya existe configuración
  if (config === null) {
    config = {
      tema: "claro",
      idioma: "español",
      notificaciones: true
    };
    console.log("Configuración inicializada con valores por defecto");
  } else {
    console.log("La configuración ya existe");
  }
  
  return config;
})();

// Pruebas
console.log("\n=== EJERCICIO 6 ===");
console.log("Tema: " + configuracion.tema);
console.log("Idioma: " + configuracion.idioma);
console.log("Notificaciones: " + configuracion.notificaciones);


// ============================================
// EJERCICIO 7: Calculadora avanzada con 3 niveles de scope
// ============================================

function crearCalculadoraAvanzada(operacion) {
  // Nivel 1: Define la operación
  
  return function(primerNumero) {
    // Nivel 2: Define el primer número
    
    return function(segundoNumero) {
      // Nivel 3: Recibe el segundo número y ejecuta
      
      if (operacion === "suma") {
        return primerNumero + segundoNumero;
      } else if (operacion === "resta") {
        return primerNumero - segundoNumero;
      } else if (operacion === "multiplicacion") {
        return primerNumero * segundoNumero;
      } else if (operacion === "division") {
        if (segundoNumero === 0) {
          return "Error: División por cero";
        }
        return primerNumero / segundoNumero;
      } else {
        return "Operación no válida";
      }
    };
  };
}

// Pruebas
console.log("\n=== EJERCICIO 7 ===");

let suma = crearCalculadoraAvanzada("suma");
let sumar10 = suma(10);
console.log("10 + 5 = " + sumar10(5));
console.log("10 + 20 = " + sumar10(20));

let multiplicacion = crearCalculadoraAvanzada("multiplicacion");
let multiplicarPor3 = multiplicacion(3);
console.log("3 × 4 = " + multiplicarPor3(4));
console.log("3 × 7 = " + multiplicarPor3(7));

let division = crearCalculadoraAvanzada("division");
let dividir20 = division(20);
console.log("20 ÷ 4 = " + dividir20(4));
console.log("20 ÷ 0 = " + dividir20(0));


// ============================================
// EJERCICIO 8: Gestor de tareas con funciones anidadas
// ============================================

function crearGestorTareas() {
  let tareas = []; // Array privado de tareas
  let contadorId = 1;
  
  return {
    agregarTarea: function(descripcion) {
      let nuevaTarea = {
        id: contadorId,
        descripcion: descripcion,
        completada: false
      };
      tareas.push(nuevaTarea);
      contadorId = contadorId + 1;
      return "Tarea agregada: " + descripcion;
    },
    
    completarTarea: function(id) {
      for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id === id) {
          tareas[i].completada = true;
          return "Tarea " + id + " completada";
        }
      }
      return "Tarea no encontrada";
    },
    
    listarPendientes: function() {
      let pendientes = [];
      for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].completada === false) {
          pendientes.push(tareas[i]);
        }
      }
      return pendientes;
    },
    
    contarTareas: function() {
      let total = tareas.length;
      let completadas = 0;
      let pendientes = 0;
      
      for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].completada) {
          completadas = completadas + 1;
        } else {
          pendientes = pendientes + 1;
        }
      }
      
      return {
        total: total,
        completadas: completadas,
        pendientes: pendientes
      };
    }
  };
}

// Pruebas
console.log("\n=== EJERCICIO 8 ===");

let gestor = crearGestorTareas();

console.log(gestor.agregarTarea("Estudiar JavaScript"));
console.log(gestor.agregarTarea("Hacer ejercicios"));
console.log(gestor.agregarTarea("Revisar código"));

console.log("\nTareas pendientes:");
let pendientes = gestor.listarPendientes();
for (let i = 0; i < pendientes.length; i++) {
  console.log("- [" + pendientes[i].id + "] " + pendientes[i].descripcion);
}

console.log("\n" + gestor.completarTarea(1));
console.log(gestor.completarTarea(2));

console.log("\nTareas pendientes después de completar:");
pendientes = gestor.listarPendientes();
for (let i = 0; i < pendientes.length; i++) {
  console.log("- [" + pendientes[i].id + "] " + pendientes[i].descripcion);
}

console.log("\nResumen de tareas:");
let resumen = gestor.contarTareas();
console.log("Total: " + resumen.total);
console.log("Completadas: " + resumen.completadas);
console.log("Pendientes: " + resumen.pendientes);