function consoleKitten() {
  let a = '  Λ _ Λ';
  let b = ' (=චᆽච=)==∫';
  let c = '  ˉ ˉ ˉ ˉ';

  console.log(a); 
  console.log(b); 
  console.log(c);
} 

consoleKitten();


console.log("-----------------");


function keepScore(ours, theirs) {
  // Comprobemos si nuestro equipo ha marcado más goles:
  if (ours > theirs) {
      console.log("We won! 😃 The score was " + ours + "-" + theirs);

      // Si no marcamos más goles que ellos,
      // ¿tal vez anotamos la misma cantidad? Compruébalo:
  } else if (ours === theirs) {
      console.log("It's a draw. 😐 The score was " + ours + "-" + theirs);

      // Si no se cumple ninguna de las dos condiciones anteriores,
      // debe significar que marcamos menos goles :(
  } else {
      console.log("We lost... 😢 The score was " + ours + "-" + theirs);
  }
}
keepScore(21, 8);
// la función keepScore utilizará 10 para nuestra variable,
// y 8 para los suyos. A continuación, realizará todas las comprobaciones y mostrará el resultado:
// "¡Ganamos! 😃  El marcador fue 10-8" 


console.log("-----------------");



function sayHey(name) {
  // El código de cómo se transformarán los datos de entrada
  let greeting = 'Hey ' + name + '!  You are the best!';
  // Devolvamos el resultado

  return greeting;    
}

let siriGreeting = sayHey("Shimi");

console.log(siriGreeting); // "Hey Siri" 

console.log("-----------------");




function isLeapYear(year) {

  if ((year % 400 === 0) || ((year % 4 === 0) && !(year % 100 === 0))) {
      console.log(year + ' es un año bisiesto.');
  } else {
      console.log(year + ' es un año no bisiesto.');
  }
}

isLeapYear(2020)
isLeapYear(2021)
isLeapYear(2022)


console.log("-----------------");

function isLeapYear(year) {

  if ((year % 400 === 0) || ((year % 4 === 0) && !(year % 100 === 0))) {
      return year + ' es un año bisiesto.';
  } else {
      return year + ' es un año no bisiesto.';
  }
}

let checkResult = isLeapYear(2020);

console.log(checkResult);
alert(checkResult);



console.log("-----------------");


