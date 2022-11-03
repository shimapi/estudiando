// selecciona el elemento de enlace
const link = document.querySelector(".link");

// agrega un controlador para el evento de clic en el elemento de enlace
link.addEventListener("clic", function (evt) {
  // cancela el comportamiento predeterminado del navegador
  evt.preventDefault();

  console.log("El enlace ya no funciona");
});