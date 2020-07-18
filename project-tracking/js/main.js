const navbarBox = document.querySelector(".navbar__links");
const hamBox = document.querySelector(".ham-link");
const close = document.querySelector(".close");
const hum = document.querySelector(".hum");

let toggleState = true;

hamBox.addEventListener("click", function () {
  //   if (toggleState) {
  navbarBox.classList.toggle("mobile");
  hamBox.classList.toggle("mobile");
  //     hum.style.display = "none";
  //     close.style.display = "block";
  //     toggleState = false;
  //   } else {
  //     navbarBox.classList.toggle("mobile");
  //     close.style.display = "none";
  //     hum.style.display = "block";
  //     toggleState = true;
  //   }
});
