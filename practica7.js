import readline from 'readline'
import { stdin, stdout } from 'process'

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

//**  Ejercicio 1: Crear y llenar un array
// Solicita al usuario la cantidad de elementos y luego los valores uno por uno. Al final
// muestra el array completo por consola.*
// let arreglo = [],
//     cantidad,
//     contador = 0;

// rl.question("Ingrese la cantidad de elementos del array: ", (num) => {
//     cantidad = parseInt(num);

//     const pedirValor = () => {
//         if (contador < cantidad) {
//             rl.question(`Ingrese el valor para la posición ${contador}: `, (valor) => {
//                 arreglo.push(valor);
//                 contador++;
//                 pedirValor();
//             });
//         } else {
//             console.log("El arreglo ingresado es:", arreglo);
//             rl.close();
//         }
//     };

//     pedirValor();
// })

/**  Ejercicio 2: Sumar todos los elementos
Pregunta al usuario los números a guardar en un array. 
Calcula y muestra la suma total usando reduce.*/

// const numeros = [],

//     pedirNumero = () => {
//         rl.question('Ingresa un número o presiona enter para terminar: ', (num) => {
//             if (num == '') {
//                 rl.close()
//                 const total = numeros.reduce((acumulador, currentValue) => {
//                     return acumulador += currentValue;
//                 }, 0);
//                 console.log(`La suma total del array es ${total}`);
                
//             } else if (isNaN(num*1)) {
//                 console.log(`${num} no es no número intente de nuevo `);
//                 pedirNumero();
//             } else {
//                 numeros.push(num*1);
//                 pedirNumero()
//             }
//         })
//     }

// pedirNumero()

/**  Ejercicio 3: Solicita un array de números y un número límite. Crea un algoritmo que cuente cuántos 
valores son mayores al límite usando filter y muestra el resultado.*/
// const numeros = [],
//     pedirNumero = (lim) => {
//         rl.question('Ingresa un número para agregar al array o presiona enter para terminar: ', (num) => {
//             if (num == '') {
//                 rl.close()
//                 const filtrados = numeros.filter(num => num < lim)
//                 console.log(`Los número filtrados son: `, filtrados);

//                 return filtrados
//             } else if (isNaN(num * 1)) {
//                 console.log(`${num} no es no número intente de nuevo `);
//                 pedirNumero(lim);
//             } else {
//                 numeros.push(num * 1);
//                 pedirNumero(lim)
//             }
//         })
//     }

// rl.question('Ingresa el número límite: ', (lim) => {
//     pedirNumero(lim * 1)
// })

// Ejercicio 4: Buscar un elemento 
// Pregunta por varios nombres para formar un array. Permite al usuario buscar si cierto 
// nombre está en el array usando find e informa si existe o no.
// const nombres = [];

// const pedirNombre = () => {
//     rl.question('Ingresa un nombre (o presiona Enter para terminar): ', (nombre) => {
//         if (nombre === '') {
//             // Preguntar qué nombre buscar
//             rl.question('Ingresa el nombre que deseas buscar: ', (buscar) => {
//                 const encontrado = nombres.find(n => n.toLowerCase() === buscar.toLowerCase());
//                 if (encontrado) {
//                     console.log(`${buscar} está en el array.`);
//                 } else {
//                     console.log(`${buscar} NO está en el array.`);
//                 }
//                 rl.close();
//             });
//         } else {
//             nombres.push(nombre);
//             pedirNombre();
//         }
//     });
// };

// pedirNombre();


// Ejercicio 5: Eliminar elementos repetidos 
// Solicita al usuario ingresar varios números (puede haber repetidos). Muestra el array 
// original y luego otro array donde los repetidos fueron eliminados (sólo únicos), 
// empleando filter y indexOf.

const numeros = [];
const pedirNumero = () => {
    rl.question('Ingresa un número (o presiona Enter para terminar): ', (num) => {
        if (num === '') {
            console.log('Array original:', numeros);

            // Eliminar duplicados usando filter e indexOf
            const unicos = numeros.filter((valor, indice) => numeros.indexOf(valor) === indice);
            console.log('Array sin duplicados:', unicos);

            rl.close();
        } else if (isNaN(num)) {
            console.log('Debes ingresar un número válido.');
            pedirNumero();
        } else {
            numeros.push(Number(num));
            pedirNumero();
        }
    });
};

pedirNumero();