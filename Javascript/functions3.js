// opción 1

popupButton.addEventListener("click", function () {
    popup.classList.add("popup_is-opened");
});


// opción 2

function openPopup(popupElement) {
    popupElement.classList.add("popup_is-opened");
}

popupButton.addEventListener("click", function () {
    openPopup(popup);
});

openPopup(popup); 
