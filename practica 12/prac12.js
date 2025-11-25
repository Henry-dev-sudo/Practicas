const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ========== EJERCICIO 1: SUMA DE NÚMEROS NATURALES ==========

function ejercicio1() {
  rl.question('Ingresa un número N: ', (n) => {
    const num = parseInt(n);
    let suma = 0;
    
    for (let i = 1; i <= num; i++) {
      suma += i;
    }
    
    console.log(`La suma de 1 a ${num} es: ${suma}`);
    rl.close();
  });
}

// ========== EJERCICIO 2: TABLA DE MULTIPLICAR ==========

function ejercicio2() {
  rl.question('Ingresa un número: ', (n) => {
    const num = parseInt(n);
    
    console.log(`\nTabla de multiplicar del ${num}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
    
    rl.close();
  });
}

// ========== EJERCICIO 3: CONTADOR DE PARES E IMPARES ==========

function ejercicio3() {
  let contador = 0;
  let pares = 0;
  let impares = 0;
  
  function pedirNumero() {
    if (contador < 10) {
      rl.question(`Ingresa el número ${contador + 1}: `, (n) => {
        const num = parseInt(n);
        
        if (num % 2 === 0) {
          pares++;
        } else {
          impares++;
        }
        
        contador++;
        pedirNumero();
      });
    } else {
      console.log(`\nPares: ${pares}`);
      console.log(`Impares: ${impares}`);
      rl.close();
    }
  }
  
  pedirNumero();
}

// ========== EJERCICIO 4: CONTADOR REGRESIVO ==========

function ejercicio4() {
  rl.question('Ingresa un número N: ', (n) => {
    const num = parseInt(n);
    
    console.log('\nContador regresivo con FOR:');
    for (let i = num; i >= 1; i--) {
      console.log(i);
    }
    
    console.log('\nContador regresivo con WHILE:');
    let i = num;
    while (i >= 1) {
      console.log(i);
      i--;
    }
    
    rl.close();
  });
}

// ========== EJERCICIO 5: CÁLCULO DE FACTORIAL ==========

function ejercicio5() {
  rl.question('Ingresa un número: ', (n) => {
    const num = parseInt(n);
    let factorial = 1;
    
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    
    console.log(`El factorial de ${num} es: ${factorial}`);
    rl.close();
  });
}

// ========== EJERCICIO 6: SUMAR HASTA QUE SEA NEGATIVO ==========

function ejercicio6() {
  let suma = 0;
  
  function pedirNumero() {
    rl.question('Ingresa un número (negativo para terminar): ', (n) => {
      const num = parseFloat(n);
      
      if (num < 0) {
        console.log(`\nLa suma total es: ${suma}`);
        rl.close();
      } else {
        suma += num;
        pedirNumero();
      }
    });
  }
  
  pedirNumero();
}

// ========== EJERCICIO 7: PROMEDIO CON DO-WHILE ==========

function ejercicio7() {
  let suma = 0;
  let contador = 0;
  
  function pedirCalificacion() {
    rl.question('Ingresa una calificación (negativa para terminar): ', (cal) => {
      const calificacion = parseFloat(cal);
      
      if (calificacion < 0) {
        if (contador > 0) {
          const promedio = suma / contador;
          console.log(`\nPromedio: ${promedio.toFixed(2)}`);
        } else {
          console.log('\nNo se ingresaron calificaciones');
        }
        rl.close();
      } else {
        suma += calificacion;
        contador++;
        pedirCalificacion();
      }
    });
  }
  
  pedirCalificacion();
}

// ========== EJECUTAR EJERCICIO ==========
// Descomenta el ejercicio que quieres ejecutar

ejercicio1();
// ejercicio2();
// ejercicio3();
// ejercicio4();
// ejercicio5();
// ejercicio6();
// ejercicio7();