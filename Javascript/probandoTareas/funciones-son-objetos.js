function counter() {
  /* si esta propiedad aun no existe, significa que es la primera llamada la que la creará */
  if (!counter.times) {
    counter.times = 0;
  }

  counter.times += 1; // aumenta en 1
  
  // añade el código para devolver el número de llamadas a la función
  return counter.times;
}

counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4
counter(); // 5