let button;
let control;

window.addEventListener("load", () => {
    button = document.querySelector(".nav-button");
    control = document.querySelector("header");
    button.addEventListener("click", () => {
        control.classList.toggle("active");
    });
});