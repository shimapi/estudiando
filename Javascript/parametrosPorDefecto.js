//Parámetros por defecto
//Cuando declaras una función, estableces sus parámetros. Cuando llamas a la función, le pasas ciertos argumentos. Sin embargo, puede haber casos en los que se omita uno de los argumentos en la llamada de la función. Esto, a menudo, puede conducir a errores o resultados inesperados. Para evitar este tipo de situaciones, los desarrolladores deben tener en cuenta la posibilidad de que falte uno de los argumentos en una función:

function generateName(firstName, lastName, middleName = "<sin segundo nombre>") {
  return `${firstName} ${middleName} ${lastName}`;
}

generateName("Jenny", "Doe"); // Jenny <sin segundo nombre> Doe
generateName("Jenny", "Doe", undefined); // Jenny <sin segundo nombre> Doe
generateName("Jenny", "Doe", null); // Jenny null Doe
generateName("Jenny", "Doe", ""); // Jenny Doe
generateName("Jane", "Doe", "Mary"); // Jane Mary Doe

//El parámetro de una función puede incluso servir como valor para otro parámetro:

const whacAMole = (startScore = 0, endScore = startScore) => {
  for (let i = 0; i <= 10; i += 1) {
      endScore = Math.random() > 0.5 ? endScore + 1 : endScore;
  }

  return endScore;
}
console.log(whacAMole())

function makeBeastArray(a = "Koala", b = "Wómbat", c = "Perezoso") {
  return [a, b, c];
}
console.log(makeBeastArray("lobo","buho"))