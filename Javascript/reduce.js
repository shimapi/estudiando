const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = arr.reduce(function (previousValue, item) {
  console.log('item '+ item); 
  console.log('previousValue ' + previousValue); 
    return previousValue + item;
});

console.log(sum); 


//
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum2 = arr2.reduce(function (previousValue, item) {
  // para mayor claridad, registra estos argumentos en la consola
  console.log(`previousValue: ${previousValue}, item: ${item}`);
  return previousValue + item;
});

console.log(`sum: ${sum2}`);

/*
 previousValue: 1, item: 2
 previousValue: 3, item: 3
 previousValue: 6, item: 4
 previousValue: 10, item: 5
 previousValue: 15, item: 6
 previousValue: 21, item: 7
 previousValue: 28, item: 8
 previousValue: 36, item: 9
 sum: 45
*/


/* Crea un array para registrar las ganancias y pérdidas de un jugador.  */ 
const winsAndLosses = [190, 117, -381, -394, -36, 137, -473, 372, -383];

/* Calculemos cuánto dinero le quedará al jugador al final de la noche si empezó con 1.000 dólares.*/ 
const total = winsAndLosses.reduce(function (previousValue, item) {
    return previousValue + item;
}, 1000); // El valor inicial que se quiere establecer se pasa a través del método reduce() como segundo argumento.

console.log(total); // 149. ¿Qué esperabas? Así son los juegos de azar.


const total2 = 1000 + winsAndLosses.reduce(function (previousValue, item) {
  return previousValue + item;
});

console.log(total2); // 149



//
const order = ["manzana", "banana", "naranja", "banana", "manzana", "banana"];

const result = order.reduce(function (prevVal, item) {
    if (!prevVal[item]) {
        // si un objeto no tiene todavía una clave, significa que no se ha repetido antes
        prevVal[item] = 1;
    } else {
        // incrementa en 1 el número de repeticiones
        prevVal[item] += 1;
    }

    // y devuelve el objeto modificado
    return prevVal;
}, {}); // El valor inicial es un objeto vacío. Esto no funcionaría sin el segundo argumento.


console.log(result); // { apple: 2, banana: 3, orange: 1 }