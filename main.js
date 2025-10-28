/* SIMULADOR DE ENVIOS
    Dividimos las zonas en tres según proximidad (suponemos que tenemos una lista de las localidades) donde 1 será la más cercana, 
    3 la más lejana y 4 si es un envio internacional

    Se presentan funciones sueltas sin contexto alguno. La idea es crear un tracking de envios
*/

const envioBasico = 5;
const envioInternacional = 9;
const arrayEnvios = [1, 2, 2, 4, 1, 3, 3, 2, 4];


// Devuelve la cantidad de envios al momento
function cantidadDeEnvios() {
    console.log("Hay una cantidad de " + (arrayEnvios.length) + " envios pendientes");
}

// Devuelve la cantidad de envios internacionales
function enviosInternacionales() {
    let cont = 0;
    for (let i = 0; i < arrayEnvios.length; i++) {
        if (arrayEnvios[i] === 4) {
            cont++;
        }
    }
    console.log("Hay una cantidad de " + cont + " envios internacionales pendientes");
}

// Calcula el costo del envio
function calcularEnvio() {
    const zona = parseInt(prompt("Ingrese el número de su zona (1, 2, 3 o 4):"));
    if (zona < 1 || zona > 4) {
        alert("Zona inválida. Debe ingresar un número entre 1 y 4.");
        return;
    }
    let costoFinal = envioBasico;
    if (zona === 2) {               // Si la zona es 1 se le cobra el basico nada mas
        costoFinal += 3;
    } else if (zona === 3) {
        costoFinal += 5;
    } else if (zona === 4) {
        costoFinal += envioInternacional;
    }
    alert("El costo de envío es de: " + costoFinal);
}

// Busca si existe el tipo de envio ingresado
function existeEnvio() {
  const zona = parseInt(prompt("Ingrese el tipo de envío (1 a 4):"));

  if (zona < 1 || zona > 4 || isNaN(zona)) {
    console.log("Zona inválida. Debe ingresar un número entre 1 y 4.");
    return false;
  }

  const existe = arrayEnvios.includes(zona);
  console.log(`¿Existe algún envío para la zona ${zona}?`);
  return existe;
}