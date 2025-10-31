// // ============================================
// // EJERCICIO 1: Declaración y llamada de funciones básicas
// // ============================================

// function formatearSaludo(persona, horaDelDia) {
//   let saludo = "";
  
//   if (persona.edad >= 18) {
//     saludo = "Estimado/a " + persona.nombre;
//   } else {
//     saludo = "Hola " + persona.nombre;
//   }
  
//   if (horaDelDia === "mañana") {
//     saludo = saludo + ", buenos días. ¡Qué tengas un excelente día!";
//   } else if (horaDelDia === "tarde") {
//     saludo = saludo + ", buenas tardes. ¡Espero que tu tarde sea productiva!";
//   } else if (horaDelDia === "noche") {
//     saludo = saludo + ", buenas noches. ¡Que descanses bien!";
//   }
  
//   return saludo;
// }

// function calcularArea(radio) {
//   let area = 3.1416 * radio * radio;
//   return area;
// }

// // Pruebas
// console.log("=== EJERCICIO 1 ===");

// let persona1 = { nombre: "Carlos", edad: 25 };
// let persona2 = { nombre: "Ana", edad: 15 };

// console.log(formatearSaludo(persona1, "mañana"));
// console.log(formatearSaludo(persona2, "tarde"));
// console.log(formatearSaludo(persona1, "noche"));

// console.log("\nÁreas de círculos:");
// console.log("Radio 5: " + calcularArea(5));
// console.log("Radio 10: " + calcularArea(10));
// console.log("Radio 3: " + calcularArea(3));


// // ============================================
// // EJERCICIO 2: Expresiones de función y funciones anónimas
// // ============================================

// // Declaración normal
// function calcularCubo1(numero) {
//   return numero * numero * numero;
// }

// // Función guardada en variable
// let calcularCubo2 = function(numero) {
//   return numero * numero * numero;
// };

// function transformarNumeros(numeros, funcionTransformar) {
//   let nuevosNumeros = [];
  
//   for (let i = 0; i < numeros.length; i++) {
//     let numeroTransformado = funcionTransformar(numeros[i]);
//     nuevosNumeros.push(numeroTransformado);
//   }
  
//   return nuevosNumeros;
// }

// // Pruebas
// console.log("\n=== EJERCICIO 2 ===");

// console.log("Cubo de 3 (forma 1): " + calcularCubo1(3));
// console.log("Cubo de 3 (forma 2): " + calcularCubo2(3));

// let misNumeros = [1, 2, 3, 4, 5];
// console.log("\nArray original: " + misNumeros);

// // Función anónima para elevar al cuadrado
// let alCuadrado = transformarNumeros(misNumeros, function(n) {
//   return n * n;
// });
// console.log("Al cuadrado: " + alCuadrado);

// // Función anónima para multiplicar por 10
// let porDiez = transformarNumeros(misNumeros, function(n) {
//   return n * 10;
// });
// console.log("Multiplicados por 10: " + porDiez);


// // ============================================
// // EJERCICIO 3: Funciones como argumentos
// // ============================================

// function procesarArray(numeros, funcionProcesar) {
//   let resultado = [];
  
//   for (let i = 0; i < numeros.length; i++) {
//     let valorProcesado = funcionProcesar(numeros[i]);
//     resultado.push(valorProcesado);
//   }
  
//   return resultado;
// }

// function duplicar(numero) {
//   return numero * 2;
// }

// function alCuadrado(numero) {
//   return numero * numero;
// }

// function raizCuadrada(numero) {
//   return Math.sqrt(numero);
// }

// function triplicar(numero) {
//   return numero * 3;
// }

// // Pruebas
// console.log("\n=== EJERCICIO 3 ===");

// let datos = [4, 9, 16, 25];
// console.log("Array original: " + datos);

// console.log("Duplicados: " + procesarArray(datos, duplicar));
// console.log("Al cuadrado: " + procesarArray(datos, alCuadrado));
// console.log("Raíz cuadrada: " + procesarArray(datos, raizCuadrada));
// console.log("Triplicados: " + procesarArray(datos, triplicar));


// // ============================================
// // EJERCICIO 4: Recursión
// // ============================================

