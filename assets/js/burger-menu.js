const menu = document.querySelector(".burger-menu");
const burger = document.querySelector(".nav");
const burgerWrapper = document.querySelector(".nav__wrapper");
const html = document.querySelector("html");

menu.addEventListener("click", function () {
	menu.classList.toggle("open");
	burger.classList.toggle("nav-burger");
	burgerWrapper.classList.toggle("nav-burger__wrapper");
	html.classList.toggle("disable-scroll");
});
