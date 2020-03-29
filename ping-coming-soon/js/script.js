const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = form["email"];
  const emailValue = email.value;
  const paragraph = form.querySelector("p");

  console.log(email, emailValue, paragraph);
  
});