// // Factorial: 5! = 5 x 4 x 3 x 2 x 1
// function factorial(n) {
//   // Caso base
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   // Caso recursivo
//   return n * factorial(n - 1);
// }

// // Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13...
// function fibonacci(n) {
//   // Casos base
//   if (n === 0) return 0;
//   if (n === 1) return 1;
  
//   // Caso recursivo
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// // Suma de dígitos: 123 = 1 + 2 + 3
// function sumarDigitos(numero) {
//   if (numero < 0) {
//     numero = numero * -1;
//   }
  
//   // Caso base
//   if (numero < 10) {
//     return numero;
//   }
  
//   // Caso recursivo
//   let ultimoDigito = numero % 10;
//   let restoDelNumero = Math.floor(numero / 10);
//   return ultimoDigito + sumarDigitos(restoDelNumero);
// }

// // Pruebas
// console.log("\n=== EJERCICIO 4 ===");

// console.log("FACTORIAL:");
// console.log("factorial(5) = " + factorial(5));
// console.log("factorial(7) = " + factorial(7));

// console.log("\nFIBONACCI:");
// for (let i = 0; i < 10; i++) {
//   console.log("fibonacci(" + i + ") = " + fibonacci(i));
// }

// console.log("\nSUMA DE DÍGITOS:");
// console.log("sumarDigitos(123) = " + sumarDigitos(123));
// console.log("sumarDigitos(9876) = " + sumarDigitos(9876));


// // ============================================
// // EJERCICIO 5: Scope y Closures
// // ============================================

// function crearContador() {
//   let valor = 0; // Variable privada
  
//   return {
//     incrementar: function() {
//       valor = valor + 1;
//       return valor;
//     },
    
//     decrementar: function() {
//       valor = valor - 1;
//       return valor;
//     },
    
//     obtenerValor: function() {
//       return valor;
//     },
    
//     reiniciar: function() {
//       valor = 0;
//       return valor;
//     }
//   };
// }

// // Pruebas
// console.log("\n=== EJERCICIO 5 ===");

// let contadorA = crearContador();
// let contadorB = crearContador();

// console.log("Contador A - incrementar 3 veces:");
// console.log(contadorA.incrementar());
// console.log(contadorA.incrementar());
// console.log(contadorA.incrementar());

// console.log("\nContador B - incrementar 2 veces:");
// console.log(contadorB.incrementar());
// console.log(contadorB.incrementar());

// console.log("\nValores actuales:");
// console.log("Contador A: " + contadorA.obtenerValor());
// console.log("Contador B: " + contadorB.obtenerValor());

// console.log("\nContador A - decrementar:");
// console.log(contadorA.decrementar());

// console.log("\nContador B - reiniciar:");
// console.log(contadorB.reiniciar());


// ============================================
// EJERCICIO 6: Funciones con parámetros por defecto
// ============================================

function crearPerfil(nombre, edad, ciudad, profesion) {
  // Valores por defecto
  if (edad === undefined) {
    edad = 18;
  }
  if (ciudad === undefined) {
    ciudad = "No especificada";
  }
  if (profesion === undefined) {
    profesion = "Estudiante";
  }
  
  let perfil = {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad,
    profesion: profesion
  };
  
  return perfil;
}

function mostrarPerfil(perfil) {
  let texto = perfil.nombre + ", " + perfil.edad + " años, ";
  texto = texto + "de " + perfil.ciudad + ", " + perfil.profesion;
  return texto;
}

// Pruebas
console.log("\n=== EJERCICIO 6 ===");

console.log("Solo nombre:");
let perfil1 = crearPerfil("María");
console.log(mostrarPerfil(perfil1));

console.log("\nNombre y edad:");
let perfil2 = crearPerfil("Juan", 25);
console.log(mostrarPerfil(perfil2));

console.log("\nNombre, edad y ciudad:");
let perfil3 = crearPerfil("Laura", 30, "Madrid");
console.log(mostrarPerfil(perfil3));

console.log("\nTodos los datos:");
let perfil4 = crearPerfil("Pedro", 28, "Barcelona", "Ingeniero");
console.log(mostrarPerfil(perfil4));

console.log("\nSaltando edad (undefined):");
let perfil5 = crearPerfil("Ana", undefined, "Valencia");
console.log(mostrarPerfil(perfil5));