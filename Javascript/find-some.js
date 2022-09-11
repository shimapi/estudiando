const flock = [
  "Oveja",
  "Ovejas blancas y negras",
  "Oveja negra",
  "Oveja azul"
];

const includesSheep = flock.some(function (sheep) {
  return sheep.includes("Oveja");
});

const sheep = flock.find(function (sheep) {
  return sheep.includes("Ovejas");
});

console.log(includesSheep); // true
console.log(sheep); // "Ovejas blancas y negras"


// tienes un array de números
const integersToCheck = [2, 3, 193, 79, 7, 29];

/* termina la función isPrime, que toma un número como argumento y devuelve true sólo si ese número es primo */

function isPrime(num) {
    for (let i = 2; i < num; i += 1) {
    /* en cada iteración, aumentamos "i" en 1 y comprobamos si se convierte en un factor natural para un elemento del array */

        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

/* después de programar la función, utiliza el método
.every() y pásale la función
para comprobar los elementos del array */
integersToCheck.every(isPrime); 
console.log(integersToCheck)
