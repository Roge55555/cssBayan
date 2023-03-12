const listElm = document.querySelectorAll(".memeElement");

listElm.forEach(chosenElm => {
    chosenElm.addEventListener('click', function() {
        document.querySelector(".chosen")?.classList.remove("chosen");
        chosenElm.classList.add("chosen");
    });
});