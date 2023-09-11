// JavaScript to handle the sliding effect
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  if (nav.style.right === "0px") {
    nav.style.right = "-300px";
    lines.forEach((line) => {
      line.style.backgroundColor = "#000";
    });
  } else {
    nav.style.right = "0px";
    lines.forEach((line) => {
      line.style.backgroundColor = "#fff";
    });
  }
});
