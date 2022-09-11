function checkTheCar (distance, model, damaged, price) {
  const canBuy = distance <= 100000 && (model === "Ford" || model === "Chevrolet") && !damaged && price <= 10000;
  return canBuy;
}

checkTheCar(50000, "Chevrolet", false, 7000); // Verdadero - ¡hurra! Funciona.
console.log(checkTheCar(50000, "Chevrolet", false, 7000))


// primero, crearemos un array vacío para almacenar todos los coches que se pueden comprar
let myFutureGarage = [];

// después, escribiremos una función para agregar buenos coches que puedan ser candidatos en el array
function addToMyGarage (carDistance, carModel, carDamaged, carPrice) {
  // almacenaremos todas las características del coche en un nuevo objeto "coche"
  const car = {
    distance: carDistance,
    model: carModel,
    damaged: carDamaged,
    price: carPrice
  }
  // y luego agregar el objeto al array
  myFutureGarage.push(car);
}

// aquí viene la parte interesante
//en este caso, addToMyGarage() no se ejecutará, 
// porque checkTheCar() se evalúa como falso
checkTheCar(120000, "Tesla", true, 30000) && 
addToMyGarage (120000, "Tesla", true, 30000)

// y aquí, lo hará
checkTheCar(50000, "Chevrolet", false, 7000) && 
addToMyGarage (50000, "Chevrolet", false, 7000) 