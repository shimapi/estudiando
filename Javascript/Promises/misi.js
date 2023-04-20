const newPromise = new Promise(function (resolve, reject) {
  reject("Un Mississippi"); // hace que el promise sea rechazado al instante 
});

function firstAction(value) {
  return `${value}, dos Mississippis`;
}

function secondAction(value) {
  return `${value}, tres Mississippis`;
}

function thirdAction(value) {
  console.log(value);
}

newPromise
.then(firstAction)
.then(secondAction)
.catch(thirdAction);

/* la consola registra: "Un Mississippi" --- porque newPromise fue rechazado,
y obtuvimos inmediatamente la llamada catch() */