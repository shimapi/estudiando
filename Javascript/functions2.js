function makeHelloWorld() {
  function helloWorld() {
    console.log("¡Hola, Mundo!")
  }
  return helloWorld;
}

const helloWorld = makeHelloWorld();

console.log(helloWorld);
helloWorld(); // "¡Hola, Mundo!"