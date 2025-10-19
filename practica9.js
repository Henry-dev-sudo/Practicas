//ejercicio 1:
function crearContador() {
    let contador = 0; 

    return {
        incrementar() {
            contador++;
        },
        decrementar() {
            contador--;
        },
        obtenerValor() {
            return contador;
        }
    };
}
const contadorA = crearContador();
const contadorB = crearContador();

contadorA.incrementar();
contadorA.incrementar();
contadorB.decrementar();

console.log("Contador A:", contadorA.obtenerValor());
console.log("Contador B:", contadorB.obtenerValor()); 

//ejercicio 2:
function crearPerfil(nombre, edad = 18, ciudad = "No especificada", profesion = "Estudiante") {
    if (!nombre) {
        throw new Error("El nombre es obligatorio");
    }

    return {
        nombre,
        edad,
        ciudad,
        profesion
    };
} 

console.log(crearPerfil('Ander'));

//ejercicio 3:

function promedioRest(...numeros) {
    if (numeros.length === 0) return 0;
    let suma = numeros.reduce((acc, n) => acc + n, 0);
    return suma / numeros.length;
}

function promedioArguments() {
    if (arguments.length === 0) return 0;

    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }

    return suma / arguments.length;
}

console.log("Promedio (Rest Parameters):");
console.log(promedioRest(5, 10, 15));   
console.log(promedioRest(3, 7));        
console.log(promedioRest(1, 2, 3, 4));  

console.log("\nPromedio (arguments):");
console.log(promedioArguments(5, 10, 15)); 
console.log(promedioArguments(3, 7));      
console.log(promedioArguments(1, 2, 3, 4)); 

function mezclar(...arrays) {
    return arrays.flat(); 
}

console.log("\nMezclar arrays:");
console.log(mezclar([1, 2], [3], [4, 5]));
function contarArgumentos() {
    return arguments.length;
}

console.log("\nContar argumentos:");
console.log(contarArgumentos(1, 2, 3));        
console.log(contarArgumentos("a", true, 5, []));  
console.log(contarArgumentos());         