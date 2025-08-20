import readline  from 'readline'

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

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

rd.question("Ingrese una frase o una palabra: ", (word)=>{
    let palabraInvertida = word.split('').reverse().join("");
    console.log(palabraInvertida + " " + word)
    let respuesta; 
    // if(word == palabraInvertida){
    //     respuesta = "es palindromo"
    // }else{
    //     respuesta = "no es palindromo"
    // }
    respuesta = word == palabraInvertida? "es palindromo" : "no es palindromo"
    console.log (word + " :"+ respuesta)
    rd.close();
})