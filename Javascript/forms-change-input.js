const checkbox = document.querySelector("input[type=checkbox]");

function callback(evt) {
  // la propiedad evt contiene el tipo de evento
  console.log(`The ${evt.type} event has occured`);
}

checkbox.addEventListener("input", callback);
// El evento input se ha disparado

checkbox.addEventListener("change", callback);
// El evento change se ha disparado