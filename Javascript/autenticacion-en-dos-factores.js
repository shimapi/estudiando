const form = document.forms.myForm;
const input = form.elements.myInput;

form.addEventListener("input", function (evt) {
  // si se introducen cuatro caracteres
  // se generará el evento submit
  if (input.length === 4) {
   form.submit();
  }
});

form.addEventListener("submit", function (evt) {
  // procesando el evento submit
});