const userTemplate = document.querySelector("#user").content;
const usersOnline = document.querySelector('.users-online');

// clona el contenido de la etiqueta template
const userElement = userTemplate.querySelector('.user').cloneNode(true);

// añade el contenido
userElement.querySelector(".user__avatar").src = "http://tinyurl.com/v4pfzwy";
userElement.querySelector(".user__name").textContent = "Duke, mayor of Cormorant";

// haz que aparezca en la página
usersOnline.append(userElement);