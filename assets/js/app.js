let open = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-xmark');
let nav = document.querySelector('nav');


nav.classList.remove("out");
open.onclick = function() {
    nav.classList.remove("out");
    nav.classList.add("in");

    close.classList.remove("hide");
    close.classList.add("show");

    open.classList.remove("show");
    open.classList.add("hide");
};

close.onclick = function() {
    nav.classList.add("out");
    nav.classList.remove("in");
    console.log('out');

    close.classList.add("hide");
    close.classList.remove("show");

    open.classList.add("show");
    open.classList.remove("hide");
};