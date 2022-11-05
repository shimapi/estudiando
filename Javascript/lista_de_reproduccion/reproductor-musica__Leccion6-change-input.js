const songsContainer = document.querySelector(".songs-container");
const addButton = document.querySelector(".input__btn_action_add");
const form = document.forms.add;
const artist = form.elements.artist;
const title = form.elements.title;

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector("#song-template").content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector(".song__artist").textContent = artistValue;
  songElement.querySelector(".song__title").textContent = titleValue;

  songsContainer.append(songElement);
}
function setSubmitButtonState(isFormValid) {
  if(isFormValid){
    addButton.removeAttribute("disabled");
    addButton.classList.remove("input__btn_disabled");
  }else{
    addButton.setAttribute("disabled", true);
    addButton.classList.add("input__btn_disabled");
  }
} 

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  artist.value = "";
  title.value = "";
  setSubmitButtonState(false)
});

form.addEventListener("input", function (evt) {
  //console.log(evt)
  //const isValid = artist.value + title.value;
  const isValid = artist.value.length > 0 && title.value.length > 0
  //if(isValid.length < 0){
  //if(isValid){
    setSubmitButtonState(isValid)
//    return true;
  //}
}); 
