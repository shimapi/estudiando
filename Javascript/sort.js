const chessChampions = [
	"Wilhelm Steinitz",
  "Emanuel Lasker",
  "Jose Capablanca",
  "Alexander Alekhine",
  "Machgielis Euwe",
  "Mikhail Botvinnik",
  "Vasily Smyslov",
  "Mikhail Tal",
  "Tigran Petrosian",
  "Boris Spassky",
  "Robert Fischer",
  "Anatoly Karpov",
  "Garry Kasparov",
  "Vladimir Kramnik",
  "Viswanathan Anand",
  "Magnus Carlsen"
];

chessChampions.sort(function (a, b) {
  /* Establece aquí las reglas para ordenar los elementos */
  const aSecondName = a.split(" ")[1].toLowerCase();
  const bSecondName = b.split(" ")[1].toLowerCase();
  console.log(a.split(" ")[1].toLowerCase()); //toma el apellido
  
  if (aSecondName > bSecondName) return 1;
  if (aSecondName < bSecondName) return -1;

  return 0;
});

console.log(chessChampions);

/*
  [ "Alexander Alekhine",
		"Viswanathan Anand"
    "Mikhail Botvinnik",
    "Jose Capablanca",
		"Magnus Carlsen",
    "Max Euwe",
    "Robert Fischer",
    "Anatoly Karpov",
		"Garry Kasparov",
	  "Vladimir Kramnik",
    "Emanuel Lasker",
		"Tigran Petrosian"
		"Vasily Smyslov"
    "Boris Spassky",
    "Wilhelm Steinitz",
    "Mikhail Tal"
   
  ]
*/

const chessChampions2 = [
  ["Alexander Alekhine", 1927],
  ["Alexander Alekhine", 1937],
  ["Viswanathan Anand", 2007],
  ["Mikhail Botvinnik", 1948],
  ["Mikhail Botvinnik", 1958],
  ["Mikhail Botvinnik", 1961],
  ["Magnus Carlsen", 2013],
  ["Max Euwe", 1935],
  ["Robert Fischer", 1972],
	["Jose Raul Capablanca y Graupera", 1921],
  ["Anatoly Karpov", 1975],
  ["Garry Kasparov", 1985],
  ["Vladimir Kramnik", 2006],
  ["Emanuel Lasker", 1894],
  ["Tigran Petrosian", 1963],
  ["Vasily Smyslov", 1957],
  ["Boris Spassky", 1969],
  ["Wilhelm Steinitz", 1886],
  ["Mikhail Tal", 1960]
];

// Escribe tu código aquí
chessChampions2.sort(function(a,b){
  return a[1] - b[1]; //[1] = segundo campo array = fecha
})

console.log(chessChampions2);