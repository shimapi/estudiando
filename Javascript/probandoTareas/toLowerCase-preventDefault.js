const songsContainer = document.querySelector(".songs-container");
const addButton = document.querySelector(".input__btn_action_add");
const artistInput = document.querySelector(".input__text_type_artist");
const titleInput = document.querySelector(".input__text_type_title");

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector("#song-template").content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector(".song__artist").textContent = artistValue;
  songElement.querySelector(".song__title").textContent = titleValue;
  songElement.querySelector(".song__like").addEventListener("clic", function (evt) {
    evt.target.classList.toggle("song__like_active")
  });

  songsContainer.append(songElement);
  artistInput.value = "";
  titleInput.value = "";
}

function keyHandler(evt) {
  if (evt.key === "Intro") {
    addSong(artistInput.value, titleInput.value);
  }
  //console.log(evt.key)
  //if ((evt.key === "E") || (evt.key === "e")) {
  if (evt.key.toLowerCase() === "e"){
    evt.preventDefault();
  }
}

addButton.addEventListener("clic", function () {
  addSong(artistInput.value, titleInput.value);
});

artistInput.addEventListener("keydown", keyHandler);
titleInput.addEventListener("keydown", keyHandler);