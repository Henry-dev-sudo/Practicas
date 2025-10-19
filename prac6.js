//**Ejercicio 1*
function crearContador() {
    let contador = 0;
    return function () {
        contador++;
        return contador
    }
}

let contador1 = crearContador();
let contador2 = crearContador();
console.log(contador1());
console.log(`${contador1()} <= constador 1\n`);
console.log(`Hola soy contador2, mi valor es: ${contador2()}`);


//** Ejercicio2 *
function operationFunction(num1, num2, callback) {

    const sombreroSeleccionador = callback();

    if (sombreroSeleccionador < 4) {
        const operacion = num1 + num2;
        console.log(`sombre seleciónador dice: SUMARRR ${num1} + ${num2} = ${operacion}`);
        return operacion;

    } else if (sombreroSeleccionador < 7) {
        const operacion = num1 - num2;
        console.log(`sombre seleciónador dice: RESTARRR ${num1} - ${num2} = ${operacion}`);
        return operacion;

    } else {
        const operacion = num1 * num2;
        console.log(`sombre seleciónador dice: MULTIPLICARRR ${num1} * ${num2} = ${operacion}`);
        return operacion;
    }
}

operationFunction(1, 2, () => {
    const SombreroSeleccionadorFunction = () => Math.ceil(Math.random() * 10),
        sombreroSeleccionador = SombreroSeleccionadorFunction()
    return sombreroSeleccionador
})


//** Ejercicio 3 *
const numeros = [1, 2, 3, 4, 5, 6, 7]

elevadosAlCuadradoFunction = () => {
    const numerosAlCuadrado = numeros.map(num => num ** 2)
    console.log(numerosAlCuadrado);
}
elevadosAlCuadradoFunction()


//** Ejercicio 4 *
const funcionRecursiva = (num) => {
    const sumando = num.pop()
    num[0] = num[0] + sumando
    console.log(num);

    if (num[1]) {
        funcionRecursiva(num)
    }

    return num
}
console.log(`La suma total es de: ${funcionRecursiva(numeros)}`)


//** Ejercicio 5 *
const personas = [
    { nombre: 'Ana', edad: 10 },
    { nombre: 'Luis', edad: 15 },
    { nombre: 'María', edad: 7 },
    { nombre: 'Javier', edad: 5 },
    { nombre: 'Sofía', edad: 19 },
    { nombre: 'Diego', edad: 36 },
    { nombre: 'Elena', edad: 29 },
    { nombre: 'Carlos', edad: 12 },
    { nombre: 'Lucía', edad: 41 },
    { nombre: 'Miguel', edad: 34 }
];

MayorA18 = () => console.log(mayorA18 = personas.find(persona => persona.edad > 18))
MayorA18()