const a = [
  "Harry Potter y la piedra filosofal",
  "Harry Potter y la cámara secreta",
  "Harry Potter y el prisionero de Azkaban",
  "Harry Potter y el cáliz de fuego",
  "Harry Potter y la Orden del Fénix",
  "Harry Potter y el misterio del príncipe",
  "Harry Potter y las Reliquias de la Muerte",   
  "Harry Potter y los métodos de racionalidad"
];

const b = [];
const c = [];

for (let i = 0; i < a.length; i++) {
  b.push(a[i].split(" y ")[1]);
}
console.log(b);

a.forEach(function(book){
  c.push(book.split(" y ")[1]);
})
console.log(c);


/* mostrar el array de esta forma:
1. Interacción gravitatoria
2. Fuerza electromagnética
3. Fuerza nuclear fuerte
4. Fuerza nuclear débil
*/

const arr = [
  "Interacción gravitatoria",
  "Fuerza electromagnética",
  "Fuerza nuclear fuerte",
  "Fuerza nuclear débil"
];

arr.forEach(function (element, index) {
  console.log(`${index+1}. ${element}`)
});

/*
Llama al método map() para crear un nuevo array a partir del original, cambiando sólo un elemento: "Anakin Skywalker" por "Darth Vader".
*/

const characters = [
  "Luke Skywalker",
  "Obi-Wan",
  "Chewbacca",
  "Anakin Skywalker",
  "Han Solo",
  "Palpatine"
];

const newCharacters = characters.map(function (character) {
  if (character === "Darth Vader") {
      return "Anakin Skywalker";
  }
      return character;
});

const newCharacters2 = characters.map(function (character) {
	if (character === "Anakin Skywalker"){
      return "Darth Vader";
    } else {
      return character;
    }
});

console.log(newCharacters);