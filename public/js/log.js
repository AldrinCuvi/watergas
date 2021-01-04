//Botones para interacción entre sign in y sign up.
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

//Boton para ingresar.
const signin = document.querySelector("#signin");
//Boton para registarse.
const signup = document.querySelector("#signup");


sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});
