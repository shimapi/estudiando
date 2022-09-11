// seleccionando el elemento con el nombre de clase "princess"
let rank = document.querySelector(".princess");
console.log(rank.className); // princess

rank.className = "queen"; // Su Majestad ha ascendido al trono, y la Princesa es ahora la Reina, por lo que hemos cambiado el nombre de clase a "queen"
console.log(rank.className); // queen

// seleccionando el elemento con el nombre de clase "queen"
let rank2 = document.querySelector(".queen");

console.log(rank2.className); // her majesty the queen -> nop, imprime queen.

/* Vamos a obtener una lista de los coches de Su Majestad buscando 
el elemento correspondiente mediante el selector .bentley */

let garage = document.querySelector(".bentley");
console.log(`Garaje de Su Majestad: ${garage.classList}`); // Garaje de Su Majestad: bentley rolls-royce


