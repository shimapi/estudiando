/* este código encontrará el primer elemento del DOM
 que corresponda a un elemento <img> en la página */ 

 let imageOnPage = document.querySelector("img");

 console.log(imageOnPage.getAttribute("src")); // esto devolverá el enlace especificado como valor del atributo src de la primera imagen de la página encontrada por el método querySelector()

// busca el botón por su ID y almacénalo en la variable bigAndRed
let bigAndRed = document.querySelector("#big-red-button");

console.log(bigAndRed);

// inspeccionar el elemento botón mediante el método getAttribute()
console.log(bigAndRed.getAttribute("lang")); // null
console.log(bigAndRed.getAttribute("a non-existent attribute")); // null
console.log(bigAndRed.getAttribute("disabled")); // ''


const box = null;

if (typeof box === 'object' && box !== null && 'getAttribute' in box) {
  console.log(box.getAttribute('data-test'));
}


/* script.js */
let cat = document.querySelector("#cat");
console.log(cat.catName); // undefined
console.log(cat.getAttribute("catName")); // Garfield