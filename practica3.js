import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
})

// Ejercicio 1: Perfil Personal
// Crear un objeto que represente tu perfil personal con:
// • Información básica (nombre, edad, carrera)
// • Dirección (objeto anidado)
// • Hobbies (array)
// • Redes sociales (objeto con diferentes plataformas)

// rl.question("De que persona veremos el perfil?: \n", (nombre)=>{
//     rl.question("Ingrese un apellido: \n", (apellido)=>{
//         const perfil = {
//             nombre: nombre +" "+ apellido,
//             edad: 19,
//             carrera: "Ingeniería en desarrollo de software",
//             direccion: {
//                 pais: "El Salvador",
//                 departamento: "Usulutan",
//                 codPostal: 503,
//             },
//             hobbies: ["Videojuegos","Tocar saxofón","Ver series"],
//             redesSociales: {
//                 instagram: "ig_"+nombre,
//                 facebook: nombre +" "+ apellido,
//                 tikTok: nombre+" tik"
//             }
//         } 
//     console.log(`Este es el perfil de ${nombre} ${apellido}: \n`, perfil);
//     rl.close()
//     })
// }) 

// Ejercicio 2: Registro de Calificaciones
// Crear un sistema que maneje:
// • Array de materias con sus calificaciones
// • Método para calcular promedio
// • Método para determinar estado académico

// rl.question("Ingrese la nota de Lenguaje: \n", (nota1) => {
//     rl.question("Ingrese la nota de Matemáticas: \n", (nota2) => {
//         rl.question("Ingrese la nota de Ciencias: \n", (nota3) => {

            
//             const Calificaciones = [
//                 `Lenguaje: ${nota1}`,
//                 `Matemáticas: ${nota2}`,
//                 `Ciencias: ${nota3}`
//             ];

//             console.log(`Calificaciones registradas: \n ${Calificaciones}`);

//             const not1 = Number(nota1);
//             const not2 = Number(nota2);
//             const not3= Number(nota3);
            
//             let promedio = (not1 +  not2 + not3)/3;
//             console.log(`Este es su promedio: ${promedio}`);

//             if (promedio >= 8) {
//             console.log("Tu estado académico es Excelente");
//             } else if (promedio >= 6 && promedio < 8) {
//             console.log("Tu estado académico es Moderado");
//             } else {
//             console.log("Tu estado académico es Deficiente");
//             }



//             rl.close();
//         });
//     });
// });

// Ejercicio 3: Lista de Tareas con entrada de usuario


// Array de tareas
let tareas = [
    { titulo: "Estudiar Matemáticas", descripcion: "Repasar álgebra y geometría", completada: false },
    { titulo: "Hacer ejercicio", descripcion: "Correr 30 minutos", completada: false },
    { titulo: "Leer un libro", descripcion: "Leer 20 páginas de una novela", completada: false }
];


function mostrarTareas() {
    console.log("\nLista de tareas:");
    tareas.forEach((tarea, index) => {
        console.log(`${index + 1}. ${tarea.titulo} - ${tarea.descripcion} - Completada: ${tarea.completada}`);
    });
}


function completarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        console.log(`\n✔ La tarea "${tareas[indice].titulo}" fue marcada como completada.`);
    } else {
        console.log("\n❌ Índice inválido, no existe esa tarea.");
    }
}


mostrarTareas();

rl.question("\nIngrese el número de la tarea que desea marcar como completada: ", (num) => {
    let indice = Number(num) - 1; // Convertimos a índice del array
    completarTarea(indice);
    mostrarTareas();
    rl.close();
});
