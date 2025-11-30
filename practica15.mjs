import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ========== EJERCICIO 1: GESTOR DE BIBLIOTECA PERSONAL ==========

function ejercicio1() {
  let biblioteca = [];
  
  console.log('📚 === GESTOR DE BIBLIOTECA PERSONAL === 📚\n');
  
  mostrarMenu();
  
  function mostrarMenu() {
    console.log('\n═══════════════════════════════════════');
    console.log('1. Agregar libro');
    console.log('2. Buscar libro');
    console.log('3. Listar libros');
    console.log('4. Eliminar libro');
    console.log('5. Estadísticas');
    console.log('6. Salir');
    console.log('═══════════════════════════════════════');
    
    rl.question('\nSelecciona una opción: ', (opcion) => {
      switch (opcion) {
        case '1':
          agregarLibro();
          break;
        case '2':
          buscarLibro();
          break;
        case '3':
          listarLibros();
          break;
        case '4':
          eliminarLibro();
          break;
        case '5':
          mostrarEstadisticas();
          break;
        case '6':
          console.log('\n👋 ¡Hasta luego!');
          rl.close();
          break;
        default:
          console.log('❌ Opción inválida');
          mostrarMenu();
      }
    });
  }
  
  function agregarLibro() {
    rl.question('\nTítulo del libro: ', (titulo) => {
      if (titulo.trim() === '') {
        console.log('❌ El título no puede estar vacío');
        mostrarMenu();
        return;
      }
      
      rl.question('Autor: ', (autor) => {
        rl.question('Año de publicación: ', (anio) => {
          const anioNum = parseInt(anio);
          const anioActual = new Date().getFullYear();
          
          if (isNaN(anioNum) || anioNum < 1000 || anioNum > anioActual) {
            console.log('❌ Año inválido');
            mostrarMenu();
            return;
          }
          
          rl.question('Género: ', (genero) => {
            const libro = {
              titulo: titulo.trim(),
              autor: autor.trim(),
              anio: anioNum,
              genero: genero.trim()
            };
            
            biblioteca.push(libro);
            console.log('✅ Libro agregado exitosamente');
            mostrarMenu();
          });
        });
      });
    });
  }
  
  function buscarLibro() {
    console.log('\n🔍 BUSCAR LIBRO');
    console.log('1. Buscar por título');
    console.log('2. Buscar por autor');
    
    rl.question('\nOpción: ', (opcion) => {
      if (opcion === '1') {
        rl.question('Ingresa el título: ', (titulo) => {
          const resultados = biblioteca.filter(libro => 
            libro.titulo.toLowerCase().includes(titulo.toLowerCase())
          );
          
          mostrarResultadosBusqueda(resultados);
        });
      } else if (opcion === '2') {
        rl.question('Ingresa el autor: ', (autor) => {
          const resultados = biblioteca.filter(libro => 
            libro.autor.toLowerCase().includes(autor.toLowerCase())
          );
          
          mostrarResultadosBusqueda(resultados);
        });
      } else {
        console.log('❌ Opción inválida');
        mostrarMenu();
      }
    });
  }
  
  function mostrarResultadosBusqueda(resultados) {
    if (resultados.length === 0) {
      console.log('❌ No se encontraron libros');
    } else {
      console.log(`\n📖 Se encontraron ${resultados.length} libro(s):\n`);
      resultados.forEach((libro, index) => {
        console.log(`${index + 1}. "${libro.titulo}" por ${libro.autor} (${libro.anio}) - ${libro.genero}`);
      });
    }
    mostrarMenu();
  }
  
  function listarLibros() {
    if (biblioteca.length === 0) {
      console.log('\n❌ No hay libros en la biblioteca');
      mostrarMenu();
      return;
    }
    
    rl.question('\n¿Filtrar por género? (s/n): ', (respuesta) => {
      if (respuesta.toLowerCase() === 's') {
        rl.question('Ingresa el género: ', (genero) => {
          const librosFiltrados = biblioteca.filter(libro => 
            libro.genero.toLowerCase() === genero.toLowerCase()
          );
          
          if (librosFiltrados.length === 0) {
            console.log(`\n❌ No hay libros del género "${genero}"`);
          } else {
            console.log(`\n📚 LIBROS DEL GÉNERO "${genero.toUpperCase()}":\n`);
            librosFiltrados.forEach((libro, index) => {
              console.log(`${index + 1}. "${libro.titulo}" por ${libro.autor} (${libro.anio})`);
            });
          }
          
          mostrarMenu();
        });
      } else {
        console.log('\n📚 TODOS LOS LIBROS:\n');
        biblioteca.forEach((libro, index) => {
          console.log(`${index + 1}. "${libro.titulo}" por ${libro.autor} (${libro.anio}) - ${libro.genero}`);
        });
        mostrarMenu();
      }
    });
  }
  
  function eliminarLibro() {
    if (biblioteca.length === 0) {
      console.log('\n❌ No hay libros para eliminar');
      mostrarMenu();
      return;
    }
    
    rl.question('\nTítulo del libro a eliminar: ', (titulo) => {
      const index = biblioteca.findIndex(libro => 
        libro.titulo.toLowerCase() === titulo.toLowerCase()
      );
      
      if (index === -1) {
        console.log('❌ Libro no encontrado');
      } else {
        const libroEliminado = biblioteca.splice(index, 1)[0];
        console.log(`✅ Libro "${libroEliminado.titulo}" eliminado`);
      }
      
      mostrarMenu();
    });
  }
  
  function mostrarEstadisticas() {
    if (biblioteca.length === 0) {
      console.log('\n❌ No hay libros en la biblioteca');
      mostrarMenu();
      return;
    }
    
    console.log('\n📊 === ESTADÍSTICAS === 📊');
    console.log(`Total de libros: ${biblioteca.length}`);
    
    let libroMasAntiguo = biblioteca[0];
    let libroMasReciente = biblioteca[0];
    
    for (const libro of biblioteca) {
      if (libro.anio < libroMasAntiguo.anio) {
        libroMasAntiguo = libro;
      }
      if (libro.anio > libroMasReciente.anio) {
        libroMasReciente = libro;
      }
    }
    
    console.log(`\nLibro más antiguo: "${libroMasAntiguo.titulo}" (${libroMasAntiguo.anio})`);
    console.log(`Libro más reciente: "${libroMasReciente.titulo}" (${libroMasReciente.anio})`);
    
    const generos = [...new Set(biblioteca.map(libro => libro.genero))];
    console.log(`\nGéneros disponibles (${generos.length}):`);
    generos.forEach(genero => {
      const cantidad = biblioteca.filter(libro => libro.genero === genero).length;
      console.log(`  • ${genero}: ${cantidad} libro(s)`);
    });
    
    mostrarMenu();
  }
}

