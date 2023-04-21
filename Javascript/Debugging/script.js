debugger;
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    debugger;
    if (res.status === 404) {
      return Promise.reject("no existe el ususuusususuario");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

/* debugger;
fetch("https://api.kanye.rest")
  .then((res) => {
    debugger;
    console.log(res.status); // comprueba el estado de la respuesta
    console.log(res.headers.get("Content-Type")); // comprueba Content-Type
    return res.json();
  })
  .then((data) => {
    console.log(data); // ¿Qué ocurre en el cuerpo?
  }); */
