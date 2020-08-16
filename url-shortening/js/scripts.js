const navbarBox = document.querySelector(".navbar__links");
const hamBox = document.querySelector(".ham-link");
const close = document.querySelector(".close");
const ham = document.querySelector(".ham");

let toggleState = true;

hamBox.addEventListener("click", function () {
  navbarBox.classList.toggle("mobile");
  hamBox.classList.toggle("mobile");
});
