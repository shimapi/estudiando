const people = [
  "Steven Spielberg",
  "Michael Bay",
  "Robin Spielberg",
  "Sasha Rebecca Spielberg",
  "James Cameron"
];

// Crea un nuevo array vacío en una variable spielbergs
const spielbergs = []

people.forEach(function (element) {
  // Crea la regla lógica de agregar Spielbergs al array
  if (element.includes("Spielberg")) {
    spielbergs.push(element);
  }
});

// Muestra el array spielbergs resultante en la consola.
console.log(spielbergs)


/// OTRO ///

const words = [
  "Baden",
  "aye",
  "go",
  "agar"
];

const reduplications = words.map(function(word){
  return word + "-" + word;
});

console.log(reduplications);