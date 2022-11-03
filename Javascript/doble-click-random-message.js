const coverHeading = document.querySelector(".cover__heading");
const playListTitles = [
  "Música clásica de ascensor - Volumen IV",
  "Canciones para hacer calceta",
  "Mis canciones de gaita favoritas"
];

function getRandomElement(arr) {
  const randomId = Math.floor(Math.random() * arr.length);
  return arr[randomId];
}

coverHeading.addEventListener("dblclick", function () {
  coverHeading.textContent = getRandomElement(playListTitles);
});