const acrostic = [
  "Give me your patience, sister, while I frame",
  "Exact in capitals your golden name;",
  "Or sue the fair Apollo and he will",
  "Rouse from his heavy slumber and instill",
  "Great love in me for thee and Poesy.",
  "Imagine not that greatest mastery",
  "And kingdom over all the Realms of verse,",
  "Nears more to heaven in aught, than when we nurse",
  "And surety give to love and Brotherhood.",
  " ",
  "Anthropophagi in Othello's mood;",
  "Ulysses storm'd and his enchanted belt",
  "Glow with the Muse, but they are never felt",
  "Unbosom'd so and so eternal made,",
  "Such tender incense in their laurel shade",
  "To all the regent sisters of the Nine",
  "As this poor offering to you, sister mine.",
  " ",
  "Kind sister! aye, this third name says you are;",
  "Enchanted has it been the Lord knows where;",
  "And may it taste to you like good old wine,",
  "Take you to real happiness and give",
  "Sons, daughters and a home like honied hive."
];

/* Declara una variable que devolverá el string final */ 
let georgianaAugustaKeats = "";

for (let i = 0; i < acrostic.length; i += 1) {
  /* agrega cada primer carácter de cada string en el array
  a la variable georgianaAugustaKeats*/
  georgianaAugustaKeats += acrostic[i][0];
  //console.log(acrostic[i][0]);
}
console.log(georgianaAugustaKeats);

let message = "Estoy cansado. Devería aber tomado un expreso antes de esta unidad."; 

if (message.includes("aber")) { 
  console.log("uf… madre mía…");
}

if (message.includes("v")) {
  console.log("¡Dios santo!");
}

"activa el bloqueo de mayúsculas".toLowerCase(); // "activa el bloqueo de mayúsculas" 
"Desactiva el bloqueo de mayúsculas".toUpperCase(); // "DESACTIVA EL BLOQUEO DE MAYÚSCULAS"


/* El indicador de función muestra un cuadro de diálogo,
donde se puede agregar texto. El string introducido
se almacenará en la variable myName*/

const myName = prompt("¿Cómo te llamas?", "");

//console.log("Hola, " /* escribe tu código aquí */);

const inicial = myName.slice(0, 1);
console.log(inicial);

const nombre = myName.slice(1);
console.log(nombre);

console.log("Hola, " + inicial.toUpperCase() + nombre );