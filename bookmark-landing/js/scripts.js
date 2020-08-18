const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".ham-container");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("open");
});
// Tabs implementation
// It can implement better in many ways. For example we can have array of objects
// then we can loop on it and if it suits with object we can add object content to it.

const elements = document.querySelectorAll(".features__tabs li a");
let activeTab = 0;
elements.forEach((element) => {
  element.addEventListener("click", () => {
    const image = document.querySelector(".function-img");
    const functionHeader = document.querySelector(".function-text-box h3");
    const functionParagraph = document.querySelector(".function-text-box p");
    if (element.textContent === "Simple Bookmarking") {
      element.classList.add("active");
      elements[activeTab].classList.remove("active");
      activeTab = 0;
      image.setAttribute("src", "./images/illustration-features-tab-1.svg");
      functionHeader.textContent = "Bookmark in one click";
      functionParagraph.textContent =
        "Organize your bookmarks however you like. Our simple drag-and-dropinterface gives you complete control over how you manage yourfavourite sites.";
    } else if (element.textContent === "Speedy Searching") {
      elements[activeTab].classList.remove("active");
      activeTab = 1;
      element.classList.add("active");
      image.setAttribute("src", "./images/illustration-features-tab-2.svg");
      functionHeader.textContent = "Intelligent search";
      functionParagraph.textContent =
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
    } else if (element.textContent === "Easy Sharing") {
      elements[activeTab].classList.remove("active");
      activeTab = 2;
      element.classList.add("active");
      image.setAttribute("src", "./images/illustration-features-tab-3.svg");
      functionHeader.textContent = " Share your bookmarks";
      functionParagraph.textContent =
        " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
    }
  });
});
