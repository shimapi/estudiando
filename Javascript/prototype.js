function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  this.isLiked = false;
}

// agrega la función like() al objeto Song.prototype
Song.prototype.like = function () {
  this.isLiked = !this.isLiked;
};

const song1 = new Song("Chanel", "Frank Ocean");

/* ahora la función like() está otra vez en el prototipo
 y esta disponible en nuevos objetos */

console.log(song1.isLiked); // false
song1.like();
console.log(song1.isLiked); // true

/** otro ejemplo */

function Tweet(text, user) {
  this.text = text;
  this.user = user;
}

Tweet.prototype.post = function () {
  console.log(this.text);
  console.log(this.user);
};
Tweet.prototype.edit = function (text) {
  this.text = text;
};

const tweet1 = new Tweet(
  "El cambio comienza con nosotros como personas. Si una persona se vuelve más compasiva, influirá en los demás y así cambiaremos el mundo",
  "Dalai Lama"
);

tweet1.post();

/*
  "El cambio comienza con nosotros como personas. Si una persona se vuelve más compasiva, influirá en los demás y así cambiaremos el mundo."
  "Dalai Lama"
*/

tweet1.edit("No importa");
tweet1.post();

/*
  "No importa"
  "Dalai Lama"
*/
