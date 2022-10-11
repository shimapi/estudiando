const firstPirate = {
  name: "Jack",
  nickName: "Sparrow",
};

const secondPirate = firstPirate;
secondPirate.rank = "Captain";

console.log(firstPirate);
// { name: "Jack", nickName: "Sparrow", rank: "Captain" }

console.log(secondPirate);
// { name: "Jack", nickName: "Sparrow", rank: "Captain" }

/************************ */

const a = [1,2,3,4,5];
const b = a;

a[0] = 'uno';
console.assert(b[0] === 'uno');
console.log(b[0] === 'uno');



/*
Declara una función llamada copy() que tomará un objeto, lo copiará y devolverá uno nuevo. Este nuevo objeto debe tener el mismo conjunto de métodos y propiedades, pero también debe ser independiente. En otras palabras, cuando se cambie el objeto inicial, el nuevo objeto deberá seguir intacto.

**/

function copy(obj) {
  // primero, tienes que crear un nuevo objeto vacío
  const res = {};

  // luego, añadirle todas las propiedades del objeto inicial
  Object.keys(obj).forEach(function (key) {
    res[key] = obj[key];
  });

  // lo único que quedaría por hacer sería devolver el nuevo objeto, escribe el código necesario a continuación
  return res;
}
  
const firstObj = {
	one: 1,
	two: 2,
	three: 3
};

const secondObj = firstObj;
const thirdObj = copy(firstObj);

console.log(firstObj); // { uno: 1, tres: 3, dos: 2 }
console.log(secondObj); // { uno: 1, tres: 3, dos: 2 }
console.log(thirdObj); // { uno: 1, tres: 3, dos: 2 }

firstObj.four = 4;

console.log(firstObj); // { cuatro: 4, uno: 1, tres: 3, dos: 2 }
console.log(secondObj); // { cuatro: 4, uno: 1, tres: 3, dos: 2 }

// thirdObj no ha cambiado
console.log(thirdObj); // { uno: 1, tres: 3, dos: 2 }



/**
 * 
 */

 const user1 = {
  nickname: "JD1999",
  name: "John",
  surname: "Doe"
};

const user2 = {
  nickname: "JD1999",
  name: "John",
  surname: "Doe"
};

const user3 = user1;

console.log(user1 === user2); // false
console.log(user2 === user3); // false
console.log(user1 === user3); // true

/**
 * Escribe una función llamada isEqual() que comparará dos objetos por sus propiedades. Si los pares clave-valor de ambos objetos coinciden, la función debe devolver true. En caso contrario, debería devolver false.

Puedes obtener un array de claves para cada objeto llamando al método Object.keys(), luego compararás los dos arrays utilizando el método every() y el operador ===.

 */

 function isEqual(firstObj, secondObj) {
  const firstKeys = Object.keys(firstObj);
  const secondKeys = Object.keys(secondObj);

  // comprueba si los objetos tienen el mismo número de claves
  if (firstKeys.length !== secondKeys.length) {
    // si no lo tienen, ya es suficiente. los objetos claramente no son idénticos
    return false;
  }

  /* comprueba si los valores de las claves correspondientes son iguales en los objetos comparados */
    return firstKeys.every(function (key) {
    return firstObj[key] === secondObj[key];
  });
}

const first = {
  property: "valor",
  anotherProperty: "otro valor"
};

const second = {
  property: "valor",
  anotherProperty: "otro valor"
};

const third = {
  property: "valor",
  anotherProperty: "otro valor más"
};

isEqual(first, second); // true
isEqual(second, third); // false