const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ========== SECCIÓN 1: CONDICIONALES BÁSICAS ==========

// Ejercicio 1.1 - Positivo, negativo o cero
function ejercicio1_1() {
  rl.question('Ingresa un número: ', (numero) => {
    const num = parseFloat(numero);
    
    if (num > 0) {
      console.log('El número es positivo');
    } else if (num < 0) {
      console.log('El número es negativo');
    } else {
      console.log('El número es cero');
    }
    
    rl.close();
  });
}

// Ejercicio 1.2 - Clasificación por edad
function ejercicio1_2() {
  rl.question('Ingresa tu edad: ', (edad) => {
    const e = parseInt(edad);
    
    if (e < 18) {
      console.log('Eres menor de edad');
    } else if (e >= 18 && e <= 64) {
      console.log('Eres adulto');
    } else {
      console.log('Eres adulto mayor');
    }
    
    rl.close();
  });
}

// Ejercicio 1.3 - Mayor de tres números
function ejercicio1_3() {
  rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
      rl.question('Ingresa el tercer número: ', (num3) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        const n3 = parseFloat(num3);
        
        if (n1 >= n2 && n1 >= n3) {
          console.log(`El mayor es: ${n1}`);
        } else if (n2 >= n1 && n2 >= n3) {
          console.log(`El mayor es: ${n2}`);
        } else {
          console.log(`El mayor es: ${n3}`);
        }
        
        rl.close();
      });
    });
  });
}

// ========== SECCIÓN 2: CONDICIONALES CON OPERADORES LÓGICOS ==========

// Ejercicio 2.1 - Año bisiesto
function ejercicio2_1() {
  rl.question('Ingresa un año: ', (anio) => {
    const a = parseInt(anio);
    
    if ((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)) {
      console.log(`${a} es un año bisiesto`);
    } else {
      console.log(`${a} no es un año bisiesto`);
    }
    
    rl.close();
  });
}

// Ejercicio 2.2 - Calificación numérica a letra
function ejercicio2_2() {
  rl.question('Ingresa tu calificación (0-100): ', (calificacion) => {
    const c = parseFloat(calificacion);
    
    if (c >= 90 && c <= 100) {
      console.log('Tu calificación es: A');
    } else if (c >= 80 && c < 90) {
      console.log('Tu calificación es: B');
    } else if (c >= 70 && c < 80) {
      console.log('Tu calificación es: C');
    } else if (c >= 60 && c < 70) {
      console.log('Tu calificación es: D');
    } else if (c >= 0 && c < 60) {
      console.log('Tu calificación es: F');
    } else {
      console.log('Calificación inválida');
    }
    
    rl.close();
  });
}

// ========== SECCIÓN 3: SWITCH CASE ==========

// Ejercicio 3.1 - Día de la semana
function ejercicio3_1() {
  rl.question('Ingresa un número del 1 al 7: ', (numero) => {
    const n = parseInt(numero);
    
    switch (n) {
      case 1:
        console.log('Lunes');
        break;
      case 2:
        console.log('Martes');
        break;
      case 3:
        console.log('Miércoles');
        break;
      case 4:
        console.log('Jueves');
        break;
      case 5:
        console.log('Viernes');
        break;
      case 6:
        console.log('Sábado');
        break;
      case 7:
        console.log('Domingo');
        break;
      default:
        console.log('Error: Número fuera de rango');
    }
    
    rl.close();
  });
}

// Ejercicio 3.2 - Mes y días
function ejercicio3_2() {
  rl.question('Ingresa un número del 1 al 12: ', (numero) => {
    const n = parseInt(numero);
    
    switch (n) {
      case 1:
        console.log('Enero - 31 días');
        break;
      case 2:
        console.log('Febrero - 28/29 días');
        break;
      case 3:
        console.log('Marzo - 31 días');
        break;
      case 4:
        console.log('Abril - 30 días');
        break;
      case 5:
        console.log('Mayo - 31 días');
        break;
      case 6:
        console.log('Junio - 30 días');
        break;
      case 7:
        console.log('Julio - 31 días');
        break;
      case 8:
        console.log('Agosto - 31 días');
        break;
      case 9:
        console.log('Septiembre - 30 días');
        break;
      case 10:
        console.log('Octubre - 31 días');
        break;
      case 11:
        console.log('Noviembre - 30 días');
        break;
      case 12:
        console.log('Diciembre - 31 días');
        break;
      default:
        console.log('Error: Número fuera de rango');
    }
    
    rl.close();
  });
}

// Ejercicio 3.3 - Calculadora con switch
function ejercicio3_3() {
  rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
      rl.question('Ingresa la operación (+, -, *, /, %): ', (operacion) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        let resultado;
        
        switch (operacion) {
          case '+':
            resultado = n1 + n2;
            console.log(`Resultado: ${resultado}`);
            break;
          case '-':
            resultado = n1 - n2;
            console.log(`Resultado: ${resultado}`);
            break;
          case '*':
            resultado = n1 * n2;
            console.log(`Resultado: ${resultado}`);
            break;
          case '/':
            if (n2 !== 0) {
              resultado = n1 / n2;
              console.log(`Resultado: ${resultado}`);
            } else {
              console.log('Error: División por cero');
            }
            break;
          case '%':
            resultado = n1 % n2;
            console.log(`Resultado: ${resultado}`);
            break;
          default:
            console.log('Error: Operación no válida');
        }
        
        rl.close();
      });
    });
  });
}

// ========== SECCIÓN 4: OPERADOR TERNARIO ==========

