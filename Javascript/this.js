function like() {
  this.isLiked = !this.isLiked;
}

function createSong(title, artist) {
  const newSong = {
    title,
    artist,
    isLiked: false,
    like: like
  }

  return newSong;
}

const song1 = createSong("Chanel", "Frank Ocean");

song1.like(); // llamaremos a la función like() en song1

console.log(song1.isLiked); // true — ¡funcionó!

console.log(song1.like === song1.like)