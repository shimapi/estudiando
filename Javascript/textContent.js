//let paragraph = document.getElementById("paragraph");
let paragraph = document.querySelector("#paragraph");


console.log(paragraph.textContent); // "Este es el texto dentro del elemento".
paragraph.textContent = "Y este es el nuevo texto."; // puedes cambiar el contenido del texto de esta manera
console.log(paragraph.textContent); // "Y este es el nuevo texto".



//let paragraph2 = document.getElementById("paragraph2");
let paragraph2 = document.querySelector("#paragraph2");

console.log(paragraph2.textContent);

/*
  Este es el texto dentro del elemento.
  Este es el texto de su elemento hijo.
*/