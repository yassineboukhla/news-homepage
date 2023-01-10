/*
 ** navToggle() function will show & hide navbar
 */
let navbar = document.querySelector(".navbar");
let openBtn = document.querySelector(".icon-menu-open");

function navToggle() {
  openBtn.classList.toggle("navbar");
  navbar.classList.toggle("navbar");
}
