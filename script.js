// Elements

const body = document.body;

const menu_icon = document.getElementById("menu_icon");
const menu_cross = document.getElementById("menu_cross");

const menu = document.getElementById("menu");
const links = document.getElementById("links");

// Functions

function openMenu() {
    body.style.overflowY = "hidden";
    menu.style.overflowY = "hidden";
    menu.style.display = "block";
    setTimeout(function() { // Add a small delay to keep transition effects set in CSS (else, all will be shown instantly)
        menu.style.filter = "opacity(100%)";
        links.style.transform = "translateX(0%)";
    }, 1)
}

function closeMenu() {
    body.style.overflowY = "visible";
    menu.style.overflowY = "visible";
    menu.style.filter = "opacity(0%)";
    links.style.transform = "translateX(100%)";
    setTimeout(function() { // Add the correct delay to have transition effects set in CSS (0.2s = 200ms)
        menu.style.display = "none";
    }, 200)
}

// Events

menu_icon.addEventListener("click", openMenu);

menu_cross.addEventListener("click", closeMenu);