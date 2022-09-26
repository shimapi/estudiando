// esta es la forma correcta
const colorHex = () => ({ white: "#FFF" });

// esta es la forma incorrecta
const colorHexWhite = () => { white: "#FFF" };

console.log(colorHex());
console.log(colorHexWhite());





// cuando la función arrow tiene varios parámetros, se colocan dentro de paréntesis
const boatDeparture = (eater, food) => {
  console.log(`una ${eater} y una ${food} cruzan el río en una barca`);    
};

boatDeparture("cabra", "col");

// una cabra y una col cruzan el río en una barca

// los paréntesis son opcionales si solo hay un parámetro
const boatArrival = survivor => {
  console.log(`sólo la ${survivor} llegará a la orilla del río`);
}; 

boatArrival("cabra");

// sólo la cabra llegará a la orilla del río



//Funciones arrow como callbacks
//Las funciones arrow se pasan a menudo como callbacks:
const array1 = [1, 2, 3, 4];

array1.forEach(() => {
    console.log("El botón ha sido pulsado");
}); 
//Es conveniente utilizar funciones arrow en los casos en que todo lo que hace el callback es devolver un valor. También permite escribir una sentencia return abreviada:
const array2 = [1, 2, 3, 4];

const newArray = array2.map(elem => elem * 2); 