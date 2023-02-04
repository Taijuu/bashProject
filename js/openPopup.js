function openPopup() {
    window.open("popup.html", "popup", "width=400, height=400");
}

document.querySelector(".btn").addEventListener("click", openPopup);