// Ejercicio 4.1 - Par o impar con ternario
function ejercicio4_1() {
  rl.question('Ingresa un número: ', (numero) => {
    const num = parseInt(numero);
    const mensaje = num % 2 === 0 ? 'El número es par' : 'El número es impar';
    console.log(mensaje);
    
    rl.close();
  });
}

// Ejercicio 4.2 - Verificar si puede votar
function ejercicio4_2() {
  function puedeVotar(edad) {
    return edad >= 18 ? 'Puede votar' : 'No puede votar';
  }

  rl.question('Ingresa tu edad: ', (edad) => {
    const e = parseInt(edad);
    console.log(puedeVotar(e));
    
    rl.close();
  });
}

// Ejercicio 4.3 - Descuento por membresía
function ejercicio4_3() {
  function calcularPrecio(precio, esMiembro) {
    return esMiembro ? precio * 0.8 : precio;
  }

  rl.question('Ingresa el precio: ', (precio) => {
    rl.question('¿Es miembro? (si/no): ', (respuesta) => {
      const p = parseFloat(precio);
      const esMiembro = respuesta.toLowerCase() === 'si';
      const precioFinal = calcularPrecio(p, esMiembro);
      
      console.log(`Precio final: $${precioFinal.toFixed(2)}`);
      
      rl.close();
    });
  });
}

// ========== SECCIÓN 5: CONDICIONALES ANIDADAS ==========

// Ejercicio 5.1 - Ordenar tres números
function ejercicio5_1() {
  rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
      rl.question('Ingresa el tercer número: ', (num3) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        const n3 = parseFloat(num3);
        
        let primero, segundo, tercero;
        
        if (n1 >= n2 && n1 >= n3) {
          primero = n1;
          if (n2 >= n3) {
            segundo = n2;
            tercero = n3;
          } else {
            segundo = n3;
            tercero = n2;
          }
        } else if (n2 >= n1 && n2 >= n3) {
          primero = n2;
          if (n1 >= n3) {
            segundo = n1;
            tercero = n3;
          } else {
            segundo = n3;
            tercero = n1;
          }
        } else {
          primero = n3;
          if (n1 >= n2) {
            segundo = n1;
            tercero = n2;
          } else {
            segundo = n2;
            tercero = n1;
          }
        }
        
        console.log(`Orden de mayor a menor: ${primero}, ${segundo}, ${tercero}`);
        
        rl.close();
      });
    });
  });
}

// Ejercicio 5.2 - Sistema de login
function ejercicio5_2() {
  let intentos = 0;

  function pedirPassword() {
    if (intentos < 3) {
      rl.question('Ingresa la contraseña: ', (password) => {
        if (password === '1234') {
          console.log('Acceso concedido');
          rl.close();
        } else {
          intentos++;
          console.log(`Contraseña incorrecta. Intentos restantes: ${3 - intentos}`);
          if (intentos < 3) {
            pedirPassword();
          } else {
            console.log('Número máximo de intentos alcanzado');
            rl.close();
          }
        }
      });
    }
  }

  rl.question('Ingresa el nombre de usuario: ', (usuario) => {
    if (usuario === 'admin') {
      pedirPassword();
    } else {
      console.log('Usuario no encontrado');
      rl.close();
    }
  });
}

// ========== SECCIÓN 6: EJERCICIOS COMBINADOS ==========

// Ejercicio 6.1 - Sistema bancario
function ejercicio6_1() {
  const cuentas = {
    '1234': { pin: '5678', saldo: 1000 }
  };

  rl.question('Ingresa el número de cuenta (4 dígitos): ', (cuenta) => {
    if (cuentas[cuenta]) {
      rl.question('Ingresa tu PIN (4 dígitos): ', (pin) => {
        if (cuentas[cuenta].pin === pin) {
          rl.question('Ingresa el monto a retirar: ', (monto) => {
            const montoRetiro = parseFloat(monto);
            
            if (montoRetiro <= cuentas[cuenta].saldo) {
              cuentas[cuenta].saldo -= montoRetiro;
              console.log(`Retiro exitoso. Saldo restante: $${cuentas[cuenta].saldo}`);
            } else {
              console.log('Saldo insuficiente');
            }
            
            rl.close();
          });
        } else {
          console.log('PIN incorrecto');
          rl.close();
        }
      });
    } else {
      console.log('Cuenta no encontrada');
      rl.close();
    }
  });
}

// Ejercicio 6.2 - Precio de boleto de cine
function ejercicio6_2() {
  rl.question('Ingresa tu edad: ', (edad) => {
    rl.question('Ingresa el día de la semana (lunes, martes, miercoles, etc.): ', (dia) => {
      const e = parseInt(edad);
      const precioBase = 10;
      let descuento = 0;
      
      if (e < 12 || e > 65) {
        descuento = 0.40;
      }
      
      if (dia.toLowerCase() === 'miercoles') {
        if (0.25 > descuento) {
          descuento = 0.25;
        }
      }
      
      const precioFinal = precioBase - (precioBase * descuento);
      
      console.log(`Precio del boleto: $${precioFinal.toFixed(2)}`);
      if (descuento > 0) {
        console.log(`Descuento aplicado: ${(descuento * 100).toFixed(0)}%`);
      }
      
      rl.close();
    });
  });
}

// ========== EJECUTAR EJERCICIO ==========
// Descomenta el ejercicio que quieres ejecutar

ejercicio1_1();
// ejercicio1_2();
// ejercicio1_3();
// ejercicio2_1();
// ejercicio2_2();
// ejercicio3_1();
// ejercicio3_2();
// ejercicio3_3();
// ejercicio4_1();
// ejercicio4_2();
// ejercicio4_3();
// ejercicio5_1();
// ejercicio5_2();
// ejercicio6_1();
// ejercicio6_2();