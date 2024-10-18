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

    if(localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});

if (localStorage.getItem("theme") === "light") {
    darkBtn.classList.remove("dark-btn-on");
    body.classList.remove("dark-theme");
} else if(localStorage.getItem("theme") === "dark") {
    darkBtn.classList.add("dark-btn-on");
    body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}

