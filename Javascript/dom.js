/* script.js */

// Para seleccionar un elemento por su identificador
let container = document.querySelector("#container");

// Por el nombre de la clase
let content = container.querySelector(".content");

/* Ten en cuenta que aquí estamos buscando un elemento específicamente dentro de otro elemento en lugar de buscarlo en todo el árbol DOM */ 
let contentItems = content.querySelectorAll(".content__item");


let contentItem = content.querySelector(".content__item"); 

console.log(contentItem); // Registrará: <div class="content__item"></div>

console.log(contentItems); /* Registrará todos los elementos con la clase .content__item */