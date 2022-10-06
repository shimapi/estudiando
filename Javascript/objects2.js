const human = "Finn";
const dog = "Jake";
const princess = "Bubblegum";

function getCartoonName() {
  return "Adventure Time";
}

const cartoon = {
  human: human,
  dog: dog,
  princess: princess,
  getCartoonName: getCartoonName
};

console.log(cartoon);

/*
{
  human: "Finn",
  dog: "Jake",
  princess: "Bubblegum",
  getCartoonName: f getCartoonName()
}
*/

/**--------------------------- **/


//Además, no se puede acceder a las claves de las propiedades escritas así mediante la notación de puntos. Si lo intentamos, nos devolverá un error:
const obj = {
    simpleName: true,
    "Hago lo que quiero": true,
    "¡¡¡123anarquía!!!": true
};

//obj."Hago lo que quiero"; // error
//obj."¡¡¡123anarquía!!!"; // error 

console.log(obj["Hago lo que quiero"]); // true
console.log(obj["¡¡¡123anarquía!!!"]); // true 

/**--------------------------- **/

const obj3 = {
  red: "#f00",
  green: "#0f0",
  blue: "#00f"
};

//const key = prompt("¿rojo, verde o azul?");

console.log(obj3.key); // undefined, porque para acceder a la variable, DEBE ser con []

/**--------------------------- **/

const birthday = {
  amelia: {
      month: "Febrero",
      day: 12
  },
  lana: {
      month: "Julio",
      day: 29
  }
};

console.log(birthday.amelia.month); // "Febrero"

// Ahora vamos a establecer un nuevo mes de nacimiento para Amelia utilizando dos variables "amelia";

let x = "amelia";
let y = "month";

birthday[x][y] = "marzo";

console.log(birthday.amelia.month); // "marzo"