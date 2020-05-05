const input = document.getElementById("checkbox");
const priceBasic = document.getElementById("priceBasic");
const priceProf = document.getElementById("priceProf");
const priceMaster = document.getElementById("priceMaster");

input.addEventListener("change", () => {
  if (input.checked) {
    priceBasic.innerHTML = "<span>&dollar;</span>19.99";
    priceProf.innerHTML = "<span>&dollar;</span>24.99";
    priceMaster.innerHTML = "<span>&dollar;</span>39.99";
  } else {
    priceBasic.innerHTML = "<span>&dollar;</span>199.99";
    priceProf.innerHTML = "<span>&dollar;</span>249.99";
    priceMaster.innerHTML = "<span>&dollar;</span>399.99";
  }
});
