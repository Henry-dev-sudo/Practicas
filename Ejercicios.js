import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// rl.question("Ingrese el primer precio: ", (precio1) => {
//     rl.question("Ingrese el segundo precio: ", (precio2) => {
//         rl.question("Ingrese el tercer precio: ", (precio3) => {
            
//             // Convertimos a número usando parseFloat
//             const num1 = parseFloat(precio1);
//             const num2 = parseFloat(precio2);
//             const num3 = parseFloat(precio3);

//             console.log("\nPrecios convertidos a número:");
//             console.log(`Precio 1: ${num1}`);
//             console.log(`Precio 2: ${num2}`);
//             console.log(`Precio 3: ${num3}`);

//             //calculamos la suma total
//             const sumaTotal= num1+num2+num3;
//             console.log(`Esta es la suma total de su productos: ${sumaTotal}`)

//             //Resultado con dos decimales
//             console.log(`total con solo dos decimales: ${sumaTotal.toFixed(2)}`)
//             rl.close();
//         });
//     });
// });

// rl.question("Ingrese una serie de numeros separados por espacios: ", (numeros) => {
//     const separados = numeros.split(" ");
//     const Num = separados.map(num => Number(num));

//     console.log(separados);
//     console.log(Num);

//     console.log(`Este es el valor máximo: ${Math.max(...Num)}`);
//     console.log(`Este es el valor mínimo: ${Math.min(...Num)}`);

//     // Calculamos el promedio
//     const suma = Num.reduce((acc, val) => acc + val, 0);
//     const promedio = suma / Num.length;

//     console.log(`Este es el promedio: ${promedio.toPrecision(3)}`);
// });

//Ejericio 3


// Generar base entre 2 y 10
let base = Math.floor(Math.random() * 9) + 2; 

// Generar exponente entre 1 y 5
let exponente = Math.floor(Math.random() * 5) + 1; 

let resultadoCorrecto = Math.pow(base, exponente);

console.log(`\nJuego de Potencias Aleatorias`);
console.log(`La base es: ${base}`);
console.log(`El exponente es: ${exponente}`);

rl.question("¿Cuál es el resultado de la potencia?: ", (respuesta) => {
  let respuestaUsuario = parseInt(respuesta);

  if (respuestaUsuario === resultadoCorrecto) {
    console.log("✅ ¡Correcto!");
    console.log(" ¡Felicidades Has Ganado!");
  } else {
    console.log("❌ Incorrecto.");
    console.log(`La respuesta correcta era: ${resultadoCorrecto}`);
    console.log(`Diferencia absoluta: ${Math.abs(respuestaUsuario - resultadoCorrecto)}`);
  }

  rl.close();
});