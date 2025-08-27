import readline  from 'readline'

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// ejercios 1
// rd.question('What is your name: ',(name)=>{
//     console.log("welcome " + name)
//     rd.close();
// })

// let word = "Hola esto es JavaScritp";
// // toLowerCase
// console.log(word.toLocaleLowerCase());
// console.log(word.toUpperCase());
// console.log(word.trim().split(/\s+/));
// console.log("reverse: "+ word.split("").reverse().join(''));
// console.log(word.replaceAll(" ","").split(','));

// ejercicio 2.
// function contarVocales(cadena) {
//     const vocales = ['a', 'e', 'i', 'o', 'u'];
//     let contador = 0;

//   cadena = cadena.toLowerCase(); // Ignorar mayúsculas

//     for (let letra of cadena) {
//     if (vocales.includes(letra)) {
//     contador++;
//     }
// }
//     return contador;
// }

// rd.question('Ingresa una frase: ', (respuesta) => {
//     const cantidad = contarVocales(respuesta);
//     console.log(`La frase contiene ${cantidad} vocales.`);
//     rd.close();
// })

// Ejercicio3
// function sonAnagramas(palabraA, palabraB) {
//   // Normalizar: convertir a minúsculas y eliminar espacios
//     const normalizar = (str) =>
//     str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');

//     return normalizar(palabraA) === normalizar(palabraB);
// }

// rd.question('Ingresa la primera palabra: ', (palabraA) => {
//     rd.question('Ingresa la segunda palabra: ', (palabraB) => {
//     if (sonAnagramas(palabraA, palabraB)) {
//     console.log('¡Son anagramas!');
//     } else {
//     console.log('No son anagramas.');
//     }
//     rd.close();
//     });
// });

// ejercicio 4

rd.question('Escribe una frase: ', (frase) => {
  // Paso 1: Convertir todo a minúsculas y quitar signos
    const limpio = frase.toLowerCase().replace(/[^\w\s]/g, '');

  // Paso 2: Separar la frase en palabras
    const palabras = limpio.split(' ');

  // Paso 3: Contar cuántas veces aparece cada palabra
    const conteo = {};
    for (let palabra of palabras) {
    if (palabra) {
        conteo[palabra] = (conteo[palabra] || 0) + 1;
    }
}

  // Paso 4: Buscar la palabra con más repeticiones
    let masFrecuente = '';
    let max = 0;
    for (let palabra in conteo) {
    if (conteo[palabra] > max) {
        max = conteo[palabra];
        masFrecuente = palabra;
    }
}

    console.log(`La palabra más frecuente es: "${masFrecuente}"`);
    rd.close();
});

