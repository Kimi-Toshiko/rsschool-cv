let btnHamburger = document.getElementById("hamburger");
let menuBlock = document.getElementById("menu-block");
let btnCloseMenu = document.getElementById("btn-close");

btnHamburger.onclick = function () {
    menuBlock.addAnimation('float-in', '.5s');
}

btnCloseMenu.onclick = function () {
    menuBlock.addAnimation('float-out', '.5s');
}