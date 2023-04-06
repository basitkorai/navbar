const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navlist");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("toggle");
  hamburger.classList.toggle("burger");
});
