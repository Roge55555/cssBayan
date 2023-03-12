const listElm = document.querySelectorAll(".memeElement");

listElm.forEach(chosenElm => {
    chosenElm.addEventListener('click', function() {
        document.querySelector(".chosen")?.classList.remove("chosen");
        console.log(chosenElm.children[1].classList)
        chosenElm.children[1].classList.add("chosen");
    });
});