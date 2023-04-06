// crear un promise
const newPromise = new Promise(function(resolve, reject) {
  // determina aleatoriamente si la solicitud ha sido procesada o no
    const rand = Math.random() > 0.5 ? true : false;

    if (rand) {
        resolve("Solicitud procesada satisfactoriamente");
    } else {
        reject("Solicitud rechazada");
    }
});

newPromise
  .then(function (value) { // se ejecuta si promise se ha resuelto

    /* el parámetro value almacena el valor pasado al
    método resolve() al crear el promise, es decir
    el string "Solicitud procesada satisfactoriamente"  */

      console.log(value);
  })
  .catch(function (value) { // se ejecuta si promise ha sido rechazado

    /* en este caso, el parámetro value almacena el valor
    pasado al método reject(), es decir
    el string "Solicitud rechazada" */

      console.log(value + ". Sentimos las molestias.");
  })
  .finally(function () { // se ejecuta en ambos casos
      console.log("Prometemos que recibimos tu solicitud");
  });