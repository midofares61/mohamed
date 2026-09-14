let btn = document.querySelector("#other");
let menu = document.querySelector(".mega-menu");

btn.addEventListener(
    "click", function () {
        menu.classList.toggle("menu-toggle");
    }
)