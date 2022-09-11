const password = prompt("Introduce la contraseña:", "");
// descomenta la primera línea antes de continuar

for (let i = 0; i <= password.length; i++) {
  if (password[i] === "?") {
    console.log("La contraseña contiene ? en el carácter " + (i + 1));
    break;
  }
} 

