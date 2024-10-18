const settingsMenu = document.querySelector(".settings-menu");
const navUserIcon = document.querySelector(".nav-user-icon");
const body = document.querySelector("body");

navUserIcon.addEventListener("click", () => {
    settingsMenu.classList.toggle("settings-menu-height");
});

const darkBtn = document.getElementById("dark-btn");

darkBtn.addEventListener("click", () => {
    darkBtn.classList.toggle("dark-btn-on");
    body.classList.toggle("dark-theme");
});