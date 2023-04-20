// crear un promise
const newPromise = new Promise(function(resolve, reject) {
  // determina aleatoriamente si la solicitud ha sido procesada o no
    const numberr = Math.random()
    const rand = Math.round(numberr) > 0.5 ? true : false;

    if (rand) {
        resolve(numberr + " Solicitud OK");
    } else {
        reject(numberr + " Solicitud rechazada");
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


  /**
   * 
   * En resumen, los promises se crean con Promise(), a la que se le pasa un callback. Este callback toma dos funciones que pueden ser invocadas en el cuerpo del callback.
    La primera función que se pasa al callback es resolve(). Cambia el estado del promise a "resolved" (resuelto). El valor pasado a esta función será pasado al método then().
    La segunda función es reject(). Cambia el estado del promise a "rejected" (rechazado). El valor pasado a esta función se pasará al método catch().
    
    En resumen, la sintaxis para crear un promise es la siguiente: primero llama al constructor Promise(), y luego describe la lógica para procesar que se resuelva o que se rechace en los métodos then() y catch(), respectivamente.
   * 
   */