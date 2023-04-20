const quoteElement = document.querySelector(".quote");
const button = document.querySelector(".header__btn");


function updateQuote() {

  fetch("https://api.kanye.rest")
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    return quoteElement.textContent = data.quote;
  })
}

button.addEventListener('click', updateQuote)