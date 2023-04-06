const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navlist");
const toggle = document.querySelector(".toggle");
console.log(toggle);

hamburger.addEventListener("click", () => {
  nav.classList.toggle("toggle");
  hamburger.classList.toggle("burger");
});

window.addEventListener("resize", () => {
  let size = window.screen.width;
  if (size < 800) {
    nav.classList.remove("toggle");
    hamburger.classList.remove("burger");
  }
});
