var menu = document.getElementById("Home");
var nav = document.getElementById("Our Packages");
var exit = document.getElementById("Call Us");
menu.addEventListener("click", function(e) {
nav.classList.toggle("hide-mobile");
e.preventDefault();
});
exit.addEventListener("click", function(e) {
nav.classList.toggle("hide-mobile");
e.preventDefault();
});