// ========== EJERCICIO 2: CALCULADORA FINANCIERA AVANZADA ==========

function ejercicio2() {
  console.log('💰 === CALCULADORA FINANCIERA AVANZADA === 💰\n');
  
  mostrarMenu();
  
  function mostrarMenu() {
    console.log('\n═══════════════════════════════════════');
    console.log('1. Calcular interés simple');
    console.log('2. Calcular interés compuesto');
    console.log('3. Tabla de amortización');
    console.log('4. Simulador de ahorro');
    console.log('5. Comparador de escenarios');
    console.log('6. Salir');
    console.log('═══════════════════════════════════════');
    
    rl.question('\nSelecciona una opción: ', (opcion) => {
      switch (opcion) {
        case '1':
          calcularInteresSimple();
          break;
        case '2':
          calcularInteresCompuesto();
          break;
        case '3':
          tablaAmortizacion();
          break;
        case '4':
          simuladorAhorro();
          break;
        case '5':
          comparadorEscenarios();
          break;
        case '6':
          console.log('\n👋 ¡Hasta luego!');
          rl.close();
          break;
        default:
          console.log('❌ Opción inválida');
          mostrarMenu();
      }
    });
  }
  
  function calcularInteresSimple() {
    console.log('\n📈 INTERÉS SIMPLE');
    console.log('Fórmula: I = C × r × t\n');
    
    rl.question('Capital inicial ($): ', (capital) => {
      rl.question('Tasa de interés anual (%): ', (tasa) => {
        rl.question('Tiempo (años): ', (tiempo) => {
          const C = parseFloat(capital);
          const r = parseFloat(tasa) / 100;
          const t = parseFloat(tiempo);
          
          if (C <= 0 || r <= 0 || t <= 0) {
            console.log('❌ Valores inválidos');
            mostrarMenu();
            return;
          }
          
          const interes = C * r * t;
          const montoFinal = C + interes;
          
          console.log('\n💵 RESULTADOS:');
          console.log(`Capital inicial: $${C.toFixed(2)}`);
          console.log(`Interés ganado: $${interes.toFixed(2)}`);
          console.log(`Monto final: $${montoFinal.toFixed(2)}`);
          
          mostrarMenu();
        });
      });
    });
  }
  
  function calcularInteresCompuesto() {
    console.log('\n📊 INTERÉS COMPUESTO');
    console.log('Fórmula: M = C × (1 + r/n)^(n×t)\n');
    
    rl.question('Capital inicial ($): ', (capital) => {
      rl.question('Tasa de interés anual (%): ', (tasa) => {
        rl.question('Períodos de capitalización por año: ', (periodos) => {
          rl.question('Tiempo (años): ', (tiempo) => {
            const C = parseFloat(capital);
            const r = parseFloat(tasa) / 100;
            const n = parseFloat(periodos);
            const t = parseFloat(tiempo);
            
            if (C <= 0 || r <= 0 || n <= 0 || t <= 0) {
              console.log('❌ Valores inválidos');
              mostrarMenu();
              return;
            }
            
            const montoFinal = C * Math.pow(1 + r / n, n * t);
            const interes = montoFinal - C;
            
            console.log('\n💵 RESULTADOS:');
            console.log(`Capital inicial: $${C.toFixed(2)}`);
            console.log(`Interés ganado: $${interes.toFixed(2)}`);
            console.log(`Monto final: $${montoFinal.toFixed(2)}`);
            
            mostrarMenu();
          });
        });
      });
    });
  }
  
  function tablaAmortizacion() {
    console.log('\n📋 TABLA DE AMORTIZACIÓN');
    
    rl.question('Monto del préstamo ($): ', (prestamo) => {
      rl.question('Tasa de interés mensual (%): ', (tasa) => {
        rl.question('Número de cuotas: ', (cuotas) => {
          const P = parseFloat(prestamo);
          const r = parseFloat(tasa) / 100;
          const n = parseInt(cuotas);
          
          if (P <= 0 || r <= 0 || n <= 0) {
            console.log('❌ Valores inválidos');
            mostrarMenu();
            return;
          }
          
          const cuotaMensual = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
          let saldo = P;
          
          console.log('\n📊 TABLA DE AMORTIZACIÓN:');
          console.log(`Cuota mensual: $${cuotaMensual.toFixed(2)}\n`);
          console.log('Mes | Saldo Inicial | Interés | Capital | Saldo Final');
          console.log('─'.repeat(60));
          
          for (let i = 1; i <= n; i++) {
            const interesMes = saldo * r;
            const capitalMes = cuotaMensual - interesMes;
            const saldoFinal = saldo - capitalMes;
            
            console.log(`${i.toString().padStart(3)} | $${saldo.toFixed(2).padStart(12)} | $${interesMes.toFixed(2).padStart(7)} | $${capitalMes.toFixed(2).padStart(7)} | $${saldoFinal.toFixed(2).padStart(11)}`);
            
            saldo = saldoFinal;
          }
          
          mostrarMenu();
        });
      });
    });
  }
  
  function simuladorAhorro() {
    console.log('\n💰 SIMULADOR DE AHORRO');
    
    rl.question('Ahorro mensual ($): ', (ahorro) => {
      rl.question('Tasa de interés anual (%): ', (tasa) => {
        rl.question('Número de meses: ', (meses) => {
          const A = parseFloat(ahorro);
          const r = parseFloat(tasa) / 100 / 12;
          const n = parseInt(meses);
          
          if (A <= 0 || r < 0 || n <= 0) {
            console.log('❌ Valores inválidos');
            mostrarMenu();
            return;
          }
          
          console.log('\n📈 CRECIMIENTO DEL AHORRO:\n');
          console.log('Mes | Depósito | Interés | Total Acumulado');
          console.log('─'.repeat(50));
          
          let totalAcumulado = 0;
          
          for (let i = 1; i <= n; i++) {
            const interesMes = totalAcumulado * r;
            totalAcumulado += A + interesMes;
            
            console.log(`${i.toString().padStart(3)} | $${A.toFixed(2).padStart(8)} | $${interesMes.toFixed(2).padStart(7)} | $${totalAcumulado.toFixed(2).padStart(15)}`);
          }
          
          const totalDepositado = A * n;
          const interesTotal = totalAcumulado - totalDepositado;
          
          console.log('\n💵 RESUMEN:');
          console.log(`Total depositado: $${totalDepositado.toFixed(2)}`);
          console.log(`Intereses ganados: $${interesTotal.toFixed(2)}`);
          console.log(`Total acumulado: $${totalAcumulado.toFixed(2)}`);
          
          mostrarMenu();
        });
      });
    });
  }
  
  function comparadorEscenarios() {
    console.log('\n⚖️  COMPARADOR DE ESCENARIOS');
    console.log('Compararemos: Préstamo vs Ahorro para un mismo monto\n');
    
    rl.question('Monto objetivo ($): ', (monto) => {
      rl.question('Tasa de interés anual préstamo (%): ', (tasaPrestamo) => {
        rl.question('Plazo préstamo (meses): ', (plazoPrestamo) => {
          rl.question('Tasa de interés anual ahorro (%): ', (tasaAhorro) => {
            rl.question('Plazo ahorro (meses): ', (plazoAhorro) => {
              const M = parseFloat(monto);
              const rP = parseFloat(tasaPrestamo) / 100 / 12;
              const nP = parseInt(plazoPrestamo);
              const rA = parseFloat(tasaAhorro) / 100 / 12;
              const nA = parseInt(plazoAhorro);
              
              if (M <= 0 || rP <= 0 || nP <= 0 || rA < 0 || nA <= 0) {
                console.log('❌ Valores inválidos');
                mostrarMenu();
                return;
              }
              
              const cuotaPrestamo = M * (rP * Math.pow(1 + rP, nP)) / (Math.pow(1 + rP, nP) - 1);
              const totalPagadoPrestamo = cuotaPrestamo * nP;
              const interesPrestamo = totalPagadoPrestamo - M;
              
              const ahorroMensual = M / ((Math.pow(1 + rA, nA) - 1) / rA);
              const totalDepositadoAhorro = ahorroMensual * nA;
              const interesAhorro = M - totalDepositadoAhorro;
              
              console.log('\n📊 COMPARACIÓN:\n');
              console.log('OPCIÓN 1: PRÉSTAMO');
              console.log(`Cuota mensual: $${cuotaPrestamo.toFixed(2)}`);
              console.log(`Total a pagar: $${totalPagadoPrestamo.toFixed(2)}`);
              console.log(`Intereses: $${interesPrestamo.toFixed(2)}`);
              
              console.log('\nOPCIÓN 2: AHORRO');
              console.log(`Ahorro mensual necesario: $${ahorroMensual.toFixed(2)}`);
              console.log(`Total depositado: $${totalDepositadoAhorro.toFixed(2)}`);
              console.log(`Intereses ganados: $${interesAhorro.toFixed(2)}`);
              
              console.log('\n💡 RECOMENDACIÓN:');
              if (cuotaPrestamo < ahorroMensual) {
                console.log('El préstamo tiene cuotas más bajas, pero pagas más en total.');
              } else {
                console.log('El ahorro requiere menos dinero en total y además ganas intereses.');
              }
              
              const diferencia = Math.abs(interesPrestamo - Math.abs(interesAhorro));
              console.log(`Diferencia en intereses: $${diferencia.toFixed(2)}`);
              
              mostrarMenu();
            });
          });
        });
      });
    });
  }
}

// ========== EJECUTAR EJERCICIO ==========
// Descomenta el ejercicio que quieres ejecutar

// ejercicio1();
ejercicio2();