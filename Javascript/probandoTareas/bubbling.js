/* script.js */

const parent = document.querySelector("#parent");
const firstChild = document.querySelector("#firstChild");
const secondChild = document.querySelector("#secondChild");
const thirdChild = document.querySelector("#thirdChild");

function callback(evt) {
  evt.stopPropagation();

  // el evento se ha disparado en el elemento
  console.log(evt.currentTarget.getAttribute("id"));
}

parent.addEventListener("click", callback);
firstChild.addEventListener("click", callback);
secondChild.addEventListener("click", callback);
thirdChild.addEventListener("click", callback);


/* script.js */

const credit = document.querySelector("#credit");

credit.addEventListener("click", function(event) {
  console.log("Bueno, lo haré más tarde");
});

credit.addEventListener("click", function(event) {
  console.log("Lo HARÉ mañana");
  event.stopImmediatePropagation();
});

credit.addEventListener("click", function(event) {
  console.log("Por qué tengo tanto trabajo acumulado?");
});

/* Al hacer clic en el bloque div se mostrará en la consola:

 Bueno, lo haré más tarde
 Lo HARÉ mañana

*/