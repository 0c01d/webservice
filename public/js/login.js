"use strict";

const loginForm = document.querySelector(".login-form");
const nicknameInput = loginForm.querySelector(".login-form__email");
const passwordInput = loginForm.querySelector(".login-form__password");
const submitButton = loginForm.querySelector(".login-form__submit");
const message = loginForm.querySelector(".login-form__message");

nicknameInput.addEventListener("input", () => {
    message.innerHTML = "";
});

passwordInput.addEventListener("input", () => {
    message.innerHTML = "";
});

submitButton.addEventListener("click", (e) => {
    if (!nicknameInput.value.length) {
        e.preventDefault();
        message.innerHTML = "Пожалуйста, введите nickname";
    }
    if (!passwordInput.value.length) {
        e.preventDefault();
        message.innerHTML = "Пожалуйста, введите password";
    }
});
