const obj = {
  one: 1,
  two: 2,
  three: { message: "Me encanta JS" }
};

const objСopy = Object.assign({}, obj);
objСopy.three = Object.assign({}, obj.three);

console.log(objСopy);

// { one: 1, two: 2, three: { message: "Me encanta JS" } } 

// ¿la copia está relacionada con el original?
console.log(objСopy === obj); // false

// ¿la propiedad three de la copia está relacionada con la propiedad three del original?
console.log(objСopy.three === obj.three); // false