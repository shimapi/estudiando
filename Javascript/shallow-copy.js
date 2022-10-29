/* const sourceObj = {
  one: 1,
  two: 2,
  three: { mensaje: "Me encanta JS 🖤" }
};

const copiedObj = Object.assign({}, sourceObj);

console.log(copiedObj === sourceObj); // false
console.log(copiedObj.three === sourceObj.three); // true


------------------- 

function shallowCopy(obj) {
	// tu código
  return Object.assign({}, obj)
  //console.log(obj)
}

const myObj = {
	one: 1,
	two: 2,
	three: 3
};

const myObjCopy = shallowCopy(myObj);

console.log(myObjCopy === myObj); // false
console.log(myObjCopy); // false
console.log(myObj); // false

 */

// Modifica esta función
/* function evolution(obj, key, value) {
  obj[key] = value;
  return obj;
} */
// Modifica esta función
function evolution(obj, key, value) {
  const newObject = Object.assign({}, obj);
  newObject[key] = value;
  return newObject;
}

const fish = {
  eggs: "huevos",
  eyes: 2,
  habitat: "agua"
};

const frog = evolution(fish, "patas", 4);

console.log("rana: ", frog);

// rana: {tipo de huevos: "huevas", ojos: 2, hábitat: "agua", patas: 4}

console.log("pez: ", fish);

// pez: {tipo de huevos: "huevas", ojos: 2, hábitat: "agua", patas: 4}
// ¡Los peces también han evolucionado! ¿¡Qué hemos hecho?!