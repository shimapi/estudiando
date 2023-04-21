// escribe tu código aquí
function Tweet(text, user) {
  this.text = text;
  this.user = user;
}

const tweet1 = new Tweet(
  "El cambio comienza con nosotros como personas. Si una persona se vuelve más compasiva, influirá en los demás y así cambiaremos el mundo",
  "Dalai Lama"
);

const tweet2 = new Tweet(
  "Si los bebés recién nacidos pudieran hablar, serían los seres más inteligentes en el planeta Tierra",
  "Jaden Smith"
);

const tweet3 = new Tweet(
  "¡eh, amigos! he decidido que me tomaré un descanso de las redes sociales como por una hora o algo así. gracias por su comprensión",
  "Caucasian James"
);

console.log(tweet1.user); // "Dalai Lama"
console.log(tweet2.user); // "Jaden Smith"
console.log(tweet3.text); // "¡eh, amigos! he decidido que me tomaré un descanso de las redes sociales como por una hora o algo así. gracias por su comprensión"
