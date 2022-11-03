// si el usuario pulsa la tecla, disparará una vez
document.addEventListener("keypress", function() {
	console.log("Has pulsado la tecla");
});

// mientras la tecla esté presionada, se disparará muchas veces
document.addEventListener("keydown", function() {
	console.log("Estás pulsando la tecla");
});

// cuando el usuario deja de pulsar la tecla, se dispara una única vez
document.addEventListener("keyup", function() {
	console.log("Has soltado la tecla");
});