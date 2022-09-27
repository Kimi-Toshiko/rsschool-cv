let btnHamburger = document.getElementById("hamburger");
let menuBlock = document.getElementById("menu-block");
let btnCloseMenu = document.getElementById("btn-close");

let btnContacts = document.getElementById('btn-contacts');
let contactBlock = document.getElementById('contact-logos');
let isContactBlockShown = false;

btnHamburger.onclick = function () {
    menuBlock.addAnimation('float-in-left', '.2s');
}

btnCloseMenu.onclick = function () {
    menuBlock.addAnimation('float-out-left', '.5s');
}

btnContacts.onclick = function () {
    if (isContactBlockShown === false) {
        contactBlock.style.display = 'flex';
        btnContacts.addAnimation('move-left', '.25s');
        contactBlock.addAnimation('float-in-right', '.25s');
        isContactBlockShown = true;
    }
    else {
        btnContacts.addAnimation('move-right', '.25s');
        contactBlock.addAnimation('float-in-left', '.25s');
        isContactBlockShown = false;
        contactBlock.style.display = 'none';
    }
}