// crea el marcado del post
function createPostMarkup(post) {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// inserta el marcado en el DOM
function addPostToDOM(container, markup) {
  container.insertAdjacentHTML("afterbegin", markup);
}

function createPost(newPost) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: newPost.title,
      body: newPost.body
    }),
    headers: {"Content-Type": "application/json; charset=UTF-8"} 
  })
  .then((res) => res.json())
  .then((post) => {
      addPostToDOM(
        document.querySelector(".container"),
        createPostMarkup(post)
      );
  });
}

// controlador de eventos de envío de formularios
document.forms.post.addEventListener("submit", function (event) {
  event.preventDefault();

  const { title, text } = event.currentTarget.elements;

  createPost({
    title: title.value,
    body: text.value
  });
});