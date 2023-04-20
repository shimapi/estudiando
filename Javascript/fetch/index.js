const songs = [
  {
    title: "ALOHAnet",
    artist: "Palmbomen II"
  },
  {
    title: "The Other Stranger",
    artist: "Doxa Sinistra"
  },
  {
    title: "Ariadna",
    artist: "Kedr Livansky"
  }
];

const songsJSON = JSON.stringify(songs);

console.log(typeof songsJSON); // "string"
console.log(songsJSON); // "string"

const songsObject = JSON.parse(songsJSON);

console.log(typeof songsObject); // "object"
console.log(songsObject); // "object"
console.log(songsObject[0].title); // "ALOHAnet"
console.log(songsObject[2].title); // "Ariadna"