// con return
const firstArr = [0, 1, 2, 3, 4];

const secondArr = firstArr.map(function (item) { // aquí, cada elemento del array firstArr se pasa por la función
    return item * item; // en este caso, vamos a elevar al cuadrado cada elemento
}); 

console.log(secondArr); // [0, 1, 4, 9, 16]




// sin return
const firstArr1 = [0, 1, 2, 3, 4];

const secondArr1 = firstArr1.map(function (item) {
    console.log("Este mensaje se registrará cinco veces");
});

console.log(secondArr1); // [undefined, undefined, undefined, undefined, undefined].




//probando yo misma. hay que ponerle return y hacer que la funcion ejecute alguna operacion, así se llena el nuevo array secondArr2 con ese resultado.
//no se llena con lo que imprimo en consola.
const firstArr2 = [0, 1, 2, 3, 4];

const secondArr2 = firstArr2.map(function (item) {
    console.log("item " + item);
    return "elemento " + item;
});

console.log(secondArr2); // (5) ['elemento 0', 'elemento 1', 'elemento 2', 'elemento 3', 'elemento 4']